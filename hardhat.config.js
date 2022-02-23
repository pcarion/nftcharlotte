/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: process.env['RINKEBY_ALCHEMY_URL'],
      accounts: [process.env['RINKEBY_PRIVATEKEY_1']]
    }
  }
};
