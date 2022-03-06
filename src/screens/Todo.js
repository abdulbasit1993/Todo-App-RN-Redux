import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo, RemoveTodo} from '../redux/actions/todoActions';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
  Keyboard,
} from 'react-native';
import Header from '../components/Header';

const width = Dimensions.get('window').width;

const Todo = () => {
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const todos = data.todos.todos;

  const addTodo = () => {
    if (todos && !todos.includes(todoValue)) {
      dispatch(AddTodo(todoValue));
      setTodoValue('');
    } else {
      Alert.alert('Alert', `${todoValue} already added in Todo List`);
    }
    Keyboard.dismiss();
  };

  const removeTodo = item => {
    const todoIndex = todos.indexOf(item);
    if (todoIndex > -1) {
      dispatch(RemoveTodo(item));
    } else {
      Alert.alert('Alert', `${todoValue} is not in the Todo List`);
    }
  };

  const renderTodoList = () => {
    return (
      <FlatList
        data={todos}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        renderItem={({item}) => (
          <View style={styles.todoView}>
            <View style={styles.todoList}>
              <Text>{item}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeTodo}
              onPress={() => removeTodo(item)}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.main}>
      <Header title="Todo List" />
      <TextInput
        style={styles.mainInput}
        onChangeText={setTodoValue}
        placeholder={'Add your todo here'}
        value={todoValue}
      />
      <Button name="increase" title="Add Todo" onPress={addTodo} />
      <Text style={styles.todoHeading}>List of Todos:</Text>
      {renderTodoList()}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flex: 1,
    flexGrow: 1,
  },
  mainInput: {
    borderWidth: 1,
    height: 55,
    width: width * 0.9,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 9,
  },
  todoList: {
    borderWidth: 1,
    borderRadius: 10,
    width: width * 0.8,
    height: 40,
  },
  todoView: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 5,
  },
  removeTodo: {
    backgroundColor: 'cyan',
    borderRadius: 4,
    margin: 4,
  },
  todoHeading: {
    alignSelf: 'stretch',
    paddingLeft: width * 0.08,
    //   backgroundColor: 'red',
  },
});

export default Todo;
