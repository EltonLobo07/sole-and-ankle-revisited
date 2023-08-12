import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS_IN_REMS, COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon/Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <ResponsiveSuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <ResponsiveSide />
        <HeaderNavIconWrapper>
          <Icon id = "shopping-bag" />
          <Icon id = "search" />
          <IconButton
            onClick = {() => setShowMobileMenu(true)}
          >
            <Icon id = "menu" />
          </IconButton>
        </HeaderNavIconWrapper>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const IconButton = styled.button`
  background-color: transparent;
  border: none;
`;

const ResponsiveSuperHeader = styled(SuperHeader)`
  @media (max-width: ${BREAKPOINTS_IN_REMS.tabletMax}rem) {
    & > * {
      display: none;
    }
    height: 4px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const ResponsiveSide = styled(Side)`
  @media (max-width: ${BREAKPOINTS_IN_REMS.tabletMax}rem) {
    display: none;
  }
`;

const HeaderNavIconWrapper = styled.nav`
  display: none;
  
  @media (max-width: ${BREAKPOINTS_IN_REMS.tabletMax}rem) {
    display: flex;
    column-gap: 16px;
    // Visual centering
    position: relative;
    transform: translateY(10%);
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8.2vw - 3.25rem, 3rem); // 48px
  margin: 0px 48px;

  @media (max-width: ${BREAKPOINTS_IN_REMS.tabletMax}rem) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
