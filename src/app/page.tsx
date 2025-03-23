"use client";
import { Button } from "@/components/ui/Button";
import { useAuth } from "./_context/Auth-Context";

export default function Home() {
  const auth = useAuth();
  const logout = () => {
    auth?.dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      { auth?.token ?
        <div className="bg-dark  w-[600px]">
          <h1 className="font-bold text-3xl flex font-heading">Home</h1>
          <Button type="button" onClick={() => logout()}>
            Logout
          </Button>
        </div>
        :
        <div>Direcionando para página de login</div>
      }
    </>
  );
}
