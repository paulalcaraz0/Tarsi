"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./interactive-logo.module.css";

const Sparkle = ({ className, delay = 0, size = "w-6 h-6" }: { className: string; delay?: number; size?: string }) => (
  <motion.svg
    animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
    transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
    className={`absolute text-[#CCFF00] pointer-events-none z-0 ${className} ${size}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C12 0 12 10.5 24 12C24 12 12 13.5 12 24C12 24 12 13.5 0 12C0 12 10.5 12 12 0Z" />
  </motion.svg>
);

export default function HeroSection() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-gradient-to-br from-[#0A1A10] via-[#0E2615] to-[#0A1A10] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 pb-12"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/20 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#00FF66]/20 blur-[180px] rounded-full pointer-events-none z-0" />

      <Sparkle className="top-[20%] left-[45%]" delay={0} size="w-4 h-4 text-green-300" />
      <Sparkle className="top-[30%] left-[15%]" delay={1.5} size="w-6 h-6 text-green-200" />
      <Sparkle className="top-[15%] right-[30%]" delay={0.5} size="w-3 h-3 text-[#CCFF00]" />
      <Sparkle className="bottom-[35%] left-[40%]" delay={2} size="w-5 h-5 text-green-400" />
      <Sparkle className="top-[45%] right-[10%]" delay={1} size="w-6 h-6 text-green-300" />
      <Sparkle className="bottom-[25%] right-[45%]" delay={0.8} size="w-4 h-4 text-[#CCFF00]" />
      <Sparkle className="bottom-[15%] left-[25%]" delay={2.5} size="w-7 h-7 text-green-200" />
      <Sparkle className="bottom-[5%] right-[5%]" delay={0.2} size="w-16 h-16 text-white opacity-80" />
      <Sparkle className="top-[10%] left-[30%]" delay={1.7} size="w-3 h-3 text-white/70" />
      <Sparkle className="top-[22%] right-[42%]" delay={2.2} size="w-4 h-4 text-green-200" />
      <Sparkle className="bottom-[30%] left-[8%]" delay={0.6} size="w-4 h-4 text-[#CCFF00]" />
      <Sparkle className="bottom-[12%] right-[30%]" delay={1.3} size="w-3 h-3 text-white/75" />
      <Sparkle className="top-[55%] left-[50%]" delay={2.9} size="w-5 h-5 text-green-300" />
      <Sparkle className="top-[35%] left-[70%]" delay={0.9} size="w-3 h-3 text-[#CCFF00]" />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          <div className="flex items-center gap-3 mb-6 group cursor-pointer">
            <div className={styles["character-container"]} style={{ width: 72 }}>
              <Image src="/logo_3.png" alt="Tarsi mascot" width={72} height={72} className={styles["monkey-image"]} />
            </div>
            <span className="text-green-300/90 text-sm font-medium tracking-wide">Hover to say hi!</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Manage your money <br />
            <span className="text-[#3CB371] drop-shadow-[0_0_20px_rgba(60,179,113,0.3)]">with clarity</span>
          </h1>

          <p className="text-[#A3B8AA] text-lg max-w-lg mb-10 leading-relaxed">
            Track expenses, visualize spending patterns, and achieve your financial goals with an app that makes money management beautifully simple.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="https://apps.apple.com/ph/app/tarsi-budget-tracker/id6760278399" target="_blank" rel="noreferrer" className="transition-transform hover:-translate-y-1">
              <img src="/app_store.png" alt="Download on the App Store" className="h-14 w-auto object-contain" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.tarsi.app&hl=en" target="_blank" rel="noreferrer" className="transition-transform hover:-translate-y-1">
              <img src="/google_play.png" alt="Get it on Google Play" className="h-14 w-auto object-contain" />
            </a>
          </div>
        </motion.div>

        <div className="lg:col-span-7 mt-10 lg:mt-0 flex justify-center lg:justify-end lg:translate-x-20 xl:translate-x-28">
          <div
            id="mockupContainer"
            className="relative flex h-[600px] w-full max-w-[1100px] cursor-pointer items-center justify-center overflow-visible px-4 sm:h-[660px] md:h-[720px]"
            onClick={() => setIsExpanded((value) => !value)}
            onMouseEnter={() => setIsExpanded(true)}
             onMouseLeave={() => setIsExpanded(false)}
          >
            <div className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 text-sm font-semibold tracking-[0.2em] text-[#666] sm:top-10">
              Hover or click to expand screens
            </div>

            <motion.img
              src="/left.png"
              alt="Debt Tracker Screen"
              className="absolute h-[560px] w-auto object-contain sm:h-[660px] md:h-[780px]"
              animate={{
                scale: 0.95,
                y: 25,
                x: isExpanded ? "-78%" : "-32%",
                opacity: isExpanded ? 1 : 0.9,
              }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            />

            <motion.img
              src="/middle.png"
              alt="Accounts Dashboard Screen"
              className="absolute z-10 h-[620px] w-auto object-contain sm:h-[740px] md:h-[860px]"
              animate={{
                scale: 1,
                y: 60,
                x: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            />

            <motion.img
  src="/right.png"
  alt="Statistics Screen"
  className="absolute h-[560px] w-auto object-contain sm:h-[660px] md:h-[780px]"
  animate={{
                scale: 1.02,
    y: -10,
    x: isExpanded ? "72%" : "32%",
    opacity: isExpanded ? 1 : 0.9,
  }}
  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
/>
          </div>
        </div>
      </div>
    </section>
  );
}
