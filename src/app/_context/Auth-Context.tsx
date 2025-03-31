"use client";
import React, {
  createContext,
  useEffect,
  useContext,
  Dispatch,
  useReducer,
} from "react";
import { AuthAction, authReducer } from "../_reducers/auth-reducer";
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
  const [token, dispatch] = useReducer(authReducer, { token: null });

  const path = usePathname();

  const router = useRouter();

  useEffect(() => {
    if (!token.token) {
      const getToken = localStorage.getItem("token");
      if (getToken !== 'undefined' && getToken !== null) {
        dispatch({ type: "LOGIN", payload: { token: getToken } });
      } else if (path !== "/auth/login" && path !== "/auth/register") {
        setTimeout(() => {
          router.push("/auth/login");
        }, 3000);
        
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
