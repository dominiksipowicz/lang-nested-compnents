import React from "react";
import LanguageSelector from "@/app/components/LanguageSelector";
import { setLang } from "@/app/utils/languageUtils";

const Page = ({ params }: { params: { lang: string } }) => {
  const { lang } = params; // unfortunately we must set this on every page.tsx!
  setLang(lang);
  return (
    <div>
      <h1>Welcome to the sub Page</h1>
      <p>This is a sample page component.</p>

      <LanguageSelector />
    </div>
  );
};

export default Page;
