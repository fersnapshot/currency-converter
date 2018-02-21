import * as React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

type Props = {
  buttonText: string,
  onPress: Function,
  editable?: boolean,
  value?: string,
  keyboardType?: string,
  onChangeText?: Function,
};

const InputWithButton = (props: Props) => {
  const { buttonText, onPress, editable } = props;

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

InputWithButton.defaultProps = {
  editable: true,
  value: '',
  keyboardType: 'default',
  onChangeText: () => {},
};

export default InputWithButton;
