import { Navigate, createBrowserRouter } from "react-router-dom";

// Page Components
import LoginPage from "@/features/auth/LoginPage";
import Home from "@/components/Home/Home";
import Dashboard from "@/features/dashboard/Dashboard";
import App from "@/App";
import NotFound from "@/components/NotFound";
import ProtectedRoutes from "@/features/auth/ProtectedRoutes";


export const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />
      },

      // Protected
      {
        element: <ProtectedRoutes />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            }
        ]
      },

      // Fallbacks
      {
        path: "*",
        element: <NotFound />
      }
    ],
  },
]);
