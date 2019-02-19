import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      return newTodos(action.todos);
    case RECEIVE_TODO:
      return merge({}, initialState, {[action.todo.id]: action.todo});
    default:
      return state;
  }
};

const newTodos = (todos) => {
  let obj = {};
  for (let i = 0; i < todos.length; i++) {
    obj[todos[i].id] = todos[i];
  }
  return obj;
}

export default todosReducer;