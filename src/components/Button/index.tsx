import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton, IconWrapper } from "./styles";
import { DSTypography_Button } from "../../assets/styles/typography";

export type ButtonVariant = "primary" | "outlined" | "disabled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  label?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  label = "Button",
  onClick,
  icon,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={variant !== "disabled" ? onClick : undefined}
      disabled={variant === "disabled"}
      {...props}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <DSTypography_Button as="span">{label}</DSTypography_Button>
    </StyledButton>
  );
};
