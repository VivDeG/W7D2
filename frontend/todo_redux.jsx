import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { createStore } from 'redux';
import reducer from './reducers/root_reducer';
import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(reducer);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
  window.store = store;
  window.allTodos = allTodos;
});
