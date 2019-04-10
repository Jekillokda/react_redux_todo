import React, { useState  } from 'react'
import { connect } from 'react-redux';
import { addTask } from "../actions/actions";
function ToDoInput (props){
    let [input,setInput] = useState("");

    const addTask =(e)=> {
        props.addTask(input);
        e.preventDefault();
        setInput("")
    };

    const handleChange= e => {
        setInput(e.target.value)
        e.preventDefault();
    }
        return (
            <div>
                <form onSubmit={addTask}>
                    <input type="text" value = {input} placeholder="Input here" onChange={e => handleChange(e)} ></input>
                    <input type="submit" value="add" />
                </form>
            </div>)

}
export default connect(
    null,
    { addTask }
  )(ToDoInput);