const { IP, PORT } = require("./constants");

const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host : IP, // IP address here,
    port : PORT,  // PORT number here,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write ("Name: P-J");
  });
  conn.setEncoding("utf8");
  // interpret incoming data as text
  return conn;
};


module.exports = {
  connect,
};