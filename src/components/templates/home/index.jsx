/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Search from '../../search';
import GraphViewer from '../../graphViewer';
import GraphControls from '../../controls';
import { HomeContainer, Container, SideNav } from './styles';


const Home = ({
  search,
  searchResult,
  getGraphData,
  graphData,
  config,
  updateConfig,
}) => (
  <HomeContainer>
    <Container>
      <SideNav>
        <h2>3D Graph Visualizer</h2>
        <Search
          search={search}
          searchResult={searchResult}
          getGraphData={getGraphData}
        />

      </SideNav>
      <GraphViewer graphData={graphData} config={config} />
      <GraphControls config={config} updateConfig={updateConfig} />
    </Container>
  </HomeContainer>
);

export default Home;
