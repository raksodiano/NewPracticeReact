import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { PrimerComponente } from "./components/PrimerComponente/PrimerComponente";
import { SegundoComponente } from "./components/SegundoComponente/SegundoComponente";
import { TercerComponente } from "./components/TercerComponente/TercerComponente";
import { CuartoComponente } from "./components/CuartoComponente/CuartoComponente";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <PrimerComponente />
    <SegundoComponente name="Nombre" lastName="Apellido" age={39} />
    <TercerComponente value={0} />
    <CuartoComponente />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
