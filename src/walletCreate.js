const ethers = require('ethers');

async function createWallet() {
    try {
        // Create a new random wallet
        const evm = ethers.Wallet.createRandom();
        return { // Return the created wallet
            address: evm.address,
            privateKey: evm.privateKey,
            mnemonic: evm.mnemonic.phrase
        }
    } catch (error) {
        console.error("Error:", error);
        throw error; // Throw the error to be caught by the caller
    }
}

module.exports = createWallet; // Export the createWallet function
