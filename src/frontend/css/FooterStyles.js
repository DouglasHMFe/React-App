import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    flexDirection: 'row',
    alignSelf: 'center',
    width: width,
    borderTopWidth: 1,
    borderTopColor: 'rgba(204, 204, 204, 0.05)',
    backgroundColor: '#f9f9f9', 
    boxShadow: '0px -3px 4px rgba(128, 128, 128, 0.3)', 
  },
  iconButtonHome: {
    marginLeft: 20,
  },
  iconButtonNotificacao: {
    marginLeft: 180,
  },
});

export default styles;
