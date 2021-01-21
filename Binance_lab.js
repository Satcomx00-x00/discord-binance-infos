//  A Satcomx00-x00 Nodejs Script
const config = require("./config.json");
// const exec = require("child_process").exec;
// #################################################################
import Binance, { ErrorCodes } from 'binance-api-node'

const client = Binance()

// Authenticated client, can make signed calls
const client2 = Binance({
  apiKey: config.BINANCE.BINANCE_KEY,
  apiSecret: config.BINANCE.BINANCE_SECRET,
  getTime: xxx, // time generator function, optional, defaults to () => Date.now()
})

client.time().then(time => console.log(time))
// #################################################################