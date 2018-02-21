import * as React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

type Props = {
  checkmark?: boolean,
  visible?: boolean,
  color?: string,
};

const Icon = ({ checkmark, visible, color }: Props) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }
  if (color) {
    iconStyles.push({ backgroundColor: color });
  }

  return (
    <View style={iconStyles}>
      {checkmark && (
        <Image
          style={styles.checkIcon}
          resizeMode="contain"
          source={require('./images/check.png')}
        />
      )}
    </View>
  );
};

Icon.defaultProps = {
  checkmark: false,
  visible: false,
  color: '',
};

export default Icon;
