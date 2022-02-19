import React, { Component } from "react";

export default class TaskForm extends Component {
    state = {
        name: "",
        description: ""
    };
    OnSubmit = e => {
        this.props.addTask(this.state.name, this.state.description);
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
                    name="name"
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
