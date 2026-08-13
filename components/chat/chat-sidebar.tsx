// components/chat/chat-sidebar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  MessageSquare, 
  Trash2, 
  Search, 
  Settings 
} from "lucide-react";
import { Conversation } from "@/lib/types";

interface ChatSidebarProps {
  conversations?: Conversation[];
  activeId?: string;
  onSelectConversation?: (id: string) => void;
  onNewChat?: () => void;
  onDeleteChat?: (id: string) => void;
}

export function ChatSidebar({
  conversations = [],
  activeId,
  onSelectConversation,
  onNewChat,
  onDeleteChat,
}: ChatSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const filteredChats = conversations.filter((chat) =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside
      className={`h-screen bg-surface border-r border-surface-border transition-all duration-300 flex flex-col ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header Sidebar dengan Logo Baru */}
      <div className="p-4 flex items-center justify-between border-b border-surface-border/50">
        <Link href="/app" className="flex items-center gap-3 overflow-hidden">
          <div className="w-9 h-9 rounded-xl bg-surface/80 border border-white/10 flex items-center justify-center shrink-0 p-1 shadow-md shadow-brand-violet/10">
            <Image
              src="/veil.png"
              alt="VEIL AI Logo"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          {!collapsed && (
            <span className="font-bold text-lg tracking-wider text-white">
              VEIL AI
            </span>
          )}
        </Link>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:flex p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-surface-hover transition"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Tombol New Chat */}
      <div className="p-3">
        <button
          onClick={onNewChat}
          className="w-full py-2.5 px-3 rounded-xl bg-glow-gradient text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-brand-violet/20 hover:opacity-90 transition"
        >
          <Plus size={18} />
          {!collapsed && <span>New Chat</span>}
        </button>
      </div>

      {/* Input Pencarian */}
      {!collapsed && (
        <div className="px-3 pb-2">
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-hover border border-surface-border rounded-xl pl-9 pr-3 py-1.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-violet transition"
            />
          </div>
        </div>
      )}

      {/* Daftar Percakapan */}
      <div className="flex-1 overflow-y-auto px-3 space-y-1 py-2 no-scrollbar">
        {filteredChats.map((chat) => {
          const isActive = activeId === chat.id;
          return (
            <div
              key={chat.id}
              onClick={() => onSelectConversation && onSelectConversation(chat.id)}
              className={`group flex items-center justify-between p-2.5 rounded-xl cursor-pointer text-xs font-medium transition ${
                isActive
                  ? "bg-brand-violet/20 text-white border border-brand-violet/30"
                  : "text-gray-400 hover:bg-surface-hover hover:text-gray-200"
              }`}
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <MessageSquare
                  size={16}
                  className={isActive ? "text-brand-violet shrink-0" : "shrink-0"}
                />
                {!collapsed && (
                  <span className="truncate">{chat.title}</span>
                )}
              </div>

              {!collapsed && onDeleteChat && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteChat(chat.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-400 transition"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Settings */}
      <div className="p-3 border-t border-surface-border/50">
        <Link
          href="/settings"
          className="flex items-center gap-3 p-2 rounded-xl text-xs text-gray-400 hover:bg-surface-hover hover:text-white transition"
        >
          <Settings size={18} className="shrink-0" />
          {!collapsed && <span>Settings</span>}
        </Link>
      </div>
    </aside>
  );
}