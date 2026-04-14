import type { SVGProps } from "react";

const baseProps: SVGProps<SVGSVGElement> = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Wallet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h11A2.5 2.5 0 0 1 19 7.5V9" />
      <path d="M4.5 9H19a2 2 0 0 1 2 2v3a3 3 0 0 1-3 3H6.5A3.5 3.5 0 0 1 3 13.5V11a2 2 0 0 1 1.5-2" />
      <path d="M16.5 12.5h3" />
    </svg>
  );
}

export function Sparkline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M4 15.5 8.2 11l2.7 2.8L15.8 8l4.2 3" />
      <path d="M20 8v3.5h-3.5" />
    </svg>
  );
}

export function ShieldCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M12 3 19 6.5V12c0 4.2-2.7 7.5-7 9-4.3-1.5-7-4.8-7-9V6.5L12 3Z" />
      <path d="m9.5 12.5 1.8 1.8 3.7-3.8" />
    </svg>
  );
}

export function Users(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M8 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
      <path d="M17 10a2.5 2.5 0 1 0-2.5-2.5A2.5 2.5 0 0 0 17 10Z" />
      <path d="M4 19c0-2.8 2.7-5 6-5s6 2.2 6 5" />
      <path d="M14.5 18c.4-1.9 2.1-3.2 4.5-3.2 1.7 0 3.1.6 4 1.7" />
    </svg>
  );
}

export function PiggyBankIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M5.5 10.5c0-3.6 3.2-6.5 7-6.5 2.6 0 4.9 1.3 6 3.4" />
      <path d="M19 13.5c0 4-3.1 7.5-7.5 7.5S4 17.7 4 13.5V12a4 4 0 0 1 4-4h8.4A2.6 2.6 0 0 1 19 10.6Z" />
      <path d="M8 14.5h.01" />
      <path d="M15 7.5v2" />
      <path d="M10 19v2" />
    </svg>
  );
}

export function StackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="m4.5 9 7.5 4 7.5-4-7.5-4-7.5 4Z" />
      <path d="m4.5 13 7.5 4 7.5-4" />
      <path d="m4.5 17 7.5 4 7.5-4" />
    </svg>
  );
}

export function TargetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="m16.5 7.5 3-3" />
      <path d="M19.5 4.5h-3v3" />
    </svg>
  );
}

export function MessageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v4.4A3.8 3.8 0 0 1 15.2 15H10l-4 4v-4.8A3.4 3.4 0 0 1 5 11.2Z" />
      <path d="M8 8.5h8" />
      <path d="M8 11h5.5" />
    </svg>
  );
}

export function ChartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M4 19.5h16" />
      <path d="M7 17v-5" />
      <path d="M12 17V7" />
      <path d="M17 17v-8" />
    </svg>
  );
}

export function PulseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M3.5 12h3.8l1.5-4.2 2.7 8.2 1.7-4H20.5" />
      <path d="M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M7 10V8a5 5 0 0 1 10 0v2" />
      <path d="M6 10.5h12a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5.5a2 2 0 0 1 2-2Z" />
      <path d="M12 14v2" />
    </svg>
  );
}

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M7 17 17 7" />
      <path d="M10 7h7v7" />
    </svg>
  );
}

export function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M12 3 9.8 8.2 4 10l5.8 1.8L12 17l2.2-5.2L20 10l-5.8-1.8L12 3Z" />
    </svg>
  );
}

export function ShieldStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M12 3 19 6.5V12c0 4.2-2.7 7.5-7 9-4.3-1.5-7-4.8-7-9V6.5L12 3Z" />
      <path d="m12 8 1.1 2.3 2.4.4-1.7 1.7.4 2.4L12 13.7l-2.2 1.1.4-2.4-1.7-1.7 2.4-.4Z" />
    </svg>
  );
}