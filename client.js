const net = require("net");
// establishes a connection with the game server
const { IP, PORT, NAME, GREETING } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(GREETING);
    conn.write(`Name: ${NAME}`);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 500);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500);
  });

  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {connect};