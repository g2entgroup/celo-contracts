require("@nomiclabs/hardhat-waffle");
// import the necessary modules to read the .secret file and the code of celo_account.js.
const fs = require('fs')
const path = require('path')
const privateKeyFile = path.join(__dirname, './.secret')
const Account = require('./celo_account');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// If the .secret file does not exist the task will create a new account if the .secret file exists the task will use the private key to get an address.
task("celo-account", "Prints account address or create a new", async () => {
  fs.existsSync(privateKeyFile) ? console.log(`Address ${Account.getAccount().address}`) : Account.setAccount();
});

// Create a task to deploy
const Deploy = require('./celo_deploy');

task("celo-deploy", "Prints account address or create a new", async () => {
    const tx = await Deploy.CreativeNFT();
    console.log(tx);
    console.log(`save the contract address ${tx.contractAddress}`)
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
};
