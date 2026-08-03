import React, { useState } from "react";
import Home from "./pages/Home";
import { LoginScreen } from "./components/features/LoginScreen";

export default function App() {
  // Auth state initialized from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem("app_auth_token") === "true";
  });

  const handleLogin = async (password: string) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (response.ok) {
        setIsAuthenticated(true);
        sessionStorage.setItem("app_auth_token", "true");
        return true;
      }
      return false;
    } catch (e) {
      console.error("Login error:", e);
      return false;
    }
  };

  return (
    <>{!isAuthenticated ? <LoginScreen onLogin={handleLogin} /> : <Home />}</>
  );
}
