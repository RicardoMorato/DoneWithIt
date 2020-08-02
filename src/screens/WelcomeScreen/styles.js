import { StyleSheet } from 'react-native';

import colors from '../../global/colors';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 23,
    fontWeight: '700',
    paddingVertical: 20,
  },
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },
});

export default styles;
