import { cn } from "@/src/lib/utils";
import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const variants = {
    primary: "bg-brand-teal text-white hover:bg-brand-teal/90 shadow-brand-teal/20",
    secondary: "bg-brand-orange text-white hover:bg-brand-orange/90 shadow-brand-orange/20",
    outline: "border-2 border-brand-teal text-brand-teal hover:bg-brand-light-teal",
    ghost: "text-slate-600 hover:text-brand-teal hover:bg-brand-light-teal",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
    icon: "p-2",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal/40 disabled:opacity-50 disabled:pointer-events-none shadow-sm",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
