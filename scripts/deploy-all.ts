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

  //Deploy Token 
   const TokenContract = await ethers.getContractFactory("contracts/AuxlERC20.sol:AuxlERC20Token");
   const auxlToken = await TokenContract.deploy();
   await auxlToken.deployed();
   console.log("Auxl Token Address: ", auxlToken.address);

   //Deploy Staking Token Contract

   const sTokenContract = await ethers.getContractFactory("contracts/StakedAuxlERC20.sol:StakedAuxilium");
   const sAuxlToken = await sTokenContract.deploy();
   await sAuxlToken.deployed();
   console.log("Staked AUXL token deployed to: ", sAuxlToken.address)

   //Deploy Treasury Contract 

   const Treasury = await ethers.getContractFactory("contracts/Treasury.sol:AuxlTreasury")
   const treasury = await Treasury.deploy(auxlToken.address, "0x130966628846bfd36ff31a822705796e8cb8c18d", 0, 0);
   await treasury.deployed();
   console.log("Treasury deployed to: ", treasury.address)

   //Deploy Staking Contract, Helper, Warm Up and Distributor

   const StakingContract = await ethers.getContractFactory("contracts/Staking.sol:AuxlStaking");
   //Params: Token, Staking Token, Epoch length, First Epoch that has rewards, First Epoch time in Unix seconds
   const stakingContract = await StakingContract.deploy(auxlToken.address, sAuxlToken.address, 28800, 0, 1642287973);
   await stakingContract.deployed();
   console.log("Staking Contract deployed to: ", stakingContract.address);

   //Deploy Staking Contract, Helper, Warm Up and Distributor

   const StakingWarmup = await ethers.getContractFactory("contracts/StakingWarmup.sol:StakingWarmup");
   const stakingWarmup = await StakingWarmup.deploy(stakingContract.address, sAuxlToken.address);
   await stakingWarmup.deployed();
   console.log("Staking Warmup Deployed To: ", stakingWarmup.address);

   const StakingDistributor = await ethers.getContractFactory("contracts/StakingDistributor.sol:Distributor");
   const stakingDistributor = await StakingDistributor.deploy(treasury.address, auxlToken.address, 28800, 1642287973);
   await stakingDistributor.deployed();
   console.log("Distributor Deployed To: ", stakingDistributor.address);

   const StakingHelper = await ethers.getContractFactory("contracts/StakingHelper.sol:StakingHelper");
   const stakingHelper = await StakingHelper.deploy(stakingContract.address, auxlToken.address);
   await stakingHelper.deployed();
   console.log("Staking Helper contract deployed to: ", stakingHelper.address)

   // Set the Distributor and WarmUp in the Staking Contract

   console.log("Setting Distributor and Warmup in the Staking Contract...")
   await stakingContract.setContract(0, stakingDistributor.address);
   await stakingContract.setContract(1, stakingWarmup.address);
   console.log("Staking contract setup, complete")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
