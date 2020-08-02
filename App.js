import React from 'react';

import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen/ViewImageScreen';
import { View } from 'react-native';
import { Card } from './src/components/Card';
import { ListingDetailsScreen } from './src/screens/ListingDetailsScreen';

export default function App() {
  return (
    <ListingDetailsScreen />
  );
}
