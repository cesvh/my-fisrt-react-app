import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./Task.css";

class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'black' : 'gray',
            textDecoration: this.props.task.done ? 'none' : 'line-through'
        }
    }

    render() {
        const {task} = this.props;
        // const redColor = { background: 'red'};
        return <p style={this.StyleCompleted()}
        /*style={redColor}*/
        /*className="back"*/ 
        /*style={{ background: 'red' }}*/>
            { task.name } - 
            { task.description }
            <input type="checkbox" onChange={this.props.updateDone.bind(this, task.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)} >
                x
            </button>
        </p>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
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
