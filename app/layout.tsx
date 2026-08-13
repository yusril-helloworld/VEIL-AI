// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./app/globals.css";

const inter = Inter({ subsets: ["latin"] });

// 1. Metadata Aplikasi
export const metadata: Metadata = {
  title: "VEIL AI - Asisten AI Cerdas",
  description: "Asisten AI Cerdas berbasis Gemini API untuk membantu tugas dan ide Anda.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "VEIL AI",
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/icon-192.png",
  },
};

// 2. Setting Pengaturan Layar HP (Viewport)
export const viewport: Viewport = {
  themeColor: "#0d0e15",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Membuat tampilan tidak bisa digeser/zoom berlebihan seperti app HP asli
};

// 3. Layout Utama
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-[#0d0e15] text-white antialiased selection:bg-purple-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}