import React, { Component } from "react";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: 0,
      dollars: 0,
      lifeEnergy: 0,
      category: "",
      subcategory: "",
      isIncomeCheck: false,
      isAspiration: false,
    };
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
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

  formSubmit(event) {
    document.getElementById("entryAdd").submit();
  }

  render() {
    let { formState, uniqueId } = this.props;
    let {
      datetime,
      dollars,
      lifeEnergy,
      category,
      subcategory,
      isIncomeCheck,
      isAspiration,
    } = this.state;
    return (
      <>
        <div
          ref={this.wrapperRef}
          className={"container position-fixed add-form " + formState}
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
              <form
                id="entryAdd"
                autoComplete="off"
                action="/addEntry"
                method="POST"
              >
                <input
                  value={uniqueId}
                  type="text"
                  id="uniqueId"
                  name="uniqueId"
                  readOnly
                />
                <div className="row">
                  <div className="col">
                    <h3>Add Expense/Income Entry</h3>
                  </div>
                  <div className="col text-right form-check form-switch incomeSwitch">
                    <label className="form-check-label" for="isIncome">
                      Expense/Income
                    </label>
                    <input
                      value={isIncomeCheck}
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="isIncome"
                      name="isIncome"
                      onChange={(e) =>
                        this.setState({
                          isIncomeCheck: e.target.checked,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="datetime" className="col-sm-6 col-form-label">
                    Date
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="date"
                      className="form-control"
                      id="datetime"
                      name="datetime"
                      value={datetime}
                      onChange={(e) =>
                        this.setState({ datetime: e.target.value })
                      }
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
                      name="dollars"
                      value={dollars}
                      onChange={(e) =>
                        this.setState({ dollars: e.target.value })
                      }
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="lifeEnergy" className="col-sm-6 col-form-label">
                    Life Energy
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="number"
                      className="form-control"
                      id="lifeEnergy"
                      name="lifeEnergy"
                      value={lifeEnergy}
                      onChange={(e) =>
                        this.setState({ lifeEnergy: e.target.value })
                      }
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
                        <select
                          className="form-control"
                          id="category"
                          name="category"
                          onChange={(e) =>
                            this.setState({ category: e.target.value })
                          }
                          value={category}
                        >
                          <option>Food</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="subcategory"
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
                          value={isAspiration}
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="isAspiration"
                          name="isAspiration"
                          onChange={(e) =>
                            this.setState({
                              isAspiration: e.target.checked,
                            })
                          }
                        />
                      </div>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          id="subcategory"
                          name="subcategory"
                          value={subcategory}
                          onChange={(e) =>
                            this.setState({ subcategory: e.target.value })
                          }
                        ></input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="q1"
                        className="col-sm-6 col-form-label q_label"
                      >
                        Did I receive fullfilment, satisfaction, and value in
                        proportion to life energy spent?
                      </label>
                      <div className="col-sm-6 q_toggle">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="q1"
                            id="q1-1"
                            value="-1"
                          />
                          <label class="form-check-label" for="q1-1">
                            Not at all
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="q1"
                            id="q1-2"
                            value="0"
                          />
                          <label class="form-check-label" for="q1-2">
                            Sort of
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="q1"
                            id="q1-3"
                            value="1"
                          />
                          <label class="form-check-label" for="q1-3">
                            Definitely
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="q2"
                        className="col-sm-6 col-form-label q_label"
                      >
                        Is this expenditure of life energy in alinment with my
                        values and life purpose?
                      </label>
                      <div className="col-sm-6 q_toggle">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="q2"
                            id="q2-1"
                            value="-1"
                          />
                          <label class="form-check-label" for="q2-1">
                            Not really
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="q2"
                            id="q2-2"
                            value="0"
                          />
                          <label class="form-check-label" for="q2-2">
                            Somewhat
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="q2"
                            id="q2-3"
                            value="1"
                          />
                          <label class="form-check-label" for="q2-3">
                            Absolutely
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="q3"
                        className="col-sm-6 col-form-label q_label"
                      >
                        How might this expenditure change if I didn't have to
                        work for money?
                      </label>
                      <div className="col-sm-6 q_toggle">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="q3"
                            id="q3-1"
                            value="-1"
                          />
                          <label class="form-check-label" for="q3-1">
                            No change
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="q3"
                            id="q3-2"
                            value="0"
                          />
                          <label class="form-check-label" for="q3-2">
                            Some Change
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="q3"
                            id="q3-3"
                            value="1"
                          />
                          <label class="form-check-label" for="q3-3">
                            Completely
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <button className="btn btn-success" onClick={this.formSubmit}>
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
