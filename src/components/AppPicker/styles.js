import { StyleSheet, Platform } from 'react-native';

import colors from '../../global/colors';
import defaultStyles from '../../global/defaultStyles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginTop: defaultStyles.statusBarHeight,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  }
});

export default styles;
