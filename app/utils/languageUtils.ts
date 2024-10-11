const langCache = { lang: "en" };

export const setLang = (lang: string) => {
  langCache.lang = lang;
};

export const getLang = () => {
  return langCache.lang;
};
