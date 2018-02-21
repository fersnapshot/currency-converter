import * as React from 'react';
import { Text } from 'react-native';
import moment from 'moment'; // eslint-disable-line

import styles from './styles';

type Props = {
  date: Date,
  base: string,
  quote: string,
  conversionRate: number,
};

const LastConverted = ({
  date, base, quote, conversionRate,
}: Props) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as of {moment(date).format('LL')}
  </Text>
);

export default LastConverted;
