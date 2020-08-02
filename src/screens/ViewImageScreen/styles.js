import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
    position: 'absolute',
    marginTop: Platform.OS === 'android' ? 20 : 0,
    top: Platform.OS === 'android' ? 10 : 40,
    left: Platform.OS === 'android' ? 10 : 30,
    zIndex: 2,
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#4ecdc4',
    position: 'absolute',
    marginTop: Platform.OS === 'android' ? 20 : 0,
    top: Platform.OS === 'android' ? 10 : 40,
    right: Platform.OS === 'android' ? 10 : 30,
    zIndex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
