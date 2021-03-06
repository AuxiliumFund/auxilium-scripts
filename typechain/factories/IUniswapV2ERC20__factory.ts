/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IUniswapV2ERC20,
  IUniswapV2ERC20Interface,
} from "../IUniswapV2ERC20";

const _abi = [
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IUniswapV2ERC20__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV2ERC20Interface {
    return new utils.Interface(_abi) as IUniswapV2ERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV2ERC20 {
    return new Contract(address, _abi, signerOrProvider) as IUniswapV2ERC20;
  }
}
