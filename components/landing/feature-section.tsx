"use client";

import React from "react";
import { Zap, Shield, Cpu, Layers, Code, PenTool, BookOpen, Search, Briefcase, Sparkles } from "lucide-react";

export function FeatureSection() {
  const features = [
    {
      icon: Zap,
      title: "Real-time AI Streaming",
      desc: "Get instantaneous answers with continuous low-latency token responses."
    },
    {
      icon: Cpu,
      title: "Multi-Mode Intelligence",
      desc: "Switch between Coding, Writing, Research, and Creative modes tailored for your task."
    },
    {
      icon: Layers,
      title: "Document Analysis",
      desc: "Upload PDFs, CSVs, and DOCX files to summarize, extract data, and query instantly."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      desc: "End-to-end encryption. Your prompt data is never used for public model training."
    }
  ];

  const useCases = [
    { title: "Students", icon: BookOpen, desc: "Summarize research papers and grasp difficult topics fast." },
    { title: "Developers", icon: Code, desc: "Debug code, convert snippets, and build algorithms." },
    { title: "Writers", icon: PenTool, desc: "Draft blogs, refine essays, and eliminate writer's block." },
    { title: "Researchers", icon: Search, desc: "Analyze dense datasets and review literature." },
    { title: "Business Owners", icon: Briefcase, desc: "Draft proposals, write marketing emails, and strategize." },
    { title: "Content Creators", icon: Sparkles, desc: "Generate viral script outlines and creative hooks." }
  ];

  return (
    <section id="features" className="py-20 px-6 max-w-6xl mx-auto space-y-24">
      {/* Core Features */}
      <div className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white">Engineered for High Performance</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Packed with modern tools to make your AI interaction effortless and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="p-6 rounded-2xl bg-surface border border-surface-border hover:border-brand-electric/50 transition group">
                <div className="w-10 h-10 rounded-xl bg-brand-electric/10 border border-brand-electric/20 flex items-center justify-center text-brand-electric mb-4 group-hover:scale-110 transition">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Use Cases Grid */}
      <div id="use-cases" className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white">Built for Every Workflow</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Discover how VEIL AI empowers creators, engineers, and professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <div key={i} className="p-5 rounded-xl bg-surface/60 border border-surface-border flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-surface-hover text-brand-electric shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{uc.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}