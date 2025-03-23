"use client";
import React, {
  createContext,
  useEffect,
  useContext,
  Dispatch,
  useReducer,
} from "react";
import { AuthAction, AuthReducer } from "../_reducers/authReducer";
import { usePathname, useRouter } from "next/navigation";

export const AuthContext = createContext<{
  token: null | string;
  dispatch: Dispatch<AuthAction>;
} | null>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, dispatch] = useReducer(AuthReducer, { token: null });
  const path = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (!token.token) {
      const getToken = localStorage.getItem("token");
      if (getToken) {
        dispatch({ type: "LOGIN", payload: { token: getToken } });
      } else if (path !== "/auth/login" && path !== "/auth/register") {
        router.push("/auth/login");
      }
    }
  }, [token.token, path, router]);  
  return (
    <AuthContext.Provider value={{ token: token.token, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
