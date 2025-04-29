import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const isAuthenticated = Boolean(localStorage.getItem("token"));

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  // Outlet because we are nesting other routes with RRD
  return <Outlet />;
}
