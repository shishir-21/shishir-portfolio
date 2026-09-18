import React from "react";
import Link from "next/link";

interface BentoCardProps {
  children: React.ReactNode;
  height?: string;
  className?: string;
  showHoverGradient?: boolean;
  hideOverflow?: boolean;
}

export function BentoCard({
  children,
  height = "h-auto",
  className = "",
  showHoverGradient = true,
  hideOverflow = true,
}: BentoCardProps) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border border-black/10 bg-white p-6 ${
        hideOverflow ? "overflow-hidden" : ""
      } ${height} ${className}`}
    >
      {showHoverGradient && (
        <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}

      {children}
    </div>
  );
}
