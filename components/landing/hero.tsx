"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Bot, Send } from "lucide-react";

export function LandingHero() {
  return (
    <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto text-center space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-surface-border text-xs text-brand-electric">
        <Sparkles size={14} /> Next-Gen Intelligence Model Released
      </div>
      
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
        Your AI. <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Smarter. Faster. More Powerful.</span>
      </h1>

      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        An intelligent AI assistant designed to help you write, analyze, learn, create, and solve problems faster.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link href="/app" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-electric-gradient text-white font-semibold flex items-center justify-center gap-2 shadow-glow hover:opacity-95 transition">
          Start Chatting <ArrowRight size={18} />
        </Link>
        <a href="#features" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-surface border border-surface-border text-gray-200 font-semibold hover:bg-surface-hover transition">
          Explore Features
        </a>
      </div>

      {/* AI Interface Preview Box */}
      <div className="pt-12">
        <div className="max-w-3xl mx-auto rounded-2xl bg-surface border border-surface-border p-4 sm:p-6 shadow-2xl text-left space-y-4">
          <div className="flex items-center justify-between border-b border-surface-border pb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Bot size={14} className="text-brand-electric" />
              <span className="font-mono">VEIL AI Assistant</span>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-xl bg-surface-hover/60 text-gray-200">
              <span className="font-semibold text-brand-electric">You:</span> Explain quantum computing simply.
            </div>
            <div className="p-3.5 rounded-xl bg-surface-border/40 text-gray-200 leading-relaxed border border-surface-border">
              <span className="font-semibold text-purple-400">VEIL AI:</span> Quantum computing uses quantum bits (qubits) that can exist as 0, 1, or both simultaneously (superposition). This allows quantum computers to perform complex calculations in seconds.
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 bg-surface border border-surface-border/80 rounded-xl px-3 py-2 text-gray-500 text-xs">
            <span>Ask anything...</span>
            <Send size={14} className="ml-auto text-brand-electric" />
          </div>
        </div>
      </div>
    </section>
  );
}