/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import TaskList from './components/TaskList';
import InboxScreen from './components/InboxScreen';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/*<TaskList />*/}
        <InboxScreen />
      </Provider>
    );
  }
}
export default App;
