
import { BigNumber } from '@ethersproject/bignumber';
import { ethers } from 'hardhat';

async function main () {

	const signer = ethers.provider.getSigner();

	
	const MockTokenContract = await ethers.getContractFactory("contracts/MockStable.sol:ERC20Mock");
	const mockToken = await MockTokenContract.deploy('Fake Dollar', 'FUSD', signer.getAddress(), '10000000000000000000000');

	await mockToken.deployed();

	console.log("Mock Token deployed to:", mockToken.address)

}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
})