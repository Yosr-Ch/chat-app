import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      currentMessageValue: ""
    };
  }

  currentMessageValueChange(e) {
    const textarea = e.target;
    this.setState({ currentMessageValue: textarea.value });
  }

  sendMessage(e) {
    const messages = [
      ...this.state.messages,
      { messageTimestamp: Date.now(), text: this.state.currentMessageValue }
    ];
    this.setState({ messages, currentMessageValue: "" });
  }

  render() {
    const { currentMessageValue, messages } = this.state;

    return (
      <div className="App">
        <div className="container">
          <main>
            <div className="chat-messages">
              {/* {JSON.stringify(this.state)} */}
              {messages.map( message =>
                <div className="message" key={message.messageTimestamp}>
                  {new Date(message.messageTimestamp).toISOString().substr(11, 8)}: {message.text}
                </div>
              )}
            </div>
            <div className="chat-input">
              <textarea value={currentMessageValue}
                onChange={this.currentMessageValueChange.bind(this)} />
                <button className="btn-send" type="submit" onClick={this.sendMessage.bind(this)}>Send</button>
            </div>
          </main>
          <aside></aside>
        </div>

      </div>
    );
  }
}

export default App;
