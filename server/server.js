// Create server
const express = require("express");
const server = express();
const cors = require("cors");

const { uuid } = require("uuidv4");

// Port
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Listening on port ${port}...`));
