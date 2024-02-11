const importWallet = require("./src/importWallet");
const createWallet = require("./src/walletCreate");
const readContract = require("./src/contractRead");
const nativeBalance = require("./src/balanceETH");
module.exports = {
    importWallet,
    createWallet,
    readContract,
    nativeBalance,
}