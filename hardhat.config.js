/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

const rinkebyUrl=process.env['RINKEBY_ALCHEMY_URL'];
const privateKey1 = process.env['RINKEBY_PRIVATEKEY_1'];

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: rinkebyUrl,
      accounts: [privateKey1]
    }
  }
};
