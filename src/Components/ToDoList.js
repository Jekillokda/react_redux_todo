import React, { Component } from 'react'
import ToDo from './ToDo'
import { connect } from 'react-redux';
import {changeTask,deleteTask,completeTask } from "../actions/actions";

class ToDoList extends Component {
    onDelete = (id) => {
        this.props.deleteTask(id)
        console.log("delete "+id)
    }
    onCheck = (id) => {
        this.props.completeTask(id)
        console.log("check "+id)
    } 
    render() {
        console.log('render list')
        console.log(this.props.tasks)
        return (
            this.props.tasks.tasks.map((item, i) => {
                let { id } = item
                return (
                    <div key = {item.id}>
                        <input type="checkbox" onClick ={() => this.onCheck(id)}></input>
                        <ToDo task={item} changeTask = {this.props.changeTask}></ToDo>
                        <input type="button" onClick = {() => this.onDelete(id)} value="delete"></input>
                        <label> </label>
                    </div>
                )
            }

            )
        )
    }
} const mapStateToProps = (store) => {
    return {
        tasks: store
    }
  }
  export default connect(mapStateToProps,
    { deleteTask, changeTask,completeTask }
  )(ToDoList);