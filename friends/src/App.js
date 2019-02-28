import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import People from './components/People'

const friendsURL = 'http://localhost:5000/friends'

class App extends Component {
  state = {
    people: [],
    error: null,
  }

  inputNameRef = React.createRef();
  inputAgeRef = React.createRef();
  inputEmailRef = React.createRef();

  editIdRef = React.createRef();
  editNameRef = React.createRef();
  editAgeRef = React.createRef();
  editEmailRef = React.createRef();

  componentDidMount() {
    this.fetchpeople();
  }

  // CRUD OPERATIONS

  fetchpeople = () => {
    this.resetError();
    axios.get(friendsURL)
      .then(res => this.setPeople(res.data)) // res is response
      .catch(this.setError);
  }

  postNewPerson = () => {
    const name = this.inputNameRef.current.value;
    const age = this.inputAgeRef.current.value;
    const email = this.inputEmailRef.current.value;

    this.resetError();

    axios.post(friendsURL, { name, age, email })
      .then(res => this.setPeople(res.data))
      .catch(this.setError)
  }

  deletePerson = id => {

    this.resetError();

    axios.delete(`${friendsURL}/${id}`)
      .then(res => this.setPeople(res.data))
      .catch(this.setError)
  }

  putPerson = () => {
    this.resetError();

    const id = this.editIdRef.current.value;
    const name = this.editNameRef.current.value;
    const age = this.editAgeRef.current.value;
    const email = this.editEmailRef.current.value;

    axios.put(`${friendsURL}/${id}`, { name, age, email })
      .then(res => this.setPeople(res.data))
      .catch(this.setError)
  }

  // STATE MANAGEMENT

  setPeople = people => {
    console.log(people);
    this.setState({ people });
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
        <div >
          <People
            people={this.state.people}
            deletePerson={this.deletePerson}
          />
        </div>
        <div>
          <h5>Add (post) a new person</h5>
          name: <input type='text' ref={this.inputNameRef} /><br />
          age: <input type='text' ref={this.inputAgeRef} /><br />
          email: <input type='text' ref={this.inputEmailRef} /><br />
          <button onClick={this.postNewPerson}>submit new person</button>
        </div>
        <div>
          <h5>Update (put) a new person</h5>
          id: <input type='text' ref={this.editIdRef} /><br />
          name: <input type='text' ref={this.editNameRef} /><br />
          age: <input type='text' ref={this.editAgeRef} /><br />
          email: <input type='text' ref={this.editEmailRef} /><br />
          <button onClick={this.putPerson}>UPDATE</button>
        </div>
      </div>
    );
  }
}

export default App;
