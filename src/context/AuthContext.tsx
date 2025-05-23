import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router";

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  const login = (token: string) => {
    navigate("/");
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    navigate("/login");
    setToken(null);
    localStorage.removeItem("token");
  };

  return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
