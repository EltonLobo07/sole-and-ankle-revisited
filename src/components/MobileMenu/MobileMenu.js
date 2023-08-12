/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  const isActive = path => {
    if (path.length > document.URL) {
      return false;
    }
    for (let i = 0; i < path.length; i += 1) {
      if (path[path.length - 1 - i] !== document.URL[document.URL.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  return (
    <Wrapper>
      <ContentContainer>
        <DismissButton 
          onClick = {onDismiss}
        >
          <VisuallyHidden>
            Dismiss menu
          </VisuallyHidden>
          <Icon 
            id = "close"
            size = {24}
          />
        </DismissButton>
        <Hungry />
        <Nav>
          <a href="/sale" className = {isActive("sale") ? "active-link" : ""}>Sale</a>
          <a href="/new" className = {isActive("new") ? "active-link" : ""}>New&nbsp;Releases</a>
          <a href="/men" className = {isActive("men") ? "active-link" : ""}>Men</a>
          <a href="/women" className = {isActive("women") ? "active-link" : ""}>Women</a>
          <a href="/kids" className = {isActive("kids") ? "active-link" : ""}>Kids</a>
          <a href="/collections" className = {isActive("collections") ? "active-link" : ""}>Collections</a>
        </Nav>
        <Hungry />
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </ContentContainer>
    </Wrapper>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: ${22 / 16}rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${18 / 16}rem;

  & a {
    text-decoration: none;
    color: ${COLORS.gray[900]};
  }

  & a.active-link {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  column-gap: ${14 / 16}rem;

  & a {
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-weight: 500;
    font-size: ${14 / 16}rem;
  }
`;

const Hungry = styled.div`
  flex-grow: 1;
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: hsla(220, 5%, 40%, 0.8);
`;

const ContentContainer = styled(DialogContent)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: ${COLORS.white};
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const DismissButton = styled.button`
  position: absolute;
  top: 26px;
  right: 16px;
  background-color: transparent;
  border: none;
`;

export default MobileMenu;
