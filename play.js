const {connect} = require('./client');
const {setupInput} = require('./input');

const { builtinModules } = require("module");
const net = require("net");

const conn = connect();
console.log("Connecting ...");

setupInput(conn);


// setup interface to handle user input from stdin