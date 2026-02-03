'use client';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import ContainerFooter from './container-footer';


const Footer: React.FC = () => {
 
  return (
    <footer className="py-4 footer-container">
      <ContainerFooter>
        <div className="footer-content">
          <SocialIcon network="instagram" url="https://www.instagram.com/adriangustavoguidi/" className="mx-1" />
        </div>          
      </ContainerFooter>
    </footer>
  );
};

export default Footer;