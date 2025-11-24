// import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  //   const { user, loading } = useAuth();
  const user = true;
  const loading = false;

  // 1. Show nothing (or a spinner) while checking authentication status
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  // 2. If not authenticated, redirect to Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 3. If authenticated, render the child routes
  return <Outlet />;
}
