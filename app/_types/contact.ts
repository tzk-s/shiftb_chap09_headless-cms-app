import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(1, "お名前は必須です。")
    .max(30, "お名前は30文字以内で入力してください。"),

  email: z
    .string()
    .min(1, "メールアドレスは必須です。")
    .pipe(z.email("メールアドレスの形式が正しくありません。")),

  message: z
    .string()
    .min(1, "本文は必須です。")
    .max(500, "本文は500文字以内で入力してください。"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
export type SubmitResult = { success: true } | { success: false };
