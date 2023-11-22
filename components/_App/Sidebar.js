import React from "react";
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t } = useTranslation();
  const handleClick = (value) => {
    localStorage.setItem("selectedLanguage", value);
  };

  return (
    <>
      <div className="lang-didebar">
        <a href="/" title="Default Demo" onClick={() => handleClick("en")}>
          {t('EN')}
        </a>
        <a href="/ar" title="RTL Demo" onClick={() => handleClick("ar")}>
        {t('AR')}
        </a>
      </div>
    </>
  );
};

export default Sidebar;
