/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Search from '../../search';
import GraphViewer from '../../graphViewer';
import GraphControls from '../../controls';
import { HomeContainer } from './styles';
import { Title, Subtitle, Paragraph } from '../../elements/typography';
import SideNav from '../../sidenav';

const Home = ({
  search, searchResult, getGraphData, graphData, config, updateConfig,
}) => (
  <HomeContainer>
    <GraphViewer graphData={graphData} config={config} />
    <SideNav>
      <Title>3D Graph Visualizer</Title>
      <Subtitle>Example subtitle</Subtitle>
      <Paragraph>Example paragraph</Paragraph>
      <Search search={search} searchResult={searchResult} getGraphData={getGraphData} />
    </SideNav>
    <GraphControls config={config} updateConfig={updateConfig} />
  </HomeContainer>
);

export default Home;
