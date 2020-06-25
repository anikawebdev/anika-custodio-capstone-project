import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Details extends Component {
  handleDelete = (id) => {
    console.log("handleDelete", id);
    axios
      .delete(`http://localhost:5000/transactions/${id}`)
      .then((response) => {
        console.log(response);
        this.props.getData();
        this.props.history.push("/details");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const moneyIn = this.props.moneyInList.map((moneyInItem) => (
      <li className="money-in-item" key={moneyInItem.id}>
        <span className="money-in-item__source">{moneyInItem.source}</span>
        <span className="money-in-item__amount">{moneyInItem.amount}</span>
        <button onClick={() => this.handleDelete(moneyInItem.id)}> x </button>
      </li>
    ));

    const moneyOut = this.props.moneyOutList.map((moneyOutItem) => (
      <li className="money-out-item" key={moneyOutItem.id}>
        <span className="money-out-item__source">{moneyOutItem.source}</span>
        <span className="money-out-item__amount">{moneyOutItem.amount}</span>
        <button onClick={() => this.handleDelete(moneyOutItem.id)}> x </button>
      </li>
    ));

    return (
      <div className="details">
        <h2>transactions</h2>
        <div className="transaction-details">
          <div>
            <h3>hello money</h3>
            <ul className="money-in-list">{moneyIn}</ul>
          </div>

          <div>
            <h3>buhbye money</h3>
            <ul className="money-out-list">{moneyOut}</ul>
          </div>
        </div>

        <Link to="/transactions">
          <button className="button--big">add item</button>
        </Link>
      </div>
    );
  }
}

export default Details;
