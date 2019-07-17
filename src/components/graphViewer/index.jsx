import React from 'react';
import { ForceGraph3D } from 'react-force-graph';
import SpriteText from 'three-spritetext';
import { GraphViewContainer } from './styles';

const GraphViewer = ({ graphData }) => {
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
    <GraphViewContainer>
      {graphData && (
        <ForceGraph3D
          ref={fg}
          graphData={graphData}
          nodeLabel="label"
          nodeAutoColorBy="id"
          linkWidth={0.5}
          onNodeHover={() => ''}
          linkDirectionalParticles={4}
          linkOpacity={1}
          linkColor="#fff"
          onNodeClick={(ref) => { handleClick(ref); }}
          nodeThreeObjectExtend
          nodeThreeObject={(node) => {    
            const sprite = new SpriteText(node.label);
            sprite.color = node.color;
            sprite.textHeight = 5;
          }}
        />
      )}
    </GraphViewContainer>
  );
};

export default GraphViewer;
