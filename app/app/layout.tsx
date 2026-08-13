"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Plus, MessageSquare, Search, Star, Settings, 
  ChevronLeft, ChevronRight, Sparkles, Menu, X, LogOut, ShieldCheck
} from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const mockChats = [
    { id: "1", title: "AI Startup Ideas", date: "Today" },
    { id: "2", title: "Explain Quantum Computing", date: "Today" },
    { id: "3", title: "Python Async Debugging", date: "Yesterday" },
    { id: "4", title: "Marketing Strategy 2026", date: "Yesterday" },
  ];

  const filteredChats = mockChats.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden font-sans">
      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <aside className={`
        fixed md:relative z-50 h-full bg-surface/80 backdrop-blur-xl border-r border-surface-border
        transition-all duration-300 flex flex-col justify-between
        ${collapsed ? "w-20" : "w-64"}
        ${mobileOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0"}
      `}>
        {/* Top Header */}
        <div className="p-4 flex items-center justify-between border-b border-surface-border/50">
          <Link href="/app" className="flex items-center gap-3 overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-electric-gradient flex items-center justify-center shrink-0 shadow-glow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            {!collapsed && (
              <span className="font-bold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-indigo-300">
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
          <button 
            onClick={() => setMobileOpen(false)}
            className="md:hidden p-1.5 rounded-lg text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Action Button & Search */}
        <div className="p-3 space-y-3">
          <Link
            href="/app"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-electric-gradient text-white font-medium hover:opacity-90 transition shadow-glow"
          >
            <Plus size={18} />
            {!collapsed && <span>New Chat</span>}
          </Link>

          {!collapsed && (
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search chats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-sm bg-surface border border-surface-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-electric transition"
              />
            </div>
          )}
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          {!collapsed && <p className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Recent Chats</p>}
          {filteredChats.map((chat) => (
            <Link
              key={chat.id}
              href={`/app?id=${chat.id}`}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-300 hover:bg-surface-hover hover:text-white transition group"
            >
              <MessageSquare size={18} className="shrink-0 text-gray-400 group-hover:text-brand-electric" />
              {!collapsed && (
                <span className="text-sm truncate font-normal">{chat.title}</span>
              )}
            </Link>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="p-3 border-t border-surface-border/50 space-y-1">
          <Link
            href="/app/history"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${
              pathname === '/app/history' ? 'bg-surface-hover text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Star size={18} />
            {!collapsed && <span className="text-sm">History</span>}
          </Link>
          <Link
            href="/app/settings"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${
              pathname === '/app/settings' ? 'bg-surface-hover text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Settings size={18} />
            {!collapsed && <span className="text-sm">Settings</span>}
          </Link>
          
          <div className="pt-2 border-t border-surface-border/40 flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
              JD
            </div>
            {!collapsed && (
              <div className="flex-1 truncate">
                <p className="text-xs font-semibold text-white truncate">John Doe</p>
                <p className="text-[10px] text-brand-electric font-medium uppercase tracking-wider">Pro Plan</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-background">
        {/* Mobile Header Bar */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-surface-border bg-surface">
          <button onClick={() => setMobileOpen(true)} className="p-2 text-gray-300 hover:text-white">
            <Menu size={22} />
          </button>
          <span className="font-bold text-white tracking-wider">VEIL AI</span>
          <div className="w-6" />
        </div>

        {children}
      </main>
    </div>
  );
}