export const handleApiError = (err: unknown): string => {
  let message = "予期せぬエラーが発生しました。";
  if (typeof navigator !== "undefined" && !navigator.onLine) {
    return "インターネットに接続されていません。";
  }

  if (err instanceof Error) {
    if (
      err.message.includes("Failed to fetch") ||
      err.message.includes("NetworkError")
    ) {
      return "サーバーと通信できませんでした。しばらく経ってから再度お試しください。";
    }
    return err.message;
  }

  return message;
};
