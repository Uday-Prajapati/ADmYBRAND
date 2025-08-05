import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  glass = false
}) => {
  const baseClasses = 'rounded-2xl border transition-all duration-300';
  
  const glassClasses = glass 
    ? 'bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl'
    : 'bg-slate-900/50 border-slate-800 shadow-xl';

  const hoverClasses = hover 
    ? 'hover:border-slate-700 hover:shadow-2xl hover:transform hover:scale-[1.02]'
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={clsx(
        baseClasses,
        glassClasses,
        hoverClasses,
        className
      )}
    >
      {children}
    </motion.div>
  );
};