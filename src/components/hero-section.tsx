import Image from "next/image";
import { ArrowUpRight } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-28">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-300/60 bg-green-100/40 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
            <span className="text-lg">✨</span>
            The #1 Finance App for Smart Money Management
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            See All Your<span className="block text-transparent bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text"> Money in One Place</span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-700">
            Track expenses, manage accounts, uncover insights, and reach your money goals—all with personality and ease. Your personal budget tracker that actually feels good to use.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl transition transform hover:scale-105"
            >
              Get Started Free
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center rounded-full border-2 border-green-300 bg-white px-8 py-4 text-lg font-semibold text-green-600 transition hover:border-green-400 hover:bg-green-50"
            >
              View Demo
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <span className="text-lg">🔒</span>
              Bank-grade security
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <span className="text-lg">⚡</span>
              Instant insights
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <span className="text-lg">💎</span>
              Premium features
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[380px]">
          {/* Decorative gradient background */}
          <div className="absolute -inset-6 bg-gradient-to-br from-green-300/40 via-emerald-300/20 to-transparent rounded-[3rem] blur-3xl" />
          
          <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-white p-2 shadow-2xl">
            <Image
              src="/Screenshot 2026-04-13 215155.png"
              alt="Tarsi finance app main screen"
              width={370}
              height={762}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}