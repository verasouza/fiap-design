import type { InputHTMLAttributes, ReactNode } from "react";
import { DSTypography_Label } from '../../assets/styles/typography';
import { InputContainer, InputWrapper, StyledInput, ErrorMessage, InputIcon } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  errorMessage?: string;
  icon?: ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  errorMessage,
  id,
  icon,
  ...props
}) => {
  return (
    <InputContainer hasError={!!errorMessage}>
      <DSTypography_Label as="label" htmlFor={id}>
        {label}
      </DSTypography_Label>
      
      <InputWrapper hasError={!!errorMessage}>
        {icon && <InputIcon>{icon}</InputIcon>}
        <StyledInput
          id={id}
          name={id}
          hasError={!!errorMessage}
          hasIcon={!!icon}
          {...props}
        />
      </InputWrapper>
      
      {errorMessage && (
        <ErrorMessage>
          {errorMessage}
        </ErrorMessage>
      )}
    </InputContainer>
  );
};