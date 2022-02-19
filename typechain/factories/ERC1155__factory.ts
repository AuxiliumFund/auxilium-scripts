/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155, ERC1155Interface } from "../ERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
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
        name: "id",
        type: "uint256",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620016e6380380620016e68339810160408190526200003491620001d5565b620000466301ffc9a760e01b6200007c565b620000518162000100565b62000063636cdb3d1360e11b6200007c565b620000756303a24d0760e21b6200007c565b50620002ee565b6001600160e01b03198082161415620000db5760405162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015260640160405180910390fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b80516200011590600390602084019062000119565b5050565b8280546200012790620002b1565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215620001e957600080fd5b82516001600160401b03808211156200020157600080fd5b818501915085601f8301126200021657600080fd5b8151818111156200022b576200022b620001bf565b604051601f8201601f19908116603f01168101908382118183101715620002565762000256620001bf565b8160405282815288868487010111156200026f57600080fd5b600093505b8284101562000293578484018601518185018701529285019262000274565b82841115620002a55760008684830101525b98975050505050505050565b600181811c90821680620002c657607f821691505b60208210811415620002e857634e487b7160e01b600052602260045260246000fd5b50919050565b6113e880620002fe6000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f414610124578063a22cb46514610144578063e985e9c514610157578063f242432a1461019357600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100ef5780632eb2c2d61461010f575b600080fd5b61009f61009a366004610c1d565b6101a6565b6040519081526020015b60405180910390f35b6100df6100c0366004610c60565b6001600160e01b03191660009081526020819052604090205460ff1690565b60405190151581526020016100a9565b6101026100fd366004610c84565b61023f565b6040516100a99190610cea565b61012261011d366004610e49565b6102d3565b005b610137610132366004610ef3565b610537565b6040516100a99190610ff9565b61012261015236600461100c565b610724565b6100df610165366004611048565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6101226101a136600461107b565b6107fb565b60006001600160a01b0383166102175760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b60606003805461024e906110e0565b80601f016020809104026020016040519081016040528092919081815260200182805461027a906110e0565b80156102c75780601f1061029c576101008083540402835291602001916102c7565b820191906000526020600020905b8154815290600101906020018083116102aa57829003601f168201915b50505050509050919050565b81518351146103355760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b606482015260840161020e565b6001600160a01b03841661035b5760405162461bcd60e51b815260040161020e9061111b565b6001600160a01b03851633148061037757506103778533610165565b6103de5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b606482015260840161020e565b3360005b84518110156104c95760008582815181106103ff576103ff611160565b60200260200101519050600085838151811061041d5761041d611160565b60209081029190910181015160008481526001835260408082206001600160a01b038e168352909352919091205490915061045990829061118c565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a16815220546104919082906111a3565b60009283526001602090815260408085206001600160a01b038c16865290915290922091909155506104c2816111bb565b90506103e2565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516105199291906111d6565b60405180910390a461052f818787878787610996565b505050505050565b6060815183511461059c5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b606482015260840161020e565b6000835167ffffffffffffffff8111156105b8576105b8610cfd565b6040519080825280602002602001820160405280156105e1578160200160208202803683370190505b50905060005b845181101561071c5760006001600160a01b031685828151811061060d5761060d611160565b60200260200101516001600160a01b031614156106865760405162461bcd60e51b815260206004820152603160248201527f455243313135353a2062617463682062616c616e636520717565727920666f7260448201527020746865207a65726f206164647265737360781b606482015260840161020e565b6001600085838151811061069c5761069c611160565b6020026020010151815260200190815260200160002060008683815181106106c6576106c6611160565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000205482828151811061070157610701611160565b6020908102919091010152610715816111bb565b90506105e7565b509392505050565b336001600160a01b038316141561078f5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b606482015260840161020e565b3360008181526002602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6001600160a01b0384166108215760405162461bcd60e51b815260040161020e9061111b565b6001600160a01b03851633148061083d575061083d8533610165565b61089b5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b606482015260840161020e565b336108bb8187876108ab88610afb565b6108b488610afb565b5050505050565b60008481526001602090815260408083206001600160a01b038a1684529091529020546108e990849061118c565b60008581526001602090815260408083206001600160a01b038b811685529252808320939093558716815220546109219084906111a3565b60008581526001602090815260408083206001600160a01b038a811680865291845293829020949094558051888152918201879052898316928516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461052f818787878787610b46565b6001600160a01b0384163b1561052f5760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906109da9089908990889088908890600401611204565b6020604051808303816000875af1925050508015610a15575060408051601f3d908101601f19168201909252610a1291810190611262565b60015b610ac257610a2161127f565b806308c379a01415610a5b5750610a3661129b565b80610a415750610a5d565b8060405162461bcd60e51b815260040161020e9190610cea565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b606482015260840161020e565b6001600160e01b0319811663bc197c8160e01b14610af25760405162461bcd60e51b815260040161020e90611325565b50505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610b3557610b35611160565b602090810291909101015292915050565b6001600160a01b0384163b1561052f5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610b8a908990899088908890889060040161136d565b6020604051808303816000875af1925050508015610bc5575060408051601f3d908101601f19168201909252610bc291810190611262565b60015b610bd157610a2161127f565b6001600160e01b0319811663f23a6e6160e01b14610af25760405162461bcd60e51b815260040161020e90611325565b80356001600160a01b0381168114610c1857600080fd5b919050565b60008060408385031215610c3057600080fd5b610c3983610c01565b946020939093013593505050565b6001600160e01b031981168114610c5d57600080fd5b50565b600060208284031215610c7257600080fd5b8135610c7d81610c47565b9392505050565b600060208284031215610c9657600080fd5b5035919050565b6000815180845260005b81811015610cc357602081850181015186830182015201610ca7565b81811115610cd5576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610c7d6020830184610c9d565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715610d3957610d39610cfd565b6040525050565b600067ffffffffffffffff821115610d5a57610d5a610cfd565b5060051b60200190565b600082601f830112610d7557600080fd5b81356020610d8282610d40565b604051610d8f8282610d13565b83815260059390931b8501820192828101915086841115610daf57600080fd5b8286015b84811015610dca5780358352918301918301610db3565b509695505050505050565b600082601f830112610de657600080fd5b813567ffffffffffffffff811115610e0057610e00610cfd565b604051610e17601f8301601f191660200182610d13565b818152846020838601011115610e2c57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610e6157600080fd5b610e6a86610c01565b9450610e7860208701610c01565b9350604086013567ffffffffffffffff80821115610e9557600080fd5b610ea189838a01610d64565b94506060880135915080821115610eb757600080fd5b610ec389838a01610d64565b93506080880135915080821115610ed957600080fd5b50610ee688828901610dd5565b9150509295509295909350565b60008060408385031215610f0657600080fd5b823567ffffffffffffffff80821115610f1e57600080fd5b818501915085601f830112610f3257600080fd5b81356020610f3f82610d40565b604051610f4c8282610d13565b83815260059390931b8501820192828101915089841115610f6c57600080fd5b948201945b83861015610f9157610f8286610c01565b82529482019490820190610f71565b96505086013592505080821115610fa757600080fd5b50610fb485828601610d64565b9150509250929050565b600081518084526020808501945080840160005b83811015610fee57815187529582019590820190600101610fd2565b509495945050505050565b602081526000610c7d6020830184610fbe565b6000806040838503121561101f57600080fd5b61102883610c01565b91506020830135801515811461103d57600080fd5b809150509250929050565b6000806040838503121561105b57600080fd5b61106483610c01565b915061107260208401610c01565b90509250929050565b600080600080600060a0868803121561109357600080fd5b61109c86610c01565b94506110aa60208701610c01565b93506040860135925060608601359150608086013567ffffffffffffffff8111156110d457600080fd5b610ee688828901610dd5565b600181811c908216806110f457607f821691505b6020821081141561111557634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008282101561119e5761119e611176565b500390565b600082198211156111b6576111b6611176565b500190565b60006000198214156111cf576111cf611176565b5060010190565b6040815260006111e96040830185610fbe565b82810360208401526111fb8185610fbe565b95945050505050565b6001600160a01b0386811682528516602082015260a06040820181905260009061123090830186610fbe565b82810360608401526112428186610fbe565b905082810360808401526112568185610c9d565b98975050505050505050565b60006020828403121561127457600080fd5b8151610c7d81610c47565b600060033d11156112985760046000803e5060005160e01c5b90565b600060443d10156112a95790565b6040516003193d81016004833e81513d67ffffffffffffffff81602484011181841117156112d957505050505090565b82850191508151818111156112f15750505050505090565b843d870101602082850101111561130b5750505050505090565b61131a60208286010187610d13565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906113a790830184610c9d565b97965050505050505056fea2646970667358221220bc2afdaf5dbc8ac338e5bf3759d58089703730b4554dade583040c2908c02e1a64736f6c634300080b0033";

export class ERC1155__factory extends ContractFactory {
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
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  getDeployTransaction(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}
