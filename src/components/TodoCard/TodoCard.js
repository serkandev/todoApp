import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TodoCard.style';
const TodoCard = props => {
  const [isTodoComplete, setisTodoComplete] = React.useState(false);
  const onPressTodo = () => {
    setisTodoComplete(!isTodoComplete);
    props.SetTodoComplete(props.id);
  };

  const onLongPress = () => {
    props.deleteTodo(props.id);
  };
  return (
    <View style={styles.container(isTodoComplete)}>
      <TouchableOpacity onLongPress={onLongPress} onPress={onPressTodo}>
        <Text style={styles.todoText(isTodoComplete)}>{props.todo}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoCard;
