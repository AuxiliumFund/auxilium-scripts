/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockGenesisNFT,
  MockGenesisNFTInterface,
} from "../MockGenesisNFT";

const _abi = [
  {
    inputs: [],
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    inputs: [],
    name: "Common",
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
    inputs: [],
    name: "CompounderNFT",
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
    inputs: [],
    name: "SnowBankNFT",
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
    inputs: [],
    name: "SquidGameNFT",
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
    inputs: [],
    name: "Uncommon",
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
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addToken",
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
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
    inputs: [],
    name: "tokenIdCount",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenIdToString",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040526004805460ff60a01b191690553480156200001e57600080fd5b5060408051808201909152601d81527f68747470733a2f2f6578616d706c652e636f6d2e7b69647d2e6a736f6e0000006020820152620000656301ffc9a760e01b620002c7565b62000070816200034c565b62000082636cdb3d1360e11b620002c7565b620000946303a24d0760e21b620002c7565b50600480546001600160a01b0319163390811790915560405181906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506200010733600060ff16670de0b6b3a7640000604051806020016040528060008152506200036560201b60201c565b60048054600160a01b900460ff1690601462000123836200077f565b91906101000a81548160ff021916908360ff160217905550506200016f33600160ff166b033b2e3c9fd0803ce8000000604051806020016040528060008152506200036560201b60201c565b60048054600160a01b900460ff169060146200018b836200077f565b91906101000a81548160ff021916908360ff16021790555050620001cc33600260ff166001604051806020016040528060008152506200036560201b60201c565b60048054600160a01b900460ff16906014620001e8836200077f565b91906101000a81548160ff021916908360ff160217905550506200022c33600360ff16633b9aca00604051806020016040528060008152506200036560201b60201c565b60048054600160a01b900460ff1690601462000248836200077f565b91906101000a81548160ff021916908360ff160217905550506200028c33600460ff16633b9aca00604051806020016040528060008152506200036560201b60201c565b60048054600160a01b900460ff16906014620002a8836200077f565b91906101000a81548160ff021916908360ff16021790555050620009d6565b6001600160e01b03198082161415620003275760405162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e746572666163652069640000000060448201526064015b60405180910390fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b805162000361906003906020840190620006c3565b5050565b6001600160a01b038416620003c75760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016200031e565b33620003ed81600087620003db8862000491565b620003e68862000491565b5050505050565b60008481526001602090815260408083206001600160a01b03891684529091529020546200041d908490620007a2565b60008581526001602090815260408083206001600160a01b038a8116808652918452828520959095558151898152928301889052938516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4620003e681600087878787620004e7565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110620004ce57620004ce620007bd565b602090810291909101015292915050565b505050505050565b62000506846001600160a01b0316620006bd60201b62000d821760201c565b15620004df5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e619062000542908990899088908890889060040162000823565b6020604051808303816000875af192505050801562000580575060408051601f3d908101601f191682019092526200057d918101906200086a565b60015b62000641576200058f6200089d565b806308c379a01415620005d05750620005a7620008f5565b80620005b45750620005d2565b8060405162461bcd60e51b81526004016200031e919062000984565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e74657200000000000000000000000060648201526084016200031e565b6001600160e01b0319811663f23a6e6160e01b14620006b45760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b60648201526084016200031e565b50505050505050565b3b151590565b828054620006d19062000999565b90600052602060002090601f016020900481019282620006f5576000855562000740565b82601f106200071057805160ff191683800117855562000740565b8280016001018555821562000740579182015b828111156200074057825182559160200191906001019062000723565b506200074e92915062000752565b5090565b5b808211156200074e576000815560010162000753565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff81141562000799576200079962000769565b60010192915050565b60008219821115620007b857620007b862000769565b500190565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b81811015620007fb57602081850181015186830182015201620007dd565b818111156200080e576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906200085f90830184620007d3565b979650505050505050565b6000602082840312156200087d57600080fd5b81516001600160e01b0319811681146200089657600080fd5b9392505050565b600060033d1115620008b75760046000803e5060005160e01c5b90565b601f8201601f191681016001600160401b0381118282101715620008ee57634e487b7160e01b600052604160045260246000fd5b6040525050565b600060443d1015620009045790565b6040516003193d81016004833e81513d6001600160401b0380831160248401831017156200093457505050505090565b82850191508151818111156200094d5750505050505090565b843d8701016020828501011115620009685750505050505090565b6200097960208286010187620008ba565b509095945050505050565b602081526000620008966020830184620007d3565b600181811c90821680620009ae57607f821691505b60208210811415620009d057634e487b7160e01b600052602260045260246000fd5b50919050565b611a5780620009e66000396000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c80638ca132f7116100ad578063e5bfe1ac11610071578063e5bfe1ac1461026b578063e985e9c514610273578063f127394c146102af578063f242432a146102c3578063f2fde38b146102d657600080fd5b80638ca132f71461021a5780638da5cb5b1461022d5780639b66710814610248578063a22cb46514610250578063ab4fdef71461026357600080fd5b8063323c59c4116100f4578063323c59c4146101bd5780633847bc4d146101d75780633e1363ba146101ea5780634e1273f4146101f2578063715018a61461021257600080fd5b8062fdd58e1461012557806301ffc9a71461014b5780630e89341c146101885780632eb2c2d6146101a8575b600080fd5b6101386101333660046111b9565b6102e9565b6040519081526020015b60405180910390f35b6101786101593660046111fc565b6001600160e01b03191660009081526020819052604090205460ff1690565b6040519015158152602001610142565b61019b610196366004611220565b610382565b6040516101429190611286565b6101bb6101b63660046113ef565b610416565b005b6101c5600481565b60405160ff9091168152602001610142565b61019b6101e5366004611220565b61067a565b6101c5600181565b610205610200366004611499565b610714565b604051610142919061159f565b6101bb610901565b6101bb6102283660046115b2565b610975565b6004546040516001600160a01b039091168152602001610142565b6101c5600281565b6101bb61025e36600461160b565b610a25565b6101c5600381565b6101c5600081565b610178610281366004611647565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6004546101c590600160a01b900460ff1681565b6101bb6102d136600461167a565b610afc565b6101bb6102e43660046116df565b610c97565b60006001600160a01b03831661035a5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b606060038054610391906116fa565b80601f01602080910402602001604051908101604052809291908181526020018280546103bd906116fa565b801561040a5780601f106103df5761010080835404028352916020019161040a565b820191906000526020600020905b8154815290600101906020018083116103ed57829003601f168201915b50505050509050919050565b81518351146104785760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b6064820152608401610351565b6001600160a01b03841661049e5760405162461bcd60e51b815260040161035190611735565b6001600160a01b0385163314806104ba57506104ba8533610281565b6105215760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b6064820152608401610351565b3360005b845181101561060c5760008582815181106105425761054261177a565b6020026020010151905060008583815181106105605761056061177a565b60209081029190910181015160008481526001835260408082206001600160a01b038e168352909352919091205490915061059c9082906117a6565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a16815220546105d49082906117bd565b60009283526001602090815260408085206001600160a01b038c1686529091529092209190915550610605816117d5565b9050610525565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161065c9291906117f0565b60405180910390a4610672818787878787610d88565b505050505050565b60056020526000908152604090208054610693906116fa565b80601f01602080910402602001604051908101604052809291908181526020018280546106bf906116fa565b801561070c5780601f106106e15761010080835404028352916020019161070c565b820191906000526020600020905b8154815290600101906020018083116106ef57829003601f168201915b505050505081565b606081518351146107795760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b6064820152608401610351565b6000835167ffffffffffffffff81111561079557610795611299565b6040519080825280602002602001820160405280156107be578160200160208202803683370190505b50905060005b84518110156108f95760006001600160a01b03168582815181106107ea576107ea61177a565b60200260200101516001600160a01b031614156108635760405162461bcd60e51b815260206004820152603160248201527f455243313135353a2062617463682062616c616e636520717565727920666f7260448201527020746865207a65726f206164647265737360781b6064820152608401610351565b600160008583815181106108795761087961177a565b6020026020010151815260200190815260200160002060008683815181106108a3576108a361177a565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020548282815181106108de576108de61177a565b60209081029190910101526108f2816117d5565b90506107c4565b509392505050565b6004546001600160a01b0316331461092b5760405162461bcd60e51b81526004016103519061181e565b6004546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600480546001600160a01b0319169055565b6004546001600160a01b0316331461099f5760405162461bcd60e51b81526004016103519061181e565b60048054600091600160a01b90910460ff169060146109bd83611853565b91906101000a81548160ff021916908360ff160217905550905082600560008360ff1681526020019081526020016000209080519060200190610a01929190611104565b50610a20338260ff168460405180602001604052806000815250610eed565b505050565b336001600160a01b0383161415610a905760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b6064820152608401610351565b3360008181526002602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6001600160a01b038416610b225760405162461bcd60e51b815260040161035190611735565b6001600160a01b038516331480610b3e5750610b3e8533610281565b610b9c5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b6064820152608401610351565b33610bbc818787610bac88610ffe565b610bb588610ffe565b5050505050565b60008481526001602090815260408083206001600160a01b038a168452909152902054610bea9084906117a6565b60008581526001602090815260408083206001600160a01b038b81168552925280832093909355871681522054610c229084906117bd565b60008581526001602090815260408083206001600160a01b038a811680865291845293829020949094558051888152918201879052898316928516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610672818787878787611049565b6004546001600160a01b03163314610cc15760405162461bcd60e51b81526004016103519061181e565b6001600160a01b038116610d265760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610351565b6004546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600480546001600160a01b0319166001600160a01b0392909216919091179055565b3b151590565b6001600160a01b0384163b156106725760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610dcc9089908990889088908890600401611873565b6020604051808303816000875af1925050508015610e07575060408051601f3d908101601f19168201909252610e04918101906118d1565b60015b610eb457610e136118ee565b806308c379a01415610e4d5750610e2861190a565b80610e335750610e4f565b8060405162461bcd60e51b81526004016103519190611286565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b6064820152608401610351565b6001600160e01b0319811663bc197c8160e01b14610ee45760405162461bcd60e51b815260040161035190611994565b50505050505050565b6001600160a01b038416610f4d5760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b6064820152608401610351565b33610f5e81600087610bac88610ffe565b60008481526001602090815260408083206001600160a01b0389168452909152902054610f8c9084906117bd565b60008581526001602090815260408083206001600160a01b038a8116808652918452828520959095558151898152928301889052938516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610bb581600087878787611049565b604080516001808252818301909252606091600091906020808301908036833701905050905082816000815181106110385761103861177a565b602090810291909101015292915050565b6001600160a01b0384163b156106725760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e619061108d90899089908890889088906004016119dc565b6020604051808303816000875af19250505080156110c8575060408051601f3d908101601f191682019092526110c5918101906118d1565b60015b6110d457610e136118ee565b6001600160e01b0319811663f23a6e6160e01b14610ee45760405162461bcd60e51b815260040161035190611994565b828054611110906116fa565b90600052602060002090601f0160209004810192826111325760008555611178565b82601f1061114b57805160ff1916838001178555611178565b82800160010185558215611178579182015b8281111561117857825182559160200191906001019061115d565b50611184929150611188565b5090565b5b808211156111845760008155600101611189565b80356001600160a01b03811681146111b457600080fd5b919050565b600080604083850312156111cc57600080fd5b6111d58361119d565b946020939093013593505050565b6001600160e01b0319811681146111f957600080fd5b50565b60006020828403121561120e57600080fd5b8135611219816111e3565b9392505050565b60006020828403121561123257600080fd5b5035919050565b6000815180845260005b8181101561125f57602081850181015186830182015201611243565b81811115611271576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006112196020830184611239565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff811182821017156112d5576112d5611299565b6040525050565b600067ffffffffffffffff8211156112f6576112f6611299565b5060051b60200190565b600082601f83011261131157600080fd5b8135602061131e826112dc565b60405161132b82826112af565b83815260059390931b850182019282810191508684111561134b57600080fd5b8286015b84811015611366578035835291830191830161134f565b509695505050505050565b600067ffffffffffffffff83111561138b5761138b611299565b6040516113a2601f8501601f1916602001826112af565b8091508381528484840111156113b757600080fd5b83836020830137600060208583010152509392505050565b600082601f8301126113e057600080fd5b61121983833560208501611371565b600080600080600060a0868803121561140757600080fd5b6114108661119d565b945061141e6020870161119d565b9350604086013567ffffffffffffffff8082111561143b57600080fd5b61144789838a01611300565b9450606088013591508082111561145d57600080fd5b61146989838a01611300565b9350608088013591508082111561147f57600080fd5b5061148c888289016113cf565b9150509295509295909350565b600080604083850312156114ac57600080fd5b823567ffffffffffffffff808211156114c457600080fd5b818501915085601f8301126114d857600080fd5b813560206114e5826112dc565b6040516114f282826112af565b83815260059390931b850182019282810191508984111561151257600080fd5b948201945b83861015611537576115288661119d565b82529482019490820190611517565b9650508601359250508082111561154d57600080fd5b5061155a85828601611300565b9150509250929050565b600081518084526020808501945080840160005b8381101561159457815187529582019590820190600101611578565b509495945050505050565b6020815260006112196020830184611564565b600080604083850312156115c557600080fd5b823567ffffffffffffffff8111156115dc57600080fd5b8301601f810185136115ed57600080fd5b6115fc85823560208401611371565b95602094909401359450505050565b6000806040838503121561161e57600080fd5b6116278361119d565b91506020830135801515811461163c57600080fd5b809150509250929050565b6000806040838503121561165a57600080fd5b6116638361119d565b91506116716020840161119d565b90509250929050565b600080600080600060a0868803121561169257600080fd5b61169b8661119d565b94506116a96020870161119d565b93506040860135925060608601359150608086013567ffffffffffffffff8111156116d357600080fd5b61148c888289016113cf565b6000602082840312156116f157600080fd5b6112198261119d565b600181811c9082168061170e57607f821691505b6020821081141561172f57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000828210156117b8576117b8611790565b500390565b600082198211156117d0576117d0611790565b500190565b60006000198214156117e9576117e9611790565b5060010190565b6040815260006118036040830185611564565b82810360208401526118158185611564565b95945050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060ff821660ff81141561186a5761186a611790565b60010192915050565b6001600160a01b0386811682528516602082015260a06040820181905260009061189f90830186611564565b82810360608401526118b18186611564565b905082810360808401526118c58185611239565b98975050505050505050565b6000602082840312156118e357600080fd5b8151611219816111e3565b600060033d11156119075760046000803e5060005160e01c5b90565b600060443d10156119185790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561194857505050505090565b82850191508151818111156119605750505050505090565b843d870101602082850101111561197a5750505050505090565b611989602082860101876112af565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090611a1690830184611239565b97965050505050505056fea2646970667358221220d829326f70d87db79b6bcefe4d1420ab499528c21b21e04df6ae6dd32f19ef2064736f6c634300080b0033";

export class MockGenesisNFT__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockGenesisNFT> {
    return super.deploy(overrides || {}) as Promise<MockGenesisNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockGenesisNFT {
    return super.attach(address) as MockGenesisNFT;
  }
  connect(signer: Signer): MockGenesisNFT__factory {
    return super.connect(signer) as MockGenesisNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockGenesisNFTInterface {
    return new utils.Interface(_abi) as MockGenesisNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockGenesisNFT {
    return new Contract(address, _abi, signerOrProvider) as MockGenesisNFT;
  }
}