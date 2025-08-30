import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

function GlitchText({ children }) {
  const text = String(children);
  return (
    <span className="relative inline-block select-none">
      <span className="relative z-10" style={{ textShadow: '0 0 8px rgba(99,102,241,0.4), 0 0 16px rgba(236,72,153,0.25)' }}>{text}</span>
      <span aria-hidden className="absolute inset-0 text-fuchsia-400 opacity-60 translate-x-[1px] translate-y-[-1px]" style={{ mixBlendMode: 'screen', animation: 'glch 2.2s infinite steps(2)' }}>{text}</span>
      <span aria-hidden className="absolute inset-0 text-indigo-400 opacity-60 -translate-x-[1px] translate-y-[1px]" style={{ mixBlendMode: 'screen', animation: 'glch 2.2s infinite steps(2) reverse' }}>{text}</span>
      <style>{`
        @keyframes glch {
          0% { clip-path: inset(0 0 0 0); }
          10% { clip-path: inset(0 0 60% 0); }
          20% { clip-path: inset(40% 0 0 0); }
          30% { clip-path: inset(0 0 80% 0); }
          40% { clip-path: inset(70% 0 0 0); }
          50% { clip-path: inset(0 0 30% 0); }
          60% { clip-path: inset(50% 0 0 0); }
          70% { clip-path: inset(0 0 10% 0); }
          80% { clip-path: inset(20% 0 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
      `}</style>
    </span>
  );
}

export default function Nav() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 flex items-center justify-center ring-1 ring-white/15 group-hover:scale-110 transition-transform">
            <Rocket className="h-4 w-4" />
          </div>
          <div className="text-sm leading-none">
            <div className="font-semibold tracking-wide"> <GlitchText>glitchlab</GlitchText> </div>
            <div className="text-white/60">AR + weird web</div>
          </div>
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
            <Sparkles className="h-4 w-4" /> Ping
          </a>
        </nav>
      </div>
    </header>
  );
}
