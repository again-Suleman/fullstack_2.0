import { createBrowserRouter } from "react-router-dom";

// Page Components
import App from "@/App";
import LoginPage from "@/features/auth/LoginPage";
import Home from "@/components/Home/Home";
import NotFound from "@/components/NotFound";
import Posts from "@/features/posts/Posts";
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
        element: <LoginPage />,
      },

      // Protected Routes to test
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/post",
            element: <Posts />,
          },
        ],
      },

      // Fallback URL
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
