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

  const auxl = "0xC1e77Bb87BAa3A6918dEb560Cd0874C7662b344e";

  const principle = "0x5db0735cf88f85e78ed742215090c465979b5006"; 
  
  // Get the Treasury Contract
  const Treasury = await ethers.getContractFactory("contracts/Treasury.sol:AuxlTreasury")
  const treasury = Treasury.attach("0x50cf6C7FDFFe87A73A70FeE9c794A971772181EF");
  const dao = "0x50cf6C7FDFFe87A73A70FeE9c794A971772181EF";

  const bondCalculator = "0x92c7e16d66ddcc1fdcccbdd2eeb507eed0baecb2"; //Liquidity Token Bonds
  //const bondCalculator = "0x0000000000000000000000000000000000000000" //Reserve Token Bonds


  // We get the contract to deploy
  const BondDepository = await ethers.getContractFactory("contracts/BondDepository.sol:AuxlBondDepository");
  const bondDepository = await BondDepository.deploy(auxl, principle, treasury, dao, bondCalculator); //Set parameters

  await bondDepository.deployed();

  console.log("New Bond Depository deployed to:", bondDepository.address);

  console.log("Setting token in the Treasury...");

  await treasury.queue(5, principle);

  console.log("Setting bond in the Treasury...");

  await treasury.queue(4, bondDepository.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

