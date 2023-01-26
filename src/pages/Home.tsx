import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import {TasksList } from '../components/TasksList';
import {Task} from '../components/TaskItem';

import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const taskId = new Date().getTime()
    const task: Task = {
      id: taskId,
      title: newTaskTitle,
      done: false
    }
    setTasks([...tasks, task])
    
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
       
  }

  function handleRemoveTask(id: number) {
    var filtered = tasks.filter( (task) => {
      return task.id === id
    })
    setTasks(filtered)
  }

  
  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})