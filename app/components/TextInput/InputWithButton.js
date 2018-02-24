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
  textColor?: string,
};

const InputWithButton = (props: Props) => {
  const {
    buttonText, onPress, editable, textColor,
  } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);
  const buttonTextStyle = [styles.buttonText];
  if (textColor) {
    buttonTextStyle.push({ color: textColor });
  }

  return (
    <View style={editable ? styles.container : [styles.container, styles.containerDisabled]}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={buttonTextStyle}>{buttonText}</Text>
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
