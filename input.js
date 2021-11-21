const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, SAY_JUMP_KEY, SAY_MAN_KEY, SAY_LOOK_KEY, SAY_OUT_KEY } = require('./constants');

// Stores the active TCP connection object.
let connection;

const directions = {
  w: MOVE_UP_KEY,
  a: MOVE_LEFT_KEY,
  s: MOVE_DOWN_KEY,
  d: MOVE_RIGHT_KEY
};

const phrases = {
  j: SAY_JUMP_KEY,
  m: SAY_MAN_KEY,
  l: SAY_LOOK_KEY,
  o: SAY_OUT_KEY
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

// setup interface to handle user input from stdin

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