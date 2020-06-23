const fs = require("fs");

const deleteTransaction = (id) => {
  const transactions = fs.readFileSync("./model/transactions.json");

  const parseTransaction = JSON.parse(transactions);

  // Get the index
  const findTransactionIndex = parseTransaction.findIndex(
    (transaction) => transaction.id === id
  );

  parseTransaction.splice(findTransactionIndex, 1);

  fs.writeFileSync(
    "./model/transactions.json",
    JSON.stringify(parseTransaction)
  );
};

module.exports = deleteTransaction;
