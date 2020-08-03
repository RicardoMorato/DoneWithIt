import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import colors from '../../global/colors';

export default function AppPicker({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon &&
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.mediumGrey}
          style={styles.icon}
        />
      }

    <Text style={styles.text}>{placeholder}</Text>

    <MaterialCommunityIcons
      name='chevron-down'
      size={20}
      color={colors.mediumGrey}
    />
    </View>
  );
}
