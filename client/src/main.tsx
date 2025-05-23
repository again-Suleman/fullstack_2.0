import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// RRD
import { RouterProvider } from "react-router-dom";
import { routes } from "@/routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
