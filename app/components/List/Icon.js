import * as React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

type Props = {
  checkmark?: boolean,
  visible?: boolean,
};

const Icon = ({ checkmark, visible }: Props) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
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
};

export default Icon;
