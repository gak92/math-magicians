import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Math Magicians</h1>
        <Routes>
          <Route path='/calculator' element={<Calculator />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
