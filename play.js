const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: '50541',  // PORT number here,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write ("Name: P-J");
  });
  conn.setEncoding("utf8");
  // interpret incoming data as text
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect,
};


// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  // your code here
};