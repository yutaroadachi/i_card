import React from 'react';
import styled from 'styled-components';
import { Heading1 } from 'ui/Typography';

const HeaderWrapper = styled.div`
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Heading1 margin="4.5rem 0 3rem">iCard</Heading1>
    </HeaderWrapper>
  );
};

export default Header;