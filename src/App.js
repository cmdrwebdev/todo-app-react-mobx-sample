import React, { Component } from 'react';
import {observer} from 'mobx-react';
import logo from './logo.svg';
import './App.css';
import './store.js';

@observer
class App extends Component {
  createNew(e){
    if(e.which === 13) {
      //this.props.store.todos.push(e.target.value)
      this.props.store.createTodo(e.target.value);
      e.target.value = "";
    }
  }
  filter(e){
    this.props.store.filter = e.target.value;
  }
  toggleComplete(todo,e){
    todo.complete = !todo.complete;
  }
  clearComplete(e){
    this.props.store.clearComplete();
  }
  render() {
    const { clearComplete, filter,filteredTodos } = this.props.store;
    const  todoList  = filteredTodos.map(todo => (
      <li key={todo.id}>
        <input type="checkbox" onChange={ this.toggleComplete.bind(this,todo) } value={todo.complete} checked={todo.complete} />
        {todo.value}
      </li>
    ))

    return (
      <div className="App">
        <h1>TODOS</h1>
        ADD:
        <input onKeyPress={this.createNew.bind(this)} /><br/>
        FILTER:
        <input value={filter} onChange={this.filter.bind(this)} />
        <ul>
          {todoList}
        </ul>
        <a href="#" onClick={clearComplete}>clear complete</a>
      </div>
    );
  }
}

export default App;
