import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "relative px-8 py-3 rounded-md font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group";

  const variants = {
    primary: "bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]",
    secondary: "bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark",
    outline: "bg-transparent border border-slate-600 text-white hover:border-brand-gold hover:text-brand-gold"
  };

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
    >
      {/* Shimmer effect for primary button */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};