const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: '50541',  // PORT number here,
  });
  conn.on("connect", (data) => {
    console.log(`you did ${data}`)
    // code that does something when the connection is first established
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();