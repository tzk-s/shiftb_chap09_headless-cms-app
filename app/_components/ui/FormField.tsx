"use client";
import type { ComponentProps } from "react";
import type { FieldError } from "react-hook-form";

interface FormField extends ComponentProps<"label"> {
  label: string;
  error?: FieldError;
}

export default function FormField({
  label,
  error,
  children,
  ...props
}: FormField) {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <label
        className="md:w-1/4 text-md font-medium text-gray-800 mt-3"
        {...props}
      >
        {label}
      </label>
      <div className="md:w-3/4 w-full">
        {children}
        {error?.message && (
          <div
            id={`${props.htmlFor}-error`}
            className="text-red-700 text-sm mt-2"
            role="alert"
          >
            {error.message}
          </div>
        )}
      </div>
    </div>
  );
}
