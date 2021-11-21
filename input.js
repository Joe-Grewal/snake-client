// setup interface to handle user input from stdin

// Stores the active TCP connection object.
let connection;

const directions = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

const phrases = {
  j: 'Say: Jump',
  m: 'Say: Man',
  l: 'Say: Look',
  o: 'Say: Out'
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (directions[key]) {
    connection.write(directions[key]);
  } else if (phrases[key]) {
    connection.write(phrases[key]);
  }
};

const setupInput = function (conn) {
  connection = conn;  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};