import React from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import colors from '../../global/colors';

export default function ListItem({ image, title, subTitle, onPress }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.lightGrey}
    >
      <View style={styles.container}>
        <Image source={image} style={styles.image} />

        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
