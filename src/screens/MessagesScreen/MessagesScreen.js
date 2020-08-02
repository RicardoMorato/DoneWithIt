import React from 'react';
import { FlatList, View } from 'react-native';

import styles from './styles';
import { ListItem } from '../../components/ListItem';
import { Screen } from '../../components/Screen';
import ListItemSeparator from '../../components/ListItemSeparator/ListItemSeparator';

// Fictional static data
const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../../assets/mosh.jpg'),
  },
];

export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) =>
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => {}}
            renderRightActions={() => <View style={{ backgroundColor: 'red', width: 70 }}></View>}
          />
        }
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}
