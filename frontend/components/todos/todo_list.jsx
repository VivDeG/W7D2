import React from 'react';
import { TodoListItem } from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';
import { receiveTodo } from '../../actions/todo_actions';

const TodoList = ({ todos }) => {
  const todoListItems = todos.map((todo, id) => {
    return <TodoListItem key={id} todo={todo} />
  });
 
  return (
    <>
      <h3>Todo List</h3>
      <TodoForm todo={ receiveTodo }/>
      <ul>
          {todoListItems}
      </ul>
    </>
  );
}

export default TodoList;