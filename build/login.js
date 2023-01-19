import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import "./_snowpack/pkg/bootstrap.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
class Login extends React.Component {
  render() {
    const {name} = this.props;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Hello ", name), /* @__PURE__ */ React.createElement("button", {
      type: "button",
      class: "btn btn-primary"
    }, "This is a bootstrap button"));
  }
}
var mountNode = document.getElementById("app");
ReactDOM.render(/* @__PURE__ */ React.createElement(Login, {
  name: "Bill"
}), mountNode);
