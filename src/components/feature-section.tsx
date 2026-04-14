'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section id="features" className="bg-[#0A0A0A] py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Centered Ambient Glow for Premium Feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CCFF00]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Powerful Tools
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
            Everything You Need to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-[#CCFF00]">
              Manage Your Money
            </span>
          </h2>
        </div>

        {/* The Strict 4x2 Symmetrical Grid 
            This forces order. 4 equal columns. Perfectly aligned tops.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="flex flex-col justify-start group cursor-pointer"
            >
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl transition-all duration-500 group-hover:border-[#CCFF00]/50 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(204,255,0,0.15)]">
                <img 
                  src={feature.src} 
                  alt={feature.alt}
                  className="w-full h-auto object-cover block"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
