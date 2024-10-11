import React from "react";
// import { setLang } from "../utils/languageUtils";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  console.log("lang", lang); // it's printing here

  //   setLang(lang); // setting here will not carry to the page.tsx nested components

  return <>{children}</>;
}
