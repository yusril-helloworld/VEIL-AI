"use client";

import React from "react";
import { Bot, Copy, Check, RefreshCw, ThumbsUp, ThumbsDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "@/lib/types";

interface ChatMessageProps {
  message: Message;
  copiedId: string | null;
  onCopy: (content: string, id: string) => void;
  onRegenerate?: () => void;
}

export function ChatMessage({ message, copiedId, onCopy, onRegenerate }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-4 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-lg bg-electric-gradient flex items-center justify-center text-white shrink-0 shadow-glow mt-1">
          <Bot size={18} />
        </div>
      )}

      <div
        className={`max-w-2xl rounded-2xl p-4 text-sm leading-relaxed space-y-2 ${
          isUser
            ? "bg-brand-electric text-white rounded-tr-none"
            : "bg-surface border border-surface-border text-gray-200 rounded-tl-none"
        }`}
      >
        {!isUser ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose prose-invert max-w-none text-sm space-y-2"
          >
            {message.content}
          </ReactMarkdown>
        ) : (
          <p className="whitespace-pre-wrap">{message.content}</p>
        )}

        {/* Action Toolbar */}
        {!isUser && message.content && (
          <div className="flex items-center gap-3 pt-3 border-t border-surface-border/50 text-gray-400 text-xs">
            <button
              onClick={() => onCopy(message.content, message.id)}
              className="hover:text-white flex items-center gap-1 transition"
            >
              {copiedId === message.id ? (
                <Check size={14} className="text-green-400" />
              ) : (
                <Copy size={14} />
              )}
              <span>{copiedId === message.id ? "Copied" : "Copy"}</span>
            </button>

            {onRegenerate && (
              <button
                onClick={onRegenerate}
                className="hover:text-white flex items-center gap-1 transition"
              >
                <RefreshCw size={14} />
                <span>Regenerate</span>
              </button>
            )}

            <div className="ml-auto flex items-center gap-1">
              <button className="p-1 hover:text-white transition">
                <ThumbsUp size={14} />
              </button>
              <button className="p-1 hover:text-white transition">
                <ThumbsDown size={14} />
              </button>
            </div>
          </div>
        )}
      </div>

      {isUser && (
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shrink-0 mt-1 font-bold text-xs">
          U
        </div>
      )}
    </div>
  );
}