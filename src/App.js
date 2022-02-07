import React from 'react';
import './App.css';

function CreateDiv(props) {
  return <div>{ props.message }</div>
}

function App() {
  return (
    <div className="App">
      My component App
      <CreateDiv message="Welcome!" />
      <CreateDiv message="Hello hell!" />
    </div>
  );
}

export default App;
