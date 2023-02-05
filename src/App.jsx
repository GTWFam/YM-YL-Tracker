import React from "react";
import Navbar from "./components/Navbar";

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
          <Navbar />
          <h1>Hello {user.displayName}</h1>
          <button type="button" class="btn btn-primary">
            This is a bootstrap btn
          </button>
        </>
      );
    }
  }
}

export default App;
