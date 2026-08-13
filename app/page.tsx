import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Bot, Cpu, Shield, Zap, Terminal } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function LandingPage() {
  return (
    <div className="min-h-dvh w-full max-w-full overflow-x-hidden bg-background text-gray-100 font-sans selection:bg-brand-violet selection:text-white relative">
      {/* Background Glow Orbs (Diisi overflow-hidden agar tidak membuat HP melebar) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] max-w-full h-[500px] bg-gradient-radial from-brand-violet/20 via-brand-pink/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Logo size={32} />

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#capabilities" className="hover:text-white transition">Capabilities</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/login" className="text-sm text-gray-300 hover:text-white font-medium transition">
              Log In
            </Link>
            <Link
              href="/app"
              className="px-3.5 sm:px-4 py-2 rounded-xl bg-glow-gradient text-white text-sm font-semibold hover:opacity-90 transition shadow-lg shadow-brand-violet/25"
            >
              Launch App
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel border border-brand-violet/30 text-xs font-medium text-brand-violet shadow-inner">
          <Sparkles size={14} className="animate-pulse" />
          <span>VEIL AI v2.0 Engine Live</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15] break-words">
          Intelligence Beyond <br />
          <span className="glow-text">The Ordinary Boundary.</span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
          An ultra-fast, multi-modal AI assistant tailored for deep technical reasoning, code architecture, dynamic research, and creative generation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-md mx-auto sm:max-w-none">
          <Link
            href="/app"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-glow-gradient text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-brand-violet/25 hover:scale-[1.02] transition"
          >
            Start Conversation <ArrowRight size={18} />
          </Link>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-panel text-gray-200 font-semibold hover:bg-white/5 transition"
          >
            System Capabilities
          </a>
        </div>

        {/* Mockup Preview UI */}
        <div className="pt-6 sm:pt-10 w-full max-w-full">
          <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/10 text-left space-y-4 overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 sm:pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-md">
                <Terminal size={13} className="text-brand-violet" />
                <span>veil-ai-stream-v2</span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-sans">
              <div className="flex gap-3 items-start min-w-0">
                <div className="w-7 h-7 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  U
                </div>
                <div className="bg-surface-hover p-3 sm:p-3.5 rounded-xl border border-white/5 text-gray-200 break-words min-w-0 max-w-full">
                  Analyze this script for performance bottlenecks and suggest an async optimization.
                </div>
              </div>

              <div className="flex gap-3 items-start min-w-0">
                <div className="w-7 h-7 rounded-lg bg-glow-gradient flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md">
                  <Bot size={16} />
                </div>
                <div className="glass-card p-3.5 sm:p-4 rounded-xl text-gray-300 space-y-2 border border-brand-violet/20 break-words min-w-0 max-w-full">
                  <p className="text-[10px] sm:text-xs font-semibold text-brand-violet uppercase tracking-wider">Analysis Complete</p>
                  <p className="leading-relaxed">
                    Identified blocking synchronous I/O on line 14. Rewriting execution stack using concurrent promises reduces response overhead by <span className="text-emerald-400 font-semibold">42%</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto space-y-12 sm:space-y-16">
        <div className="text-center space-y-2 sm:space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Engineered for Peak Execution</h2>
          <p className="text-gray-400 text-xs sm:text-sm">Minimal latency, maximum intelligence output.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: Zap, title: "Sub-50ms Streaming", desc: "Instantaneous token streaming directly to your client workspace." },
            { icon: Cpu, title: "Multi-Agent Switch", desc: "Seamlessly switch between Coding, Writing, Research, and Brainstorm modes." },
            { icon: Shield, title: "Zero-Data Retention", desc: "Your prompt histories are end-to-end encrypted and never used for public training." }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card p-5 sm:p-6 rounded-2xl space-y-3 sm:space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/30 flex items-center justify-center text-brand-violet">
                  <Icon size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}