import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#232946',
    borderBottomWidth: 1,
    borderColor: '#121629',
    padding: 12,
  },
  logoStyle: { width: 20, height: 20, borderRadius: 20 },
  buttonStyle: {
    backgroundColor: '#eebbc3',
    padding: 6,
    borderRadius: 20,
  },
  secondaryTextStyle: { paddingLeft: 6, color: '#b8c1ec', fontSize: 14 },
  buttonTextStyle: { fontSize: 16, color: '#232946' },
  descriptionTextStyle: {
    fontSize: 18,
    color: '#fffffe',
    marginBottom: 8,
  },
  nameTextStyle: { fontSize: 14, color: '#fffffe', paddingVertical: 6 },
  repoInfoContainer: {
    marginRight: 6,
  },
});

export default styles;
