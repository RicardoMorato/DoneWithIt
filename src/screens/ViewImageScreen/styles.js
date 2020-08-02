import { StyleSheet, Platform } from 'react-native';

import colors from '../../global/colors';

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 2,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
