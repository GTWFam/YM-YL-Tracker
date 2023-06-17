import React, { Component } from "react";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValue: 0,
      isIncomeCheck: false,
      isAspiration: false,
    };
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.incomeChangeHandle = this.incomeChangeHandle.bind(this);
    this.aspirationChangeHandle = this.aspirationChangeHandle.bind(this);
  }

  incomeChangeHandle(event) {
    this.setState({
      isIncomeCheck: event.target.checked,
    });
  }

  aspirationChangeHandle(event) {
    this.setState({
      isAspiration: event.target.checked,
    });
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      if (this.props.formState === "open") {
        this.props.closeForm();
      }
    }
  }

  render() {
    let { formState } = this.props;
    let { dateValue, isIncomeCheck, isAspiration } = this.state;
    return (
      <>
        <div
          ref={this.wrapperRef}
          className={"container h-75 w-75 position-fixed add-form " + formState}
        >
          <button
            type="button"
            class="close btn"
            aria-label="Close"
            onClick={this.props.closeForm}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="row">
            <div className="col">
              <h3>Add Expense/Income Entry</h3>
            </div>
            <div className="col text-right form-check form-switch incomeSwitch">
              <label className="form-check-label" for="isIncome">
                Expense/Income
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="isIncome"
                onChange={this.incomeChangeHandle}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <form>
                <div className="form-group row">
                  <label for="date" className="col-sm-6 col-form-label">
                    Date
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="dollars" className="col-sm-6 col-form-label">
                    Dollars
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="number"
                      className="form-control"
                      id="dollars"
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="life-energy" className="col-sm-6 col-form-label">
                    Life Energy
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="number"
                      className="form-control"
                      id="life-energy"
                    ></input>
                  </div>
                </div>
                {isIncomeCheck ? (
                  <></>
                ) : (
                  <>
                    <div className="form-group row">
                      <label for="category" className="col-sm-6 col-form-label">
                        Category
                      </label>
                      <div className="col-sm-6">
                        <select className="form-control" id="category">
                          <option>Food</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="sub-category"
                        className="col-sm-6 col-form-label"
                      >
                        Sub-category
                      </label>
                      <div className="col-sm-2 form-check form-switch">
                        <label
                          className="form-check-label aspSwitchLabel"
                          for="isAspiration"
                        >
                          Aspiration Tag
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="isAspiration"
                          onChange={this.aspirationChangeHandle}
                        />
                      </div>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          id="sub-category"
                        ></input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="q1" className="col-sm-6 col-form-label">
                        Did you receive fullfilment, satisfaction, and value in
                        proportion to life energy spent?
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="number"
                          className="form-control"
                          id="q1"
                        ></input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="q2" className="col-sm-6 col-form-label">
                        Is this expenditure of life energy in alinment with my
                        values and life purpose?
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="number"
                          className="form-control"
                          id="q2"
                        ></input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="q3" className="col-sm-6 col-form-label">
                        How might this expenditure change if I didn't have to
                        work for money?
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="number"
                          className="form-control"
                          id="q3"
                        ></input>
                      </div>
                    </div>
                  </>
                )}
                <button type="submit" className="btn btn-success">
                  Add Entry
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddForm;
