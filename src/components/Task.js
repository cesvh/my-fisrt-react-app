import React, { Component } from "react";

class Task extends Component {
    render() {
        const {task} = this.props;
        return <div>
            { task.name } - 
            { task.description }
            <input type="checkbox" />
            <button>
                x
            </button>
        </div>
    }
}

export default Task;
