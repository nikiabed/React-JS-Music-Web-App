import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { ModalProvider } from "./contexts/Modal";
import { AuthProvider } from "./contexts/Auth";
import "./assest/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ModalProvider>
  </React.StrictMode>
);
