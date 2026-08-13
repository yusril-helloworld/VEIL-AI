// components/chat/ai-mode-selector.tsx
"use client";

import React from "react";
import { AIModeType } from "@/lib/types";
import { Code, Edit3, Search, Sparkles, Wand2 } from "lucide-react";

interface AIModeSelectorProps {
  currentMode: AIModeType;
  onModeChange: (mode: AIModeType) => void;
}

const modes: { id: AIModeType; label: string; icon: React.ElementType }[] = [
  { id: "general", label: "General", icon: Sparkles },
  { id: "coding", label: "Coding", icon: Code },
  { id: "writing", label: "Writing", icon: Edit3 },
  { id: "research", label: "Research", icon: Search },
  { id: "creative", label: "Creative", icon: Wand2 },
];

export function AIModeSelector({ currentMode, onModeChange }: AIModeSelectorProps) {
  return (
    <div className="flex items-center gap-1.5 bg-surface-hover/80 p-1 rounded-xl border border-surface-border">
      {modes.map((mode) => {
        const Icon = mode.icon;
        const isActive = currentMode === mode.id;
        return (
          <button
            key={mode.id}
            onClick={() => onModeChange(mode.id)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              isActive
                ? "bg-brand-violet text-white shadow-md shadow-brand-violet/20"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Icon size={14} />
            <span>{mode.label}</span>
          </button>
        );
      })}
    </div>
  );
}