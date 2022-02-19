async function main() {
  const MyCryptoCharlotte = await hre.ethers.getContractFactory("MyCryptoCharlotte");
  const myCryptoCharlotte = await MyCryptoCharlotte.deploy("https://gateway.pinata.cloud/ipfs/QmWgmhXiTqg6xRyciWkbMPVYVPzfhGgoT789CRU7kh1faC/");

  await myCryptoCharlotte.deployed();

  console.log("MyCryptoCharlotte deployed to:", myCryptoCharlotte.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
