import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import Icon from './Icon';

type Props = {
  text: string,
  onPress: Function,
  selected?: boolean,
  checkmark?: boolean,
  visible?: boolean,
  customIcon?: React.Node,
  iconBackground?: string,
};

const ListItem = ({
  text,
  onPress,
  selected,
  checkmark,
  visible,
  customIcon,
  iconBackground,
}: Props) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.defaultProps = {
  selected: false,
  checkmark: true,
  visible: true,
  customIcon: null,
  iconBackground: '',
};

export default ListItem;
