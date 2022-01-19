import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#121629',
    marginTop: 20,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    color: '#fffffe',
    paddingHorizontal: 8,
  },
  searchIcon: {
    paddingLeft: 8,
  },
});

export default styles;
