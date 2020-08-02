import React, { useState } from 'react';
import { FlatList } from 'react-native';

import styles from './styles';
import { ListItem } from '../../components/ListItem';
import { Screen } from '../../components/Screen';
import ListItemSeparator from '../../components/ListItem/ListItemSeparator/ListItemSeparator';
import { ListItemDeleteAction } from '../../components/ListItem/ListItemDeleteAction';

// Fictional static data
const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages =  messages.filter(msg => msg.id !== message.id);
    setMessages(newMessages);
  };

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
            renderRightActions={() =>
              <ListItemDeleteAction
                onPress={() => handleDelete(item)}
              />
            }
          />
        }
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: 'T3',
              description: 'D3',
              image: require('../../assets/mosh.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
}
