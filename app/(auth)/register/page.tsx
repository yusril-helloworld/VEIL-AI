"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Lock, Mail, User } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/app";
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-4 font-sans">
      <div className="w-full max-w-md bg-surface border border-surface-border p-8 rounded-2xl shadow-glow space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-electric-gradient mx-auto flex items-center justify-center shadow-glow mb-3">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Get Started with VEIL AI</h1>
          <p className="text-xs text-gray-400">Create an account to unlock advanced AI capabilities</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-300">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input
                type="text"
                required
                placeholder="John Doe"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 bg-surface-hover border border-surface-border rounded-xl text-sm text-white focus:outline-none focus:border-brand-electric transition"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-300">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 bg-surface-hover border border-surface-border rounded-xl text-sm text-white focus:outline-none focus:border-brand-electric transition"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-300">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input
                type="password"
                required
                placeholder="••••••••"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 bg-surface-hover border border-surface-border rounded-xl text-sm text-white focus:outline-none focus:border-brand-electric transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-electric-gradient text-white font-medium text-sm hover:opacity-90 transition shadow-glow flex items-center justify-center gap-2"
          >
            Create Account <ArrowRight size={16} />
          </button>
        </form>

        <div className="border-t border-surface-border pt-4 text-center">
          <p className="text-xs text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-brand-electric font-semibold hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}