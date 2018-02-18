// @flow
import * as React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

type Props = {
  buttonText: string,
  onPress: Function,
  editable: boolean,
  defaultValue: string,
  value: string,
  keyboardType: string,
  onChangeText: Function,
};

const InputWithButton = (props: Props) => {
  const { buttonText, onPress, editable = true } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

  return (
    <View style={editable ? styles.container : [styles.container, styles.containerDisabled]}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

export default InputWithButton;
