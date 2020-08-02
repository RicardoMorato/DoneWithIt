import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';

import styles from './styles';
import { BasicButton } from '../../components/BasicButton';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={3}
      source={require('../../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo-red.png')}
          style={styles.logoImage}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <BasicButton
          title='Login'
          onPress={() => {}}
        />
        <BasicButton
          title='Register'
          color='secondaryColor'
          onPress={() => {}}
        />
      </View>
    </ImageBackground>
  );
}
