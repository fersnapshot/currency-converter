// @flow
import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import Icon from './Icon';

type Props = {
  text: string,
  onPress: Function,
  selected: boolean,
  checkmark: boolean,
  visible: boolean,
};

const ListItem = ({
  text, onPress, selected = false, checkmark = true, visible = true,
}: Props) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
    </View>
  </TouchableHighlight>
);

export default ListItem;
