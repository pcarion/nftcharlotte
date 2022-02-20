PINATA_META_BASEURL=process.env['PINATA_META_BASEURL']

async function main() {
  const [deployer] = await ethers.getSigners(); //get the account to deploy the contract
  console.log("Deploying contracts with the account:", deployer.address);


  const MyCryptoCharlotte = await hre.ethers.getContractFactory("MyCryptoCharlotte");
  const myCryptoCharlotte = await MyCryptoCharlotte.deploy(PINATA_META_BASEURL);

  await myCryptoCharlotte.deployed();

  console.log("MyCryptoCharlotte deployed to:", myCryptoCharlotte.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
