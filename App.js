import React from 'react';

import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen/ViewImageScreen';
import { View } from 'react-native';
import { Card } from './src/components/Card';

export default function App() {
  return (
    <View style={{
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100,
    }}>
      <Card
        title='Red jacket for sale'
        subTitle='$100'
        image={require('./src/assets/jacket.jpg')}
      />
    </View>
  );
}
