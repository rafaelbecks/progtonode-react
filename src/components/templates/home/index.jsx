/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { ForceGraph3D } from 'react-force-graph';
import {
  HomeContainer, Container, GraphViewContainer, SearchContainer, SearchBar,
} from './styles';

const Home = ({
  search, searchResult, getGraphData, graphData,
}) => {
  const input = React.createRef();
  const fg = React.createRef();

  const handleClick = (node) => {
    const distance = 40;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
    fg.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
      node,
      3000,
    );
  };

  return (
    <HomeContainer>
      <h2>3D Graph Visualizer</h2>
      <Container>
        <SearchContainer>
          <label>Busca un artista</label>
          <SearchBar>
            <input name="query" type="text" ref={input} />
            <button
              type="button"
              onClick={() => {
                search(input.current.value);
              }}
            >
              {'Buscar'}
            </button>
          </SearchBar>

          <label>Resultados</label>
          <ul>
            {searchResult.map(({ title, id }) => (
              <li
                onClick={() => {
                  getGraphData(id, 1);
                }}
              >
                {title}
              </li>
            ))}
          </ul>

        </SearchContainer>

        <GraphViewContainer>
          {graphData && (
            <ForceGraph3D
              ref={fg}
              graphData={graphData}
              nodeLabel="label"
              nodeAutoColorBy="id"
              linkAutoColorBy="id"
              onNodeClick={(ref) => { handleClick(ref); }}
            />
          )}
        </GraphViewContainer>

      </Container>

    </HomeContainer>
  );
};
export default Home;
