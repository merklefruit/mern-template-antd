import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

// ANT DESIGN CONFIG
import { ConfigProvider } from "antd";

// LOCALES:
// Change "en_US" to your language locale
import loc from "antd/es/locale/en_US";

ReactDOM.render(
  <BrowserRouter>
    <ConfigProvider locale={loc}>
      <App />
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
