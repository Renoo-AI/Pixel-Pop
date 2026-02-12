import React from 'react';
import { cn } from '../../utils/cn';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  animate?: boolean;
  hover?: boolean;
}

export const Card = ({ children, className, animate = true, hover = false, ...props }: CardProps) => {
  const Component = motion.div;

  return (
    <Component
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-soft p-6 overflow-hidden",
        hover && "transition-shadow hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const CardHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("mb-4", className)}>{children}</div>
);

export const CardTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h3 className={cn("text-lg font-semibold text-slate-800 dark:text-slate-100", className)}>{children}</h3>
);
