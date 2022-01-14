import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { SWRConfig } from "swr";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API}/api/`,
});

const fetcher = (url) => instance.get(url).then((res) => res.data);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <App />
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
