import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      {/* Background subtle grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)", backgroundSize: '24px 24px' }} />

      <Nav />
      <Hero />
      <main className="relative z-10">
        <ProjectGrid />
      </main>
      <Footer />

      {/* Soft noise overlay */}
      <div aria-hidden className="pointer-events-none fixed inset-0 mix-blend-soft-light opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>")' }} />
    </div>
  );
}
