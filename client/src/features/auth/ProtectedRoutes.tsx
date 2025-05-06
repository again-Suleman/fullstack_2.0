import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoutes() {
  const location = useLocation()
  const isAuthenticated = Boolean(localStorage.getItem("token"));

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  // Outlet because we are nesting other routes with RRD
  return <Outlet />;
}
