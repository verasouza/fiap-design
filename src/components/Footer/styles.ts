import styled from "styled-components";
import { colors, spacings } from '../../assets/styles';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: ${spacings.xl};
  background-color: ${colors.secondary};
  color: white;

  @media (max-width: 768px) {
    padding: ${spacings.md};
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  gap: ${spacings.md};

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

export const Logo = styled.img`
  height: 56px;
  width: 183px;
`;

export const FooterCopyright = styled.div`
  font-size: 0.875rem;
  color: ${colors.highlight};
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: ${spacings.sm};
  }
`;