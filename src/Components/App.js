import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is ToDo List Single Page App</h1> 
        <ToDoInput  />
        <p></p>
        <ToDoList />
      </div>
    )
  }
} 

const mapStateToProps = (store) => {
  return {
      tasks: store
  }
}

export default connect(mapStateToProps)(App);