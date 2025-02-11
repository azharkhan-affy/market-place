import { jwtDecode } from "jwt-decode";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const decode = token && jwtDecode(token);
  const role = decode?.role;
  console;
  if (!role || allowedRoles !== role) {
    return <Navigate to="/not-found" state={{ from: location }} />;
  }
  return children;
}

export default ProtectedRoute;
