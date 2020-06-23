const fs = require("fs");

const addTransaction = (transaction) => {
  const transactions = fs.readFileSync("./model/transactions.json");

  const parseTransaction = JSON.parse(transactions);

  parseTransaction.push(transaction);

  fs.writeFileSync(
    "./model/transactions.json",
    JSON.stringify(parseTransaction)
  );
};

module.exports = addTransaction;
