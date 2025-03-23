'use client';
import { Button } from "@/components/ui/Button"
import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Google from "@/Google.svg";
import { server } from "@/app/_api/server";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/_context/Auth-Context";

const GoogleAuthButton = () => {
    const router = useRouter();
    const auth = useAuth(); 
    const login = useGoogleLogin({
        flow: "auth-code",
        redirect_uri: "http://localhost:3001",
        onSuccess: async (response) => {
          const {data} = await server().post("/auth/register/google-auth", {
            code: response.code,
          });
            auth?.dispatch({
                type: "LOGIN",
                payload: { token: data.token },
            });
            router.push("/");
        },
        onError: (error) => {
            console.error(error)
            return null;
        },
      });
    return (
        <Button
          name="registerGoogle"
          type="button"
          onClick={() => login()}
          className="flex flex-row justify-center items-center mx-auto gap-2"
        >
          <Image src={Google} className="size-4" alt="logo Google" /> Entrar com
          o Google
        </Button>
    )
}

export default GoogleAuthButton