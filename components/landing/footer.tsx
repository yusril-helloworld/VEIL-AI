"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="border-t border-surface-border bg-background py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-electric-gradient flex items-center justify-center shadow-glow">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg text-white">VEIL AI</span>
        </div>

        <p className="text-xs text-gray-500">
          © 2026 VEIL AI Inc. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-xs text-gray-400">
          <Link href="/login" className="hover:text-white transition">Login</Link>
          <Link href="/app" className="hover:text-white transition">Chat UI</Link>
          <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}