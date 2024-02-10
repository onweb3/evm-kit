const { ethers } = require('ethers');

// Get wallet address from private key
async function importWallet(privateKey) {
    try {
        const wallet = new ethers.Wallet(privateKey);
        return {
            status: "200",
            wallet: wallet.address,
            privateKey: privateKey
        };
    } catch (error) {
        return error;
    }
}

module.exports = importWallet;
