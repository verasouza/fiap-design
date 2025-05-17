import styled from "styled-components";
import { colors, spacings } from '../../assets/styles';

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: ${spacings.lg} ${spacings.xl};
  background-color: ${colors.white};
  color: ${colors.primary};
  gap: ${spacings.lg};
`;

export const NavbarBrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacings.md};
`;

export const Logo = styled.img`
  height: 56px;
  width: 183px;
`;

export const NavbarBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavbarLinks = styled.div`
  display: flex;
  gap: ${spacings.lg};
  margin-left: auto;
`;

export const NavLink = styled.a`
  color: ${colors.primary};
  text-decoration: none;
  padding: ${spacings.sm} 0;
  position: relative;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const NavbarIconContainer = styled.div`
  display: flex;
  align-items: center;
    justify-content: center;
  width: 51px;
  height: 51px;
  background-color: ${colors.highlight};
  margin-left: auto; 
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

   svg {
    width: 1.5rem; 
    height: 1.5rem; 
    color: ${colors.primary}; 
  }
`;

