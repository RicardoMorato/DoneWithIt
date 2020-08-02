import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        style={styles.image}
        resizeMode='contain'
        source={require('../../assets/chair.jpg')}
      />
    </View>
  );
}
