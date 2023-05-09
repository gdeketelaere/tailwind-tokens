import { ReactNode } from "react";

type ButtonProps = {
  size?: "default" | "compact";
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  background?: "light" | "dark";
  state?: "disabled" | "active" | "hover" | "default";
  hasIcon?: boolean;
  children?: ReactNode;
  onClick?: () => void;
};

export const Button = ({
  children,
  size = "default",
  variant = "primary",
  background = "light",
  state = "default",
  hasIcon = false,
  ...props
}: ButtonProps) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};
