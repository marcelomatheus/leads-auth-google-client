import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


type FormProps = {
  children: React.ReactNode;
} & ComponentProps<"form">;
const Form = ({ className, ...props }: FormProps) => {
  return (
    <form
      autoComplete="false"
      className={twMerge(
        "flex flex-col w-full p-5 mx-auto border border-darklight rounded-xl gap-3 justify-center items-start",
        className
      )}
      {...props}
    />
  );
};

type InputProps = {
  name: string;
  placeholder?: string;
} & ComponentProps<"input">;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      type="text"
      className={twMerge("w-full outline-0 h-9 text-darklight", className)}
      {...props}
    />
  );
};

type FormFieldProps = { children: React.ReactNode } & ComponentProps<"span">;
const FormField = ({ className, ...props }: FormFieldProps) => {
  return (
    <span
      className={twMerge(
        "flex flex-row w-full mx-auto items-center text-darklight justify-center border border-darklight pl-2 gap-2 rounded-xl",
        className
      )}
      {...props}
    />
  );
};

type FormMessageErrorProps = {
  props?: React.ReactNode;
  errors: (string | undefined)[];
} & ComponentProps<"div">;
const FormMessageError = ({ className, errors, ...props }: FormMessageErrorProps) => {
  return (
    <div
      className={twMerge(
        "text-red-500 text-sm mx-auto flex flex-col items-center",
        className
      )}
      {...props}
    >
      {errors && errors.map((err) => {
        return err ? <p key={err}>{err}</p> : null;
      })}
    </div>
  );
};

type InputIconProps = ComponentProps<"span">;
const InputIcon = ({ className, ...props }: InputIconProps) => {
  return <span className={twMerge("text-gray-400", className)} {...props} />;
};

export { Form, Input, FormField, FormMessageError, InputIcon };
