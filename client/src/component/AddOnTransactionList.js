import React, { Component } from "react";
import axios from "axios";

class HelloMoney extends Component {
  state = {
    type: "money-in",
    source: "",
    amount: "",
  };

  handleType = (event) => {
    this.setState({
      type: event.target.value,
    });
  };

  handleSource = (event) => {
    this.setState({
      source: event.target.value,
    });
  };

  handleAmount = (event) => {
    this.setState({
      amount: Number(event.target.value),
    });
  };

  handleAddMoneyInTransaction = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:5000/transactions`, this.state)
      .then((result) => {
        console.log("TRANSACTION SAVED", result);
        this.props.getData();
        this.props.history.push("/details");
      });
  };

  render() {
    return (
      <section className="add-transaction">
        <h2 className="add-transaction__title">hello money OR buhbye money</h2>
        <div className="add-transaction__wrapper">
          <div className="form-wrapper container">
            <form className="form" onSubmit={this.handleAddMoneyInTransaction}>
              <label htmlFor="form__source" className="form__input-source">
                where did the money come from? or where is it going?
              </label>
              <textarea
                id="form__source"
                className="form__source"
                placeholder="enter source or location here"
                onChange={this.handleSource}
              ></textarea>
              <label htmlFor="form__amount" className="form__input-amount">
                how much?
              </label>
              <textarea
                id="form__amount"
                className="form__amount"
                placeholder="enter amount here"
                onChange={this.handleAmount}
              ></textarea>
              <label>
                what do you wanna say to your money?
                <select value={this.state.type} onChange={this.handleType}>
                  <option value="money-in">Hello Money</option>
                  <option value="money-out">BuhBye Money</option>
                </select>
              </label>

              <div className="add-buttons">
                <div className="add-button-wrapper">
                  <button
                    className="button add-button button--big"
                    type="submit"
                  >
                    kaching!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default HelloMoney;
