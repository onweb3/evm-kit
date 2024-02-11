# EVM Web2 Kit

Simple package to initiate a Centralized EVM Project

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Installation

To install 

```bash
  npm i evm-web2-kit
```


## Usage/Examples

```javascript
//Create an EVM Based Wallet with private key and mnemonic

const {createWallet}  = require("evm-web2-kit")

createWallet().then(evm => {
    console.log("Wallet created:", evm.address);
    console.log("Wallet created:", evm.privateKey);
    console.log("Wallet created:", evm.mnemonic);
}).catch(error => {
    console.error("Error creating wallet:", error);
});


//Import an EVM Based Wallet using Private Key
const importWallet  = require("evm-web2-kit")

const privateKey = 'YOUR_PRIVATE_KEY'
importWallet(privateKey)
    .then(result => {
        console.log("Result:", result);
    })
    .catch(error => {
         console.error("Error:", error);
  });


  //Read a Contract Function
const readContract  = require("evm-web2-kit")

const provider = "RPC_URL_OF_EVM";
const contractAddress = "SMARTCONTRACT_ADDRESS"
const contractABI = "CONTRACT_ABI"
const privateKey = "YOUR_PRIVATE_KEY"
const yourFunction = "FUNCTION_TO_READ_ON_SMARTCONTRACT"

readContract(provider, contractAddress, contractABI, privateKey, yourFunction)
.then(result => {
    console.log("Result:", result);
})
.catch(error => {
    console.error("Error:", error);
});


//Get Safety of Smartcontract

const checkSafetyV2 = require("evm-web2-kit");
const rpcUrl = 'https://bsc-pokt.nodies.app';
const contractAddress = '0x022d9995f0f3070341938de58509168ce5f1bc9c';
const uniswapFactoryAddress = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73';
const wethAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';

checkSafetyV2(rpcUrl,contractAddress , uniswapFactoryAddress, wethAddress).then(result =>{
    console.log(result);
}).catch(error =>{
    console.log(error);
})

```


## Warning

This package uses private key and other sensitive information. please make sure to keep your private key safe under .env file.
never publish any codes with private keys as you will lose your wallet balance if got leaked. ignore .env file before publishing.
this package can be used only to make web3 functionalities easy to use for web2. 
by using this package developers can create their own web wallets or centralized ewallets.

