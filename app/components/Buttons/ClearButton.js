import * as React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';

import styles from './styles';

type Props = {
  onPress: Function,
  text: string,
};

const ClearButton = ({ onPress, text }: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default ClearButton;
