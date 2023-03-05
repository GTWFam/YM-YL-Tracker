import React, { Component } from "react";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }

  componentDidMount() {
    fetch(`/getUserEntries?uniqueId=${this.props.user.uniqueId}`, {
      method: "GET",
      "no-cors": true,
    })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      this.setState( {
        entries: json.entries
      })
    });
  }

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