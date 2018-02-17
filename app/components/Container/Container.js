// @flow
import * as React from 'react';
import { View } from 'react-native';

import styles from './styles';

type Props = {
  children: React.ReactNode,
};

const Container = ({ children }: Props) => <View style={styles.container}>{children}</View>;

export default Container;
