import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./translations/es.json";
import en from "./translations/en.json";
import it from "./translations/it.json";
import de from "./translations/de.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                translation: es
            },
            en: {
                translation: en
            },
            it: {
                translation: it
            },
            de: {
                translation: de
            }
        },

        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;