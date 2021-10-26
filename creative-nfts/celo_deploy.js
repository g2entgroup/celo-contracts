const Web3 = require('web3')
const ContractKit = require('@celo/contractkit')

const web3 = new Web3('https://celo-alfajores--rpc.datahub.figment.io/apikey/e0ef52d1c14a9ac35b0ab5d970abdf3d/')
const kit = ContractKit.newKitFromWeb3(web3)
const data = require('./artifacts/contracts/CreativeNFT.sol/CreativeNFT.json')
const Account = require('./celo_account');

async function CreativeNFT() {
    const account = Account.getAccount()
    kit.connection.addAccount(account.privateKey) 
    let tx = await kit.connection.sendTransaction({
        from: account.address,
        data: data.bytecode
    })
     return tx.waitReceipt()
}
module.exports = {
    CreativeNFT
}