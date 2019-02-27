import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {
  state = {
    person: null,
    error: null,
    loading: false,
  }

  componentDidMount() {
    this.fetchPerson();
  }

  fetchPerson = () => {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setPerson(res.data))
      .catch(this.setError);
  }

  setError = error => {
    this.setState({ error });
  }

  render() {
    return (
      <div className="App">
        Test
      </div>
    );
  }
}

export default App;
