// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const auxlTokenAddress = "0xC7FA9a29dD6F0AAb0E582B94F572B0CfdE134249";
  const treasuryAddress = "0x37AC509E65403965223dE0F4BD18198BD235D059";
  
  // We get the contract to interact with
  const TokenContract = await ethers.getContractFactory("contracts/AuxlERC20.sol:AuxlERC20Token")
  const auxlToken = TokenContract.attach(auxlTokenAddress);
//   const StakingContract = await ethers.getContractFactory("contracts/Staking.sol;AuxlStaking")
//   const stakingContract = StakingContract.attach("StakingAddress");

  const signer = ethers.provider.getSigner();

  console.log("Minting initial supply...")
  await auxlToken.mint(signer.getAddress(), '100000000000')

  console.log("Setting Vault as the Treasury in Token Contract");
  //Params
  await auxlToken.setVault(treasuryAddress); //Set Vault in treasury 
  const vault = await auxlToken.vault();
  console.log("Vault set to: ", vault)

  // Set the Distributor and WarmUp in the Staking Contract

//   console.log("Setting Distributor and Warmup in the Staking Contract...")
//   await stakingContract.setContract(0, 'stakingDistributor.address');
//   await stakingContract.setContract(1, 'stakingWarmup.address');
//   console.log("Staking contract setup, complete")
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
