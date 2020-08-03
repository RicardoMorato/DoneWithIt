import React from 'react';

import { ListingScreen } from './src/screens/ListingScreen';
import { AppTextInput } from './src/components/AppTextInput';
import { AppPicker } from './src/components/AppPicker';
import { Screen } from './src/components/Screen';

export default function App() {
  return (
    <Screen>
      <AppPicker placeholder='Category' icon='apps' />
      <AppTextInput placeholder='Email' icon='email' />
    </Screen>
  );
}
