import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { Screen } from '../../components/Screen';
import { ListItem } from '../../components/ListItem';
import ListItemSeparator from '../../components/ListItem/ListItemSeparator/ListItemSeparator';
import { Icon } from '../../components/Icon';
import colors from '../../global/colors';

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
            <Icon
              name='format-list-bulleted'
              backgroundColor={colors.primary}
            />
          </View>
          <Text style={styles.optionDescription}>My Listings</Text>
        </View>

        <ListItemSeparator />

        <View style={styles.container}>
          <View style={[ styles.iconContainer, styles.secondary ]}>
            <Icon
              name='email'
              backgroundColor={colors.secondary}
            />
          </View>
          <Text style={styles.optionDescription}>My Messages</Text>
        </View>

        <View style={[styles.container, styles.marginTop]}>
          <View style={[ styles.iconContainer, styles.yellow ]}>
            <Icon
              name='logout'
              backgroundColor={colors.yellow}
            />
          </View>
          <Text style={styles.optionDescription}>Log Out</Text>
        </View>
      </View>
    </Screen>
  );
}
