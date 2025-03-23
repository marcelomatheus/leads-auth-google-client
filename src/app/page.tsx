"use client";
import { useAuth } from "./context/Auth-Context";

export default function Home() {
  const contextAuth = useAuth();
  return (
    <div className="bg-dark  w-[600px]">
      <h1 className="font-bold text-3xl flex font-heading">Home</h1>
      <button onClick={() => contextAuth?.dispatch({ type: "LOGOUT" })}>
        Logout
      </button>
    </div>
  );
}
