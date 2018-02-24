import * as React from 'react';
import { View } from 'react-native';

import styles from './styles';

type Props = {
  children: React.Node,
  backgroundColor?: string,
};

const Container = ({ children, backgroundColor }: Props) => {
  const containerStyles = [styles.container];
  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }

  return <View style={containerStyles}>{children}</View>;
};

export default Container;
