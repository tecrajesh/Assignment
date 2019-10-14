
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { metaInfo } from "./constants"

it('renders without crashing', () => {
  shallow(<App metaInfo={metaInfo} />);
});
