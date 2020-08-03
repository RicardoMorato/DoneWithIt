import React from 'react';
import { View, FlatList } from 'react-native';

import styles from './styles';
import { Screen } from '../../components/Screen';
import { ListItem } from '../../components/ListItem';
import ListItemSeparator from '../../components/ListItem/ListItemSeparator/ListItemSeparator';
import { Icon } from '../../components/Icon';
import colors from '../../global/colors';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    }
  },
];

export default function MyAccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Mosh Hamedani'
          subTitle='ricardomorator@hotmail.com'
          image={require('../../assets/mosh.jpg')}
          style={styles.accountInfo}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              textStyle={styles.text}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
            />
          }
        />
      </View>

      <ListItem
        title='Log Out'
        textStyle={styles.text}
        IconComponent={
          <Icon name='logout' backgroundColor={colors.yellow} />
        }
      />
    </Screen>
  );
}
