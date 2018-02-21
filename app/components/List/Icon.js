import * as React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

type Props = {
  checkmark?: boolean,
  visible?: boolean,
  iconBackground?: string,
};

const Icon = ({ checkmark, visible, iconBackground }: Props) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }
  if (iconBackground) {
    iconStyles.push({ backgroundColor: iconBackground });
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
  iconBackground: '',
};

export default Icon;
