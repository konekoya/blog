import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

describe('<Container />', () => {
  test('renders self', () => {
    const children = 'test';
    const wrapper = shallow(<Container>{children}</Container>);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.props().children).toBe(children);
  });
});
