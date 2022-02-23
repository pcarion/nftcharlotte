# nftcharlotte
Test project to create a NFT

# test with hardhat

start local node:

```
$ npx hardhat node

Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========

WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.

Account #0: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
...
```

Start a local console to interact with ethersjs API:

```
yarn hardhat console --network  localhost
```

ref: https://dev.to/yakult/a-beginers-guide-four-ways-to-play-with-ethersjs-354a

derivation path: https://ethereum.stackexchange.com/questions/70017/can-someone-explain-the-meaning-of-derivation-path-in-wallet-in-plain-english-s

Deployment in that local blockchain:

```
npx hardhat run scripts/deploy.js --network localhost
```

on the node screen:

```
eth_feeHistory
eth_sendTransaction
  Contract deployment: MyCryptoCharlotte
  Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
  Transaction:         0x4500d10140c0fb79688fb97be384f75b58811f9794de98fd6c858f3f9e8e50be
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            4455407 of 4455407
  Block #1:            0x6bc4b242be8620b33ba3681db31e93fb7b724d27f72640606ad5e2bffc705eb3

eth_chainId
eth_getTransactionByHash
```

## script examples

script 1:

```
const provider = ethers.provider
ethers.provider.connection

{ url: 'http://localhost:8545' }
```

script 2:

```
await provider.getNetwork()

{ chainId: 31337, name: 'unknown' }
```

script 3:

```
> await provider.getBalance(accounts[0].address)

BigNumber { value: "9999996101518875000000" }

> await provider.getBalance(accounts[1].address)

BigNumber { value: "10000000000000000000000" }
```

contract access:

```
const address="0x5fbdb2315678afecb367f032d93f642f64180aa3"
const token = await ethers.getContractAt("MyCryptoCharlot", address)

> token.signer.address
'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
> await token.symbol()
'CHA'
> await token.name()
'NftCharlotte'
>```
