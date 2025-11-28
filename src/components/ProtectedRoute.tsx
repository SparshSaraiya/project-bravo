import { useAuth } from "../features/auth/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useOrganization } from "../features/admin/useAdmin"; // We need to check if they have an org

export default function ProtectedRoute() {
  const { user, loading: authLoading } = useAuth();
  const { data: org, isLoading: orgLoading } = useOrganization(); // Check org status
  const location = useLocation();

  if (authLoading || orgLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  // 1. Not Logged In -> Go to Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Logged In BUT No Organization -> Go to Onboarding
  // (Skip this check if we are ALREADY on the onboarding page to prevent loops)
  if (!org?.id && location.pathname !== "/onboarding") {
    return <Navigate to="/onboarding" replace />;
  }

  // 3. Logged In AND Has Organization -> Don't let them see Onboarding again
  if (org?.id && location.pathname === "/onboarding") {
    return <Navigate to="/expenses" replace />;
  }

  return <Outlet />;
}
