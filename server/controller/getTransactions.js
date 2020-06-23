const fs = require("fs");

const getTransactions = () => {
  const transactions = fs.readFileSync("./model/transactions.json");

  const parseTransactions = JSON.parse(transactions);

  return parseTransactions;
};

module.exports = getTransactions;
