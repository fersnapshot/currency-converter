// @flow
import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

type Props = {
  onPress: Function,
};

const Header = ({ onPress }: Props) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image resizeMode="contain" style={styles.icon} source={require('./images/gear.png')} />
    </TouchableOpacity>
  </View>
);

export default Header;
