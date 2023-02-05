import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
import {FaGoogle, FaGithub} from "./_snowpack/pkg/react-icons/fa.js";
class Login extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "login-page d-flex justify-content-center align-items-center"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "card justify-content-center text-white mb-4 text-center"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "card-header"
    }, "LOGIN VIA"), /* @__PURE__ */ React.createElement("div", {
      className: "card-body"
    }, /* @__PURE__ */ React.createElement("a", {
      href: "http://localhost:3000/auth/google",
      className: "btn btn-light"
    }, /* @__PURE__ */ React.createElement(FaGoogle, null), " Sign in with Google"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("a", {
      href: "http://localhost:3000/auth/github",
      className: "btn btn-dark"
    }, /* @__PURE__ */ React.createElement(FaGithub, null), " Sign in with GitHub")))));
  }
}
var mountNode = document.getElementById("app");
ReactDOM.render(/* @__PURE__ */ React.createElement(Login, null), mountNode);
