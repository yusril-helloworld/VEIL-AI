// components/ui/logo.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  showText?: boolean;
  size?: number;
  className?: string;
}

export function Logo({ showText = true, size = 36, className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative shrink-0 overflow-hidden rounded-xl bg-surface/40 p-1 border border-white/10 group-hover:border-brand-violet/50 transition shadow-lg shadow-brand-violet/10">
        <Image
          src="/veil.png"
          alt="VEIL AI Logo"
          width={size}
          height={size}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className="font-bold text-xl tracking-wider text-white group-hover:text-gray-200 transition">
          VEIL AI
        </span>
      )}
    </Link>
  );
}