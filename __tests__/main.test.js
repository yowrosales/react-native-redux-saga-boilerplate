import React from 'react';
import { Root } from "native-base";
import { shallow, mount, render, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });

describe('<Root />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Root />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
