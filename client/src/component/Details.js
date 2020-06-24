import React from "react";
//import React, { Component } from "react";
import { Link } from "react-router-dom";

// export class Details extends Component {
//     function Balance(props) {
//         // get money in value
//         const moneyIn = props.moneyInList.map((moneyIn) => {
//           let amount = moneyIn.amount;

//           return amount;
//         });

//         console.log(moneyIn);

//         // get money out value
//         const moneyOut = props.moneyOutList.map((moneyOut) => {
//           let amount = moneyOut.amount;

//           return amount;
//         });

// render() {
//     return (const moneyIn = moneyInList.map((moneyInItem) => (
//             <li className="money-in-item" key={moneyInItem.id}>
//               <span className="money-in-item__source">{moneyInItem.source}</span>
//               <span className="money-in-item__amount">{moneyInItem.amount}</span>
//               <button> delete </button>
//             </li>
//           ));

//           const moneyOut = moneyOutList.map((moneyOutItem) => (
//             <li className="money-out-item" key={moneyOutItem.id}>
//               <span className="money-out-item__source">{moneyOutItem.source}</span>
//               <span className="money-out-item__amount">{moneyOutItem.amount}</span>
//               <button> delete </button>
//             </li>
//           ));

//           return (
//             <>
//               <ul className="money-in-list">{moneyIn}</ul>
//               <ul className="money-out-list">{moneyOut}</ul>
//             </>
//           );)
// }

// }

function Details({ moneyInList, moneyOutList }) {
  const moneyIn = moneyInList.map((moneyInItem) => (
    <li className="money-in-item" key={moneyInItem.id}>
      <span className="money-in-item__source">{moneyInItem.source}</span>
      <span className="money-in-item__amount">{moneyInItem.amount}</span>
      <button> delete </button>
    </li>
  ));

  const moneyOut = moneyOutList.map((moneyOutItem) => (
    <li className="money-out-item" key={moneyOutItem.id}>
      <span className="money-out-item__source">{moneyOutItem.source}</span>
      <span className="money-out-item__amount">{moneyOutItem.amount}</span>
      <button> delete </button>
    </li>
  ));

  return (
    <>
      <ul className="money-in-list">{moneyIn}</ul>
      <ul className="money-out-list">{moneyOut}</ul>
    </>
  );
}

export default Details;
