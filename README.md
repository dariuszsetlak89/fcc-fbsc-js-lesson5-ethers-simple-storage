# freeCodeCamp: Full Blockchain Solidity Course JavaScript - Lesson 5: Ethers.js Simple Storage

## Getting Started

1. Requirements - make sure you have installed:

    - `git` - to check run `git --version`
    - `Node.js` - to check run `node --version`
    - `Yarn` instead of `npm` - to check run `yarn --version`
    - `ganache-gui`, `ganache-cli` or `hardhat network`

2. Setup

    - clone this repo: `git clone`
    - install all dependencies: `yarn`

3. Usage: Windows

    - run your Ganache Lochal Chain by clicking `quickstart` on your ganache application and save the workspace
    - copy the `RPC SERVER` string in your ganache, and place it into your `.env` file
    - copy private key from one of the accounts in Ganache, and paste it into your `.env` file
    - comnpile your code: `yarn compile` (2 files .abi and .bin will be created)
    - run your application: `node deploy.js`

4. Usage: WSL Ubuntu

    - run `yarn add ganache`
    - change server settings in Ganache to `vEthernet (WSL)`
    - run your application: `node deploy.js`

5. Deploying to a testnet

    - export your private key and place it in your `.env` file
    - go to [Alchemy](https://alchemy.com/?a=673c802981) and create a new project on the Goerli Testnet
    - Grab your RPC URL associated with the testnet, and place it into your `.env` file.
    - Make sure you have [testnet ETH](https://faucets.chain.link/) in your account. You can [get some here](https://faucets.chain.link/). You should get testnet ETH for the same testnet that you made a project in Alchemy ie, Goerli
    - run `node deploy.js`.

### SimpleStorage contract deployed on Goerli Testnet network:

[0x28bCF47f575Bc00Eb6bAf2725B359432909768f3](https://goerli.etherscan.io/address/0x28bcf47f575bc00eb6baf2725b359432909768f3)
