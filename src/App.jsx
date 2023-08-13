import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    fetch("/auth/login/success", {
      method: "GET",
      "no-cors": true,
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error(res.json().message);
      })
      .then((resObj) => {
        console.log(resObj.user);
        console.log(resObj.user.photos[0]);
        this.setState({
          user: resObj.user,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let { user } = this.state;
    if (user === null) {
      return (
        <>
          <h1>Loading...</h1>
        </>
      );
    } else {
      return (
        <>
          <Navbar user={user} />
          <Home user={user} />
        </>
      );
    }
  }
}

export default App;
