/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AuxlStaking, AuxlStakingInterface } from "../AuxlStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_Auxl",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sAuxl",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_epochLength",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_firstEpochNumber",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_firstEpochAuxl",
        type: "uint32",
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
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogClaim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "locked",
        type: "bool",
      },
    ],
    name: "LogDepositLock",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "memoAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeAmount",
        type: "uint256",
      },
    ],
    name: "LogForfeit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "distribute",
        type: "uint256",
      },
    ],
    name: "LogRebase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum AuxlStaking.CONTRACTS",
        name: "contractType",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "LogSetContract",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogStake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogUnstake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "period",
        type: "uint256",
      },
    ],
    name: "LogWarmupPeriod",
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
    inputs: [],
    name: "Auxl",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
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
    inputs: [],
    name: "distributor",
    outputs: [
      {
        internalType: "contract IDistributor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "epoch",
    outputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "distribute",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "length",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "endAuxl",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "forfeit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "index",
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
    name: "pendingOwner",
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
    name: "rebase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sAuxl",
    outputs: [
      {
        internalType: "contract ISAuxl",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum AuxlStaking.CONTRACTS",
        name: "_contract",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_warmupPeriod",
        type: "uint256",
      },
    ],
    name: "setWarmup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "stake",
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
    inputs: [],
    name: "toggleDepositLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBonus",
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
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
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
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_trigger",
        type: "bool",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "warmupContract",
    outputs: [
      {
        internalType: "contract IWarmup",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "warmupInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gons",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "lock",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "warmupPeriod",
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

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161192e38038061192e833981810160405260a081101561003357600080fd5b50805160208201516040808401516060850151608090950151600080546001600160a01b03191633908117825593519596949592949391927f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160a01b0385166100a357600080fd5b6001600160601b0319606086901b166080526001600160a01b0384166100c857600080fd5b6001600160601b0319606094851b1660a0526040805160808101825283815260006020820181905263ffffffff95861692820183905292909416939094018390526002919091556003556004805464010000000090920263ffffffff60201b1963ffffffff19909316909317919091169190911790555060805160601c60a05160601c61178a6101a46000398061058652806106ae528061073852806109535280610a5f5280610d805280610e385280610fc8528061121a52508061085d5280610c385280610db552806110b7528061130e525061178a6000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063900cf0cf116100b8578063c33c53dd1161007c578063c33c53dd14610331578063c9f464ff14610339578063deac361a14610356578063e30c39781461035e578063ed4acaa814610366578063f3d86e4a1461036e57610142565b8063900cf0cf146102c05780639ebea88c146102f4578063a8dd07dc14610319578063af14052c14610321578063bfe109281461032957610142565b80636746f4c21161010a5780636746f4c2146101eb5780637acb775714610239578063865e6fd3146102795780638b7afe2e146102a85780638da5cb5b146102b05780638f077b83146102b857610142565b8063078dfbe7146101475780631e83409a1461017f5780632986c0e5146101a55780633e7a789a146101bf5780634e71e0c8146101e3575b600080fd5b61017d6004803603606081101561015d57600080fd5b506001600160a01b03813516906020810135151590604001351515610376565b005b61017d6004803603602081101561019557600080fd5b50356001600160a01b03166104be565b6101ad6106aa565b60408051918252519081900360200190f35b6101c7610736565b604080516001600160a01b039092168252519081900360200190f35b61017d61075a565b6102116004803603602081101561020157600080fd5b50356001600160a01b031661081c565b6040805194855260208501939093528383019190915215156060830152519081900360800190f35b6102656004803603604081101561024f57600080fd5b50803590602001356001600160a01b0316610846565b604080519115158252519081900360200190f35b61017d6004803603604081101561028f57600080fd5b50803560ff1690602001356001600160a01b0316610ad3565b6101ad610c2e565b6101c7610cda565b61017d610ce9565b6102c8610d47565b60408051948552602085019390935263ffffffff91821684840152166060830152519081900360800190f35b61017d6004803603604081101561030a57600080fd5b50803590602001351515610d65565b6101ad610e16565b61017d610e1c565b6101c76110a6565b6101c76110b5565b61017d6004803603602081101561034f57600080fd5b50356110d9565b6101ad611173565b6101c7611179565b6101c7611188565b61017d611197565b6000546001600160a01b031633146103d5576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b811561049d576001600160a01b0383161515806103ef5750805b610438576040805162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b604482015290519081900360640190fd5b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b0319918216179091556001805490911690556104b9565b600180546001600160a01b0319166001600160a01b0385161790555b505050565b6104c66116dd565b506001600160a01b03811660009081526009602090815260409182902082516080810184528154815260018201549281019290925260028082015493830184905260039091015460ff16151560608301525490911180159061052b5750604081015115155b156106a6576001600160a01b0380831660009081526009602090815260408083208381556001810184905560028101849055600301805460ff19169055848201518151637965d56d60e01b81526004810191909152905192937f00000000000000000000000000000000000000000000000000000000000000001692637965d56d92602480840193919291829003018186803b1580156105ca57600080fd5b505afa1580156105de573d6000803e3d6000fd5b505050506040513d60208110156105f457600080fd5b50516007546040805163c3a2a66560e01b81526001600160a01b03878116600483015260248201859052915193945091169163c3a2a6659160448082019260009290919082900301818387803b15801561064d57600080fd5b505af1158015610661573d6000803e3d6000fd5b50506040805184815290516001600160a01b03871693507ffce6d5860f911bc27ece1365300332d2ddbe20c1adc46ee2eddd8f72c48053b292509081900360200190a2505b5050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632986c0e56040518163ffffffff1660e01b815260040160206040518083038186803b15801561070557600080fd5b505afa158015610719573d6000803e3d6000fd5b505050506040513d602081101561072f57600080fd5b5051905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001546001600160a01b03163381146107ba576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b60096020526000908152604090208054600182015460028301546003909301549192909160ff1684565b6000610850610e1c565b6108856001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611379565b61088d6116dd565b506001600160a01b03821660009081526009602090815260409182902082516080810184528154815260018201549281019290925260028101549282019290925260039091015460ff161580156060830152610930576040805162461bcd60e51b815260206004820152601f60248201527f4465706f7369747320666f72206163636f756e7420617265206c6f636b656400604482015290519081900360640190fd5b60408051608081019091528151819061094990876113d9565b81526020016109ec7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631bd39674886040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156109b557600080fd5b505afa1580156109c9573d6000803e3d6000fd5b505050506040513d60208110156109df57600080fd5b50516020850151906113d9565b8152600854600254602090920191610a03916113d9565b8152600060209182018190526001600160a01b03868116825260098352604091829020845181559284015160018401559083015160028301556060909201516003909101805460ff1916911515919091179055600754610a88917f000000000000000000000000000000000000000000000000000000000000000081169116866113e9565b6040805185815290516001600160a01b038516917f3dbdcfd4c1f2e08931aae3d544e149a1e643143f5234d166fe3debb783388495919081900360200190a260019150505b92915050565b6000546001600160a01b03163314610b32576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000826001811115610b4057fe5b1415610b6657600580546001600160a01b0319166001600160a01b038316179055610bde565b6001826001811115610b7457fe5b1415610bde576007546001600160a01b031615610bc25760405162461bcd60e51b81526004018080602001828103825260238152602001806117086023913960400191505060405180910390fd5b600780546001600160a01b0319166001600160a01b0383161790555b806001600160a01b03167f74a3f47ee8c75a3912be4eeb0120ef2a7e6d7dfb822ea75f3f3843a3d366ae788360405180826001811115610c1a57fe5b815260200191505060405180910390a25050565b6000610cd56006547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610ca357600080fd5b505afa158015610cb7573d6000803e3d6000fd5b505050506040513d6020811015610ccd57600080fd5b5051906113d9565b905090565b6000546001600160a01b031681565b33600081815260096020908152604091829020600301805460ff19811660ff918216151791829055835191161515815291517f84980d6cdf0a9cada77d43f70d2d8419bd623f064919f2e227dbc39404866dc99281900390910190a2565b60025460035460045463ffffffff8082169164010000000090041684565b8015610d7357610d73610e1c565b610da86001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085611379565b610ddc6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633846113e9565b60408051838152905133917faf14da4c9c7eeb91ef462950405340d31988005c789d867d3a1394f082105e89919081900360200190a25050565b60065481565b60045463ffffffff42811664010000000090920416116110a4577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663058ecdb46002600101546002600001546040518363ffffffff1660e01b81526004018083815260200182815260200192505050602060405180830381600087803b158015610eae57600080fd5b505af1158015610ec2573d6000803e3d6000fd5b505050506040513d6020811015610ed857600080fd5b5050600454610efa9063ffffffff640100000000820481169181169061143b16565b6004805463ffffffff929092166401000000000267ffffffff00000000199092169190911790556002805460010190556005546001600160a01b031615610fb857600560009054906101000a90046001600160a01b03166001600160a01b031663e4fc6b6d6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610f8b57600080fd5b505af1158015610f9f573d6000803e3d6000fd5b505050506040513d6020811015610fb557600080fd5b50505b6000610fc2610c2e565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639358928b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561101f57600080fd5b505afa158015611033573d6000803e3d6000fd5b505050506040513d602081101561104957600080fd5b5051905080821161105e57600060035561106c565b6110688282611454565b6003555b60035460408051918252517f60633057fb2c2558942a126acc1dc7c639b6fdee660a0171f7500e2ac5918b2e9181900360200190a150505b565b6005546001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b03163314611138576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60088190556040805182815290517f0538aaeb1d9d528cb5e132864d95d2d7350a7a3879a90d0ce93164557c22ed319181900360200190a150565b60085481565b6001546001600160a01b031681565b6007546001600160a01b031681565b61119f6116dd565b503360008181526009602081815260408084208151608081018352815481526001820180548286019081526002840180548487015260038501805460ff8116151560608701529a8a5297875293889055908790559186905560ff1990961690935591518251637965d56d60e01b8152600481019190915291517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692637965d56d926024808301939192829003018186803b15801561126557600080fd5b505afa158015611279573d6000803e3d6000fd5b505050506040513d602081101561128f57600080fd5b50516007546040805163c3a2a66560e01b81523060048201526024810184905290519293506001600160a01b039091169163c3a2a6659160448082019260009290919082900301818387803b1580156112e757600080fd5b505af11580156112fb573d6000803e3d6000fd5b5050835161133792506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016915033906113e9565b8151604080518381526020810192909252805133927fed3bd88323251a29d30eb9552dda9f85957286ace369047d9b59ecccd4939e1292908290030190a25050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526113d3908590611464565b50505050565b80820182811015610acd57600080fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526104b9908490611464565b80820163ffffffff8084169082161015610acd57600080fd5b80820382811115610acd57600080fd5b60606114b9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166115159092919063ffffffff16565b8051909150156104b9578080602001905160208110156114d857600080fd5b50516104b95760405162461bcd60e51b815260040180806020018281038252602a81526020018061172b602a913960400191505060405180910390fd5b6060611524848460008561152c565b949350505050565b6060611537856116d7565b611588576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106115c75780518252601f1990920191602091820191016115a8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611629576040519150601f19603f3d011682016040523d82523d6000602084013e61162e565b606091505b509150915081156116425791506115249050565b8051156116525780518082602001fd5b8360405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561169c578181015183820152602001611684565b50505050905090810190601f1680156116c95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b3b151590565b6040518060800160405280600081526020016000815260200160008152602001600015158152509056fe5761726d75702063616e6e6f7420626520736574206d6f7265207468616e206f6e63655361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122038f5e91b9aacf7016d1e7b2ad5f4992a6c82af8f9ccfefa916155949ab43f47f64736f6c63430007050033";

export class AuxlStaking__factory extends ContractFactory {
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
    _Auxl: string,
    _sAuxl: string,
    _epochLength: BigNumberish,
    _firstEpochNumber: BigNumberish,
    _firstEpochAuxl: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AuxlStaking> {
    return super.deploy(
      _Auxl,
      _sAuxl,
      _epochLength,
      _firstEpochNumber,
      _firstEpochAuxl,
      overrides || {}
    ) as Promise<AuxlStaking>;
  }
  getDeployTransaction(
    _Auxl: string,
    _sAuxl: string,
    _epochLength: BigNumberish,
    _firstEpochNumber: BigNumberish,
    _firstEpochAuxl: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _Auxl,
      _sAuxl,
      _epochLength,
      _firstEpochNumber,
      _firstEpochAuxl,
      overrides || {}
    );
  }
  attach(address: string): AuxlStaking {
    return super.attach(address) as AuxlStaking;
  }
  connect(signer: Signer): AuxlStaking__factory {
    return super.connect(signer) as AuxlStaking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuxlStakingInterface {
    return new utils.Interface(_abi) as AuxlStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AuxlStaking {
    return new Contract(address, _abi, signerOrProvider) as AuxlStaking;
  }
}