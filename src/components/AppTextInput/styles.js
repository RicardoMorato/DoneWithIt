import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../global/colors';
import defaultStyles from '../../global/defaultStyles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginTop: Constants.statusBarHeight,
    marginVertical: 10,
    alignItems: 'center',
  },
  textInput: defaultStyles.text,
  icon: {
    marginRight: 10,
  },
});

export default styles;
