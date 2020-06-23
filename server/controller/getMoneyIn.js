const fs = require("fs");

const getMoneyIn = (type) => {
  const transactions = fs.readFileSync("./model/transactions.json");

  const moneyInTransactions = JSON.parse(transactions).filter(
    (transaction) => transaction.type === "money-in"
  );
  console.log(moneyInTransactions);
  return moneyInTransactions;
};

module.exports = getMoneyIn;
