'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

export const LightBackground = ({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
  };
}) => {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50',
        className
      )}
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-6000"></div>
      </div>

      <SVG svgOptions={svgOptions} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:24px_24px] opacity-25"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-sky-100/20 to-slate-100/20 rounded-full filter blur-3xl"></div>
      </div>

      {children}

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.2);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.8);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
};

const pathVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: [0, 0.2, 0.2, 0],
    transition: {
      pathLength: { duration: 4, ease: 'easeInOut' },
      opacity: { duration: 4, ease: 'easeInOut' },
    },
  },
};

const SVG = ({
  svgOptions,
}: {
  svgOptions?: {
    duration?: number;
  };
}) => {
  const paths = [
    'M0 200 C 200 150, 400 250, 600 200 S 800 150, 1000 200 S 1200 250, 1600 200',
    'M0 400 C 200 350, 400 450, 600 400 S 800 350, 1000 400 S 1200 450, 1600 400',
    'M0 600 C 200 550, 400 650, 600 600 S 800 550, 1000 600 S 1200 650, 1600 600',
    'M200 0 C 150 200, 250 400, 200 600 S 150 800, 200 1000 S 250 1200, 200 1400',
    'M400 0 C 350 200, 450 400, 400 600 S 350 800, 400 1000 S 450 1200, 400 1400',
    'M600 0 C 550 200, 650 400, 600 600 S 550 800, 600 1000 S 650 1200, 600 1400',
  ];

  return (
    <motion.svg
      viewBox="0 0 1600 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full opacity-[0.15]"
    >
      {paths.map((path, idx) => (
        <motion.path
          key={`path-${idx}`}
          d={path}
          stroke={`url(#gradient-${idx})`}
          strokeWidth="1"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 4,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
            delay: idx * 0.5,
          }}
        />
      ))}

      <defs>
        {paths.map((_, idx) => (
          <linearGradient
            key={`gradient-${idx}`}
            id={`gradient-${idx}`}
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
          </linearGradient>
        ))}
      </defs>
    </motion.svg>
  );
};
