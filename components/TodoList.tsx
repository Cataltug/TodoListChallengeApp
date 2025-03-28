import { FlatList } from 'react-native'
import React from 'react'
import TodoListItem from './TodoListItem';

type Props = {
    todoList: string[];
    onDelete: (todo: string) => void;
}

const TodoList = ({ todoList, onDelete }: Props) => {


  return (
    <FlatList
    contentContainerStyle={{ gap: 16}}
    data={todoList}
    keyExtractor={(toDo) => toDo}
    renderItem={({item}) => <TodoListItem onDelete={onDelete} todo={item} />}
    />
  )
}

export default TodoList
