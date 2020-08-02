import { StyleSheet, Platform } from 'react-native';

import colors from '../../global/colors';

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
