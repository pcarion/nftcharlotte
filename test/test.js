const { expect } = require("chai");

describe("MyCryptoCharlotte", function () {
  it("Should return the right name and symbol", async function () {
    const MyCryptoCharlotte = await hre.ethers.getContractFactory("MyCryptoCharlotte");
    const myCryptoCharlotte = await MyCryptoCharlotte.deploy("MyCryptoCharlotte", "CHA");

    await myCryptoCharlotte.deployed();
    expect(await myCryptoCharlotte.name()).to.equal("MyCryptoCharlotte");
    expect(await myCryptoCharlotte.symbol()).to.equal("CHA");
  });
});
