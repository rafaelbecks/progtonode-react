import React, { useState } from 'react';
import { ForceGraph3D } from 'react-force-graph';
import SpriteText from 'three-spritetext';
import { GraphViewContainer } from './styles';

const GraphViewer = ({ graphData, config }) => {
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
          width={window.innerWidth - 410}
          graphData={graphData}
          nodeLabel="label"
          nodeAutoColorBy="id"
          linkWidth={config.linkWidth}
          onNodeHover={() => ''}
          linkDirectionalParticles={config.linkDirectionParticles}
          linkOpacity={config.linkOpacity}
          linkColor={config.linkColor}
          onNodeClick={(ref) => { handleClick(ref); }}
          nodeThreeObjectExtend
          nodeThreeObject={(node) => {
            if (config.showAlwaysLabel) {
              const sprite = new SpriteText(node.label);
              sprite.color = node.color;
              sprite.textHeight = 5;
              return sprite;
            }
          }}
        />
      )}
    </GraphViewContainer>
  );
};

export default GraphViewer;
