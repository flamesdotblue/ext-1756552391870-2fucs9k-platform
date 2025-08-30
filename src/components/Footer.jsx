import React from 'react';
import { Github, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-white/70 text-sm">© {new Date().getFullYear()} glitchlab — crafted with shaders and snacks.</div>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-white/10 hover:ring-white/30 transition">
            <Github className="h-4 w-4" /> <span className="text-sm">GitHub</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-white/10 hover:ring-white/30 transition">
            <Instagram className="h-4 w-4" /> <span className="text-sm">Instagram</span>
          </a>
          <a href="mailto:hello@glitchlab.studio" className="flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-white/10 hover:ring-white/30 transition">
            <Mail className="h-4 w-4" /> <span className="text-sm">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
