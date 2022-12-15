/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(() => resolve(true), ms));

it('renders correctly', async () => {
  const component = renderer.create(<App />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  await sleep(10);
});
