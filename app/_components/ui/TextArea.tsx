"use client";
import type { ComponentProps } from "react";

interface TextAreaProps extends ComponentProps<"textarea"> {
  error?: string | null;
}

export default function TextArea({
  error,
  className = "",
  ref,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      ref={ref}
      {...props}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error && props.id ? `${props.id}-error` : undefined}
      className={`w-full border rounded-lg px-4 py-3 outline-none transition shadow-sm resize-y ${
        props.disabled ? "bg-gray-100 text-gray-400 border-gray-200" : ""
      } ${
        error
          ? "border-red-700 focus:ring-1 focus:ring-red-700"
          : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      } ${className}`}
    />
  );
}
