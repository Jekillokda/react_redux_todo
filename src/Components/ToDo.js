import React, { useState  } from "react"
import { connect } from 'react-redux';
import {changeTask } from "../actions/actions";
function ToDo (props){
    let [text = props.task.text,setText] = useState(0);
    const updateTask = e =>{
        e.preventDefault();
        setText(e.target.value)
        props.changeTask(props.task.id,e.target.value)
    }
        return(
            <input onChange={e => updateTask(e)} type="text" value={props.task.text}></input>
        )
} 
export default connect(
    null,
    { changeTask }
  )(ToDo);
