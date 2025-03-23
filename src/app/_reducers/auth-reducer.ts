export type AuthData = {
  token: null | string ;
};
export type AuthAction =
  | {
      type: "LOGIN";
      payload: { token: string };
    }
  | { type: "LOGOUT" };

export const authReducer = (state: AuthData, action: AuthAction): AuthData => {
  switch (action.type) {
    case "LOGIN":
      if(action.payload.token) localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
