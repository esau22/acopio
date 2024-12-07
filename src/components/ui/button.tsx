import { cn } from "@/utils/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ children, className, disabled, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "bg-primary text-base px-4 py-2 text-white hover:bg-primary/50 duration-300 ease-out rounded-full font-semibold",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
