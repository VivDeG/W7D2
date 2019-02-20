import React from 'react';
import UniqueId from '../../util/unique_id';

class TodoForm extends React.Component {
  constructor(props, todo) {
    super(props);
    const id = UniqueId();
    this.fn = todo;
    this.state = {
      todos: {
        id: {
          id: id,
          title: '',
          body: '',
          done: false
        }
      }
    };
    this.updateTodos = this.updateTodos.bind(this);
  }

  updateTodos(e) {
    e.preventDefault();
    this.setState({todos: e.currentTarget.value});
    //fn(this.state);
    console.log(this.state.todos);
  }

  render () {
    return (
      <>
      <form onSubmit={this.updateTodos}>
        <label>
          New Todo: 
          <input type="text" name={this.state.todos}/>
        </label>
        <input type="submit" value="Submit Todo!"/>
      </form>
      </>
    )
  }
}

export default TodoForm;