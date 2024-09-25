import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.jsx";
import "@/index.css";
import { ThemeProvider } from "@/components/theme-provider.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
