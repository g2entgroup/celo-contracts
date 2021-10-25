const { expect } = require("chai");

describe("ERC1155 Test", function() {
    it("Should mint visualArt", async function() {

        const accounts = await ethers.getSigners();

        const Erc1155 = await ethers.getContractFactory("Erc1155");
        const erc1155 = await Erc1155.deploy();

        await erc1155.mintVisualArt();
        const balance = await erc1155.balanceOf(accounts[0].address,0)
        expect(1).to.equal(Number(balance.toString()));
    });
    it("Should mint music",async function () {
        const accounts = await ethers.getSigners();

        const Erc1155 = await ethers.getContractFactory("Erc1155");
        const erc1155 = await Erc1155.deploy();

        await erc1155.mintVisualArt();
        await erc1155.mintMusic();
        const balance = await erc1155.balanceOf(accounts[0].address, 4)
        expect(1).to.equal(Number(balance.toString()));
    });
});
