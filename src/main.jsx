import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./Root.jsx";

const bootSplash = document.getElementById("boot-splash");
const hideBootSplash = () => {
  if (!bootSplash || bootSplash.dataset.hidden === "1") return;
  bootSplash.dataset.hidden = "1";
  bootSplash.classList.add("boot-hide");
  window.setTimeout(() => bootSplash.remove(), 420);
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);

// Hide static preload screen after React mount starts rendering.
requestAnimationFrame(() => requestAnimationFrame(hideBootSplash));
window.setTimeout(hideBootSplash, 1800);
