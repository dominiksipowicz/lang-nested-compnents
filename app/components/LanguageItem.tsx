import React from "react";
import Link from "next/link";

interface LanguageItemProps {
  lang: { code: string; name: string };
  isSelected: boolean;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ lang, isSelected }) => {
  return (
    <li
      style={{ listStyleType: "square", color: isSelected ? "red" : "inherit" }}
    >
      {isSelected ? (
        <span>{lang.name}</span>
      ) : (
        <Link href={`/${lang.code}`} style={{ color: "inherit" }}>
          {lang.name}
        </Link>
      )}
    </li>
  );
};

export default LanguageItem;
