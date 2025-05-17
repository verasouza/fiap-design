import styled from "styled-components";
import { colors, radius, spacings } from '../../assets/styles';
import { DSTypography_Body_sm, DSTypography_Body } from '../../assets/styles/typography';

export const InputContainer = styled.div<{ hasError?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacings.md};
  gap: ${spacings.sm};
`;

export const InputWrapper = styled.div<{ hasError?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.span`
  position: absolute;
  left: ${spacings.sm};
  color: ${colors.highlight};
  display: flex;
`;

export const StyledInput = styled.input<{ hasError?: boolean; hasIcon?: boolean }>`
  margin-top: 4px;
  padding: ${spacings.md};
  padding-left: ${props => props.hasIcon ? `calc(${spacings.sm} * 2 + 16px)` : spacings.sm};
  border-radius: ${radius.larger};
  border: 1px solid ${props => props.hasError ? `${colors.alerts['error-msg']}` : `${colors.highlight}`};
  font: ${DSTypography_Body};
  text-align: left;
  color: ${colors.primary};
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? `${colors.alerts['error-msg']}` : `${colors.primary}`};
    box-shadow: 0 0 0 2px ${props => props.hasError ? `${colors.alerts['error-bg']}` : `${colors.primary}`};
  }
`;

export const ErrorMessage = styled(DSTypography_Body_sm)`
  color: ${colors.alerts['error-msg']};
  margin-top: 4px;
`;