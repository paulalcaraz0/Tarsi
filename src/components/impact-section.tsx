"use client";

import React from "react";
import { motion } from "framer-motion";

const FloatingCharacter = ({
  src,
  className,
  yOffset = 30,
  xOffset = 20,
  duration = 10,
  delay = 0,
}: {
  src: string;
  className: string;
  yOffset?: number;
  xOffset?: number;
  duration?: number;
  delay?: number;
}) => (
  <motion.img
    src={src}
    alt="Floating Background Character"
    className={`absolute pointer-events-none select-none opacity-[0.18] md:opacity-[0.32] blur-[0.5px] z-0 ${className}`}
    animate={{
      y: [0, -yOffset, 0],
      x: [0, xOffset, 0],
      rotate: [-5, 5, -5],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const backgroundParticles = [
  // Original set
  { src: "/logo_1.png", className: "top-[5%] left-[5%] w-16 h-16", duration: 15, delay: 0, yOffset: 40, xOffset: 20 },
  { src: "/logo_2.png", className: "top-[12%] right-[15%] w-24 h-24", duration: 18, delay: 1, yOffset: -30, xOffset: -40 },
  { src: "/logo_3.png", className: "top-[40%] left-[8%] w-20 h-20", duration: 20, delay: 2, yOffset: 50, xOffset: 30 },
  { src: "/logo_4.png", className: "top-[35%] right-[8%] w-14 h-14", duration: 14, delay: 0.5, yOffset: 45, xOffset: -25 },
  { src: "/logo_5.png", className: "bottom-[15%] left-[15%] w-24 h-24", duration: 22, delay: 1.5, yOffset: -40, xOffset: 35 },
  { src: "/logo_1.png", className: "bottom-[25%] right-[20%] w-16 h-16", duration: 16, delay: 3, yOffset: 35, xOffset: -20 },
  { src: "/logo_2.png", className: "top-[5%] left-[45%] w-12 h-12", duration: 12, delay: 2.5, yOffset: 20, xOffset: 40 },
  { src: "/logo_3.png", className: "bottom-[5%] right-[40%] w-20 h-20", duration: 19, delay: 1.2, yOffset: -50, xOffset: 30 },
  { src: "/logo_4.png", className: "top-[60%] left-[30%] w-16 h-16", duration: 17, delay: 0.8, yOffset: 40, xOffset: -30 },
  { src: "/logo_5.png", className: "top-[70%] right-[35%] w-14 h-14", duration: 13, delay: 2.2, yOffset: -35, xOffset: 25 },
  { src: "/logo_1.png", className: "top-[25%] left-[75%] w-20 h-20", duration: 21, delay: 4, yOffset: 45, xOffset: -40 },
  { src: "/logo_2.png", className: "bottom-[40%] left-[5%] w-12 h-12", duration: 11, delay: 0.3, yOffset: -25, xOffset: 20 },
  { src: "/logo_3.png", className: "bottom-[10%] right-[5%] w-16 h-16", duration: 16, delay: 1.8, yOffset: 30, xOffset: -30 },
  { src: "/logo_4.png", className: "top-[20%] left-[25%] w-[4.5rem] h-[4.5rem]", duration: 19, delay: 3.5, yOffset: -40, xOffset: 35 },
  { src: "/logo_5.png", className: "bottom-[50%] right-[5%] w-24 h-24", duration: 24, delay: 0.7, yOffset: 55, xOffset: -25 },
  { src: "/logo_1.png", className: "top-[18%] left-[58%] w-14 h-14", duration: 17, delay: 0.9, yOffset: 30, xOffset: 18 },
  { src: "/logo_2.png", className: "top-[48%] right-[28%] w-16 h-16", duration: 20, delay: 1.4, yOffset: -28, xOffset: -24 },
  { src: "/logo_3.png", className: "bottom-[28%] left-[34%] w-14 h-14", duration: 18, delay: 2.6, yOffset: 26, xOffset: 22 },
  { src: "/logo_4.png", className: "bottom-[8%] left-[58%] w-12 h-12", duration: 14, delay: 0.4, yOffset: -22, xOffset: 16 },
  { src: "/logo_5.png", className: "top-[52%] left-[82%] w-[4.5rem] h-[4.5rem]", duration: 23, delay: 3.1, yOffset: 34, xOffset: -18 },
  { src: "/logo_1.png", className: "top-[8%] right-[52%] w-12 h-12", duration: 12, delay: 1.9, yOffset: 18, xOffset: -16 },
  { src: "/logo_2.png", className: "bottom-[60%] right-[12%] w-14 h-14", duration: 21, delay: 2.8, yOffset: -26, xOffset: 20 },
  { src: "/logo_3.png", className: "bottom-[12%] left-[72%] w-[4.5rem] h-[4.5rem]", duration: 19, delay: 1.1, yOffset: 28, xOffset: -20 },

  // Extra dense layer
  { src: "/logo_4.png", className: "top-[3%] left-[20%] w-10 h-10", duration: 13, delay: 0.6, yOffset: 15, xOffset: 10 },
  { src: "/logo_5.png", className: "top-[3%] right-[30%] w-14 h-14", duration: 16, delay: 1.7, yOffset: -20, xOffset: -15 },
  { src: "/logo_1.png", className: "top-[15%] left-[38%] w-10 h-10", duration: 11, delay: 3.2, yOffset: 22, xOffset: 18 },
  { src: "/logo_2.png", className: "top-[22%] right-[42%] w-12 h-12", duration: 14, delay: 0.2, yOffset: -18, xOffset: 12 },
  { src: "/logo_3.png", className: "top-[30%] left-[50%] w-10 h-10", duration: 17, delay: 2.1, yOffset: 30, xOffset: -22 },
  { src: "/logo_4.png", className: "top-[45%] left-[18%] w-12 h-12", duration: 15, delay: 1.3, yOffset: -25, xOffset: 20 },
  { src: "/logo_5.png", className: "top-[55%] right-[18%] w-10 h-10", duration: 12, delay: 0.9, yOffset: 20, xOffset: -15 },
  { src: "/logo_1.png", className: "top-[65%] left-[42%] w-14 h-14", duration: 18, delay: 2.4, yOffset: -30, xOffset: 25 },
  { src: "/logo_2.png", className: "top-[75%] right-[45%] w-10 h-10", duration: 13, delay: 1.6, yOffset: 18, xOffset: -12 },
  { src: "/logo_3.png", className: "top-[82%] left-[25%] w-12 h-12", duration: 20, delay: 0.4, yOffset: -22, xOffset: 18 },
  { src: "/logo_4.png", className: "top-[88%] right-[25%] w-10 h-10", duration: 15, delay: 3.8, yOffset: 15, xOffset: -10 },
  { src: "/logo_5.png", className: "top-[92%] left-[60%] w-14 h-14", duration: 17, delay: 1.0, yOffset: -20, xOffset: 14 },
  { src: "/logo_1.png", className: "top-[10%] left-[88%] w-10 h-10", duration: 14, delay: 2.7, yOffset: 25, xOffset: -18 },
  { src: "/logo_2.png", className: "top-[32%] left-[92%] w-12 h-12", duration: 19, delay: 0.5, yOffset: -28, xOffset: 20 },
  { src: "/logo_3.png", className: "top-[58%] left-[95%] w-10 h-10", duration: 16, delay: 1.4, yOffset: 22, xOffset: -16 },
  { src: "/logo_4.png", className: "top-[78%] left-[88%] w-14 h-14", duration: 22, delay: 2.9, yOffset: -32, xOffset: 24 },
  { src: "/logo_5.png", className: "top-[15%] left-[2%] w-10 h-10", duration: 13, delay: 1.1, yOffset: 18, xOffset: 12 },
  { src: "/logo_1.png", className: "top-[50%] left-[2%] w-12 h-12", duration: 18, delay: 3.3, yOffset: -24, xOffset: 16 },
  { src: "/logo_2.png", className: "top-[80%] left-[3%] w-10 h-10", duration: 15, delay: 0.8, yOffset: 20, xOffset: -14 },

  // Ultra-fill corners and gaps
  { src: "/logo_3.png", className: "top-[6%] left-[32%] w-8 h-8", duration: 10, delay: 4.2, yOffset: 12, xOffset: 8 },
  { src: "/logo_4.png", className: "top-[6%] right-[22%] w-8 h-8", duration: 11, delay: 3.6, yOffset: -10, xOffset: -8 },
  { src: "/logo_5.png", className: "top-[28%] left-[62%] w-8 h-8", duration: 9, delay: 1.5, yOffset: 14, xOffset: 10 },
  { src: "/logo_1.png", className: "top-[38%] right-[55%] w-10 h-10", duration: 12, delay: 2.3, yOffset: -16, xOffset: 12 },
  { src: "/logo_2.png", className: "top-[68%] left-[55%] w-8 h-8", duration: 10, delay: 0.1, yOffset: 12, xOffset: -10 },
  { src: "/logo_3.png", className: "top-[95%] left-[42%] w-10 h-10", duration: 13, delay: 4.5, yOffset: -15, xOffset: 10 },
  { src: "/logo_4.png", className: "top-[95%] right-[15%] w-8 h-8", duration: 9, delay: 2.0, yOffset: 10, xOffset: -8 },
  { src: "/logo_5.png", className: "top-[42%] left-[68%] w-8 h-8", duration: 11, delay: 3.9, yOffset: -12, xOffset: 9 },
  { src: "/logo_1.png", className: "top-[72%] right-[62%] w-10 h-10", duration: 14, delay: 1.7, yOffset: 16, xOffset: -12 },
  { src: "/logo_2.png", className: "top-[85%] left-[48%] w-8 h-8", duration: 10, delay: 0.6, yOffset: -10, xOffset: 8 },
];

const steps = [
  {
    number: "01",
    title: "Effortless Logging",
    description:
      "Log expenses in seconds with quick-actions or simply text Tarsi AI to categorize everything for you instantly.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Discover Patterns",
    description:
      "Watch your raw data magically transform into beautiful, easy-to-understand charts that reveal where your money actually goes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Achieve Freedom",
    description:
      "Hit your savings goals months faster by cutting out hidden financial leaks and following personalized AI insights.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="relative w-full min-h-screen flex flex-col justify-center border-t border-gray-200 bg-[#EFFAF2] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-16"
    >
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#3CB371]/10 blur-[120px] pointer-events-none z-0" />

      {backgroundParticles.map((particle, index) => (
        <FloatingCharacter
          key={index}
          src={particle.src}
          className={particle.className}
          duration={particle.duration}
          delay={particle.delay}
          yOffset={particle.yOffset}
          xOffset={particle.xOffset}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <div className="mb-12 text-center md:mb-14">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2E8B57]/20 bg-[#2E8B57]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1A4D2E] md:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#2E8B57]" />
            Real Impact
          </span>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-[#0A2514] md:text-5xl">
            Join Thousands <span className="bg-gradient-to-r from-[#1A4D2E] to-[#3CB371] bg-clip-text text-transparent">Taking Control</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#4A6755] md:text-lg">
            Three simple steps to transform your relationship with money and build a future you can be proud of.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative cursor-default overflow-hidden rounded-[32px] border border-[#E8EFE9] bg-white/90 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(46,139,87,0.15)] md:p-10 z-10"
            >
              <div className="pointer-events-none absolute -right-4 -top-8 z-0 select-none text-[80px] md:text-[150px] font-black leading-none text-[#A8B8AF] transition-colors duration-500 group-hover:text-[#95A79D]">
                {step.number}
              </div>

              <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8F5EE] to-[#D1E8D9] text-[#2E8B57] shadow-inner transition-transform duration-500 group-hover:scale-110">
                {step.icon}
              </div>

              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-bold text-[#0A2514] transition-colors duration-300 group-hover:text-[#2E8B57]">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-[#4A6755]">{step.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#1A4D2E] to-[#3CB371] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
