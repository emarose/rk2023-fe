import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    {
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
    } || {}
  );

  function login({ username, password }) {
    setUser({ username: username, password: password });
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }

  function logout() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
