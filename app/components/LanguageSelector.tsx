import React from "react";
import { getLang } from "../utils/languageUtils";
import LanguageItem from "./LanguageItem";

const languages = [
  { code: "en", name: "English" },
  { code: "pl", name: "Polish" },
  { code: "es", name: "Spanish" },
];

const LanguageSelector: React.FC = () => {
  const currentLang = getLang();

  return (
    <div>
      <h2>Select Language:</h2>
      <ul>
        {languages.map((lang) => (
          <LanguageItem
            key={lang.code}
            lang={lang}
            isSelected={lang.code === currentLang}
          />
        ))}
      </ul>
      <p>Current language: {currentLang}</p>
    </div>
  );
};

export default LanguageSelector;
