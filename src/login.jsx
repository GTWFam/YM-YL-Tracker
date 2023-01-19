import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
      </>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Login name="Bill" />, mountNode);
