import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';

describe('App Tests', () => {
  it('should find Header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').exists()).toBe(true);
  });
});
