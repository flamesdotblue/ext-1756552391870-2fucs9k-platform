import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative">
      {/* 3D scene */}
      <div className="relative h-[82vh] min-h-[520px] w-full">
        <Spline scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* gradient overlays don't block interaction */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 w-full grid gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Creative Technologist building AR filters and weird web experiments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="max-w-2xl text-lg text-white/80">
              Playful, glitchy and interactive. I prototype with shaders, WebGL, WebAR, and micro-interactions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
              className="flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-md bg-white text-black font-medium hover:contrast-125 active:scale-[0.98] transition">See projects</a>
              <a href="#contact" className="px-5 py-2.5 rounded-md ring-1 ring-white/20 hover:ring-white/40 transition">Collaborate</a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tiny scanline effect */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '100% 3px' }} />
    </section>
  );
}
