const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const link = connect();

setupInput(link);