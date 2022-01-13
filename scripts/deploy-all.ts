// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import 'auxilium-contracts';

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  //Deploy Token 
   const TokenContract = await ethers.getContractFactory("auxilium-contracts/AuxlERC20.sol:AuxlERC20Token");
   const auxlToken = await TokenContract.deploy();

   await auxlToken.deployed();
   console.log("Auxl Token Address: ", auxlToken.address);

   //Deploy Staking Token Contract

   const sTokenContract = await ethers.getContractFactory("auxilium-contracts/StakedAuxlERC20.sol:StakedAuxilium");
   const sAuxlToken = await sTokenContract.deploy();

   await sAuxlToken.deployed();
   console.log("Staked AUXL token deployed to: ", sAuxlToken.address)

   //Deploy Treasury Contract 

   const Treasury = await ethers.getContractFactory("auxilium-contracts/Treasury.sol:AuxlTreasury")
   const treasury = await Treasury.deploy(auxlToken.address, "mimAddress", 0, 0);
   await treasury.deployed();
   console.log("Treasury deployed to:")

   //Deploy Staking Contract Warm Up and Distributor

   const StakingContract = await ethers.getContractFactory("auxilium-contracts/Staking.sol:AuxlStaking");
   const stakingContract = await StakingContract.deploy();
   await stakingContract.deployed();
   console.log("Staking Contract deployed to: ", stakingContract.address);

   const StakingWarmup = await ethers.getContractFactory("auxilium-contracts/StakingWarmup.sol:StakingWarmup");
   const stakingWarmup = await StakingWarmup.deploy();
   await stakingWarmup.deployed();
   console.log("Staking Warmup Deployed To: ", stakingWarmup.address);

   const StakingDistributor = await ethers.getContractFactory("auxilium-contracts/StakingDistributor.sol:Distributor");
   const stakingDistributor = await StakingDistributor.deploy();
   await stakingDistributor.deployed();
   console.log("Distributor Deployed To: ", stakingDistributor.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
