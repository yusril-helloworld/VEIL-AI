"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi Login -> Redirect ke dashboard
    window.location.href = "/app";
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-4 font-sans">
      <div className="w-full max-w-md bg-surface border border-surface-border p-8 rounded-2xl shadow-glow space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-electric-gradient mx-auto flex items-center justify-center shadow-glow mb-3">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-xs text-gray-400">Sign in to your VEIL AI workspace</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-300">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-surface-hover border border-surface-border rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-electric transition"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <label className="font-medium text-gray-300">Password</label>
              <a href="#" className="text-brand-electric hover:underline">Forgot password?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-surface-hover border border-surface-border rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-electric transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-electric-gradient text-white font-medium text-sm hover:opacity-90 transition shadow-glow flex items-center justify-center gap-2"
          >
            Sign In <ArrowRight size={16} />
          </button>
        </form>

        <div className="relative border-t border-surface-border pt-4 text-center">
          <p className="text-xs text-gray-400">
            Don't have an account?{" "}
            <Link href="/register" className="text-brand-electric font-semibold hover:underline">
              Create One
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}