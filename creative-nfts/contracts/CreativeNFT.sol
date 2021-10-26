//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';

contract CreativeNFT is ERC1155 {
    uint256 public constant VISUALART = 0;
    uint256 public constant MUSIC = 1;

     constructor() ERC1155("https://gateway.pinata.cloud/ipfs/QmTN32qBKYqnyvatqfnU8ra6cYUGNxpYziSddCatEmopLR/metadata/api/item/{id}.json") {
  }
      //If you do not have any VISUALART the contract will let you buy one
    function mintVisualArt() public{
     require(balanceOf(msg.sender, VISUALART) == 0,"you already have VisualArt ");
     _mint(msg.sender,VISUALART,1,"0x000");
    }

    //If you do not have any MUSIC and have VISUALART the contract will let you buy the Music
    function mintMusic() public{
     require(balanceOf(msg.sender,VISUALART) > 0,"you need to have VisualArt");
     require(balanceOf(msg.sender,MUSIC) == 0,"you already have Music");
     _mint(msg.sender,MUSIC,1,"0x000");
    }
}
