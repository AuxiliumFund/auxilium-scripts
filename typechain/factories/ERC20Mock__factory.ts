/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Mock, ERC20MockInterface } from "../ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "initialAccount",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approveInternal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferInternal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260405162000e3f38038062000e3f8339810160408190526200002691620002d7565b8351849084906200003f90600390602085019062000164565b5080516200005590600490602084019062000164565b50506005805460ff19166012179055506200007182826200007b565b50505050620003ce565b6001600160a01b038216620000d65760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600254620000e691906200036a565b6002556001600160a01b0382166000908152602081905260409020546200010f9082906200036a565b6001600160a01b038316600081815260208181526040808320949094559251848152919290917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b828054620001729062000391565b90600052602060002090601f016020900481019282620001965760008555620001e1565b82601f10620001b157805160ff1916838001178555620001e1565b82800160010185558215620001e1579182015b82811115620001e1578251825591602001919060010190620001c4565b50620001ef929150620001f3565b5090565b5b80821115620001ef5760008155600101620001f4565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200023257600080fd5b81516001600160401b03808211156200024f576200024f6200020a565b604051601f8301601f19908116603f011681019082821181831017156200027a576200027a6200020a565b816040528381526020925086838588010111156200029757600080fd5b600091505b83821015620002bb57858201830151818301840152908201906200029c565b83821115620002cd5760008385830101525b9695505050505050565b60008060008060808587031215620002ee57600080fd5b84516001600160401b03808211156200030657600080fd5b620003148883890162000220565b955060208701519150808211156200032b57600080fd5b506200033a8782880162000220565b604087015190945090506001600160a01b03811681146200035a57600080fd5b6060959095015193969295505050565b600082198211156200038c57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003a657607f821691505b60208210811415620003c857634e487b7160e01b600052602260045260246000fd5b50919050565b610a6180620003de6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806340c10f19116100975780639dc29fac116100665780639dc29fac146101f4578063a457c2d714610207578063a9059cbb1461021a578063dd62ed3e1461022d57600080fd5b806340c10f191461019d57806356189cb4146101b057806370a08231146101c357806395d89b41146101ec57600080fd5b8063222f5be0116100d3578063222f5be01461014d57806323b872dd14610162578063313ce56714610175578063395093511461018a57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610266565b60405161010f919061087f565b60405180910390f35b61012b6101263660046108f0565b6102f8565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61016061015b36600461091a565b61030e565b005b61012b61017036600461091a565b61031e565b60055460405160ff909116815260200161010f565b61012b6101983660046108f0565b610370565b6101606101ab3660046108f0565b6103a7565b6101606101be36600461091a565b6103b5565b61013f6101d1366004610956565b6001600160a01b031660009081526020819052604090205490565b6101026103c0565b6101606102023660046108f0565b6103cf565b61012b6102153660046108f0565b6103d9565b61012b6102283660046108f0565b610410565b61013f61023b366004610978565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b606060038054610275906109ab565b80601f01602080910402602001604051908101604052809291908181526020018280546102a1906109ab565b80156102ee5780601f106102c3576101008083540402835291602001916102ee565b820191906000526020600020905b8154815290600101906020018083116102d157829003601f168201915b5050505050905090565b600061030533848461041d565b50600192915050565b610319838383610547565b505050565b600061032b848484610547565b6001600160a01b0384166000908152600160209081526040808320338085529252909120546103669186916103619086906109fc565b61041d565b5060019392505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610305918590610361908690610a13565b6103b182826106b2565b5050565b61031983838361041d565b606060048054610275906109ab565b6103b18282610793565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916103059185906103619086906109fc565b6000610305338484610547565b6001600160a01b0383166104845760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084015b60405180910390fd5b6001600160a01b0382166104e55760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161047b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166105ab5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161047b565b6001600160a01b03821661060d5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161047b565b6001600160a01b0383166000908152602081905260409020546106319082906109fc565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610661908290610a13565b6001600160a01b038381166000818152602081815260409182902094909455518481529092918616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910161053a565b6001600160a01b0382166107085760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161047b565b806002546107169190610a13565b6002556001600160a01b03821660009081526020819052604090205461073d908290610a13565b6001600160a01b038316600081815260208181526040808320949094559251848152919290917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91015b60405180910390a35050565b6001600160a01b0382166107f35760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161047b565b6001600160a01b0382166000908152602081905260409020546108179082906109fc565b6001600160a01b03831660009081526020819052604090205560025461083e9082906109fc565b6002556040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610787565b600060208083528351808285015260005b818110156108ac57858101830151858201604001528201610890565b818111156108be576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146108eb57600080fd5b919050565b6000806040838503121561090357600080fd5b61090c836108d4565b946020939093013593505050565b60008060006060848603121561092f57600080fd5b610938846108d4565b9250610946602085016108d4565b9150604084013590509250925092565b60006020828403121561096857600080fd5b610971826108d4565b9392505050565b6000806040838503121561098b57600080fd5b610994836108d4565b91506109a2602084016108d4565b90509250929050565b600181811c908216806109bf57607f821691505b602082108114156109e057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610a0e57610a0e6109e6565b500390565b60008219821115610a2657610a266109e6565b50019056fea26469706673582212206cb404e34c9c4d7db6b7b7aaeaafb103259d7606f06e9808cd697464317e272864736f6c634300080b0033";

export class ERC20Mock__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    ) as Promise<ERC20Mock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    );
  }
  attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}