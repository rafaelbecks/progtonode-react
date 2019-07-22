import styled from 'styled-components';

const HomeContainer = styled.div`
    background: #282c34;
    margin: 0;
    padding: 0;
    color: #fff;
    padding: 30px;
    height: 100vh;
`;

const Container = styled.div`
    display:flex;
    width: 100%;
`;

const GraphViewContainer = styled.div`
    display: flex;
`;

const SideNav = styled.div`
    display: flex;
    width: 350px;
    flex-direction: column;
`;


export {
  HomeContainer, Container, GraphViewContainer, SideNav,
};
