import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login.js';
import Chat from './components/chat.js';
import socketIOClient from 'socket.io-client'

const socket = socketIOClient('http://localhost:5000');

class App extends React.Component {
  state = {
    username: ''
  }
  componentDidMount() {
    socket.on('message', data => {
      this.setState({
        message: data.message
      })
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    socket.emit('new-message', {
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/"><Login userName={this.state.username} handleChange={this.handleChange} /></Route>
          <Route exact path="/chat"><Chat userName={this.state.username} handleChange={this.handleChange} /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;


