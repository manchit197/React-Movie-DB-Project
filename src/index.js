import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { AppProvider } from "./Components/context";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
