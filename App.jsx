import React from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage  = (lng) => {
    i18n.changeLanguage (lng);
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>

      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("fr")}>French</button>
      <button onClick={() => changeLanguage("hi")}>Hindi</button>
    </div>
  )
}

export default App
