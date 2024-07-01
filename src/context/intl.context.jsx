import { createContext, useState } from "react";
import esMessage from "../languages/es.json"; // importar
import enMessage from "../languages/en.json";
import { IntlProvider } from "react-intl";

export const TranslationContext = createContext();

// creación de objeto que tiene todo el lenguaje, tanto inglés como español
const messageContext = {
  es: esMessage,
  en: enMessage,
};
// variable para crear nuestro contexto " TranslationProvider"
const TranslationProvider = ({ children }) => {
  const [locale, setLocale] = useState("es"); // lenguaje seleccionado por el usuario
  const [messages, setMessages] = useState(messageContext.es); // el contenido del JSON que corresponda con el lenguaje.

  const changelocale = (newLanguage) => {
    setLocale(newLanguage);
    setMessages(messageContext[newLanguage]);
  };
  return (
    <TranslationContext.Provider value={{ changelocale, locale }}>
      <IntlProvider locale={locale} messages={messages}>
        {/*  aqui vamos a meter toda la app  */}
        {children}{" "}
        {/* esto es una props diferente se llama prop children que la vamos a recibir en algun momento, como una prop hijo, porque están entre etiqueta apertura y de cierre */}
      </IntlProvider>
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
