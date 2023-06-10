import React, { Component } from "react";
import ExpenseEntryRow from "./ExpenseEntryRow";

class ExpenseEntryTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { entries } = this.props;
    return (
      <>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Category</th>
              <th scope="col">Dollars</th>
              <th scope="col">Life Energy</th>
              <th scope="col">Satisfaction</th>
              <th scope="col">Alignment</th>
              <th scope="col">Perspective</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <ExpenseEntryRow entry={entry} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default ExpenseEntryTable;
