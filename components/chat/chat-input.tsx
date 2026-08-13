// components/chat/chat-input.tsx
"use client";

import React, { useState } from "react";
import { Send, Paperclip } from "lucide-react";

interface ChatInputProps {
  onSend: (text: string) => void;
  isLoading?: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSend(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative max-w-4xl mx-auto flex items-end gap-2 bg-surface border border-surface-border p-2 rounded-2xl focus-within:border-brand-violet/60 transition shadow-lg"
    >
      <button
        type="button"
        className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-surface-hover transition shrink-0"
      >
        <Paperclip size={18} />
      </button>

      <textarea
        rows={1}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask VEIL AI anything..."
        className="flex-1 bg-transparent text-sm text-gray-100 placeholder-gray-500 focus:outline-none resize-none py-2 max-h-32 no-scrollbar"
      />

      <button
        type="submit"
        disabled={!input.trim() || isLoading}
        className="p-2.5 bg-glow-gradient text-white rounded-xl disabled:opacity-40 hover:opacity-90 transition shrink-0 shadow-md shadow-brand-violet/20"
      >
        <Send size={16} />
      </button>
    </form>
  );
}