import React from 'react';

// Background asset preview: 2048×3072 design shown responsive in a 2:3 box
export default function BackgroundAsset() {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-xl md:text-2xl font-medium mb-4">1) Background — Cyberpunk Alley (2048×3072)</h2>
        <p className="text-white/60 text-sm mb-6">Dark alley, neon signage, grunge textures, halftone/posterized look. Left area for text, right reserved for portrait.</p>

        <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden ring-1 ring-white/10">
          {/* SVG scene */}
          <svg viewBox="0 0 2048 3072" className="w-full h-full block bg-[#0A0A0A]">
            <defs>
              {/* Halftone pattern */}
              <filter id="halftone" x="0" y="0" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="noise"/>
                <feColorMatrix type="saturate" values="0"/>
                <feComponentTransfer>
                  <feFuncA type="table" tableValues="0 0.3"/>
                </feComponentTransfer>
              </filter>
              {/* Grain */}
              <filter id="grain" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
                <feColorMatrix type="saturate" values="0"/>
                <feComponentTransfer>
                  <feFuncA type="table" tableValues="0 0.15"/>
                </feComponentTransfer>
              </filter>
              {/* Vignette */}
              <radialGradient id="vignette" cx="50%" cy="50%" r="65%">
                <stop offset="60%" stopColor="rgba(0,0,0,0)"/>
                <stop offset="100%" stopColor="rgba(0,0,0,0.55)"/>
              </radialGradient>
            </defs>

            {/* Alley base */}
            <rect x="0" y="0" width="2048" height="3072" fill="#0A0A0A"/>

            {/* Left text-safe zone */}
            <rect x="120" y="160" width="760" height="2600" fill="#1A1A1A" opacity="0.45" rx="22"/>

            {/* Right portrait block indication */}
            <rect x="1280" y="200" width="600" height="2600" fill="#1A1A1A" opacity="0.35" rx="22"/>

            {/* Buildings silhouettes */}
            <g opacity="0.95">
              <rect x="900" y="0" width="140" height="3072" fill="#141414"/>
              <rect x="1080" y="0" width="90" height="3072" fill="#111111"/>
              <rect x="1540" y="0" width="60" height="3072" fill="#0F0F0F"/>
            </g>

            {/* Neon signs */}
            <g filter="url(#halftone)">
              <rect x="980" y="420" width="260" height="60" fill="#00D4FF" rx="10"/>
              <rect x="980" y="520" width="220" height="50" fill="#39FF14" rx="10"/>
              <rect x="980" y="620" width="200" height="50" fill="#FF6B35" rx="10"/>
              <rect x="980" y="720" width="240" height="50" fill="#F93549" rx="10"/>
              <rect x="980" y="820" width="180" height="50" fill="#8B5CF6" rx="10"/>
            </g>

            {/* Hanging cables */}
            <g stroke="#222" strokeWidth="4" opacity="0.8">
              <path d="M0,280 C300,360 600,120 900,280" fill="none"/>
              <path d="M0,360 C340,420 640,180 940,340" fill="none"/>
              <path d="M0,440 C320,540 660,280 960,420" fill="none"/>
            </g>

            {/* Neon glow accents */}
            <g opacity="0.35">
              <circle cx="1700" cy="400" r="180" fill="#00D4FF"/>
              <circle cx="1700" cy="400" r="300" fill="#00D4FF" opacity="0.08"/>
              <circle cx="400" cy="1200" r="120" fill="#39FF14"/>
              <circle cx="400" cy="1200" r="220" fill="#39FF14" opacity="0.08"/>
            </g>

            {/* Posterized blocks */}
            <g opacity="0.35">
              <rect x="120" y="2200" width="760" height="200" fill="#111"/>
              <rect x="120" y="2440" width="760" height="160" fill="#0D0D0D"/>
              <rect x="1280" y="2300" width="600" height="140" fill="#121212"/>
            </g>

            {/* Grunge overlay */}
            <rect x="0" y="0" width="2048" height="3072" filter="url(#grain)" fill="none"/>

            {/* Vignette */}
            <rect x="0" y="0" width="2048" height="3072" fill="url(#vignette)"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
