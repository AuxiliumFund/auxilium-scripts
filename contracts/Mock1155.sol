pragma solidity 0.8.11;

import "openzeppelin-contracts/token/ERC1155/ERC1155.sol";
import "openzeppelin-contracts/access/Ownable.sol";

//SPDX-License-Identifier: UNLICENSED

contract MockGenesisNFT is ERC1155, Ownable {

	//Legendary Rugs

	uint8 public constant CompounderNFT = 0;

	//Epic Rugs

	uint8 public constant SnowBankNFT = 1;	

	//Rare Rugs

	uint8 public constant SquidGameNFT = 2;

	//Uncommon Rugs

	uint8 public constant Uncommon = 3;

	//Common Rugs
    
    uint8 public constant Common = 4;

	//Counts the amount of token variations that exist
	uint8 public tokenIdCount = 0;

	mapping (uint256 => string) public tokenIdToString;

    constructor() ERC1155("https://example.com.{id}.json") {
        _mint(msg.sender, CompounderNFT, 10**18, "");
		tokenIdCount ++;
        _mint(msg.sender, SnowBankNFT, 10**27, "");
		tokenIdCount ++;
        _mint(msg.sender, SquidGameNFT, 1, "");
		tokenIdCount ++;
        _mint(msg.sender, Uncommon, 10**9, "");
		tokenIdCount ++;
        _mint(msg.sender, Common, 10**9, "");
		tokenIdCount ++;
    }

	function addToken(string memory tokenName, uint256 _amount) onlyOwner external {
		uint8 newTokenId = tokenIdCount ++;
		tokenIdToString[newTokenId] = tokenName;
		_mint(msg.sender, newTokenId, _amount, "");
	}
}