import { twMerge } from "tailwind-merge";
import { ComponentProps } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;
const Button = ({ className, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "w-full bg-primary text-white rounded-xl",
        "hover:bg-gray-600 hover:cursor-pointer border border-darklight h-9",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};

export { Button };
