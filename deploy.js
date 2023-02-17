// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
require('dotenv').config();



console.log('i am starting up')

const provider = new HDWalletProvider({

    mnemonic: {
        phrase: process.env.TEST_ACC_MNEUMONIC
      },
    providerOrUrl:  process.env.TEST_ACC_INFURIA_API 

    });

const web3 = new Web3(provider);
deploy = async () => {
    Accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', Accounts[0])

    result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({ data: bytecode, arguments: ['Hi there!']})
     .send({gas: '1000000' , from: Accounts[0]});

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop()
}

deploy();


