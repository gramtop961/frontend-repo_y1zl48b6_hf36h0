import React from 'react';

export default function PortraitAsset() {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-xl md:text-2xl font-medium mb-4">2) Portrait — Halftone Anime Cutout (1600px long edge)</h2>
        <p className="text-white/60 text-sm mb-6">Transparent background, white hand-drawn outline, posterized shading. Variant on tilted neon red rectangle included.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Transparent cutout */}
          <div className="relative rounded-xl overflow-hidden bg-transparent ring-1 ring-white/10 p-4 flex items-center justify-center min-h-[360px]">
            <svg viewBox="0 0 1600 1600" className="w-full h-auto max-h-[560px]">
              <defs>
                <linearGradient id="shade" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1A1A1A" />
                  <stop offset="50%" stopColor="#111111" />
                  <stop offset="100%" stopColor="#0A0A0A" />
                </linearGradient>
                <filter id="grainP" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3"/>
                  <feColorMatrix type="saturate" values="0"/>
                  <feComponentTransfer>
                    <feFuncA type="table" tableValues="0 0.12"/>
                  </feComponentTransfer>
                </filter>
                <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#222"/>
                </pattern>
              </defs>

              {/* Stylized head + shoulders silhouette */}
              <g>
                <path d="M800 240c-180 0-300 140-300 260 0 80 40 120 80 160-60 40-120 120-120 220 0 200 220 280 340 280s340-80 340-280c0-100-60-180-120-220 40-40 80-80 80-160 0-120-120-260-300-260z" fill="url(#shade)"/>
                {/* Posterized panels */}
                <path d="M560 660h480v80H560z" fill="#111" opacity="0.8"/>
                <path d="M520 820h560v100H520z" fill="#0F0F0F" opacity="0.8"/>
                <path d="M560 980h480v130H560z" fill="#0C0C0C" opacity="0.9"/>
                {/* Halftone overlay */}
                <path d="M800 240c-180 0-300 140-300 260 0 80 40 120 80 160-60 40-120 120-120 220 0 200 220 280 340 280s340-80 340-280c0-100-60-180-120-220 40-40 80-80 80-160 0-120-120-260-300-260z" fill="url(#dots)" opacity="0.25"/>
                {/* Outline */}
                <path d="M800 240c-180 0-300 140-300 260 0 80 40 120 80 160-60 40-120 120-120 220 0 200 220 280 340 280s340-80 340-280c0-100-60-180-120-220 40-40 80-80 80-160 0-120-120-260-300-260z" fill="none" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
              </g>

              {/* Accent neon strokes */}
              <g stroke="#00D4FF" opacity="0.8">
                <path d="M520 580 C 650 520, 950 520, 1080 580" strokeWidth="6" fill="none"/>
                <path d="M520 1240 C 700 1160, 900 1160, 1080 1240" strokeWidth="6" fill="none"/>
              </g>

              {/* Grain */}
              <rect x="0" y="0" width="1600" height="1600" fill="none" filter="url(#grainP)"/>
            </svg>
          </div>

          {/* Tilted neon red rectangle variant */}
          <div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 p-4 flex items-center justify-center min-h-[360px] bg-[#0A0A0A]">
            <div className="relative w-full max-w-[480px] aspect-[3/5]">
              <div className="absolute inset-0 rotate-[-6deg] bg-[#F93549] rounded-xl shadow-[0_0_60px_#F93549aa]" />
              <svg viewBox="0 0 1200 2000" className="absolute inset-0 w-full h-full">
                <defs>
                  <filter id="grainR" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3"/>
                    <feColorMatrix type="saturate" values="0"/>
                    <feComponentTransfer>
                      <feFuncA type="table" tableValues="0 0.1"/>
                    </feComponentTransfer>
                  </filter>
                  <pattern id="dotsR" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="#9e1522"/>
                  </pattern>
                </defs>

                {/* Portrait silhouette reused */}
                <g transform="translate(200,240)">
                  <path d="M400 0c-180 0-300 140-300 260 0 80 40 120 80 160-60 40-120 120-120 220 0 200 220 280 340 280s340-80 340-280c0-100-60-180-120-220 40-40 80-80 80-160 0-120-120-260-300-260z" fill="#1A1A1A" opacity="0.92"/>
                  <path d="M160 420h480v80H160z" fill="#111" opacity="0.85"/>
                  <path d="M120 580h560v100H120z" fill="#0F0F0F" opacity="0.9"/>
                  <path d="M160 740h480v130H160z" fill="#0C0C0C" opacity="0.95"/>
                  <path d="M400 0c-180 0-300 140-300 260 0 80 40 120 80 160-60 40-120 120-120 220 0 200 220 280 340 280s340-80 340-280c0-100-60-180-120-220 40-40 80-80 80-160 0-120-120-260-300-260z" fill="url(#dotsR)" opacity="0.3"/>
                  <path d="M400 0c-180 0-300 140-300 260 0 80 40 120 80 160-60 40-120 120-120 220 0 200 220 280 340 280s340-80 340-280c0-100-60-180-120-220 40-40 80-80 80-160 0-120-120-260-300-260z" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                </g>

                {/* Grain and vignette */}
                <rect x="0" y="0" width="1200" height="2000" fill="none" filter="url(#grainR)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
