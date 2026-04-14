import type { ComponentType, SVGProps } from "react";
import {
  ChartIcon,
  LockIcon,
  MessageIcon,
  PiggyBankIcon,
  PulseIcon,
  StackIcon,
  TargetIcon,
} from "@/components/icons";

export type Feature = {
  title: string;
  description: string;
  eyebrow: string;
  className: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const appFeatures: Feature[] = [
  {
    title: "See All Your Accounts",
    eyebrow: "One Dashboard",
    description:
      "Connect all your bank accounts, wallets, and investments. View balances, track net worth, and monitor cash flow in one beautiful dashboard.",
    className: "md:col-span-6 xl:col-span-5 xl:row-span-2",
    icon: StackIcon,
  },
  {
    title: "Log Expenses in Seconds",
    eyebrow: "Spend Smart",
    description:
      "Add expenses with categories, notes, and photos. Scan receipts and let AI log your expenses automatically.",
    className: "md:col-span-3 xl:col-span-3",
    icon: PiggyBankIcon,
  },
  {
    title: "Track Subscriptions",
    eyebrow: "Stop Wasting Money",
    description:
      "Stay on top of recurring charges. Get notified before renewals and cut subscriptions you don't use.",
    className: "md:col-span-3 xl:col-span-4",
    icon: PulseIcon,
  },
  {
    title: "Reach Your Goals",
    eyebrow: "Plan Ahead",
    description:
      "Set savings goals for vacations, big purchases, or life milestones. Watch your progress grow.",
    className: "md:col-span-4 xl:col-span-4",
    icon: TargetIcon,
  },
  {
    title: "Get Insights & Trends",
    eyebrow: "Understand Your Money",
    description:
      "Visualize spending patterns, track daily balance, and get forecast insights that help you plan smarter.",
    className: "md:col-span-4 xl:col-span-4",
    icon: ChartIcon,
  },
  {
    title: "Talk to Tarsi",
    eyebrow: "AI-Powered Coach",
    description:
      "Ask questions about your finances in natural language. Get advice that feels like chatting with a personal finance coach.",
    className: "md:col-span-4 xl:col-span-4",
    icon: MessageIcon,
  },
  {
    title: "Bank-Grade Security",
    eyebrow: "Your Privacy Matters",
    description:
      "Military-grade encryption, secure authentication, and a privacy-first architecture built to protect what matters most.",
    className: "md:col-span-12 xl:col-span-12",
    icon: LockIcon,
  },
];

export const whyTarsiPoints = [
  {
    title: "Simple",
    description:
      "A clean, delightful interface designed to make managing money feel easy and intuitive.",
  },
  {
    title: "Fast",
    description:
      "Log expenses, check balances, and make decisions in seconds. Zero friction, maximum clarity.",
  },
  {
    title: "Personal",
    description:
      "A finance app with personality and soul. Designed to make your money feel good.",
  },
];