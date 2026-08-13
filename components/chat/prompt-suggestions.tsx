// components/chat/prompt-suggestions.tsx
"use client";

import React from "react";
import { Code, Sparkles, PenTool, Search } from "lucide-react";

interface PromptSuggestionsProps {
  onSelectPrompt: (promptText: string) => void;
}

const suggestions = [
  {
    icon: Code,
    title: "Debug Next.js App",
    prompt: "Bantu saya mencari bug dan mengoptimalkan struktur folder di Next.js App Router.",
  },
  {
    icon: PenTool,
    title: "Tulis Email Profesional",
    prompt: "Tuliskan draft email pengajuan kerja sama atau partnership yang formal dan persuasif.",
  },
  {
    icon: Search,
    title: "Riset Tren Teknologi",
    prompt: "Berikan ringkasan tren AI dan arsitektur software paling populer tahun ini.",
  },
  {
    icon: Sparkles,
    title: "Brainstorming Ide SaaS",
    prompt: "Berikan 3 ide produk SaaS berbasis AI yang unik untuk niche produktivitas pengembang.",
  },
];

export function PromptSuggestions({ onSelectPrompt }: PromptSuggestionsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
      {suggestions.map((item, index) => {
        const Icon = item.icon;
        return (
          <button
            key={index}
            onClick={() => onSelectPrompt(item.prompt)}
            className="glass-card p-4 rounded-xl text-left hover:border-brand-violet/50 transition group space-y-2 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-brand-violet">
              <Icon size={18} />
              <span className="font-semibold text-xs text-white group-hover:text-brand-violet transition">
                {item.title}
              </span>
            </div>
            <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
              {item.prompt}
            </p>
          </button>
        );
      })}
    </div>
  );
}