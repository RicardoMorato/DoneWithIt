import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import { Screen } from '../../components/Screen';
import { ListItem } from '../../components/ListItem';
import ListItemSeparator from '../../components/ListItem/ListItemSeparator/ListItemSeparator';

export default function MyAccountScreen() {
  return (
    <Screen style={styles.backgroundGrey}>
      <ListItem
        title='Mosh Hamedani'
        subTitle='ricardomorator@hotmail.com'
        onPress={() => {}}
        image={require('../../assets/mosh.jpg')}
        renderRightActions={() => {}}
        style={styles.accountInfo}
      />

      <View style={styles.optionsContainer}>
        <View style={styles.container}>
          <View style={[ styles.iconContainer, styles.primary ]}>
            <MaterialCommunityIcons
              name='format-list-bulleted'
              size={18}
              color='white'
            />
          </View>
          <Text style={styles.optionDescription}>My Listings</Text>
        </View>

        <ListItemSeparator />

        <View style={styles.container}>
          <View style={[ styles.iconContainer, styles.secondary ]}>
            <MaterialCommunityIcons
              name='email'
              size={18}
              color='white'
            />
          </View>
          <Text style={styles.optionDescription}>My Messages</Text>
        </View>

        <View style={[styles.container, styles.marginTop]}>
          <View style={[ styles.iconContainer, styles.yellow ]}>
            <MaterialCommunityIcons
              name='logout'
              size={18}
              color='white'
            />
          </View>
          <Text style={styles.optionDescription}>Log Out</Text>
        </View>
      </View>
    </Screen>
  );
}
