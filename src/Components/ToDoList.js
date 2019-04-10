import React from 'react'
import ToDo from './ToDo'
import { connect } from 'react-redux';
import {changeTask,deleteTask,completeTask } from "../actions/actions";

function ToDoList (props) {
        return (
            props.tasks.tasks.map((item, i) => {
                let { id } = item
                return (
                    <div key = {item.id}>
                        <input type="checkbox" onClick ={() => props.completeTask(id)}></input>
                        <ToDo task={item} changeTask = {props.changeTask}></ToDo>
                        <input type="button" onClick = {() =>  props.deleteTask(id)} value="delete"></input>
                        <label> </label>
                    </div>
                )
            }

            )
        )
} const mapStateToProps = (store) => {
    return {
        tasks: store
    }
  }
  export default connect(mapStateToProps,
    { deleteTask, changeTask,completeTask }
  )(ToDoList);