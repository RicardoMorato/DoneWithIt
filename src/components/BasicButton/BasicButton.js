import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function BasicButton({ title, color = 'primaryColor', onPress, }) {
  return (
    <TouchableOpacity style={[styles.button, styles[color]]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
