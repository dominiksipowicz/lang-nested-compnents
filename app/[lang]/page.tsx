import React from "react";
import LanguageSelector from "../components/LanguageSelector";
import { setLang } from "../utils/languageUtils";

const Page = ({ params }: { params: { lang: string } }) => {
  const { lang } = params;
  setLang(lang);

  return (
    <div>
      <h1>Welcome to the Page</h1>
      <p>This is a sample page component.</p>

      <LanguageSelector />
    </div>
  );
};

export default Page;
