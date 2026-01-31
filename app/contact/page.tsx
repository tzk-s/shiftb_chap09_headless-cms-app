"use client";
import ContactForm from "./_components/ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-[900px] w-11/12 mx-auto mt-12 mb-20">
      <h1 className="text-xl font-bold mb-12 text-gray-900">
        問合わせフォーム
      </h1>
      <ContactForm />
    </div>
  );
}
