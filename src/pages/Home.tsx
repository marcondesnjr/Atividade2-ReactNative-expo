import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import {TasksList } from '../components/TasksList';
import {Task} from '../components/TaskItem';

import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(tasks.filter(task => task.title === newTaskTitle).length != 0){
      Alert.alert("Task já cadastrada", "Você não pode cadastrar uma task com o mesmo nome")
      return;
    }
    const taskId = new Date().getTime()
    const task: Task = {
      id: taskId,
      title: newTaskTitle,
      done: false
    }
    setTasks([...tasks, task])
    
  }

  function handleToggleTaskDone(id: number) {
    const tempList = tasks.map( (task) => ({...task}))
    const tempTask = tempList.find(task => task.id===id)
    if(tempTask)
      tempTask.done = !tempTask.done
    setTasks(tempList)
  }

  function handleEditTask(taskId: number, taskNewTitle: string){
    const tempList = tasks.map( (task) => ({...task}))
    const tempTask = tempList.find(task => task.id===taskId)
    if(tempTask)
      tempTask.title = taskNewTitle
    setTasks(tempList)
  }

  function handleRemoveTask(id: number) {
    
    const doAction = ()=>{
      var filtered = tasks.filter( (task) => {
        return task.id !== id
      })
      setTasks(filtered)
    }
    
    Alert.alert('Remover item', 'Tem certeza que você deseja remover esse item?', [{
      text: 'Não'
    }, {
      text: 'Sim',
      onPress: doAction
    }])

    
  }

  
  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
        editTask={handleEditTask}
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