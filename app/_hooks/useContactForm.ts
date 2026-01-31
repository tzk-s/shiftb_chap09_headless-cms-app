"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, type ContactFormData } from "../_types";
import { API_BASE_URL } from "../_constants/api";
import { handleApiError } from "../_utils";

export const useContactForm = () => {
  const [error, setError] = useState<string | null>(null);
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("送信に失敗しました。");
      alert("送信しました。");
      reset();
    } catch (err) {
      setError(handleApiError(err));
      alert("送信に失敗しました。");
    }
  };

  return {
    handleFormSubmit: handleSubmit(onSubmit),
    reset,
    errors,
    isSubmitting,
    error,
    control,
  };
};
