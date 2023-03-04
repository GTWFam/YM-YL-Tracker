import React, { Component } from "react";

class Home extends React.Component {

  render() {
    const { user } = this.props;
    return (
      <>
        <h1>Hello {user.displayName}</h1>
        <p>{user.uniqueId}</p>
      </>
    );
  }
}

export default Home;