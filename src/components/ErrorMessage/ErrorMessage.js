import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default function ErrorMessage({ err, visible }) {
  if (!visible || !err) return null;

  return (
    <Text style={styles.error}>{err}</Text>
  );
}
