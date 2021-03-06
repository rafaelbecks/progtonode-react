import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Search from './index';
import resultsMockup from './resultsMockup';

describe('Search component test with Enzyme', () => {
  it('renders without crashing without props', () => {
    shallow(<Search />);
  });

  it('renders without crashing with search data array', () => {
    shallow(<Search searchResult={resultsMockup} />);
  });

  it('renders and match snapshot', () => {
    const list = renderer
      .create(<Search searchResult={resultsMockup} />)
      .toJSON();
    expect(list).toMatchSnapshot();
  });

  it('render list correctly', () => {
    const searchComponent = mount(<Search searchResult={resultsMockup} />);

    expect(searchComponent.find('li')).toHaveLength(4);
    expect(
      searchComponent
        .find('li')
        .first()
        .text(),
    ).toEqual(resultsMockup[0].title);
  });
});


// search, searchResult, getGraphData
