"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { 
      q: "What is VEIL AI?", 
      a: "VEIL AI is an advanced platform engineered to help professionals write code, analyze dense documents, research, and automate creative tasks efficiently." 
    },
    { 
      q: "What can I use VEIL AI for?", 
      a: "You can use VEIL AI for programming assistance, content generation, document analysis, market research, and brainstorming startup concepts." 
    },
    { 
      q: "Can VEIL AI analyze documents?", 
      a: "Yes. VEIL AI supports PDF, DOCX, TXT, CSV, and image uploads for instant semantic analysis and question answering." 
    },
    { 
      q: "Is my data secure?", 
      a: "Yes. All interaction data is encrypted end-to-end and is never used to train public language models." 
    },
    { 
      q: "Can I cancel my subscription?", 
      a: "You can upgrade, downgrade, or cancel your subscription at any time directly from your Settings dashboard." 
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((item, idx) => (
          <div key={idx} className="rounded-xl bg-surface border border-surface-border overflow-hidden transition">
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full p-4 text-left font-medium text-white flex justify-between items-center hover:bg-surface-hover transition"
            >
              <span>{item.q}</span>
              <ChevronDown className={`transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`} size={18} />
            </button>
            {openFaq === idx && (
              <p className="p-4 pt-0 text-sm text-gray-400 leading-relaxed border-t border-surface-border/40 bg-surface/50">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}