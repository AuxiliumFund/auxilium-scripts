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

  const auxl = "0x0000000000000000000000000000000000000000";

  const principle = "0x0000000000000000000000000000000000000000"; //To be set
  const treasury = "0x0000000000000000000000000000000000000000";
  const dao = "0x0000000000000000000000000000000000000000";
  const bondCalculator = "0x0000000000000000000000000000000000000000";
  //const bondCalculator = "0x0000000000000000000000000000000000000000"

  const bondDepositoryAddress = ""


  // We get the contract to deploy
  const BondDepository = await ethers.getContractFactory("contracts/BondDepository.sol:AuxlBondDepository");
  const bondDepository = BondDepository.attach(bondDepositoryAddress); //Set parameters

  //Params
  await bondDepository.setBondTerms();

  console.log("New Bond Depository deployed to:", bondDepository.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
