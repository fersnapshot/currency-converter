import * as React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import store from './config/store';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';

EStyleSheet.build({
  $primaryBlue: '#4f6d7a',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#93768F',

  $white: '#ffffff',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',

  // $outline: 1,
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator />
    </AlertProvider>
  </Provider>
);
