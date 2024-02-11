const { ethers } = require('ethers');
// Function to find ETH balance in wallet
async function balanceETH(walletAddress , rpcUrl) {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  try {
    // Get ETH balance
    const ethBalance = await provider.getBalance(walletAddress);
    const result = ethers.utils.formatEther(ethBalance);
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
}
module.exports = balanceETH();
