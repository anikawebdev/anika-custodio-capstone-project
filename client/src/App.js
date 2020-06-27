import React, { Component } from "react";
//import logo from "./logo.svg";
import axios from "axios";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Details from "./component/Details";
import Overview from "./component/Overview";
import AddOnTransactionList from "./component/AddOnTransactionList";
import "./styles/App.css";

const URL_Transactions = `http://localhost:5000/transactions`;
const URL_MoneyIn = `http://localhost:5000/moneyIn`;
const URL_MoneyOut = `http://localhost:5000/moneyOut`;

class App extends Component {
  state = {
    moneyInList: [],
    moneyOutList: [],
    transactions: [],
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    // Get all transactions
    axios.get(URL_Transactions).then((response) => {
      this.setState({
        transactions: response.data,
      });
    });
    // Get money in transations
    axios.get(URL_MoneyIn).then((response) => {
      this.setState({
        moneyInList: response.data,
      });
    });
    // Get money out transactions
    axios.get(URL_MoneyOut).then((response) => {
      this.setState({
        moneyOutList: response.data,
      });
    });
  };

  render() {
    return (
      <div>
        <Header />

        <section className="main">
          <Route
            path="/"
            render={(props) => {
              return (
                <React.Fragment>
                  <Balance
                    moneyInList={this.state.moneyInList}
                    moneyOutList={this.state.moneyOutList}
                    {...props}
                  />
                </React.Fragment>
              );
            }}
          />

          <Switch>
            <Route
              path="/transactions"
              render={(props) => {
                return (
                  <React.Fragment>
                    <AddOnTransactionList
                      transactionList={this.state.transactions}
                      getData={this.getData}
                      {...props}
                    />
                  </React.Fragment>
                );
              }}
            />

            <Route
              path="/details"
              render={(props) => {
                return (
                  <React.Fragment>
                    <Details
                      moneyInList={this.state.moneyInList}
                      moneyOutList={this.state.moneyOutList}
                      getData={this.getData}
                      {...props}
                    />
                  </React.Fragment>
                );
              }}
            />

            <Route path="/overview" component={Overview} />
            <Redirect exact from="/" to="/overview" />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
