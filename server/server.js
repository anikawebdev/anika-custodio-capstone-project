// Create server
const express = require("express");
const server = express();
const cors = require("cors");

const { uuid } = require("uuidv4");

const addTransaction = require("./controller/addTransaction");
const deleteTransaction = require("./controller/deleteTransaction");
const getMoneyIn = require("./controller/getMoneyIn");
const getMoneyOut = require("./controller/getMoneyOut");
const getTransactions = require("./controller/getTransactions");

// Middleware
server.use(express.json());
server.use(cors());

// Server Get Requests
server.get("/moneyIn", (request, response) => {
  response.json(getMoneyIn());
});

server.get("/moneyOut", (request, response) => {
  response.json(getMoneyOut());
});

server.get("/transactions", (request, response) => {
  response.json(getTransactions());
});

// Server Post Requests
server.post("/transactions", (request, response) => {
  const transaction = {
    id: uuid(),
    timestamp: Date.now(),
    type: request.body.type,
    source: request.body.source,
    amount: request.body.amount,
  };

  addTransaction(transaction);
  response.json(transaction);
});

// Server Delete Requests
server.delete("/transactions/:id", (request, response) => {
  const id = request.params.id;

  deleteTransaction(id);
  response.json(id);
});

// Port
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Listening on port ${port}...`));
