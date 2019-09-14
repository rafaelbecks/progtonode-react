import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  background: #2e353e;
  left: 20px;
  top: 20px;
`;

const Sidenav = ({ children }) => <Container>{children}</Container>;

export default Sidenav;
