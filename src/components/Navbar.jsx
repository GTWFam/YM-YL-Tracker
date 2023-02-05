import React, { Component } from "react";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="navbar">
          <span className="logo">YM-YL</span>
          <ul className="list">
            <li className="listItem">
              <img src="" alt="" className="avatar" />
            </li>
            <li className="listItem">John Doe</li>
            <li>Log Out</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
