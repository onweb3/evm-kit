const ethers = require('ethers');
async function checkSafetyV2(rpcUrl,contractAddress , uniswapFactoryAddress, wethAddress) {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  try {

    const contract = new ethers.Contract(contractAddress, [], provider);
    // Get contract balance
    const uniswapFactoryContract = new ethers.Contract(uniswapFactoryAddress, ['function getPair(address,address) view returns (address)'], provider);
    const tradingPairAddress = await uniswapFactoryContract.getPair(wethAddress, contractAddress);
    const contractBalance = (await provider.getBalance(contractAddress));

    const bign = ethers.BigNumber.from(contractBalance);
    const read = bign.toString();
      // Get contract transactions
    const transactions = await provider.getTransactionCount(contractAddress);
    const tokenContract = new ethers.Contract(contractAddress, [
      'function name() view returns (string)',
      'function symbol() view returns (string)',
      'function decimals() view returns (uint8)',
    ], provider);
    const WETH = new ethers.Contract(wethAddress, [
      'function name() view returns (string)',
      'function symbol() view returns (string)',
      'function decimals() view returns (uint8)',
    ], provider);

    // Get token name
    const name = await tokenContract.name();
    const name0 = await WETH.name();
    // Get token symbol
    const symbol = await tokenContract.symbol();
    const symbol0 = await WETH.symbol();

    // Get decimal places
    const decimals = await tokenContract.decimals();
    const decimals0 = await WETH.decimals();

    const uniswapPairContract = new ethers.Contract(tradingPairAddress, [
      'function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)',
    ], provider);
    const { reserve0, reserve1 } = await uniswapPairContract.getReserves();
    const token0Decimals = decimals0;
    const token1Decimals = decimals;

    const reserve0Value = ethers.utils.formatUnits(reserve0, token0Decimals);
    const reserve1Value = ethers.utils.formatUnits(reserve1, token1Decimals);

    // Calculate the current bid and ask prices
    const currentBidPrice = reserve0Value / reserve1Value;
    const currentAskPrice = reserve1Value / reserve0Value;
    const tokenPrice = reserve0Value / reserve1Value;
    console.log(`Current Bid Price: ${currentBidPrice}`);
    console.log(`Current Ask Price: ${currentAskPrice}`);
    const highBidThreshold = 1.05; // 5% above the current bid price
    const highAskThreshold = 1.05; // 5% above the current ask price
    let bidHigh;
    let askHigh;
    if (currentBidPrice > highBidThreshold) {
      bidHigh = "The bid price is considered high."
    } else {
      bidHigh = "The bid price is not considered high."
    }

    if (currentAskPrice > highAskThreshold) {
      askHigh = "The ask price is not considered high."
    } else {
      askHigh = "The ask price is not considered high."
    }

    return{
        tokenName : name,
        tokenSymbol : symbol,
        tokenDecimal : decimals,
        tokenPrice : tokenPrice,
        WETH : [name0,symbol0,decimals0],
        contractBalance : read,
        transactionsCount : transactions,
        tradingPairAddress : tradingPairAddress,
        bidPriceValue : currentBidPrice,
        askPriceValue : currentAskPrice,
        bidPriceMessage : bidHigh,
        askPriceMessage : askHigh,

    }  

  } catch (error) {
    console.error('Error:', error.message);
  }
}
module.exports = checkSafetyV2;