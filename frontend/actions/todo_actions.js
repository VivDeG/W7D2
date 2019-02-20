export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

const receiveTodos = todos => {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  }
}

export const receiveTodo = todo => {
  return {
    type: RECEIVE_TODO,
    todo: todo
  }
}

// DELETE ME PLEASE!!!!!!
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;