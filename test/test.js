const { expect } = require("chai");

describe("MyCryptoCharlotte", function () {
  it("Should return the right name and symbol", async function () {
    const MyCryptoCharlotte = await hre.ethers.getContractFactory("MyCryptoCharlotte");
    const myCryptoCharlotte = await MyCryptoCharlotte.deploy("https://gateway.pinata.cloud/ipfs/QmWgmhXiTqg6xRyciWkbMPVYVPzfhGgoT789CRU7kh1faC/");

    await myCryptoCharlotte.deployed();
    expect(await myCryptoCharlotte.name()).to.equal("NftCharlotte");
    expect(await myCryptoCharlotte.symbol()).to.equal("CHA");
  });
});
