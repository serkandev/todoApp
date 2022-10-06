import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: isTodoComplete => ({
    backgroundColor: isTodoComplete ? 'red' : '#7da453',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  }),
  todoText: isTodoComplete => ({
    fontWeight: 'bold',

    textDecorationLine: isTodoComplete ? 'line-through' : '',
  }),
});
