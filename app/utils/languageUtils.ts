import { cache } from "react";

const langCache = cache(() => ({ lang: "en" }));

export const setLang = (lang: string) => {
  const cache = langCache();
  cache.lang = lang;
};

export const getLang = () => {
  return langCache().lang;
};
