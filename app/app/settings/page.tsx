"use client";

import React, { useState } from "react";
import { Moon, Sun, Monitor, User, Shield, Sliders } from "lucide-react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("dark");
  const [creativity, setCreativity] = useState("0.7");

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto w-full space-y-8">
      <h1 className="text-2xl font-bold text-white">Settings</h1>

      <div className="space-y-6">
        {/* Appearance */}
        <section className="bg-surface border border-surface-border rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Moon size={18} className="text-brand-electric" />
            <span>Appearance</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "dark", label: "Dark", icon: Moon },
              { id: "light", label: "Light", icon: Sun },
              { id: "system", label: "System", icon: Monitor },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setTheme(item.id)}
                  className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition ${
                    theme === item.id
                      ? "border-brand-electric bg-brand-electric/10 text-white"
                      : "border-surface-border text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon size={14} /> {item.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* AI Preferences */}
        <section className="bg-surface border border-surface-border rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Sliders size={18} className="text-brand-electric" />
            <span>AI Preferences</span>
          </div>
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-gray-300 font-medium block mb-1">Creativity Temperature ({creativity})</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={creativity}
                onChange={(e) => setCreativity(e.target.value)}
                className="w-full accent-brand-electric"
              />
            </div>
          </div>
        </section>

        {/* Account Settings */}
        <section className="bg-surface border border-surface-border rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <User size={18} className="text-brand-electric" />
            <span>Account</span>
          </div>
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-gray-400 block mb-1">Email</label>
              <input type="text" readOnly value="john.doe@example.com" className="w-full p-2.5 bg-surface-hover border border-surface-border rounded-xl text-white" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}