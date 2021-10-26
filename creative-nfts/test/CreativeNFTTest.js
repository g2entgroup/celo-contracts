const { expect } = require("chai");

describe("CreativeNFT Test", function() {
    it("Should mint visualArt", async function() {

        const accounts = await ethers.getSigners();

        const CreativeNFT = await ethers.getContractFactory("CreativeNFT");
        const creativeNFT = await CreativeNFT.deploy();

        await creativeNFT.mintVisualArt();
        const balance = await creativeNFT.balanceOf(accounts[0].address,0)
        expect(1).to.equal(Number(balance.toString()));
    });
    it("Should mint music",async function () {
        const accounts = await ethers.getSigners();

        const CreativeNFT = await ethers.getContractFactory("CreativeNFT");
        const creativeNFT = await CreativeNFT.deploy();

        await creativeNFT.mintVisualArt();
        await creativeNFT.mintMusic();
        const balance = await creativeNFT.balanceOf(accounts[0].address, 1)
        expect(1).to.equal(Number(balance.toString()));
    });
});
