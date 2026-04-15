'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  { src: '/account.png', alt: 'Accounts Overview' },
  { src: '/talk_with_tarsi.png', alt: 'AI Copilot' },
  { src: '/statistics.png', alt: 'Statistics' },
  { src: '/privacy.png', alt: 'Data Privacy' },
  { src: '/log_expenses.png', alt: 'Log Expenses' },
  { src: '/track_what_isowed.png', alt: 'Track Debt' },
  { src: '/widgets.png', alt: 'Widgets' },
  { src: '/track_subscriptions.png', alt: 'Subscriptions' },
];

export default function FeatureSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    // RESTORED: h-screen to keep the exact position perfectly centered on the screen
    // CHANGED: Background color to soft light mint (#F7FAF8)
    <section id="features" className="h-screen w-full bg-[#F7FAF8] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="w-full max-w-[1200px] mx-auto flex flex-col h-full max-h-[900px] justify-center py-8 relative">
        
        {/* Header (Light Mode Colors) */}
        <div className="text-center mb-8 shrink-0 relative z-20">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2E8B57]/20 bg-[#2E8B57]/10 text-[#1A4D2E] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2E8B57]"></span>
            Interactive Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0A2514] tracking-tight leading-tight">
            Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A4D2E] to-[#3CB371]">Manage Your Money</span>
          </h2>
          <p className="text-[#4A6755] mt-2 text-sm md:text-base font-medium">Hover over any card to expand it in the center.</p>
        </div>

        {/* THE "1 BIG BOX" CONTAINER */}
        {/* Changed box background to pure white with a soft elegant shadow */}
        <div className="bg-white border border-[#E8EFE9] rounded-[40px] p-6 md:p-8 w-full h-[60vh] min-h-[450px] relative z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          
          {/* The 4x2 Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 md:gap-6 h-full w-full">
            
            {features.map((feature, index) => {
              const isHovered = hoveredIndex === index;
              const isOthersHovered = hoveredIndex !== null && hoveredIndex !== index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  // UNTOUCHED: Kept your 8 boxes exactly as they were (Dark Green #1A301D)
                  className={`relative h-full w-full rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    isHovered ? 'bg-transparent border-transparent' : 'bg-[#1A301D] border border-white/5 shadow-lg'
                  } ${isOthersHovered ? 'opacity-20 blur-[2px]' : 'opacity-100 blur-0'}`}
                >
                  <img
                    src={feature.src}
                    alt={feature.alt}
                    className={`w-full h-full object-contain p-2 md:p-3 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                  />
                </div>
              );
            })}

          </div>
        </div>

        {/* --- THE MAGIC: THE CENTERED ZOOM IMAGE --- */}
        {/* Position perfectly restored to absolute center */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 10 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
            >
              <img
                src={features[hoveredIndex].src}
                alt="Zoomed Feature"
                // Adjusted drop-shadow to look better against a white/light background
                className="h-[130%] md:h-[150%] max-h-[85vh] w-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.3)] rounded-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
