"use client";

import React, { useState } from "react";
import { Search, Star, Trash2, Edit2, MessageSquare, Archive } from "lucide-react";

export default function HistoryPage() {
  const [search, setSearch] = useState("");
  const [historyItems, setHistoryItems] = useState([
    { id: "1", title: "AI startup ideas 2026", group: "Today", favorite: true },
    { id: "2", title: "Explain React Server Components", group: "Today", favorite: false },
    { id: "3", title: "Marketing strategy proposal", group: "Today", favorite: false },
    { id: "4", title: "Python async debugging", group: "Yesterday", favorite: true },
    { id: "5", title: "Resume improvement suggestions", group: "Yesterday", favorite: false },
  ]);

  const handleDelete = (id: string) => {
    setHistoryItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleFavorite = (id: string) => {
    setHistoryItems(prev => prev.map(item => item.id === id ? { ...item, favorite: !item.favorite } : item));
  };

  const filtered = historyItems.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto w-full space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Chat History</h1>
        <div className="relative w-64">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-surface border border-surface-border rounded-lg text-white focus:outline-none focus:border-brand-electric"
          />
        </div>
      </div>

      <div className="space-y-6">
        {["Today", "Yesterday"].map((group) => {
          const groupItems = filtered.filter(i => i.group === group);
          if (groupItems.length === 0) return null;

          return (
            <div key={group} className="space-y-2">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{group}</h2>
              <div className="space-y-2">
                {groupItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-surface border border-surface-border hover:bg-surface-hover transition group">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 text-brand-electric" />
                      <span className="text-sm text-gray-200 font-medium">{item.title}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition text-gray-400">
                      <button onClick={() => toggleFavorite(item.id)} className="hover:text-yellow-400">
                        <Star size={16} className={item.favorite ? "fill-yellow-400 text-yellow-400" : ""} />
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="hover:text-red-400">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}