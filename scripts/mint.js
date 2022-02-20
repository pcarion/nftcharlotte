const CHARLOTTE_CONTRACT_ADDRESS=process.env['CHARLOTTE_CONTRACT_ADDRESS'];
const RINKEBY_PRIVATEKEY_1=process.env['RINKEBY_PRIVATEKEY_1'];

const NFT = require('../artifacts/contracts/MyCryptoCharlotte.sol/MyCryptoCharlotte.json');

async function main() {
  const [minter] = await ethers.getSigners(); //get the account to mint the contract
  console.log("Minting contracts with the account:", minter.address);

  const nftContract = new ethers.Contract(
    CHARLOTTE_CONTRACT_ADDRESS,
    NFT.abi,
    minter
  )
  const nftTx = await nftContract.mint(minter.address)
	console.log('Mining....', nftTx)

  // const MyContract = await ethers.getContractFactory("MyCryptoCharlotte");
  // const contract = await MyContract.attach(
  //   CHARLOTTE_CONTRACT_ADDRESS
  // );

  // // Now you can call functions of the contract
  // const mintResult=await contract.mint(RINKEBY_PRIVATEKEY_1);
  // console.log('Mint result:', mintResult);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
