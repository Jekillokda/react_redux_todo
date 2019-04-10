import React, { Component, useState  } from "react"
import { connect } from 'react-redux';
import {changeTask } from "../actions/actions";
//const [text] = useState(0);
class ToDo extends Component{
    constructor(props){
        super(props)
         this.state = {
        inputValue: this.props.task.text
        }
    }

    updateTask= e =>{
        e.preventDefault();
        this.setState({
          inputValue: e.target.value
        });
        this.props.changeTask(this.props.task.id,e.target.value)
        console.log("change " + this.props.task.id)
    }
    render(){
        return(
            <input onChange={e => this.updateTask(e)} type="text" size={this.props.task.text.length} value={this.state.inputValue}></input>
        )
    }
} 
export default connect(
    null,
    { changeTask }
  )(ToDo);
