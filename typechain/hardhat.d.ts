/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStaking__factory>;
    getContractFactory(
      name: "IStakingHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakingHelper__factory>;
    getContractFactory(
      name: "ITreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasury__factory>;
    getContractFactory(
      name: "IWAVAX9",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWAVAX9__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "AuxlBondDepository",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AuxlBondDepository__factory>;
    getContractFactory(
      name: "TimeBondDepository",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimeBondDepository__factory>;
    getContractFactory(
      name: "IBondCalculator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBondCalculator__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStaking__factory>;
    getContractFactory(
      name: "IStakingHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakingHelper__factory>;
    getContractFactory(
      name: "ITreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasury__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "OwnableData",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableData__factory>;
    getContractFactory(
      name: "AuxlBondDepository",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AuxlBondDepository__factory>;
    getContractFactory(
      name: "TimeBondDepository",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimeBondDepository__factory>;

    getContractAt(
      name: "AggregatorV3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStaking>;
    getContractAt(
      name: "IStakingHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakingHelper>;
    getContractAt(
      name: "ITreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasury>;
    getContractAt(
      name: "IWAVAX9",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWAVAX9>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "AuxlBondDepository",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AuxlBondDepository>;
    getContractAt(
      name: "TimeBondDepository",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimeBondDepository>;
    getContractAt(
      name: "IBondCalculator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBondCalculator>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStaking>;
    getContractAt(
      name: "IStakingHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakingHelper>;
    getContractAt(
      name: "ITreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasury>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "OwnableData",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableData>;
    getContractAt(
      name: "AuxlBondDepository",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AuxlBondDepository>;
    getContractAt(
      name: "TimeBondDepository",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimeBondDepository>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}