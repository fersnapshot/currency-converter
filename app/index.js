import * as React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Themes from './screens/Themes';

EStyleSheet.build({
  $primaryBlue: '#4f6d7a',

  $white: '#ffffff',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',

  // $outline: 1,
});

export default () => <Themes />;
