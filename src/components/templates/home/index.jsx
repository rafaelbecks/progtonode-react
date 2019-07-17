/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Search from '../../search';
import GraphViewer from '../../graphViewer';
import { HomeContainer, Container } from './styles';


const Home = ({
  search, searchResult, getGraphData, graphData, artistData,
}) => {
  return (
    <HomeContainer>
      <h2>3D Graph Visualizer</h2>
      <Container>
        <Search search={search} searchResult={searchResult} getGraphData={getGraphData} />
        <GraphViewer graphData={graphData} />
      </Container>
    </HomeContainer>
  );
};

export default Home;
