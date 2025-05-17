import styled from "styled-components";
import { colors, DSTypography_H3, DSTypography_Body, radius, spacings } from '../../assets/styles';
import { CardVariant } from ".";


export const CardIconWrapper = styled.div`
  margin-bottom: ${spacings.md};
  color: ${colors.primary};
  font-size: 1.5rem;

  svg {
  width: 30px;
  height: 30px;
  }
`;

export const CardHeader = styled(DSTypography_H3).attrs({ as: 'h3' })`
  margin-bottom: ${spacings.sm};
  color: ${colors.primary};
`;

export const CardContent = styled(DSTypography_Body)`
  color: ${colors.primary};
`;

export const StyledCard = styled.div<{variant: CardVariant }>`
  display: flex;
  flex-direction: column;
  padding: ${spacings.lg};
  border-radius: ${radius.larger};
  background-color: ${colors.gray[100]};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  
  /* Estilos específicos para cada variante */
  ${props => {
    switch (props.variant) {
      case 'default':
        return `
          background-color: ${colors.gray[100]};
          color: ${colors.primary};
          border: 1px solid ${colors.highlight};
          &:hover{
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transform: translate3D(0,-1px,0) scale(1.03);
          }
        `;
      case 'secondary':
        return `
          background-color: ${colors.primary};
          color: ${colors.highlight};
          border: 1px solid ${colors.highlight};

        `;
      case 'disabled':
        return `
          background-color: ${colors.gray[300]};
          color: ${colors.white};
        `;
    }
  }}
`;