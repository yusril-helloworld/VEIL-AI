"use client";

import React from "react";
import { FileText, X } from "lucide-react";
import { FileAttachment } from "@/lib/types";

interface FileUploadPreviewProps {
  file: FileAttachment;
  onRemove: () => void;
}

export function FileUploadPreview({ file, onRemove }: FileUploadPreviewProps) {
  return (
    <div className="mb-2 p-2.5 bg-surface border border-surface-border rounded-xl flex items-center justify-between max-w-sm">
      <div className="flex items-center gap-2.5">
        <FileText className="w-5 h-5 text-brand-electric" />
        <div className="text-xs">
          <p className="font-semibold text-white truncate max-w-[180px]">{file.name}</p>
          <p className="text-gray-400">{file.size} • Ready for analysis</p>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="text-gray-400 hover:text-white text-xs p-1 rounded-md hover:bg-surface-hover transition"
      >
        <X size={14} />
      </button>
    </div>
  );
}