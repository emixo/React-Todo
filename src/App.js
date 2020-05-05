import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todosList = [

]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosList
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addItem = itemName => {
    const item = {
      name: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, item]
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
