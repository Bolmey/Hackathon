import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login.js';
import Chat from './components/chat.js'

class App extends React.Component {

  state = {
    username: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });

  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/"><Login userName={this.state.username} handleChange={this.handleChange} /></Route>
          <Route exact path="/chat"><Chat userName={this.state.username} handleChange={this.handleChange} /></Route>
        </Switch>
      </div >
    );
  }
}

export default App;


