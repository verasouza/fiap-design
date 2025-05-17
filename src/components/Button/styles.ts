
import styled from 'styled-components';
import { ButtonVariant } from '.';
import { colors, spacings, radius } from '../../assets/styles';

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacings.sm} ${spacings.md};
  border-radius: ${radius.larger};
  transition: all 0.2s ease;
  cursor: ${props => props.variant === 'disabled' ? 'not-allowed' : 'pointer'};
  
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background-color: ${colors.primary};
          color: ${colors.white};
          border: none;
          &:hover {
            background-color: ${colors.secondary};
          }
        `;
      case 'outlined':
        return `
          background-color: ${colors.white};
          color: ${colors.primary};
          border: 1px solid ${colors.primary};
          &:hover {
            background-color: ${colors.primary};
            color: ${colors.white};
          }
        `;
      case 'disabled':
        return `
          background-color: ${colors.gray[300]};
          color: ${colors.white};
          border: none;
        `;
    }
  }}
`;

export const IconWrapper = styled.span`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;