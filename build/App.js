import React from "./_snowpack/pkg/react.js";
import Navbar from "./components/Navbar.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    fetch("/auth/login/success", {
      method: "GET",
      "no-cors": true
    }).then((res) => {
      if (res.status === 200)
        return res.json();
      throw new Error(res.json().message);
    }).then((resObj) => {
      console.log(resObj.user);
      this.setState({
        user: resObj.user
      });
    }).catch((err) => {
      console.log(err);
    });
  }
  render() {
    let {user} = this.state;
    if (user === null) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Loading..."));
    } else {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("h1", null, "Hello ", user.displayName), /* @__PURE__ */ React.createElement("button", {
        type: "button",
        class: "btn btn-primary"
      }, "This is a bootstrap btn"));
    }
  }
}
export default App;
