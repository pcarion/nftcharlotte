const { expect } = require("chai");
PINATA_META_BASEURL=process.env['PINATA_META_BASEURL']

describe("MyCryptoCharlotte", function () {
  it("Should return the right name and symbol", async function () {
    const MyCryptoCharlotte = await hre.ethers.getContractFactory("MyCryptoCharlotte");
    const myCryptoCharlotte = await MyCryptoCharlotte.deploy(PINATA_META_BASEURL);

    await myCryptoCharlotte.deployed();
    expect(await myCryptoCharlotte.name()).to.equal("NftCharlotte");
    expect(await myCryptoCharlotte.symbol()).to.equal("CHA");
  });
});
