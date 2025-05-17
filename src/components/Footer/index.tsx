import React from 'react';
import { FooterContainer, FooterContent, FooterCopyright, Logo } from './styles';

interface FooterProps {
  brandName: string;
  copyrightText?: string;
  logo?: string;
}

export const Footer: React.FC<FooterProps> = ({ 
  brandName,
  logo,
  copyrightText = `©${new Date().getFullYear()} ${brandName}. All rights reserved.`
}) => {
  return (
    <FooterContainer>
      <FooterContent>
        {logo && <Logo src={logo} />}
        <FooterCopyright>{copyrightText}</FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};