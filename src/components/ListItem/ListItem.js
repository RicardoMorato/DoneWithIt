import React from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import styles from './styles';
import colors from '../../global/colors';

export default function ListItem({ image, title, subTitle, IconComponent, onPress, renderRightActions, style, textStyle }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.lightGrey}
      >
        <View style={[styles.container, style]}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}

          <View style={styles.detailsContainer}>
            <Text style={[styles.title, textStyle]}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
