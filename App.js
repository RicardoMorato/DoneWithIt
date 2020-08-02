import React from 'react';

import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen/ViewImageScreen';
import { View } from 'react-native';
import { Card } from './src/components/Card';
import { ListingDetailsScreen } from './src/screens/ListingDetailsScreen';
import { MessagesScreen } from './src/screens/MessagesScreen';
import { MyAccountScreen } from './src/screens/MyAccountScreen';

export default function App() {
  return (
    <MyAccountScreen />
  );
}
