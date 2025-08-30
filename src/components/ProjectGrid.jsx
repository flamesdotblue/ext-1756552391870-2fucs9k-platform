import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projectsSeed = [
  {
    title: 'Face-mesh Portal',
    tag: 'AR',
    colorFrom: '#22d3ee',
    colorTo: '#a78bfa',
    hint: 'open your mouth',
    link: '#',
  },
  {
    title: 'Databent Garden',
    tag: 'WebGL',
    colorFrom: '#f472b6',
    colorTo: '#22d3ee',
    hint: 'press G',
    link: '#',
  },
  {
    title: 'Filter: Drip Lens',
    tag: 'IG/TikTok',
    colorFrom: '#34d399',
    colorTo: '#f472b6',
    hint: 'blink twice',
    link: '#',
  },
  {
    title: '404 Petting Zoo',
    tag: 'Experiment',
    colorFrom: '#a78bfa',
    colorTo: '#34d399',
    hint: 'hover long',
    link: '#',
  },
  {
    title: 'Shader Karaoke',
    tag: 'WebAudio + GLSL',
    colorFrom: '#f59e0b',
    colorTo: '#22d3ee',
    hint: 'sing loud',
    link: '#',
  },
  {
    title: 'Ink Logic',
    tag: 'p5.js',
    colorFrom: '#ef4444',
    colorTo: '#a78bfa',
    hint: 'shake phone',
    link: '#',
  },
];

function useShuffledProjects() {
  return useMemo(() => {
    const arr = [...projectsSeed];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);
}

function Card({ p, index }) {
  const [hover, setHover] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function onMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (x - 0.5) * 8, y: (0.5 - y) * 8 });
  }

  const egg = hover ? ['👁️','🫥','🪩','🫧','🧪','🫀','🫠','🥽'][index % 8] : null;

  return (
    <motion.a
      href={p.link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setTilt({ x: 0, y: 0 }); }}
      onMouseMove={onMove}
      className="group relative rounded-xl ring-1 ring-white/10 overflow-hidden bg-black/30 backdrop-blur-[2px]"
      style={{ cursor: hover ? 'none' : 'auto' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {/* Gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${p.colorFrom}, ${p.colorTo})` }}
        animate={{ filter: hover ? 'hue-rotate(15deg) contrast(1.2) saturate(1.2)' : 'none' }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      />
      {/* Pixel mask layer for glitch */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.2), rgba(255,255,255,0.2) 1px, transparent 1px, transparent 2px)' }} />

      {/* Content */}
      <motion.div
        className="relative p-5 h-40 flex flex-col justify-between text-black"
        style={{ perspective: 600 }}
        animate={{ rotateX: tilt.y, rotateY: tilt.x }}
        transition={{ type: 'spring', stiffness: 200, damping: 16 }}
      >
        <div className="flex items-center justify-between text-xs uppercase tracking-widest">
          <span className="bg-black/30 text-white px-2 py-1 rounded-md ring-1 ring-white/20">{p.tag}</span>
          <span className="text-black/60 bg-white/70 px-2 py-1 rounded-md">{p.hint}</span>
        </div>
        <div className="flex items-end justify-between">
          <h3 className="text-2xl font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] text-white">
            {p.title}
          </h3>
          <div className="text-white/90 bg-black/30 rounded-full p-2 ring-1 ring-white/20 group-hover:scale-110 transition-transform">
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </motion.div>

      {/* Easter egg cursor */}
      {egg && (
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <motion.div
            initial={{ scale: 0, rotate: -10, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="text-5xl drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)]"
          >
            {egg}
          </motion.div>
        </div>
      )}

      {/* Scanline mask on hover as extra easter egg */}
      <div aria-hidden className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0,0,0,0.4) 50%)', backgroundSize: '100% 4px' }} />
    </motion.a>
  );
}

export default function ProjectGrid() {
  const projects = useShuffledProjects();
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Selected projects</h2>
            <p className="text-white/70 mt-2">A rotating collection of AR filters, WebGL toys and broken toys that still sparkle.</p>
          </div>
          <span className="hidden sm:inline text-white/50 text-sm">Hover for Easter eggs</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Card key={`${p.title}-${i}`} p={p} index={i} />
          ))}
        </div>

        {/* About blurb */}
        <div id="about" className="mt-20 grid gap-4 max-w-3xl">
          <h3 className="text-2xl font-semibold">About</h3>
          <p className="text-white/80">
            I explore the playful side of computation: face-tracked portals, liquid shaders, and small web experiments that feel like they might escape the browser. I prototype fast, ship often, and love collaborating with artists and brands.
          </p>
        </div>
      </div>
    </section>
  );
}
