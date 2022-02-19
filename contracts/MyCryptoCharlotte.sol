pragma solidity ^0.8.9;

// SPDX-License-Identifier: BSD-3-Clause

import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

// import "hardhat/console.sol";

contract MyCryptoCharlotte is ERC721PresetMinterPauserAutoId {
    constructor(string memory baseTokenURI) ERC721PresetMinterPauserAutoId("NftCharlotte", "CHA", baseTokenURI) {
        // Nothing
    }
}
