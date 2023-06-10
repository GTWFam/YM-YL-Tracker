import React, { Component } from "react";
import ExpenseEntryTable from "./ExpenseEntryTable";
import IncomeEntryTable from "./IncomeEntryTable";

class Home extends Component {
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
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          entries: json.entries,
        });
      });
  }

  render() {
    const { user } = this.props;
    const { entries } = this.state;
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <h1>Hello {user.displayName}</h1>
              <p>{user.uniqueId}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <h2>Income</h2>
              <IncomeEntryTable
                entries={entries.filter((entry) => entry.isIncome)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <h2>Expense</h2>
              <ExpenseEntryTable
                entries={entries.filter((entry) => !entry.isIncome)}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
