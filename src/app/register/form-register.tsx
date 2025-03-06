"use client";
import {
  Form,
  FormField,
  FormMessageError,
  Input,
  InputIcon,
} from "@/components/Form";
import { ComponentProps, useState } from "react";
import { Eye, EyeClosed, Lock, LockKeyhole, Mail, User } from "lucide-react";
import { Button } from "@/components/Button";
import Image from "next/image";
import Google from "@/Google.svg";
import { FieldErrors, useForm } from "react-hook-form";
import { useGoogleLogin } from "@react-oauth/google";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const formSchema = z
  .object({
    email: z.string().email("Preencha o campo com um email válido"),
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string(),
    confirmPolicy: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não são iguais",
    path: ["confirmPassword"],
  })
  .refine((data) => data.confirmPolicy, {
    message: "Você deve concordar com a política de privacidade",
    path: ["confirmPolicy"],
  });
type Form = z.infer<typeof formSchema>;

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });
  console.log(errors);
  const onSubmit = (data: Form) => console.log(data);
  const login = useGoogleLogin({
    onSuccess: (response) => console.log(response),
    onError: (error) => console.error(error),
  });
  return (
    <div className="flex mx-auto h-screen flex-col justify-center items-center">
      <Form onSubmit={handleSubmit(onSubmit)} className="md:w-[400px]">
        <h1 className="text-2xl font-heading mx-auto font-semibold text-gray-50">
          Cadastrar
        </h1>
        <FormField {...register("name")}>
          <InputIcon>
            <User className="text-darklight" />
          </InputIcon>
          <Input autoComplete="new-name" name="name" placeholder="Nome" />
        </FormField>
        <FormField {...register("email")}>
          <Mail />
          <Input autoComplete="new-email" name="email" placeholder="Email" />
        </FormField>

        <FormFieldPassword
          placeholder="Crie uma senha"
          {...register("password")}
        />
        <FormFieldPassword
          placeholder="Confirme a senha"
          variantIcon="lockKeyhole"
          {...register("confirmPassword")}
        />
        <FormField className="flex flex-row justify-start items-center gap-3 border-none">
          <Input
            type="checkbox"
            {...register("confirmPolicy")}
            className="w-[10%] size-3.5"
          />{" "}
          <p>
            Eu concordo com a{" "}
            <a className="underline text-gray-100 cursor-pointer">
              política de privacidade
            </a>
          </p>
        </FormField>
        <Button name="register" type="submit">
          Cadastrar
        </Button>
        <Button
          name="registerGoogle"
          type="button"
          onClick={() => login()}
          className="flex flex-row justify-center items-center mx-auto gap-2"
        >
          <Image src={Google} className="size-4" alt="logo Google" /> Registrar
          com o Google
        </Button>
        <div className="flex mx-auto gap-1">
          Já tem uma conta?
          <a className="underline text-gray-100 cursor-pointer">Faça login</a>
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
    errors?.confirmPolicy?.message,
    errors?.confirmPassword?.message,
    errors?.password?.message,
    errors?.email?.message,
    errors?.name?.message,
  ];
  return <FormMessageError errors={errorsArray} {...props} />;
};
