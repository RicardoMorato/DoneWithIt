import React from 'react';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import colors from '../../global/colors';

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.mediumGrey} style={styles.icon} />}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}
