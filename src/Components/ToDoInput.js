import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTask } from "../actions/actions";
class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
      }

    addTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.input);
        this.setState({ input: "" });
    };

    handleChange(event) {
        this.setState({ input: event.target.value })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTask}>
                    <input type="text" value = {this.state.input} placeholder="Input here" onChange={this.handleChange.bind(this)} ></input>
                    <input type="submit" value="add" />
                </form>
            </div>)
    }

}
export default connect(
    null,
    { addTask }
  )(ToDoInput);