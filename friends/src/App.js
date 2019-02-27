import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import People from './components/People'

class App extends Component {
  state = {
    people: [],
    error: null,
    loading: false,
  }

  componentDidMount() {
    this.fetchpeople();
  }

  fetchpeople = () => {
    this.resetError();
    axios.get('http://localhost:5000/friends')
      .then(res => this.setPeople(res.data))
      .catch(this.setError);
  }

  setPeople = people => {
    console.log(people);
    this.setState({ people: people });
  }

  setError = error => {
    this.setState({ error });
  }

  resetError = () => {
    this.setState({ error: null });
  }

  render() {
    return (
      <div className="App">
        <People 
        people={this.state.people} 
        />
      </div>
    );
  }
}

export default App;
