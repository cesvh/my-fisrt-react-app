import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import tasks from "./sample/tasks.json";

import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from "./components/Posts";

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (name, description) => {
    const newTask = {
      name: name,
      description: description,
      id: this.state.tasks.length,
      done: true
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks
    });
  }

  updateDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({
      tasks: newTasks
    })
  }

  render () {
    return <div>
      <Router>
        <Routes>
          <Route path='/' element={
            <div>
              <TaskForm 
                addTask={this.addTask}
                />
              <Tasks 
                tasks={this.state.tasks} 
                deleteTask={this.deleteTask}
                updateDone={this.updateDone}
                />
            </div>
          }>
          </Route>
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </Router>
    </div>
  }
}

export default App;
