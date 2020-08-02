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
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
});

export default styles;
