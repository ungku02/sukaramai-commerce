import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-right"
      // toastOptions={{
      //   duration: 3000,

      //   style: {
      //     background: "rgba(114,17,17,0.85)",
      //     color: "#F0E5D1",
      //     border: "1px solid rgba(240,229,209,0.15)",
      //     backdropFilter: "blur(20px)",
      //     borderRadius: "18px",
      //     padding: "14px 18px",
      //   },

      //   success: {
      //     iconTheme: {
      //       primary: "#F0E5D1",
      //       secondary: "#721111",
      //     },
      //   },

      //   error: {
      //     iconTheme: {
      //       primary: "#ef4444",
      //       secondary: "#ffffff",
      //     },
      //   },
      // }}
    />
  </StrictMode>,
);
