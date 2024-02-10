const { ethers } = require('ethers');

// Set up your provider


// Create a contract instance

// Read from the smart contract
async function readFromContract(provider, contractAddress, contractABI, privateKey, readFunction) {
	const providerz = new ethers.providers.JsonRpcProvider(provider);
	const wallet = new ethers.Wallet(privateKey, providerz);
	const contract = new ethers.Contract(contractAddress, contractABI, wallet);
	const func = readFunction;
  try {
    // Call a view or pure function
    const result = await contract[func]();
	return {
		result:result
	};
  } catch (error) {
    console.error('Error reading from contract:', error);
  }
}


module.exports = readFromContract;