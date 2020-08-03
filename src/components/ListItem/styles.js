import { StyleSheet } from 'react-native';

import colors from '../../global/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: '700',
  },
  subTitle: {
    color: colors.mediumGrey,
  },
  detailsContainer: {
    marginLeft: 10,
  },
});

export default styles;
