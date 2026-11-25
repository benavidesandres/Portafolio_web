// Garabatos y manchas decorativas al estilo "hand-drawn".
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export const Blob = (p: P) => (
  <svg viewBox="0 0 200 200" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M44.6,-58.2C57.5,-50.5,67.3,-36.8,72.4,-21.2C77.6,-5.6,78.1,11.9,71.3,25.8C64.5,39.7,50.3,50,35.4,58.3C20.5,66.6,4.9,72.9,-11.9,73.6C-28.7,74.3,-46.7,69.4,-58.6,57.7C-70.5,46,-76.3,27.5,-76.4,9.6C-76.5,-8.3,-70.9,-25.5,-60.2,-36.9C-49.5,-48.3,-33.7,-53.8,-18.9,-60.4C-4.1,-67,9.7,-74.6,23.4,-72.4C37.1,-70.2,31.7,-65.9,44.6,-58.2Z"
      transform="translate(100 100)"
    />
  </svg>
);

export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path fill="currentColor" d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7.1L12 17.3 5.8 21l1.6-7.1L2 9.2l7.1-.6z" />
  </svg>
);

export const StarOutline = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden {...p}>
    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7.1L12 17.3 5.8 21l1.6-7.1L2 9.2l7.1-.6z" />
  </svg>
);

export const Bolt = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path fill="currentColor" d="M13 2L4 14h6l-1 8 9-12h-6z" />
  </svg>
);

export const Squiggle = (p: P) => (
  <svg viewBox="0 0 120 30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden {...p}>
    <path d="M4 18c10-14 18-14 26 0s18 14 26 0 18-14 26 0 18 14 26 0" />
  </svg>
);

export const Loop = (p: P) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden {...p}>
    <path d="M10 80c20-10 30-40 20-55S0 25 15 45s50 20 60 0-5-35-15-25 5 45 30 50" />
  </svg>
);

export const Crown = (p: P) => (
  <svg viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden {...p}>
    <path d="M6 34L4 10l14 12L30 4l12 18 14-12-2 24z" />
  </svg>
);

export const Smiley = (p: P) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden {...p}>
    <circle cx="24" cy="24" r="20" />
    <path d="M17 19v2M31 19v2M15 29c5 6 13 6 18 0" />
  </svg>
);

export const Arrow = (p: P) => (
  <svg viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
    <path d="M6 6c-4 22 10 40 60 42" />
    <path d="M56 38l10 10-12 6" />
  </svg>
);

export const Underline = (p: P) => (
  <svg viewBox="0 0 300 24" preserveAspectRatio="none" fill="none" aria-hidden {...p}>
    <path
      className="animate-draw"
      d="M4 16C70 6 160 4 296 10"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
    />
  </svg>
);

export const Sparks = (p: P) => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden {...p}>
    <path d="M20 4v8M20 28v8M4 20h8M28 20h8" />
  </svg>
);
