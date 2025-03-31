"use client";
import { Button } from "@/components/ui/Button";
import { useAuth } from "./_context/Auth-Context";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function Home() {
  const auth = useAuth();
  const logout = () => {
    auth?.dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      {auth?.token ? (
        <div className="bg-dark w-full h-screen flex flex-col items-center justify-center">
          <div className="w-[600px] h-[400px] bg-white p-5 rounded-lg flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl flex font-heading">Home</h1>
          <Button type="button" className="text-black" onClick={() => logout()}>
            Logout
          </Button>
          </div>
          
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen w-full">
          <DotLottieReact
            src="https://lottie.host/8ba0afa3-daea-4c28-bd39-8dbce4de9c5a/pz9zvfY8s0.lottie"
            loop
            autoplay
            className="w-[500px]"
          />
        </div>
      )}
    </>
  );
}
