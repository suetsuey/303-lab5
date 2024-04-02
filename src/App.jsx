/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const Stack = createNativeStackNavigator();
  const handleAddTask = task => {
    setTasks([...tasks, task]);

    //tasks.push(task);
    // setTasks(tasks);

    //setTasks((prev) => [...prev, task]);

    //setTasks(tasks.concat(task));
  };

  return (
    <NavigationContainer>
      <SafeAreaView>
        <ToDoForm addTask={handleAddTask} />
        <ToDoList tasks={tasks} />
      </SafeAreaView>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
