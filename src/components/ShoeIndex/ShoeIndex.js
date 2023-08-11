import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS_IN_REMS, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <ResponsiveSelect
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </ResponsiveSelect>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <ResponsiveLeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <ResponsiveSpacer size={42} />
        <ResponsiveShoeSidebar />
      </ResponsiveLeftColumn>
    </Wrapper>
  );
};

const ResponsiveShoeSidebar = styled(ShoeSidebar)`
  @media (max-width: ${BREAKPOINTS_IN_REMS.tabletMax}rem) {
    display: none;
  }
`;

const ResponsiveSpacer = styled(Spacer)`
  @media (max-width: ${BREAKPOINTS_IN_REMS.tabletMax}rem) {
    display: none;
  }
`;

const ResponsiveSelect = styled(Select)`
  @media (max-width: ${BREAKPOINTS_IN_REMS.phoneMax}rem) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  column-gap: 32px;

  @media (max-width: ${BREAKPOINTS_IN_REMS.tabletMax}rem) {
    flex-direction: column-reverse;
    row-gap: 0.5rem;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
`;

const ResponsiveLeftColumn = styled(LeftColumn)`
  @media (max-width: ${BREAKPOINTS_IN_REMS.tabletMax}rem) {
    flex-basis: revert;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
