import React, { Component } from 'react';

class chat extends Component {
    render() {
        // console.log(this.props.userName)
        return (
            <div>
                <h1>You made it to CHATS!</h1>
                <div className="onlineUsers">
                    <ul>
                        <li>{this.props.userName}</li>
                    </ul>
                </div>
                <div className="msgField">

                </div>
                <input type="text" />
                <button type="submit" >Send</button>
            </div>
        );
    }
}

export default chat;