/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import apiClient from "@/config/api";

const PermissionsContext = createContext();

export const PermissionsProvider = ({ children }) => {
  const [permissions, setPermissions] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.user_role === "admin") {
        setPermissions("all");
      } else if (decodedToken.user_role === "employee") {
        fetchPermissions();
      }
    }
  }, []);

  const fetchPermissions = async () => {
    try {
      const response = await apiClient.get("/user-permissions");
      setPermissions(response.data.meta.permissions);
    } catch (error) {
      console.error("Error fetching permissions:", error);
    }
  };

  return (
    <PermissionsContext.Provider value={{ permissions, setPermissions }}>
      {children}
    </PermissionsContext.Provider>
  );
};

export const usePermissions = () => useContext(PermissionsContext);
