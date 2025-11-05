import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[60vh] min-h-[420px] overflow-hidden bg-[#0A0A0A]">
      <Spline
        scene="https://prod.spline.design/BL9Cjn3fkAdLBhXm/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/10 to-[#0A0A0A]" />

      <div className="absolute inset-0 flex items-end md:items-center justify-center text-center p-6">
        <div className="max-w-4xl">
          <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-tight drop-shadow-[0_0_20px_rgba(0,212,255,0.35)]">
            Neon Grunge Cyberpunk Asset Kit
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-white/70">
            Cohesive dark anime cyberpunk visuals with halftone, film grain and subtle vignettes. Optimized for web use.
          </p>
        </div>
      </div>
    </section>
  );
}
