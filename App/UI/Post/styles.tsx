import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  post: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 4,
    overflow: 'hidden',
    elevation: 8,
  },
  details_bar: {
    padding: 16,
    paddingBottom: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginEnd: 8,
  },
  name: {
    fontWeight: 'bold',
  },
  title: {
    marginVertical: 8,
  },
  photo: {
    height: 300,
    width: '100%',
  },
});
