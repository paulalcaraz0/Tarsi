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

const marqueeItems = [
  "🏆 #1 Top Selling Finance App",
  "⭐ #1 Paid App in All Categories",
  "📈 #1 Finance App on Google Play",
];

export default function HeroSection() {
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

        <div className="lg:col-span-7 flex flex-col gap-6 w-full mt-10 lg:mt-0">
          <div className="relative w-full h-[450px] md:h-[550px] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[40px] flex items-center justify-center shadow-2xl overflow-visible">
            <Sparkle className="top-[8%] right-[14%]" delay={0.4} size="w-4 h-4 text-white/80" />
            <Sparkle className="bottom-[14%] right-[22%]" delay={1.4} size="w-3 h-3 text-green-200" />
            <Sparkle className="top-[28%] left-[20%]" delay={2.1} size="w-3 h-3 text-[#CCFF00]" />
            <Sparkle className="top-[12%] left-[8%]" delay={0.7} size="w-3 h-3 text-green-200" />
            <Sparkle className="top-[20%] right-[32%]" delay={1.1} size="w-4 h-4 text-white/70" />
            <Sparkle className="bottom-[28%] left-[10%]" delay={2.8} size="w-3 h-3 text-[#CCFF00]" />
            <Sparkle className="bottom-[10%] right-[10%]" delay={0.2} size="w-5 h-5 text-green-300" />
            <Sparkle className="top-[46%] left-[6%]" delay={1.9} size="w-3 h-3 text-white/60" />
            <Sparkle className="top-[40%] right-[6%]" delay={2.3} size="w-4 h-4 text-green-200" />
            <Sparkle className="top-[8%] right-[4%]" delay={0.95} size="w-5 h-5 text-[#CCFF00]" />
            <Sparkle className="top-[26%] right-[12%]" delay={1.7} size="w-4 h-4 text-white/75" />
            <Sparkle className="bottom-[20%] right-[4%]" delay={2.6} size="w-5 h-5 text-green-300" />
            <Sparkle className="top-[58%] right-[18%]" delay={0.6} size="w-3 h-3 text-[#CCFF00]" />
            <Sparkle className="top-[8%] left-[4%]" delay={0.8} size="w-5 h-5 text-[#CCFF00]" />
            <Sparkle className="top-[24%] left-[12%]" delay={1.6} size="w-4 h-4 text-white/75" />
            <Sparkle className="bottom-[18%] left-[4%]" delay={2.5} size="w-5 h-5 text-green-300" />
            <Sparkle className="top-[56%] left-[16%]" delay={0.5} size="w-3 h-3 text-[#CCFF00]" />
            <Sparkle className="top-[14%] left-[1%]" delay={1.05} size="w-4 h-4 text-white/80" />
            <Sparkle className="top-[34%] left-[2%]" delay={2.0} size="w-5 h-5 text-[#CCFF00]" />
            <Sparkle className="bottom-[10%] left-[2%]" delay={1.45} size="w-4 h-4 text-green-200" />
            <Sparkle className="top-[48%] left-[1%]" delay={2.7} size="w-3 h-3 text-white/70" />
            <Sparkle className="top-[42%] left-[22%]" delay={1.25} size="w-5 h-5 text-green-200" />
            <Sparkle className="top-[62%] left-[28%]" delay={2.15} size="w-4 h-4 text-[#CCFF00]" />
            <Sparkle className="bottom-[24%] left-[18%]" delay={0.95} size="w-4 h-4 text-white/75" />
            <Sparkle className="bottom-[8%] left-[22%]" delay={1.75} size="w-3 h-3 text-green-300" />
            <Sparkle className="top-[24%] left-[36%]" delay={0.35} size="w-4 h-4 text-white/70" />

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-[60%] md:w-[45%] lg:w-[50%] max-w-[320px]"
            >
              <img
                src="/phone_onhand.png"
                alt="Tarsi App on Hand"
                className="w-full h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
              />
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[10%] left-[2%] md:left-[10%] z-30 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rotate-[-6deg]"
            >
              <p className="text-white/60 text-xs font-semibold mb-1">Savings Goal</p>
              <p className="text-white font-bold">₱18,500</p>
              <p className="text-[#3CB371] text-[10px] mt-1">+12% this week</p>
            </motion.div>

            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[15%] left-[-2%] md:left-[5%] z-30 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rotate-[4deg]"
            >
              <p className="text-white/60 text-xs font-semibold mb-1">Top Expense</p>
              <p className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF4500]"></span> Food
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [12, -12, 12] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[35%] right-[-5%] md:right-[5%] z-30 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rotate-[8deg]"
            >
              <p className="text-white/60 text-xs font-semibold mb-1">Net Worth</p>
              <p className="text-white font-bold">₱124,450</p>
              <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                <div className="w-[70%] h-full bg-[#3CB371] rounded-full shadow-[0_0_10px_rgba(60,179,113,0.8)]"></div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute top-[18%] right-[22%] z-20 rounded-xl border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-md"
            >
              <p className="text-[10px] font-semibold text-white/70">Daily Budget</p>
              <p className="text-xs font-bold text-white">₱750</p>
            </motion.div>

            <motion.div
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-[22%] right-[18%] z-20 rounded-xl border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-md"
            >
              <p className="text-[10px] font-semibold text-white/70">Streak</p>
              <p className="text-xs font-bold text-[#8DFFB0]">14 days</p>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[56%] left-[18%] z-20 rounded-xl border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-md"
            >
              <p className="text-[10px] font-semibold text-white/70">Goal</p>
              <p className="text-xs font-bold text-white">82%</p>
            </motion.div>
          </div>

          <div className="w-full h-24 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[28px] shadow-2xl flex items-center overflow-hidden relative">
            <Sparkle className="top-[18%] left-[20%]" delay={0.9} size="w-3 h-3 text-white/70" />
            <Sparkle className="bottom-[16%] right-[24%]" delay={1.8} size="w-3 h-3 text-green-200" />
            <Sparkle className="top-[22%] left-[42%]" delay={0.3} size="w-3 h-3 text-[#CCFF00]" />
            <Sparkle className="bottom-[20%] left-[62%]" delay={2.4} size="w-3 h-3 text-white/75" />
            <Sparkle className="top-[16%] right-[38%]" delay={1.2} size="w-4 h-4 text-green-300" />
            <Sparkle className="bottom-[14%] right-[10%]" delay={2.9} size="w-3 h-3 text-[#CCFF00]" />

            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0d2214] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0d2214] to-transparent z-10" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              className="flex w-max items-center"
            >
              {[...marqueeItems, ...marqueeItems].map((text, i) => (
                <div key={i} className="flex items-center px-8 md:px-12">
                  <span className="text-white/90 text-sm md:text-base font-semibold tracking-wide whitespace-nowrap">
                    {text}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3CB371] ml-8 md:ml-12 opacity-50" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
