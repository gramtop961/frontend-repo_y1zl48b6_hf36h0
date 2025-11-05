import React from 'react';

function Card({ title, sizeClass = '', children }) {
  return (
    <div className="bg-[#0A0A0A] rounded-xl ring-1 ring-white/10 overflow-hidden">
      <div className="px-4 pt-4">
        <h3 className="text-white text-sm md:text-base font-medium">{title}</h3>
      </div>
      <div className={`relative ${sizeClass} p-4`}>
        {children}
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(80% 80% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.55) 100%)' }} />
      </div>
    </div>
  );
}

export default function Animations() {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <h2 className="text-white text-xl md:text-2xl font-medium">3–6) Animated Previews</h2>
        <p className="text-white/60 text-sm">All animations use neon accents, halftone/grain textures, and subtle vignettes. Looped at ~3s.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 3) getbeds 800×450 */}
          <Card title="getbeds — Availability Pulse & EKG (800×450)" sizeClass="aspect-[16/9]">
            <svg viewBox="0 0 800 450" className="w-full h-full rounded-lg block bg-[#0A0A0A]">
              <defs>
                <filter id="grainA" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4"/>
                  <feColorMatrix type="saturate" values="0"/>
                  <feComponentTransfer><feFuncA type="table" tableValues="0 0.12"/></feComponentTransfer>
                </filter>
                <linearGradient id="bedGlow" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#00D4FF"/>
                  <stop offset="100%" stopColor="#39FF14"/>
                </linearGradient>
                <pattern id="halftoneA" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#1f1f1f"/>
                </pattern>
              </defs>
              {/* Bed icon */}
              <g transform="translate(120,160)">
                <rect x="0" y="60" width="380" height="40" rx="8" fill="url(#bedGlow)">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite"/>
                </rect>
                <rect x="0" y="0" width="80" height="60" rx="12" fill="#00D4FF" opacity="0.9"/>
                <rect x="380" y="10" width="16" height="120" rx="8" fill="#39FF14">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite"/>
                </rect>
                <rect x="-10" y="100" width="420" height="16" rx="8" fill="#39FF14" />
              </g>
              {/* EKG line */}
              <path d="M40 340 L140 340 170 300 200 380 240 340 300 340 330 320 360 360 400 340 460 340 490 300 520 380 560 340 620 340 650 320 680 360 760 340" fill="none" stroke="#00D4FF" strokeWidth="4">
                <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="3s" repeatCount="indefinite"/>
              </path>
              {/* Halftone + Grain */}
              <rect x="0" y="0" width="800" height="450" fill="url(#halftoneA)" opacity="0.25"/>
              <rect x="0" y="0" width="800" height="450" fill="none" filter="url(#grainA)"/>
            </svg>
          </Card>

          {/* 4) bookcharm 800×800 */}
          <Card title="bookcharm — Floating Books & Cart (800×800)" sizeClass="aspect-square">
            <svg viewBox="0 0 800 800" className="w-full h-full rounded-lg block bg-[#0A0A0A]">
              <defs>
                <filter id="grainB" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4"/>
                  <feColorMatrix type="saturate" values="0"/>
                  <feComponentTransfer><feFuncA type="table" tableValues="0 0.12"/></feComponentTransfer>
                </filter>
                <radialGradient id="amber" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#FF6B35"/>
                  <stop offset="100%" stopColor="#FF6B35" stopOpacity="0"/>
                </radialGradient>
                <pattern id="halftoneB" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#1f1f1f"/>
                </pattern>
              </defs>
              <circle cx="400" cy="400" r="260" fill="url(#amber)">
                <animate attributeName="opacity" values="0.35;0.55;0.35" dur="3s" repeatCount="indefinite"/>
              </circle>
              {/* Books */}
              <g>
                <g>
                  <rect x="180" y="220" width="180" height="24" fill="#8B5CF6" rx="6">
                    <animate attributeName="y" values="220;210;220" dur="3s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="180" y="244" width="180" height="120" fill="#1A1A1A" stroke="#8B5CF6" strokeWidth="2"/>
                </g>
                <g>
                  <rect x="480" y="280" width="160" height="24" fill="#00D4FF" rx="6">
                    <animate attributeName="y" values="280;270;280" dur="3s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="480" y="304" width="160" height="110" fill="#1A1A1A" stroke="#00D4FF" strokeWidth="2"/>
                </g>
                <g>
                  <rect x="300" y="480" width="200" height="24" fill="#39FF14" rx="6">
                    <animate attributeName="y" values="480;470;480" dur="3s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="300" y="504" width="200" height="120" fill="#1A1A1A" stroke="#39FF14" strokeWidth="2"/>
                </g>
              </g>
              {/* Cart */}
              <g>
                <rect x="240" y="640" width="320" height="16" rx="8" fill="#FF6B35"/>
                <rect x="520" y="560" width="60" height="80" rx="8" fill="#FF6B35">
                  <animateTransform attributeName="transform" type="translate" values="0 0; 20 0; 0 0" dur="3s" repeatCount="indefinite"/>
                </rect>
                <circle cx="280" cy="660" r="12" fill="#FF6B35"/>
                <circle cx="520" cy="660" r="12" fill="#FF6B35"/>
              </g>
              <rect x="0" y="0" width="800" height="800" fill="url(#halftoneB)" opacity="0.25"/>
              <rect x="0" y="0" width="800" height="800" fill="none" filter="url(#grainB)"/>
            </svg>
          </Card>

          {/* 5) fitness 600×600 */}
          <Card title="fitness — Neon Progress & Heart Pulse (600×600)" sizeClass="aspect-square">
            <svg viewBox="0 0 600 600" className="w-full h-full rounded-lg block bg-[#0A0A0A]">
              <defs>
                <filter id="grainC" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4"/>
                  <feColorMatrix type="saturate" values="0"/>
                  <feComponentTransfer><feFuncA type="table" tableValues="0 0.12"/></feComponentTransfer>
                </filter>
                <pattern id="halftoneC" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#1f1f1f"/>
                </pattern>
              </defs>
              {/* Progress bars */}
              <g transform="translate(80,160)">
                <rect x="0" y="0" width="440" height="22" rx="11" fill="#1A1A1A"/>
                <rect x="0" y="0" width="0" height="22" rx="11" fill="#39FF14">
                  <animate attributeName="width" values="0;440;0" dur="3s" repeatCount="indefinite"/>
                </rect>
                <rect x="0" y="60" width="440" height="22" rx="11" fill="#1A1A1A"/>
                <rect x="0" y="60" width="0" height="22" rx="11" fill="#8B5CF6">
                  <animate attributeName="width" values="0;360;0" dur="3s" repeatCount="indefinite"/>
                </rect>
                <rect x="0" y="120" width="440" height="22" rx="11" fill="#1A1A1A"/>
                <rect x="0" y="120" width="0" height="22" rx="11" fill="#00D4FF">
                  <animate attributeName="width" values="0;300;0" dur="3s" repeatCount="indefinite"/>
                </rect>
              </g>
              {/* Heart pulse */}
              <g transform="translate(80,400)">
                <path d="M0 40 L60 40 90 0 120 80 160 40 220 40 250 20 280 60 320 40 380 40 410 0 440 80 480 40 520 40" fill="none" stroke="#8B5CF6" strokeWidth="4">
                  <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="3s" repeatCount="indefinite"/>
                </path>
                <circle cx="90" cy="0" r="10" fill="#39FF14">
                  <animate attributeName="r" values="8;14;8" dur="1s" repeatCount="indefinite"/>
                </circle>
              </g>
              <rect x="0" y="0" width="600" height="600" fill="url(#halftoneC)" opacity="0.25"/>
              <rect x="0" y="0" width="600" height="600" fill="none" filter="url(#grainC)"/>
            </svg>
          </Card>

          {/* 6) chat 800×450 */}
          <Card title="chat — Bubbles & Typing Indicator (800×450)" sizeClass="aspect-[16/9]">
            <svg viewBox="0 0 800 450" className="w-full h-full rounded-lg block bg-[#0A0A0A]">
              <defs>
                <filter id="grainD" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4"/>
                  <feColorMatrix type="saturate" values="0"/>
                  <feComponentTransfer><feFuncA type="table" tableValues="0 0.12"/></feComponentTransfer>
                </filter>
                <pattern id="halftoneD" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#1f1f1f"/>
                </pattern>
              </defs>
              {/* Online indicator */}
              <circle cx="40" cy="40" r="10" fill="#39FF14">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite"/>
              </circle>
              {/* Bubbles */}
              <g>
                <g>
                  <rect x="-300" y="100" width="340" height="70" rx="18" fill="#00D4FF" opacity="0.9">
                    <animate attributeName="x" values="-300;40;40" dur="0.8s" fill="freeze"/>
                  </rect>
                </g>
                <g>
                  <rect x="840" y="190" width="360" height="70" rx="18" fill="#1A1A1A" stroke="#8B5CF6" strokeWidth="2">
                    <animate attributeName="x" values="840;400;400" dur="0.9s" begin="0.2s" fill="freeze"/>
                  </rect>
                </g>
                <g>
                  <rect x="-300" y="280" width="400" height="70" rx="18" fill="#00D4FF" opacity="0.9">
                    <animate attributeName="x" values="-300;40;40" dur="0.8s" begin="0.4s" fill="freeze"/>
                  </rect>
                </g>
              </g>
              {/* Typing indicator */}
              <g transform="translate(60,370)">
                <rect x="0" y="0" width="120" height="36" rx="18" fill="#1A1A1A" stroke="#00D4FF" strokeWidth="2"/>
                <circle cx="24" cy="18" r="4" fill="#00D4FF">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="48" cy="18" r="4" fill="#00D4FF">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" begin="0.2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="72" cy="18" r="4" fill="#00D4FF">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
                </circle>
              </g>
              <rect x="0" y="0" width="800" height="450" fill="url(#halftoneD)" opacity="0.25"/>
              <rect x="0" y="0" width="800" height="450" fill="none" filter="url(#grainD)"/>
            </svg>
          </Card>
        </div>
      </div>
    </section>
  );
}
