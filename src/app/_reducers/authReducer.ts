export type AuthData = {
  token: null | string ;
};
export type AuthAction =
  | {
      type: "CHECK_LOGIN";
      payload: { token: string };
    }
  | {
      type: "LOGIN";
      payload: { token: string };
    }
  | { type: "LOGOUT" };

export const AuthReducer = (state: AuthData, action: AuthAction): AuthData => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
      };
    default:
      return state;
  }
};
