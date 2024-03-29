import React from 'react';
import 'whatwg-fetch';
import './App.css';
import TimeForm from './TimeForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.fetchCurrentTime = this.fetchCurrentTime.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      currentTime: null, msg: 'now'
    }
  }

  // methods we'll fill in shortly
  fetchCurrentTime() {}
  getApiUrl() {}
  handleFormSubmit(evt) {}
  handleChange(newState) {}

  render() {
    const {currentTime, tz} = this.state;
    const apiUrl = this.getApiUrl();

    return (
      <div>
        {!currentTime &&
          <button onClick={this.fetchCurrentTime}>
            Get the current time
          </button>}
        {currentTime && <div>The current time is: {currentTime}</div>}
        <TimeForm
          onFormSubmit={this.handleFormSubmit}
          onFormChange={this.handleChange}
          tz={tz}
          msg={'now'}
        />
        <p>We'll be making a request from: <code>{apiUrl}</code></p>
      </div>
    )
  }
}

export default App;