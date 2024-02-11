const importWallet = require("./src/importWallet");
const createWallet = require("./src/walletCreate");
const readContract = require("./src/contractRead");
const balanceETH = require("./src/balanceETH");
const checkSafetyV2 = require("./src/checkSafetyV2");
module.exports = {
    importWallet,
    createWallet,
    readContract,
    balanceETH,
    checkSafetyV2,
}