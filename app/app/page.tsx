// app/app/page.tsx
"use client";

import React, { useState } from "react";
import { ChatSidebar } from "@/components/chat/chat-sidebar";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessage } from "@/components/chat/chat-message";
import { AIModeSelector } from "@/components/chat/ai-mode-selector";
import { PromptSuggestions } from "@/components/chat/prompt-suggestions";
import { Message, AIModeType, Conversation } from "@/lib/types";

export default function DashboardAppPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentMode, setCurrentMode] = useState<AIModeType>("general");
  const [conversations] = useState<Conversation[]>([]);
  const [activeId] = useState<string | undefined>(undefined);
  
  // State untuk fitur Copy pesan
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSendMessage = async (userContent: string) => {
    if (!userContent || !userContent.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userContent,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages,
          mode: currentMode,
        }),
      });

      const data = await res.json();

      if (data.content) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: data.content,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
      }
    } catch (err) {
      console.error("Failed to fetch response", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-background text-gray-100 overflow-hidden font-sans">
      <ChatSidebar
        conversations={conversations}
        activeId={activeId}
        onNewChat={() => setMessages([])}
      />

      <main className="flex-1 flex flex-col h-full relative">
        <header className="h-16 border-b border-surface-border/50 px-6 flex items-center justify-between glass-panel z-10">
          <AIModeSelector currentMode={currentMode} onModeChange={setCurrentMode} />
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 no-scrollbar">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 max-w-2xl mx-auto">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">How can VEIL AI help you today?</h2>
                <p className="text-sm text-gray-400">
                  Pilih rekomendasi prompt di bawah atau ketik pertanyaan langsung.
                </p>
              </div>
              <PromptSuggestions onSelectPrompt={(promptText) => handleSendMessage(promptText)} />
            </div>
          ) : (
            messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg}
                copiedId={copiedId}
                onCopy={(text) => handleCopy(text, msg.id)}
              />
            ))
          )}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-brand-violet animate-pulse p-2 font-mono">
              <span>VEIL AI is processing...</span>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-surface-border/50 bg-background">
          <ChatInput
            onSend={(text) => handleSendMessage(text || "")}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
}