import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../utils/idb.jsx";

export default function PrivateRoute() {
  // const { user, loading } = useAuth();

  // While loading, show spinner or loader
  // if (loading) return <div className="text-center p-10">Loading...</div>;


  // Regular auth check
  // return user ? <Outlet /> : <Navigate to="/login" />;
  return <Outlet />;
}
