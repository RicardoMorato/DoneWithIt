import { StyleSheet } from 'react-native';

import colors from '../../global/colors';

const styles = StyleSheet.create({
  primaryColor: {
    backgroundColor: colors.primary,
  },
  secondaryColor: {
    backgroundColor: colors.secondary,
  },
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default styles;
