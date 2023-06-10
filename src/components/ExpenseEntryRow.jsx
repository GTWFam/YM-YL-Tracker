import React, { Component } from "react";

class ExpenseEntryRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { entry } = this.props;
    console.log("Expenses: ");
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
        <td scope="col">{entry.category + ": " + entry.subcategory}</td>
        <td scope="col">{entry.dollars}</td>
        <td scope="col">{entry.lifeEnergy}</td>
        <td scope="col">{entry.q1}</td>
        <td scope="col">{entry.q2}</td>
        <td scope="col">{entry.q3}</td>
      </tr>
    );
  }
}

export default ExpenseEntryRow;
