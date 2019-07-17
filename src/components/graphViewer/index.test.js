import React from 'react';
import { shallow, mount } from 'enzyme';
import GraphViewer from './index';
import graphMockup from './graphMockup';

describe('Graph component test with Enzyme', () => {
  it('renders without crashing without props', () => {
    shallow(<GraphViewer />);
  });

  it('renders without crashing with graph data array', () => {
    shallow(<GraphViewer graph={graphMockup} />);
  });

  it('render canvas correctly', () => {
    const graphComponent = mount(<GraphViewer graph={graphMockup} />);
    setTimeout(() => {
      expect(graphComponent.exists('canvas')).toEqual(true);
      done();
    }, 500);
  });
});
