const fs = require("fs");

const getMoneyOut = (type) => {
  const transactions = fs.readFileSync("./model/transactions.json");

  const moneyOutTransactions = JSON.parse(transactions).filter(
    (transaction) => transaction.type === "money-out"
  );

  return moneyOutTransactions;
};

module.exports = getMoneyOut;
