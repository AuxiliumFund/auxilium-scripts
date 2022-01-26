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

  const auxlTokenAddress = "0xC1e77Bb87BAa3A6918dEb560Cd0874C7662b344e";

  const principle = "0x0000000000000000000000000000000000000000"; //To be set
  const treasuryAddress = "0x50cf6C7FDFFe87A73A70FeE9c794A971772181EF";
  const dao = "0x0000000000000000000000000000000000000000";
  const bondCalculator = "0x0000000000000000000000000000000000000000";
  //const bondCalculator = "0x0000000000000000000000000000000000000000"

  // We get the contract to interact with
  const Treasury = await ethers.getContractFactory(
    "contracts/Treasury.sol:AuxlTreasury"
  );
  const TokenContract = await ethers.getContractFactory("contracts/AuxlERC20.sol:AuxlåERC20Token")
  const auxlToken = TokenContract.attach(auxlTokenAddress);
  const treasury = Treasury.attach(treasuryAddress); //Set parameters

  //Params
  await auxlToken.setVault(treasuryAddress); //Set Vault in treasury 
  const vault = await auxlToken.vault();
  console.log("Vault set to: ", vault)
  await auxlToken.
  //await treasury.queue();

  console.log("New Bond Depository deployed to:", treasury.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
