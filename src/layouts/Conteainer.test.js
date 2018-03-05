import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

describe('describes your test here!', () => {
  test('expect ture to be true', () => {
    const wrapper = shallow(<Container>test</Container>);
    expect(wrapper).toHaveLength(1);
  });
});
