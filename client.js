const net = require("net");
const { IP, PORT, NAME, GREETING } = require("./constants");

// establishes a connection with the game server
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
  });

  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {connect};