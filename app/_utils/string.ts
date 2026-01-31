import DOMPurify from "dompurify";

export const sanitizeContent = (content: string) => {
  if (!content) return "";
  return DOMPurify.sanitize(content);
};
