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

  // State untuk kontrol Mobile Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

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
    <div className="flex h-dvh bg-background text-gray-100 overflow-hidden font-sans relative">
      {/* 1. Backdrop Overlay untuk Mobile saat Sidebar terbuka */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 2. Responsive Sidebar Wrapper */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-background transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ChatSidebar
          conversations={conversations}
          activeId={activeId}
          onNewChat={() => {
            setMessages([]);
            setIsSidebarOpen(false); // Tutup sidebar otomatis di mobile setelah klik New Chat
          }}
        />
      </div>

      {/* 3. Main Content Container */}
      <main className="flex-1 flex flex-col h-full min-w-0 relative">
        {/* Header Responsif */}
        <header className="h-16 border-b border-surface-border/50 px-4 md:px-6 flex items-center justify-between glass-panel z-10 shrink-0">
          <div className="flex items-center gap-3">
            {/* Tombol Hamburger Menu (Hanya Tampil di Mobile) */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle Sidebar"
              className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-surface-border/50 transition-colors focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            {/* Mode Selector */}
            <AIModeSelector currentMode={currentMode} onModeChange={setCurrentMode} />
          </div>
        </header>

        {/* Chat / Content Area */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-4 no-scrollbar">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 max-w-2xl mx-auto px-2 py-8">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  How can VEIL AI help you today?
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">
                  Pilih rekomendasi prompt di bawah atau ketik pertanyaan langsung.
                </p>
              </div>
              <PromptSuggestions
                onSelectPrompt={(promptText) => handleSendMessage(promptText)}
              />
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

        {/* Input Area Responsif */}
        <div className="p-3 sm:p-4 border-t border-surface-border/50 bg-background shrink-0">
          <ChatInput
            onSend={(text) => handleSendMessage(text || "")}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
}