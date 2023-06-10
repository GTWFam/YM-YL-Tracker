import React, { Component } from "react";
import IncomeEntryRow from "./IncomeEntryRow";

class IncomeEntryTable extends Component {
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
              <th scope="col">Dollars</th>
              <th scope="col">Life Energy</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <IncomeEntryRow entry={entry} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default IncomeEntryTable;
