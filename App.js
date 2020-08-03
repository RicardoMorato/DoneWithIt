import React, { useState } from 'react';

import { ListingScreen } from './src/screens/ListingScreen';
import { AppTextInput } from './src/components/AppTextInput';
import { AppPicker } from './src/components/AppPicker';
import { Screen } from './src/components/Screen';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectedItem={item => setCategory(item)}
        items={categories}
        placeholder='Category'
        icon='apps'
      />
      <AppTextInput placeholder='Email' icon='email' />
    </Screen>
  );
}
