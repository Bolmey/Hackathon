import './App.css';
import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login.js';
import Chat from './components/chat.js';
import socketIOClient from 'socket.io-client'

const socket = socketIOClient('http://localhost:5000');

class App extends React.Component {
  state = {
    username: '',
    message: ''
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
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
    })
    socket.emit('new-message', {
      message: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/"><Login userName={this.state.username} handleChange={this.handleChange} /></Route>
          <Route exact path="/chat"><Chat userName={this.state.username} message={this.state.message} handleMessage={this.handleMessage} /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;


