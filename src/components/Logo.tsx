import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' is for dark backgrounds (white text), 'dark' is for light backgrounds (navy text)
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showText = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subTextSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[11px] tracking-[0.3em]',
    lg: 'text-xs tracking-[0.35em]',
  };

  return (
    <div className={`flex items-center gap-2.5 font-sans select-none ${className}`}>
      {/* Precision SVG Monogram matching NextStep Digital Brand Logo */}
      <svg
        viewBox="0 0 100 100"
        className={`${iconSizes[size]} shrink-0 transition-transform duration-300 hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Diagonal Gradient */}
          <linearGradient id="nsMainGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B1F3A" />
            <stop offset="50%" stopColor="#087CF0" />
            <stop offset="100%" stopColor="#08C5D9" />
          </linearGradient>

          {/* Arrow Gradient */}
          <linearGradient id="nsArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#087CF0" />
            <stop offset="100%" stopColor="#08C5D9" />
          </linearGradient>

          {/* Left Pillar Gradient */}
          <linearGradient id="nsLeftPillar" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#061324" />
            <stop offset="100%" stopColor="#087CF0" />
          </linearGradient>
        </defs>

        {/* Left vertical pillar of 'N' */}
        <path
          d="M 22 84 L 22 20 C 22 17 25 15 28 17 L 38 23 C 40 24 41 27 41 30 L 41 84 C 41 87 38 89 35 88 L 25 87 C 23 87 22 86 22 84 Z"
          fill="url(#nsLeftPillar)"
        />

        {/* Dynamic diagonal linking stroke */}
        <path
          d="M 32 30 L 66 74 C 68 76 72 75 73 72 L 77 62 C 78 59 76 56 73 53 L 39 18 C 36 15 32 17 32 21 Z"
          fill="url(#nsMainGrad)"
        />

        {/* Upward Right Arrow Stem & Head pointing up-right representing 'NextStep' and 'Growth' */}
        <path
          d="M 60 76 L 68 84 C 70 86 73 85 74 82 L 80 50 C 81 46 78 43 74 44 L 42 50 C 39 51 38 54 40 56 L 48 64 L 60 76 Z"
          fill="url(#nsArrowGrad)"
          opacity="0.95"
        />

        {/* Modern Arrow Tip */}
        <polygon
          points="88,14 62,22 72,32 76,28 78,40 88,14"
          fill="#08C5D9"
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className={`font-extrabold ${textSizes[size]} tracking-tight flex items-baseline`}>
            <span className={variant === 'light' ? 'text-white' : 'text-brand-navy'}>
              NEXT
            </span>
            <span className="text-brand-cyan ml-0.5">
              STEP
            </span>
          </div>
          <span
            className={`font-semibold uppercase text-slate-400 mt-1 ${subTextSizes[size]} ${
              variant === 'light' ? 'text-slate-300/80' : 'text-slate-500'
            }`}
          >
            DIGITAL
          </span>
        </div>
      )}
    </div>
  );
};
