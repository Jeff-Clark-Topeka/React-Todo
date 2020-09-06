import React from 'react';
import ReactDOM from 'react-dom'; 

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      todos: todos 
    };
  }
  
  toggleTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        console.log("this is our todo returned", todo)
        return todo;
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return !todo.completed;
      })
    });
  };

  addTodo = (todoItem) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Date.now(), task: todoItem, completed: false }
      ]
    })
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList 
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
