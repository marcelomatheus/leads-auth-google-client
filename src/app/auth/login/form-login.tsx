"use client";
import {
  Form,
  FormField,
  FormMessageError,
  Input,
} from "@/components/ui/Form";
import { ComponentProps, useState } from "react";
import { Eye, EyeClosed, Lock, LockKeyhole, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Google from "@/Google.svg";
import { FieldErrors, useForm } from "react-hook-form";
import { useGoogleLogin } from "@react-oauth/google";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { userLogin } from "../_service/auth-service";
import { useAuth } from "@/app/context/Auth-Context";
import { redirect } from "next/navigation";

export const formSchema = z
  .object({
    email: z.string().email("Preencha o campo com um email válido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  })
type Form = z.infer<typeof formSchema>;

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const contextLogin = useAuth()
  const onSubmit = async (payload: Form) => {
    try {
      const userData = await userLogin(payload);
      contextLogin?.dispatch({ type: "LOGIN", payload: { token: userData.data.token } });
      redirect("/");
    }catch(error){
      console.error(error);
    }
  };
  const login = useGoogleLogin({
    onSuccess: (response) => console.log(response),
    onError: (error) => console.error(error),
  });
  return (
    <div className="flex mx-auto h-screen flex-col justify-center items-center">
      <Form onSubmit={handleSubmit(onSubmit)} className="md:w-[400px]">
        <h1 className="text-2xl font-heading mx-auto font-semibold text-gray-50">
          Login
        </h1>
        <FormField {...register("email")}>
          <Mail />
          <Input autoComplete="new-email" name="email" placeholder="Email" />
        </FormField>

        <FormFieldPassword
          placeholder="Informe sua senha"
          {...register("password")}
        />
        <Button name="register" type="submit">
          Login
        </Button>
        <Button
          name="registerGoogle"
          type="button"
          onClick={() => login()}
          className="flex flex-row justify-center items-center mx-auto gap-2"
        >
          <Image src={Google} className="size-4" alt="logo Google" /> Entrar
          com o Google
        </Button>
        <div className="flex mx-auto gap-1">
          Não tem uma conta?
          <Link href={'/auth/register'} className="underline text-gray-100 cursor-pointer">Faça o cadastro</Link>
          
        </div>
        <FormRegisterMessageError errors={errors} />
      </Form>
    </div>
  );
};

type FormFieldPasswordProps = {
  name: string;
  placeholder: string;
  variantIcon?: "lock" | "lockKeyhole";
} & ComponentProps<"input">;
const FormFieldPassword = ({
  variantIcon = "lock",
  ...props
}: FormFieldPasswordProps) => {
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <FormField>
      {variantIcon === "lock" ? <Lock /> : <LockKeyhole />}
      <Input
        autoComplete="new-password"
        type={viewPassword ? "text" : "password"}
        {...props}
      />
      <button
        type="button"
        className="p-2"
        onClick={() => setViewPassword(!viewPassword)}
      >
        {viewPassword ? <Eye /> : <EyeClosed />}
      </button>
    </FormField>
  );
};

type FormRegisterMessageErrorProps = {
  errors?: FieldErrors<Form>;
} & ComponentProps<"div">;
const FormRegisterMessageError = ({
  errors,
  ...props
}: FormRegisterMessageErrorProps) => {
  const errorsArray = [
    errors?.password?.message,
    errors?.email?.message
  ];
  return <FormMessageError errors={errorsArray} {...props} />;
};
