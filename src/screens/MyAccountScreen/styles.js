import { StyleSheet } from 'react-native';

import colors from '../../global/colors';

const styles = StyleSheet.create({
  backgroundGrey: {
    backgroundColor: colors.lightGrey,
  },
  accountInfo: {
    backgroundColor: colors.white,
    marginTop: 20,
  },
  optionsContainer: {
    flex: 1,
    marginTop: 30,
  },
  container: {
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  optionDescription: {
    fontWeight: '600',
    fontSize: 16,
  },
  marginTop: {
    marginTop: 15,
  },
  yellow: {
    backgroundColor: colors.yellow,
  },
});

export default styles;
