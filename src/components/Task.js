import React, { Component } from "react";

import "./Task.css";

class Task extends Component {
    render() {
        const {task} = this.props;
        // const redColor = { background: 'red'};
        return <p 
        /*style={redColor}*/
        /*className="back"*/ 
        /*style={{ background: 'red' }}*/>
            { task.name } - 
            { task.description }
            <input type="checkbox" />
            <button style={btnDelete}>
                x
            </button>
        </p>
    }
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
};

export default Task;
