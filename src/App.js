import Users from "./Components/userCard";
import "./App.css";
import './style.css'
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { users_data: [], loading: true };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    document.getElementById("main").style.display = "inline-block";
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav ">
            <div className="row center">
                <h1>Web Developers</h1>
                <button onClick={this.updateState}>Get Users</button>
            </div>
          </div>
        </nav>
        <div className="box2">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
      </>
    );
  }
}

export default App;
