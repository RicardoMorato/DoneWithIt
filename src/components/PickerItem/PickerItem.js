import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
