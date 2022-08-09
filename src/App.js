import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/quote' element={<Quote />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
