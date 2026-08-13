'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, X, Plus, Send, Bot, User, Sparkles, 
  MessageSquare, Trash2, ArrowLeft, Paperclip 
} from 'lucide-react';

export default function ChatAppPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  
  // Contoh data percakapan dummy
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'ai',
      text: 'Halo! Saya VEIL AI. Ada yang bisa saya bantu dengan koding, analisis, atau ide kreatif hari ini?',
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Tambahkan pesan user
    const userMsg = { id: Date.now().toString(), sender: 'user', text: inputMessage };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');

    // Simulasi respon AI
    setTimeout(() => {
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: `Ini adalah respon otomatis VEIL AI untuk: "${inputMessage}"`,
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <div className="flex h-dvh w-full max-w-full overflow-hidden bg-[#0d0e15] text-gray-100 font-sans relative">
      
      {/* 1. OVERLAY SIDEBAR MOBILE (Menutup layar hitam transparan saat menu HP dibuka) */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/70 z-40 md:hidden backdrop-blur-sm transition-opacity"
        />
      )}

      {/* 2. SIDEBAR (RESPONSIF: Slide-in di HP, Permanen di Desktop) */}
      <aside 
        className={`fixed md:static inset-y-0 left-0 z-50 w-72 bg-[#121420] border-r border-white/5 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Header Sidebar */}
        <div className="p-4 flex items-center justify-between border-b border-white/5">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-pink-500 flex items-center justify-center text-white">
              <Sparkles size={18} />
            </div>
            <span>VEIL AI</span>
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-gray-400 hover:text-white p-1 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tombol New Chat */}
        <div className="p-3">
          <button 
            onClick={() => setMessages([])}
            className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 text-sm font-medium text-white transition"
          >
            <Plus size={18} />
            <span>Chat Baru</span>
          </button>
        </div>

        {/* Riwayat Chat (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          <div className="text-[11px] font-semibold text-gray-500 uppercase px-3 py-1">Hari ini</div>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 text-gray-200 text-sm truncate text-left">
            <MessageSquare size={16} className="shrink-0 text-violet-400" />
            <span className="truncate">Optimasi Kode Async JS</span>
          </button>
        </div>

        {/* Footer Sidebar / Profil */}
        <div className="p-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-violet-600/30 text-violet-300 flex items-center justify-center font-bold text-xs">
              U
            </div>
            <div className="text-xs">
              <p className="font-semibold text-white">Pengguna Pro</p>
              <p className="text-gray-400">user@veil.ai</p>
            </div>
          </div>
          <Link href="/" className="text-gray-400 hover:text-white p-1.5 rounded-lg">
            <ArrowLeft size={18} />
          </Link>
        </div>
      </aside>

      {/* 3. AREA CHAT UTAMA */}
      <main className="flex-1 flex flex-col h-full w-full min-w-0 relative">
        
        {/* Header Chat Mobile & Desktop */}
        <header className="h-14 border-b border-white/5 px-4 flex items-center justify-between bg-[#0d0e15]/80 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden text-gray-300 hover:text-white p-1.5 rounded-lg bg-white/5"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h2 className="text-sm font-semibold text-white truncate max-w-[180px] sm:max-w-none">VEIL AI v2.0</h2>
            </div>
          </div>

          <button 
            onClick={() => setMessages([])}
            className="text-gray-400 hover:text-red-400 p-2 rounded-lg text-xs flex items-center gap-1.5 transition"
          >
            <Trash2 size={16} />
            <span className="hidden sm:inline">Bersihkan</span>
          </button>
        </header>

        {/* List Pesan Chat (Scrollable Area) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex gap-3 max-w-3xl mx-auto ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {/* Avatar AI */}
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-pink-500 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md">
                  <Bot size={18} />
                </div>
              )}

              {/* Bubble Chat */}
              <div 
                className={`p-3.5 sm:p-4 rounded-2xl text-sm leading-relaxed break-words min-w-0 max-w-[85%] sm:max-w-[75%] ${
                  msg.sender === 'user'
                    ? 'bg-violet-600 text-white rounded-br-none shadow-lg shadow-violet-600/20'
                    : 'bg-[#161826] text-gray-200 border border-white/10 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>

              {/* Avatar User */}
              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  <User size={18} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Box Chat di Bagian Bawah (Safe Area HP Friendly) */}
        <div className="p-3 sm:p-4 border-t border-white/5 bg-[#0d0e15] pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <form 
            onSubmit={handleSendMessage}
            className="max-w-3xl mx-auto flex items-center gap-2 bg-[#161826] border border-white/10 rounded-2xl p-2 focus-within:border-violet-500 transition shadow-lg"
          >
            <button 
              type="button" 
              className="text-gray-400 hover:text-white p-2 rounded-xl transition"
            >
              <Paperclip size={18} />
            </button>

            <input 
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Tanyakan sesuatu pada VEIL AI..."
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none px-2 min-w-0"
            />

            <button 
              type="submit"
              disabled={!inputMessage.trim()}
              className="w-9 h-9 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:hover:bg-violet-600 text-white flex items-center justify-center transition shrink-0"
            >
              <Send size={16} />
            </button>
          </form>
        </div>

      </main>
    </div>
  );
}