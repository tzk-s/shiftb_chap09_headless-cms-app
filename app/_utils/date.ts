export const formatDate = (dateString: string | undefined | null) => {
  if (!dateString) return "日付不明";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "日付不明";
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};
