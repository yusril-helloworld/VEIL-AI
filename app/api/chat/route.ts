// app/api/chat/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // 1. Ambil API Key dari .env.local
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        content: "⚠️ **Error:** `GEMINI_API_KEY` belum dipasang di file `.env.local`.",
      });
    }

    const lastUserMessage = messages[messages.length - 1]?.content || "";

    // 2. Ambil daftar model dari Google
    const listResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    );
    const listData = await listResponse.json();

    if (!listResponse.ok) {
      return NextResponse.json({
        content: `⚠️ **Error API Key:** ${listData.error?.message || "API Key tidak valid."}`,
      });
    }

    // 3. Filter model yang mendukung generateContent & KELUARKAN model yang terbukti deprecated
    let availableModels: string[] = (listData.models || [])
      .filter((m: any) => m.supportedGenerationMethods?.includes("generateContent"))
      .map((m: any) => m.name.replace("models/", ""))
      .filter((modelName: string) => !modelName.includes("gemini-2.5-flash")); // Skip model ini

    if (availableModels.length === 0) {
      return NextResponse.json({
        content: "⚠️ **Error:** Tidak ditemukan model Gemini aktif yang kompatibel.",
      });
    }

    // Prioritaskan model 'flash' lalu 'pro'
    availableModels.sort((a, b) => {
      if (a.includes("flash") && !b.includes("flash")) return -1;
      if (!a.includes("flash") && b.includes("flash")) return 1;
      return 0;
    });

    let aiAnswer = "";
    let lastErrorMsg = "";

    // 4. Retry Loop: Coba model satu per satu sampai menemukan yang berhasil
    for (const selectedModel of availableModels) {
      const generateResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: lastUserMessage }],
              },
            ],
          }),
        }
      );

      const generateData = await generateResponse.json();

      if (generateResponse.ok) {
        aiAnswer =
          generateData.candidates?.[0]?.content?.parts?.[0]?.text ||
          "Maaf, AI tidak memberikan respon.";
        break; // Berhasil! Keluar dari loop
      } else {
        console.warn(`Model ${selectedModel} ditolak oleh Google, mencoba model berikutnya...`);
        lastErrorMsg = generateData.error?.message || "Gagal mendapatkan respon.";
      }
    }

    // Jika seluruh model dalam daftar gagal
    if (!aiAnswer) {
      return NextResponse.json({
        content: `⚠️ **Error dari Gemini API:** ${lastErrorMsg}`,
      });
    }

    return NextResponse.json({ content: aiAnswer });

  } catch (err: any) {
    console.error("Backend Error:", err);
    return NextResponse.json({
      content: `⚠️ **Server Error:** ${err?.message || "Terjadi kesalahan pada server."}`,
    });
  }
}