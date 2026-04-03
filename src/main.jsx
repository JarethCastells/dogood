import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./Root.jsx";

const bootSplash = document.getElementById("boot-splash");
const bootStart = Date.now();
const hideBootSplash = () => {
  if (!bootSplash || bootSplash.dataset.hidden === "1") return;
  const elapsed = Date.now() - bootStart;
  if (elapsed < 600) {
    window.setTimeout(hideBootSplash, 600 - elapsed);
    return;
  }
  bootSplash.dataset.hidden = "1";
  bootSplash.classList.add("boot-hide");
  window.setTimeout(() => bootSplash.remove(), 420);
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);

// Hide static preload screen only when app is ready.
window.addEventListener("dogood:app-ready", hideBootSplash, { once: true });
window.addEventListener("load", () => window.setTimeout(hideBootSplash, 120), { once: true });
window.setTimeout(hideBootSplash, 8000);
