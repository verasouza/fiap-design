import React from 'react';
import { 
  NavbarContainer, 
  NavbarBrandContainer,
  Logo,
  NavbarLinks, 
  NavLink,
  NavbarIconContainer
} from './styles';
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  logo?: string; 
  links: Array<{
    label: string;
    href: string;
  }>;
  icon?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ logo, links, icon }) => {
  const navigate = useNavigate();

  const handleIconClick = () => {
      navigate("/login", { replace: true });
  };
  
  return (
    <NavbarContainer>
      <NavbarBrandContainer>
        {logo && <Logo src={logo} />}
      </NavbarBrandContainer>
      
      <NavbarLinks>
        {links.map((link, index) => (
          <NavLink key={index} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </NavbarLinks>
      {icon && <NavbarIconContainer onClick={handleIconClick}>{icon}</NavbarIconContainer>}
    </NavbarContainer>
  );
};