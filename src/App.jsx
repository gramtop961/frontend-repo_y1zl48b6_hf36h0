import React from 'react';
import HeroCover from './components/HeroCover';
import BackgroundAsset from './components/BackgroundAsset';
import PortraitAsset from './components/PortraitAsset';
import Animations from './components/Animations';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-white selection:bg-[#00D4FF]/30 selection:text-white">
      <HeroCover />

      {/* Color palette ribbon */}
      <section className="bg-[#0A0A0A] border-t border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 text-[10px]">
          {[
            { name: 'Base Black', color: '#0A0A0A' },
            { name: 'Dark Gray', color: '#1A1A1A' },
            { name: 'Neon Red', color: '#F93549' },
            { name: 'Electric Blue', color: '#00D4FF' },
            { name: 'Cyber Green', color: '#39FF14' },
            { name: 'Warm Orange', color: '#FF6B35' },
            { name: 'Purple', color: '#8B5CF6' },
          ].map((c) => (
            <div key={c.name} className="flex items-center gap-2 py-2 px-2 rounded-lg bg-[#0E0E0E] ring-1 ring-white/10">
              <span className="inline-block w-4 h-4 rounded-sm" style={{ backgroundColor: c.color }} />
              <span className="text-white/70 truncate">{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      <BackgroundAsset />
      <PortraitAsset />
      <Animations />

      <footer className="relative mt-10 mb-10 text-center text-white/50 text-xs">
        Built with a cohesive dark grungy anime cyberpunk theme. No watermarks, no logos, no photorealistic faces.
      </footer>
    </div>
  );
}
