import classNames from "classnames";
import { ReactNode } from "react";

type ButtonProps = {
  size?: "default" | "compact";
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  onSurface?: "light" | "dark";
  state?: "disabled" | "active" | "hover" | "default";
  hasIcon?: boolean;
  children?: ReactNode;
  onClick?: () => void;
};

export const Button = ({
  children,
  size = "default",
  variant = "primary",
  onSurface = "light",
  state = "default",
  hasIcon = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "button",
        `button-${variant}`,
        `button-size-${size}`,
        onSurface !== "light" && `button-${variant}-${onSurface}`
      )}
      {...props}
    >
      {children}
    </button>
  );
};
