import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import User from '../../../pages/Users/User'
import { mount } from '../../setup/test-setup'

const mockStore = configureStore();
// const mockDispatchfn = jest.fn(() => new Promise(resolve => resolve('')));
const mockDispatchfn = jest.fn();

describe('<User />', () => {
  let wrapper: any;

  const props: any = {
    handleSubmit: jest.fn(),
  };

  it('defines the component', () => {
    wrapper = mount(
      <Provider store={mockStore()}>
        <User {...props} dispatch={mockDispatchfn} />
      </Provider>,
    );
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });

  it('renders form component', () => {
    expect(wrapper.find('[form="user"]').first()).toHaveLength(1);
  });
});