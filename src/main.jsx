import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Elements from "./Elements.jsx";
import AuthState from "./contextapi/authcontext/AuthState.jsx";
import ListState from "./contextapi/listcontext/ListState.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthState>
      <ListState>
        <Elements />
        <ToastContainer />
      
      </ListState>
    </AuthState>
   
  </StrictMode>
);
