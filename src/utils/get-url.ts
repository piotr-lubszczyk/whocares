import qs from "qs";

export const getUrl = (subject: string) =>
  `${process.env.NEXT_PUBLIC_APP_URL}/count?${qs.stringify({ subject })}`;
