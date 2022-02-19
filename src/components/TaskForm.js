import React, { Component } from "react";

export default class TaskForm extends Component {
    state = {
        task: "",
        description: ""
    };
    OnSubmit = e => {
        this.props.addTask(this.state.task, this.state.description);
        e.preventDefault();
    }
    OnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.OnSubmit}>
                <input 
                    type="text" 
                    name="task"
                    placeholder="Enter a task" 
                    onChange={this.OnChange} 
                    value={this.state.task} />
                <br /><br />
                <textarea 
                    placeholder="Enter a description" 
                    name="description"
                    onChange={this.OnChange} 
                    value={this.state.description} >
                </textarea>
                <br /><br />
                <input type="submit" value="Save Task" />
            </form>
        )
    }
}
