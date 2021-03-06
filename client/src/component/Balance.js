import React from "react";

function Balance(props) {
  // get money in value
  const moneyIn = props.moneyInList.map((moneyIn) => {
    let amount = moneyIn.amount;

    return amount;
  });

  console.log(moneyIn);

  // get money out value
  const moneyOut = props.moneyOutList.map((moneyOut) => {
    let amount = moneyOut.amount;

    return amount;
  });

  console.log(moneyOut);

  //   OK

  function getBalance(moneyIn, moneyOut) {
    let balance = 0;

    for (let i = 0; i < moneyIn.length; i++) {
      balance += moneyIn[i];
    }

    for (let i = 0; i < moneyOut.length; i++) {
      balance -= moneyOut[i];
    }

    return balance;
  }

  let balance = getBalance(moneyIn, moneyOut);

  return <h1>${balance}</h1>;
}

export default Balance;
