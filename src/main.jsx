import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./scss/index.css";
import TranslationProvider from "./context/intl.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </React.StrictMode>
);
