"use client";
import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "min-w-30 px-4 py-3 font-bold rounded-lg transition shadow-md cursor-pointer disabled:cursor-not-allowed";
  const variants = {
    primary: props.disabled
      ? "bg-gray-400 text-white"
      : "bg-[#1e293b] text-white hover:opacity-90",
    secondary:
      "bg-[#e2e8f0] text-gray-800 hover:bg-gray-300 disabled:opacity-50",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
