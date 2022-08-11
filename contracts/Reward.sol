// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "hardhat/console.sol";

contract Reward is ERC1155 {
    constructor(string memory baseURI) ERC1155(baseURI) {}

    function mint(bytes32 _hash, bytes memory _signature) external {
        require(_hash.length > 0, "must include (fake) hash");
        require(_signature.length > 0, "must include (fake) signature");

        _mint(msg.sender, 1, 1, "");
    }
}
