import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
  topStart: { alignItems: 'flex-start', justifyContent: 'flex-start' },
  topCenter: { alignItems: 'center', justifyContent: 'flex-start' },
  topEnd: { alignItems: 'flex-end', justifyContent: 'flex-start' },
  centerStart: { alignItems: 'flex-start', justifyContent: 'center' },
  center: { alignItems: 'center', justifyContent: 'center' },
  centerEnd: { alignItems: 'flex-end', justifyContent: 'center' },
  bottomStart: { alignItems: 'flex-start', justifyContent: 'flex-end' },
  bottomCenter: { alignItems: 'center', justifyContent: 'flex-end' },
  bottomEnd: { alignItems: 'flex-end', justifyContent: 'flex-end' },
  rowStartTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  rowStartCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rowStartBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  rowCenterTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowCenterBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rowEndTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  rowEndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rowEndBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default styles;
