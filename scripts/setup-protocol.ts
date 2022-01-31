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
  const treasuryAddress = "0x50cf6C7FDFFe87A73A70FeE9c794A971772181EF";
  
  // We get the contract to interact with
  const TokenContract = await ethers.getContractFactory("contracts/AuxlERC20.sol:AuxlERC20Token")
  const auxlToken = TokenContract.attach(auxlTokenAddress);

  const signer = ethers.provider.getSigner();

  console.log("Minting initial supply...")
  await auxlToken.mint(signer.getAddress, '100000000000')

  console.log("Setting Vault as the Treasury in Token Contract");
  //Params
  await auxlToken.setVault(treasuryAddress); //Set Vault in treasury 
  const vault = await auxlToken.vault();
  console.log("Vault set to: ", vault)
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
