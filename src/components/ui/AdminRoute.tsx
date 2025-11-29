import { Navigate, Outlet } from "react-router-dom";
import { useUserProfile } from "../../features/auth/useUserProfile";
import { Loader2 } from "lucide-react";

// component to ensure if user types /admin, they get redirected back to dashboard if they aren't an admin
export default function AdminRoute() {
  const { data: profile, isLoading } = useUserProfile();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" />
      </div>
    );
  }

  // Security Check: If not admin, go to dashboard
  if (profile?.role !== "admin") {
    return <Navigate to="/expenses" replace />;
  }

  return <Outlet />;
}
