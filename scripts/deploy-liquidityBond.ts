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

  const principle = "0xB56B90d9733eE494263748134b4e0BAbD5CF224a"; 
  
  // Get the Treasury Contract
  const Treasury = await ethers.getContractFactory("contracts/Treasury.sol:AuxlTreasury")
  const treasury = Treasury.attach("0x50cf6C7FDFFe87A73A70FeE9c794A971772181EF");
  const dao = "0x50cf6C7FDFFe87A73A70FeE9c794A971772181EF";

  //If Bond Calculator is not deployed, uncomment the below lines...
  const BondCalculator = await ethers.getContractFactory("contracts/AuxlBondingCalculator.sol:AuxlBondingCalculator")
  //const bondCalculator = await BondCalculator.deploy();
  const bondCalculator = "0x92c7e16d66ddcc1fdcccbdd2eeb507eed0baecb2"; //Liquidity Token Bonds


  // We get the contract to deploy
  const BondDepository = await ethers.getContractFactory("contracts/BondDepository.sol:AuxlBondDepository");
  const bondDepository = await BondDepository.deploy(auxl, principle, treasury.address, dao, bondCalculator); //Set parameters

  await bondDepository.deployed();

  console.log("New Bond Depository deployed to:", bondDepository.address);

  console.log("Initialising Bond Depository...", bondDepository.address);
  
  await bondDepository.initializeBondTerms(50, '10000', '1000', 0, 0, 432000);
  //await bondDepository.setBondTerms(4, '10000')

  console.log("Setting token in the Treasury...");

  await treasury.queue(5, principle);

  await treasury.toggle(5, principle, bondCalculator)

  console.log("Setting bond in the Treasury...");

  await treasury.queue(4, bondDepository.address);
  await treasury.toggle(4, bondDepository.address, bondCalculator);
  console.log("Script complete")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

