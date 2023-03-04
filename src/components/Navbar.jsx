import React, { Component } from "react";

class Navbar extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <div className="navbar">
          <span className="logo">YM-YL</span>
          <ul className="list">
            <li className="listItem">
              <img src={user.photos[0].value} alt="User Profile Picture" className="avatar" />
            </li>
            <li className="listItem">{user.displayName}</li>
            <li>Log Out</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
