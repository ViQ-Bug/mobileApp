import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/react";
import { viVN } from "@clerk/localizations";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider localization={viVN}>
      <html lang="vi">
        <body>
          <App />
        </body>
      </html>
    </ClerkProvider>
  </StrictMode>,
);
