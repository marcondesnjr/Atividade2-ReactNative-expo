import React from 'react';

import { 
  FlatList, 
  Image, 
  TouchableOpacity, 
  View, 
  Text, 
  StyleSheet, 
  FlatListProps } 
from 'react-native';

import {Feather} from '@expo/vector-icons';

import { ItemWrapper } from './ItemWrapper';

import trashIcon from '../assets/icons/trash/trash.png';
import TaskItem from './TaskItem';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export interface TasksListProps {
  tasks:Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: (taskId: number, taskNewTitle: string) => void
}

export function TasksList({ tasks, toggleTaskDone, removeTask, editTask }: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <TaskItem index={index} item={item} toggleTaskDone={toggleTaskDone} removeTask={removeTask} editTask={editTask}/>
          </ItemWrapper>
        )
      }}
      style={{
        marginTop: 32
      }}
    />
  )
}

// const styles = StyleSheet.create({
//   taskButton: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingVertical: 15,
//     marginBottom: 4,
//     borderRadius: 4,
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   taskMarker: {
//     height: 16,
//     width: 16,
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: '#B2B2B2',
//     marginRight: 15,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   taskText: {
//     color: '#666',
//     fontFamily: 'Inter-Medium'
//   },
//   taskMarkerDone: {
//     height: 16,
//     width: 16,
//     borderRadius: 4,
//     backgroundColor: '#1DB863',
//     marginRight: 15,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   taskTextDone: {
//     color: '#1DB863',
//     textDecorationLine: 'line-through',
//     fontFamily: 'Inter-Medium'
//   }
// })