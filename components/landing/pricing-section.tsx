"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl font-bold text-white">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 text-sm">Choose the plan that fits your execution pace.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Tier */}
        <div className="p-8 rounded-2xl bg-surface border border-surface-border space-y-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">Free</h3>
            <p className="text-3xl font-extrabold text-white mt-2">$0 <span className="text-sm font-normal text-gray-400">/month</span></p>
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-400" /> 20 AI messages / day</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-400" /> Basic AI reasoning</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-400" /> Limited file uploads</li>
            </ul>
          </div>
          <Link href="/app" className="w-full py-3 rounded-xl bg-surface-hover text-white font-medium text-center hover:bg-surface-border transition">
            Get Started
          </Link>
        </div>

        {/* Pro Tier */}
        <div className="p-8 rounded-2xl bg-surface border-2 border-brand-electric relative space-y-6 flex flex-col justify-between shadow-glow">
          <div className="absolute -top-3 right-6 bg-brand-electric text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Most Popular
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Pro</h3>
            <p className="text-3xl font-extrabold text-white mt-2">$19 <span className="text-sm font-normal text-gray-400">/month</span></p>
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-400" /> Unlimited conversations</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-400" /> Advanced AI models</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-400" /> Multi-file document analysis</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-400" /> Priority responses</li>
            </ul>
          </div>
          <Link href="/app" className="w-full py-3 rounded-xl bg-electric-gradient text-white font-medium text-center hover:opacity-90 transition shadow-glow">
            Upgrade to Pro
          </Link>
        </div>

        {/* Business Tier */}
        <div className="p-8 rounded-2xl bg-surface border border-surface-border space-y-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">Business</h3>
            <p className="text-3xl font-extrabold text-white mt-2">$49 <span className="text-sm font-normal text-gray-400">/user/mo</span></p>
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-400" /> Team workspace</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-400" /> Advanced administration</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-400" /> Dedicated priority support</li>
            </ul>
          </div>
          <Link href="/app" className="w-full py-3 rounded-xl bg-surface-hover text-white font-medium text-center hover:bg-surface-border transition">
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}