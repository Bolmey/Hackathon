import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class login extends Component {



    render() {
        console.log(this.props)
        return (
            <div>
                <div className="loginContainer">
                    <h1>Lets get started</h1>
                    <input type="text" className="userName" onChange={this.props.handleChange} value={this.props.userName}
                        name="username" placeholder="Your nickname" />
                    <Link to="/chat"><button type="submit" className="start">Go to Chat</button></Link>
                </div>
            </div>
        );
    }
}

export default login;