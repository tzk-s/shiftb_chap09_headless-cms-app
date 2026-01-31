"use client";
import { Controller } from "react-hook-form";
import { Button, Input, TextArea, FormField } from "../../_components/ui";
import { useContactForm } from "@/app/_hooks/useContactForm";

export default function ContactForm() {
  const { handleFormSubmit, reset, errors, isSubmitting, error, control } = useContactForm();
  return (
    <form onSubmit={handleFormSubmit} noValidate>
      {error && (
        <div className="mb-6 p-4 mb-10 bg-red-50 border border-red-200 text-red-600 text-sm font-medium text-center">
          {error}
        </div>
      )}
      <div
        className={`flex flex-col gap-8 w-full ${
          isSubmitting ? "opacity-50" : ""
        }`}
      >
        <FormField htmlFor="name" label="お名前" error={errors.name}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => {
              return (
                <Input
                  id="name"
                  autoComplete="name"
                  disabled={isSubmitting}
                  error={errors.name?.message}
                  {...field}
                />
              );
            }}
          />
        </FormField>
        <FormField htmlFor="email" label="メールアドレス" error={errors.email}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => {
              return (
                <Input
                  type="email"
                  id="email"
                  autoComplete="email"
                  disabled={isSubmitting}
                  error={errors.email?.message}
                  {...field}
                />
              );
            }}
          />
        </FormField>
        <FormField htmlFor="message" label="本文" error={errors.message}>
          <Controller
            name="message"
            control={control}
            render={({ field }) => {
              return (
                <TextArea
                  id="message"
                  rows={8}
                  disabled={isSubmitting}
                  error={errors.message?.message}
                  {...field}
                />
              );
            }}
          />
        </FormField>
      </div>
      <div className="mt-12 flex flex-row gap-4 justify-center">
        <Button type="submit" disabled={isSubmitting} variant="primary">
          {isSubmitting ? "送信中..." : "送信"}
        </Button>
        <Button
          type="button"
          onClick={() => reset()}
          disabled={isSubmitting}
          variant="secondary"
        >
          クリア
        </Button>
      </div>
    </form>
  );
}
