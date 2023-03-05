import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGoogle, FaGithub } from "react-icons/fa";

class Login extends React.Component {
  render() {
    // const { name } = this.props;
    return (
      <>
        <div className="login-page d-flex justify-content-center align-items-center">
          <div className="card justify-content-center text-white mb-4 text-center">
            <div className="card-header">LOGIN WITH</div>
            <div className="card-body">
              <a
                href="http://localhost:3000/auth/github"
                className="btn btn-dark"
              >
                <FaGithub /> Sign in with GitHub
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Login />, mountNode);
