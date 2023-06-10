import React, { Component } from "react";

class IncomeEntryRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { entry } = this.props;
    console.log("Income: ");
    console.log(entry);
    let dateMs = new Date(entry.datetime);
    let date =
      dateMs.getDate() +
      "/" +
      (dateMs.getMonth() + 1) +
      "/" +
      dateMs.getFullYear();
    return (
      <tr>
        <td scope="col">{date}</td>
        <td scope="col">{entry.dollars}</td>
        <td scope="col">{entry.lifeEnergy}</td>
      </tr>
    );
  }
}

export default IncomeEntryRow;
