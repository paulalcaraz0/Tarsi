"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "tooRon",
    date: "April 10, 2026",
    rating: 5,
    text: "App is very useful especially for someone who wants to grow personal finance and track budget. UI/UX is good with modern looking design and cute Tarsi mascot. I love the Tarsi chat the most as I can manage my finances with just a chat.",
    avatarBg: "bg-rose-100",
    avatarInitials: "T",
  },
  {
    id: 2,
    name: "Cj Sacdalan",
    date: "April 8, 2026",
    rating: 5,
    text: "I've been waiting for weeks for the release of this app on Android, and so far, it's looking really solid. The interface is clean, and it makes tracking my daily expenses and financial goals feel completely seamless.",
    avatarBg: "bg-green-100",
    avatarInitials: "CS",
  },
  {
    id: 3,
    name: "Ashley Lumibao",
    date: "April 9, 2026",
    rating: 4,
    text: "Cool app! I've tried many budgeting apps, but I think I'll stick with this one.",
    avatarBg: "bg-orange-100",
    avatarInitials: "AL",
  },
  {
    id: 4,
    name: "Alby Belza",
    date: "April 11, 2026",
    rating: 5,
    text: "First time to invest in this kind of app. I love using it. It has every functionality that I'm looking for and what makes me love it further is that the developer listens to every feedback and update is coming right after on another.",
    avatarBg: "bg-blue-100",
    avatarInitials: "AB",
  },
  {
    id: 5,
    name: "Mark Allen Bobadilla",
    date: "April 8, 2026",
    rating: 5,
    text: "Finally, I can manage my wallets and track my expenses all in one app. Looking forward to future updates!",
    avatarBg: "bg-purple-100",
    avatarInitials: "MB",
  },
  {
    id: 6,
    name: "Ara Shotakun",
    date: "April 10, 2026",
    rating: 4,
    text: "Kind of overwhelming for the first time since im not used to this kind of applications for budgeting. but over all it provides great insight regarding your finances and i really like the chat feature.",
    avatarBg: "bg-yellow-100",
    avatarInitials: "AS",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "fill-[#2E8B57] text-[#2E8B57]" : "fill-gray-200 text-gray-200"}`}
      />
    ))}
  </div>
);

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="community"
      className="w-full overflow-hidden border-y border-[#DCE8DF] bg-white px-4 py-16 scroll-mt-16 sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="mb-14 text-center">
          <motion.div variants={itemVariants}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2E8B57]/20 bg-[#2E8B57]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1A4D2E] md:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#2E8B57]" />
              Community
            </span>
            <h2 className="mb-4 text-4xl font-black tracking-tight text-[#0A2514] md:text-5xl">
              Loved by <span className="bg-gradient-to-r from-[#1A4D2E] to-[#3CB371] bg-clip-text text-transparent">Thousands</span>
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-[#4A6755] md:text-base">
              See why people are switching to Tarsi to track their expenses, grow their savings, and achieve financial peace.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24"
        >
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#2E8B57]/10 px-3 py-1 text-sm font-medium text-[#2E8B57]">
                <Star className="mr-1 h-3.5 w-3.5 fill-[#2E8B57]" />
                Trusted by our users
              </div>

              <h3 className="text-3xl font-black tracking-tight text-[#0A2514] md:text-4xl">
                Real stories from <span className="bg-gradient-to-r from-[#1A4D2E] to-[#3CB371] bg-clip-text text-transparent">real users</span>
              </h3>

              <p className="leading-relaxed text-[#4A6755] md:text-lg">
                Thousands of people are already taking control of their finances with Tarsi. Here&apos;s what they have to say.
              </p>

              <div className="flex items-center gap-3 pt-4">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-10 bg-[#2E8B57]" : "w-2.5 bg-[#2E8B57]/30"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <a
                href="https://www.facebook.com/groups/1243677331220736/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 rounded-2xl bg-[#1877F2] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1565D8] hover:shadow-lg hover:shadow-[#1877F2]/30"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Join us on Facebook
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative min-h-[320px] md:min-h-[380px]">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" as const }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div className="flex h-full flex-col rounded-3xl border border-[#E8EFE9] bg-[#F7FAF8] p-8 shadow-sm">
                  <div className="mb-5">
                    <StarRating rating={review.rating} />
                  </div>

                  <div className="relative mb-6 flex-1">
                    <Quote className="absolute -left-1 -top-1 h-7 w-7 rotate-180 text-[#2E8B57]/20" />
                    <p className="relative z-10 pl-4 text-base font-medium leading-relaxed text-[#0A2514] md:text-lg">
                      &quot;{review.text}&quot;
                    </p>
                  </div>

                  <div className="my-4 h-px w-full bg-[#E8EFE9]" />

                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full border border-[#E8EFE9] ${review.avatarBg} text-sm font-bold text-[#1A4D2E]`}>
                      {review.avatarInitials}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A2514]">{review.name}</p>
                      <p className="text-xs text-[#4A6755]">{review.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-[#2E8B57]/5" />
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-xl bg-[#2E8B57]/5" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
