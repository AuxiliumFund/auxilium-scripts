/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITreasury, ITreasuryInterface } from "../ITreasury";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITreasury__factory {
  static readonly abi = _abi;
  static createInterface(): ITreasuryInterface {
    return new utils.Interface(_abi) as ITreasuryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITreasury {
    return new Contract(address, _abi, signerOrProvider) as ITreasury;
  }
}
