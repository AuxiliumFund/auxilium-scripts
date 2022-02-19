
import { ethers } from "hardhat";

async function main() {

	const NftContract = await ethers.getContractFactory("contracts/Mock1155.sol:MockGenesisNFT");
	const nftContract = await NftContract.deploy();
	await nftContract.deployed();
	console.log("Nft Contract Deployed to: ", nftContract.address)

}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
})