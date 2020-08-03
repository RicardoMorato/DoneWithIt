import React from 'react';

import { ListingScreen } from './src/screens/ListingScreen';
import { AppTextInput } from './src/components/AppTextInput';

export default function App() {
  return (
    <AppTextInput placeholder='Username' icon='email' />
  );
}
