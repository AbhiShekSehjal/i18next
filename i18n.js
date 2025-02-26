import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "hello and how are you!",
          language: "English",
        }
      },
      fr: {
        translation: {
          welcome: "Bonjour et comment allez-vous !",
          language: "French",
        }
      },
      hi: {
        translation: {
          welcome: "नमस्ते और कैसे हैं आप!",
          language: "Hindi",
        },
      },
    },
    lng: "en",
    fellbackLang: "en",

    interpolation: {
      escapeValue: false,
    }
  })

export default i18n;