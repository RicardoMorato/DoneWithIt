import React, { Fragment, useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import colors from '../../global/colors';
import { Screen } from '../Screen';
import { PickerItem } from '../PickerItem';

export default function AppPicker({ icon, items, onSelectedItem, placeholder, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon &&
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.mediumGrey}
              style={styles.icon}
            />
          }

        <Text style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</Text>

        <MaterialCommunityIcons
          name='chevron-down'
          size={20}
          color={colors.mediumGrey}
        />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) =>
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
              />
            }
          />
        </Screen>
      </Modal>
    </>
  );
}
