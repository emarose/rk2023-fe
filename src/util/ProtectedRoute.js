import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.values(user)[0] === null) {
      return navigate("/");
    }
  }, []);

  return children;
};
