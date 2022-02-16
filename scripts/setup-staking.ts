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

  // Required Constants - Script will fail without addresses

  const auxlTokenAddress = "";
  const sAuxlTokenAddress = "";
  const nftAddress = "";
  const treasuryAddress = "";
   
   //Deploy Staking Contract, Helper, Warm Up and Distributor

   const StakingContract = await ethers.getContractFactory("contracts/Staking.sol:AuxlStaking");
   //Params: Token, Staking Token, Epoch length, First Epoch that has rewards, First Epoch time in Unix seconds
   const stakingContract = await StakingContract.deploy(auxlTokenAddress, sAuxlTokenAddress, 28800, 0, 1642287973);
   await stakingContract.deployed();
   console.log("Staking Contract deployed to: ", stakingContract.address);

   const StakingWarmup = await ethers.getContractFactory("contracts/StakingWarmup.sol:StakingWarmup");
   const stakingWarmup = await StakingWarmup.deploy(stakingContract.address, sAuxlTokenAddress);
   await stakingWarmup.deployed();
   console.log("Staking Warmup Deployed To: ", stakingWarmup.address);

   const StakingDistributor = await ethers.getContractFactory("contracts/StakingDistributor.sol:Distributor");
   const stakingDistributor = await StakingDistributor.deploy(treasuryAddress, auxlTokenAddress, 28800, 1642287973);
   await stakingDistributor.deployed();
   console.log("Distributor Deployed To: ", stakingDistributor.address);

   const StakingHelper = await ethers.getContractFactory("contracts/StakingHelper.sol:StakingHelper");
   const stakingHelper = await StakingHelper.deploy(stakingContract.address, auxlTokenAddress);
   await stakingHelper.deployed();
   console.log("Staking Helper contract deployed to: ", stakingHelper.address)

   // Set the Distributor and WarmUp in the Staking Contract

   console.log("Setting Distributor and Warmup in the Staking Contract...")
   await stakingContract.setContract(0, stakingDistributor.address);
   await stakingContract.setContract(1, stakingWarmup.address);
   console.log("Staking contract setup, complete")


   //Deploy NFT Staking Contracts

   const LegendaryNftStakingContract = await ethers.getContractFactory("contracts/StakingWithNFT.sol:AuxlStaking");
   //Params: Token, Staking Token, Epoch length, First Epoch that has rewards, First Epoch time in Unix seconds
   const legendaryNftStakingContract = await LegendaryNftStakingContract.deploy(auxlTokenAddress, sAuxlTokenAddress, 28800, 0, 1642287973);
   await legendaryNftStakingContract.deployed();
   console.log("Legendary NFT Staking Contract deployed to: ", legendaryNftStakingContract.address);

   const EpicNftStakingContract = await ethers.getContractFactory("contracts/StakingWithNFT.sol:AuxlStaking");
   //Params: Token, Staking Token, Epoch length, First Epoch that has rewards, First Epoch time in Unix seconds
   const epicNftStakingContract = await EpicNftStakingContract.deploy(auxlTokenAddress, sAuxlTokenAddress, 28800, 0, 1642287973);
   await epicNftStakingContract.deployed();
   console.log("Epic NFT Staking Contract deployed to: ", epicNftStakingContract.address);

   const RareNftStakingContract = await ethers.getContractFactory("contracts/StakingWithNFT.sol:AuxlStaking");
   //Params: Token, Staking Token, Epoch length, First Epoch that has rewards, First Epoch time in Unix seconds
   const rareNftStakingContract = await RareNftStakingContract.deploy(auxlTokenAddress, sAuxlTokenAddress, 28800, 0, 1642287973);
   await rareNftStakingContract.deployed();
   console.log("Rare NFT Staking Contract deployed to: ", rareNftStakingContract.address);

   const UncommonNftStakingContract = await ethers.getContractFactory("contracts/StakingWithNFT.sol:AuxlStaking");
   //Params: Token, Staking Token, Epoch length, First Epoch that has rewards, First Epoch time in Unix seconds
   const uncommonNftStakingContract = await UncommonNftStakingContract.deploy(auxlTokenAddress, sAuxlTokenAddress, 28800, 0, 1642287973);
   await uncommonNftStakingContract.deployed();
   console.log("Uncommon NFT Staking Contract deployed to: ", uncommonNftStakingContract.address);

   const CommonNftStakingContract = await ethers.getContractFactory("contracts/StakingWithNFT.sol:AuxlStaking");
   //Params: Token, Staking Token, Epoch length, First Epoch that has rewards, First Epoch time in Unix seconds
   const commonNftStakingContract = await CommonNftStakingContract.deploy(auxlTokenAddress, sAuxlTokenAddress, 28800, 0, 1642287973);
   await commonNftStakingContract.deployed();
   console.log("Common NFT Staking Contract deployed to: ", commonNftStakingContract.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
