import React from 'react';
import 'react-dat-gui/build/react-dat-gui.css';
import DatGui, {
  DatBoolean, DatColor, DatNumber, DatFolder,
} from 'react-dat-gui';

const GraphControls = ({ config, updateConfig }) => (
  <DatGui data={config} onUpdate={(data) => { updateConfig(data); }}>
    <DatNumber path="graphLevel" label="Graph Level" min={1} max={3} step={1} />
    <DatNumber path="linkWidth" label="Link Width" min={0} max={5} step={0.5} />
    <DatNumber path="linkOpacity" label="Link Opacity" min={0} max={1} step={0.1} />
    <DatNumber path="linkResolution" label="Link Resolution" min={1} max={100} step={1} />

    <DatNumber path="linkCurvature" label="Link Curvature" min={0} max={1} step={0.1} />
    <DatNumber path="linkCurveRotation" label="Link Curve Rotation" min={1} max={600} step={1} />

    <DatColor path="linkColor" label="Link color" />
    <DatBoolean path="showAlwaysLabel" label="Show text as node" />
  </DatGui>
);
export default GraphControls;
