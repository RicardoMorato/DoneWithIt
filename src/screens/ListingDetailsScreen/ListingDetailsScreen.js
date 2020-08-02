import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
import { ListItem } from '../../components/ListItem';

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image source={require('../../assets/jacket.jpg')} style={styles.image} />

      <View style={styles.detailContainer}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.price}>$100</Text>

        <View style={styles.userContainer}>
          <ListItem
            image={require('../../assets/mosh.jpg')}
            title='Mosh Hamedani'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </View>
  );
}
