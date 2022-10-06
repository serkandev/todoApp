import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import TodoCard from './src/components/TodoCard';
import Header from './src/components/Header';

const App = () => {
  const [TodoList, setTodoList] = useState([]);
  const [todoText, settodoText] = useState('');
  const [todoCount, settodoCount] = useState(0);
  const renderTodos = ({item}) => (
    <TodoCard
      deleteTodo={deleteTodo}
      SetTodoComplete={setTodoComplete}
      todo={item.todo}
      id={item.id}
    />
  );

  const setTodoComplete = id => {
    const newState = TodoList.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === id) {
        return {...obj, isComplete: !obj.isComplete};
      }

      return obj;
    });
    console.log(newState);
    const count = newState.filter(item => item.isComplete === false);
    settodoCount(count.length);
    setTodoList(newState);
  };

  const deleteTodo = id => {
    const newTodoList = TodoList.filter(todo => {
      return todo.id !== id;
    });
    const count = newTodoList.filter(item => item.isComplete === false);
    settodoCount(count.length);
    setTodoList(newTodoList);
  };

  const addTodo = () => {
    if (todoText !== '') {
      setTodoList([
        ...TodoList,
        {id: TodoList.length + 1, todo: todoText, isComplete: false},
      ]);
    }
    const count = TodoList.filter(item => item.isComplete === false);
    settodoCount(count.length + 1);
    settodoText('');
  };

  return (
    <View style={styles.container}>
      <Header todoCount={todoCount} />
      <FlatList data={TodoList} renderItem={renderTodos} />
      <View style={styles.addTodoContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Yapılacak birşey gir.."
            value={todoText}
            onChangeText={text => {
              settodoText(text);
            }}
            style={styles.input}
          />
          {/* 
      Rastegele gelen Placeholder iyi bir fikir.
         */}
          <View style={styles.sepator}></View>
        </View>
        <TouchableOpacity
          disabled={todoText.length > 0 ? false : true}
          style={styles.button}
          onPress={addTodo}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  addTodoContainer: {
    padding: 10,
    backgroundColor: '#36474f',
    borderRadius: 10,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  list_container: {
    flex: 1,
  },
  sepator: {borderBottomColor: '#798e98', borderBottomWidth: 2},
  input: {color: 'white', fontSize: 15},
  button: {
    borderRadius: 10,
    backgroundColor: '#fea500',
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {color: 'white', fontSize: 15},

  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#0f2027',
  },
});
