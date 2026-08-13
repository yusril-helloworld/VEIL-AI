"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function LandingNavbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-electric-gradient flex items-center justify-center shadow-glow">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-wider text-white">VEIL AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#use-cases" className="hover:text-white transition">Use Cases</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition">
            Log In
          </Link>
          <Link 
            href="/app" 
            className="px-4 py-2 rounded-xl bg-electric-gradient text-white text-sm font-medium hover:opacity-90 transition shadow-glow"
          >
            Start Chatting
          </Link>
        </div>
      </div>
    </nav>
  );
}