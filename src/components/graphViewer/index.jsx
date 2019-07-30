import React, { useState, Fragment } from 'react';
import { ForceGraph3D } from 'react-force-graph';
import SpriteText from 'three-spritetext';
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';
import { saveAs } from 'file-saver';

import { GraphViewContainer } from './styles';

function saveArrayBuffer(buffer, filename) {
  saveAs(new Blob([buffer], { type: 'application/octet-stream' }), filename);
}

function saveString(text, filename) {
  saveAs(new Blob([text], { type: 'text/plain' }), filename);
}

const exportModel = (graphViewer) => {
  const exporter = new GLTFExporter();
  exporter.parse(graphViewer.state.comp.scene(), (result) => {
    if (result instanceof ArrayBuffer) {
      saveArrayBuffer(result, 'scene.glb');
    } else {
      const output = JSON.stringify(result, null, 2);
      console.log(output);
      saveString(output, 'scene.gltf');
    }
  });
};

const GraphViewer = ({ graphData, config }) => {
  let fg;
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
    <Fragment>
      <GraphViewContainer>
        {graphData && (
        <ForceGraph3D
          ref={(el) => {
            fg = el;
            console.log(el);
          }}
          width={window.innerWidth - 410}
          graphData={graphData}
          nodeLabel="label"
          nodeAutoColorBy="id"
          linkResolution={config.linkResolution}
          linkCurvature={config.linkCurvature}
          linkCurveRotation={config.linkCurveRotation}
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

      <button onClick={() => {
        console.log(fg);
        exportModel(fg);
      }}
      >
Exportar

      </button>

    </Fragment>
  );
};

export default GraphViewer;
