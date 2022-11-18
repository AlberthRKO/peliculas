import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
// Import our custom CSS
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
