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
import type { TestHome, TestHomeInterface } from "../TestHome";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
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
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destinationAndNonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "committedRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Dispatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "ImproperUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updater",
        type: "address",
      },
    ],
    name: "NewUpdater",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updaterManager",
        type: "address",
      },
    ],
    name: "NewUpdaterManager",
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
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "updater",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "reporter",
        type: "address",
      },
    ],
    name: "UpdaterSlashed",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_MESSAGE_BODY_BYTES",
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
    name: "committedRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
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
        internalType: "uint32",
        name: "_destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_recipientAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_messageBody",
        type: "bytes",
      },
    ],
    name: "dispatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "improperUpdate",
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
        internalType: "contract IUpdaterManager",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextLeafIndex",
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
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_item",
        type: "bytes32",
      },
    ],
    name: "queueContains",
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
    name: "queueEnd",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueLength",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "setFailed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "setUpdaterManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Common.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "suggestUpdate",
    outputs: [
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_new",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
    ],
    name: "testDestinationAndNonce",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "testHomeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    inputs: [],
    name: "tree",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
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
    name: "updaterManager",
    outputs: [
      {
        internalType: "contract IUpdaterManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161304c38038061304c8339818101604052602081101561003357600080fd5b505160e081901b6001600160e01b03191660805263ffffffff16612fd961007360003980610a035280610b69528061104052806116805250612fd96000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80638e4e30e011610104578063c19d93fb116100a2578063f2fde38b11610071578063f2fde38b1461064a578063f6d161021461067d578063fa31de0114610685578063fd54b2281461073d576101cf565b8063c19d93fb146105de578063c4d66de814610607578063df034cd01461063a578063ebf0c71714610642576101cf565b80639df6c8e1116100de5780639df6c8e1146104f9578063ab91c7b014610501578063b31c01fb14610509578063b95a2001146105bb576101cf565b80638e4e30e0146103e15780639776120e146104935780639d54f419146104c6576101cf565b80635146366e1161017157806367a6771d1161014b57806367a6771d1461037f578063715018a6146103875780638d3638f41461038f5780638da5cb5b146103b0576101cf565b80635146366e146103275780635221c8181461032f578063522ae00214610377576101cf565b806319d9d21a116101ad57806319d9d21a146102005780632bef2892146102cd57806336e104de146102fe57806345630b1a1461031f576101cf565b806306661abd146101d45780630be4f422146101ee578063146901db146101f6575b600080fd5b6101dc610745565b60408051918252519081900360200190f35b6101dc61074b565b6101fe61075a565b005b6101fe600480360360a081101561021657600080fd5b813591602081019181019060808101606082013564010000000081111561023c57600080fd5b82018360208201111561024e57600080fd5b8035906020019184600183028401116401000000008311171561027057600080fd5b91939092909160208101903564010000000081111561028e57600080fd5b8201836020820111156102a057600080fd5b803590602001918460018302840111640100000000831117156102c257600080fd5b509092509050610764565b6102ea600480360360208110156102e357600080fd5b50356109c1565b604080519115158252519081900360200190f35b6103066109d4565b6040805192835260208301919091528051918290030190f35b6101dc6109fc565b6101dc610a27565b61035a6004803603604081101561034557600080fd5b5063ffffffff81358116916020013516610a31565b6040805167ffffffffffffffff9092168252519081900360200190f35b6101dc610a44565b6101dc610a4a565b6101fe610a50565b610397610b67565b6040805163ffffffff9092168252519081900360200190f35b6103b8610b8b565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102ea600480360360608110156103f757600080fd5b81359160208101359181019060608101604082013564010000000081111561041e57600080fd5b82018360208201111561043057600080fd5b8035906020019184600183028401116401000000008311171561045257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610ba7945050505050565b6101fe600480360360208110156104a957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610df9565b6101fe600480360360208110156104dc57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610ead565b6103b8610f3d565b6101dc610f5a565b6101fe6004803603606081101561051f57600080fd5b81359160208101359181019060608101604082013564010000000081111561054657600080fd5b82018360208201111561055857600080fd5b8035906020019184600183028401116401000000008311171561057a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f66945050505050565b610397600480360360208110156105d157600080fd5b503563ffffffff16611104565b6105e661111d565b604051808260028111156105f657fe5b815260200191505060405180910390f35b6101fe6004803603602081101561061d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661113e565b6103b8611351565b6101dc61136d565b6101fe6004803603602081101561066057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611379565b6101dc61151b565b6101fe6004803603606081101561069b57600080fd5b63ffffffff823516916020810135918101906060810160408201356401000000008111156106c857600080fd5b8201836020820111156106da57600080fd5b803590602001918460018302840111640100000000831117156106fc57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611527945050505050565b6101dc61179d565b60205490565b6000610755610745565b905090565b6107626117a3565b565b600260865474010000000000000000000000000000000000000000900460ff16600281111561078f57fe5b14156107fc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516020601f860181900481028201810190925284815261083e91889188359188908890819084018382808284376000920191909152506117e492505050565b801561088d575061088d86866001602002013584848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506117e492505050565b801561089e57508435602086013514155b156109b9576108ab611876565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040518087815260200186600260200280828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910182810360409081018252810186905290506020810160608201878780828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910184810383528581526020019050858580828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039a509098505050505050505050a15b505050505050565b60006109ce605383611952565b92915050565b6000806109e160536119c2565b156109f85760875491506109f56053611a02565b90505b9091565b60006107557f0000000000000000000000000000000000000000000000000000000000000000611a3f565b60006107556109fc565b6000610a3d8383611ab4565b9392505050565b61080081565b60875481565b610a58611ace565b73ffffffffffffffffffffffffffffffffffffffff16610a76610b8b565b73ffffffffffffffffffffffffffffffffffffffff1614610af857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60e95460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360e980547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7f000000000000000000000000000000000000000000000000000000000000000081565b60e95473ffffffffffffffffffffffffffffffffffffffff1690565b6000600260865474010000000000000000000000000000000000000000900460ff166002811115610bd457fe5b1415610c4157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610c4c8484846117e4565b610cb757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2175706461746572207369670000000000000000000000000000000000000000604482015290519081900360640190fd5b6087548414610d2757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f7420612063757272656e7420757064617465000000000000000000000000604482015290519081900360640190fd5b610d32605384611952565b610def57610d3e611876565b7f6844fd5e21c932b5197b78ac11bf96e2eaa4e882dd0c88087060cf2065c04ab28484846040518084815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610dab578181015183820152602001610d93565b50505050905090810190601f168015610dd85780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1506001610a3d565b5060009392505050565b610e01611ace565b73ffffffffffffffffffffffffffffffffffffffff16610e1f610b8b565b73ffffffffffffffffffffffffffffffffffffffff1614610ea157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610eaa81611ad2565b50565b61011c5473ffffffffffffffffffffffffffffffffffffffff163314610f3457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f21757064617465724d616e616765720000000000000000000000000000000000604482015290519081900360640190fd5b610eaa81611bc0565b61011c5473ffffffffffffffffffffffffffffffffffffffff1681565b600061075560536119c2565b600260865474010000000000000000000000000000000000000000900460ff166002811115610f9157fe5b1415610ffe57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b611009838383610ba7565b15611013576110ff565b600061101f6053611c39565b90508281141561102f5750611035565b50611013565b8160878190555081837f000000000000000000000000000000000000000000000000000000000000000063ffffffff167f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b2846040518080602001828103825283818151815260200191508051906020019080838360005b838110156110c45781810151838201526020016110ac565b50505050905090810190601f1680156110f15780820380516001836020036101000a031916815260200191505b509250505060405180910390a45b505050565b61011b6020526000908152604090205463ffffffff1681565b60865474010000000000000000000000000000000000000000900460ff1681565b605254610100900460ff16806111575750611157611d72565b80611165575060525460ff16155b6111ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f54602e913960400191505060405180910390fd5b605254610100900460ff1615801561122057605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611228611d83565b61123182611ad2565b61011c54604080517fdf034cd0000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163df034cd0916004808301926020929190829003018186803b15801561129d57600080fd5b505afa1580156112b1573d6000803e3d6000fd5b505050506040513d60208110156112c757600080fd5b505190506112d481611ea6565b6040805173ffffffffffffffffffffffffffffffffffffffff8316815290517f9e5f57e4ee5f9eeac3131028d48f19d80820ce6fa93c4c66cc82a3e2b9837c329181900360200190a150801561134d57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b60865473ffffffffffffffffffffffffffffffffffffffff1681565b6000610755600061203b565b611381611ace565b73ffffffffffffffffffffffffffffffffffffffff1661139f610b8b565b73ffffffffffffffffffffffffffffffffffffffff161461142157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811661148d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612f0c6026913960400191505060405180910390fd5b60e95460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360e980547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60006107556053611a02565b600260865474010000000000000000000000000000000000000000900460ff16600281111561155257fe5b14156115bf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b6108008151111561163157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6d736720746f6f206c6f6e670000000000000000000000000000000000000000604482015290519081900360640190fd5b63ffffffff808416600090815261011b602052604081208054808416600181019094167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000009091161790556116a97f0000000000000000000000000000000000000000000000000000000000000000338488888861204e565b805160208201209091506116be600082612124565b6116d16116c961136d565b60539061222c565b50806116dd8785611ab4565b67ffffffffffffffff1660016116f1610745565b037f212a0c695ace91176d2e6d1ba9200ae05dbe3e8b58f2b310103eb27777b13504608754866040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561175a578181015183820152602001611742565b50505050905090810190601f1680156117875780820380516001836020036101000a031916815260200191505b50935050505060405180910390a4505050505050565b60205481565b608680547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674020000000000000000000000000000000000000000179055565b6000806117ef6109fc565b858560405160200180848152602001838152602001828152602001935050505060405160208183030381529060405280519060200120905061183081612299565b60865490915073ffffffffffffffffffffffffffffffffffffffff1661185682856122ea565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b61187e6117a3565b61011c54604080517f5b3c2cbf000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff90921691635b3c2cbf9160248082019260009290919082900301818387803b1580156118f157600080fd5b505af1158015611905573d6000803e3d6000fd5b505060865460405133935073ffffffffffffffffffffffffffffffffffffffff90911691507f98064af315f26d7333ba107ba43a128ec74345f4d4e6f2549840fe092a1c8bce90600090a3565b81546000906fffffffffffffffffffffffffffffffff165b835470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff168111610def5760008181526001850160205260409020548314156119ba5760019150506109ce565b60010161196a565b80546000906fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811691166119fa8282612384565b949350505050565b805470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b6040805160e09290921b7fffffffff00000000000000000000000000000000000000000000000000000000166020808401919091527f4f5054494353000000000000000000000000000000000000000000000000000060248401528151808403600a018152602a909301909152815191012090565b63ffffffff1660209190911b67ffffffff00000000161790565b3390565b611adb8161239e565b611b4657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f21636f6e747261637420757064617465724d616e616765720000000000000000604482015290519081900360640190fd5b61011c805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f958d788fb4c373604cd4c73aa8c592de127d0819b49bb4dc02c8ecd666e965bf9181900360200190a150565b6086805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f9e5f57e4ee5f9eeac3131028d48f19d80820ce6fa93c4c66cc82a3e2b9837c329181900360200190a150565b80546000906fffffffffffffffffffffffffffffffff700100000000000000000000000000000000820481169116611c718282612384565b611cdc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f456d707479000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6fffffffffffffffffffffffffffffffff8116600090815260018501602052604090205492508215611d2d576fffffffffffffffffffffffffffffffff811660009081526001850160205260408120555b83547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166001919091016fffffffffffffffffffffffffffffffff1617909255919050565b6000611d7d3061239e565b15905090565b605254610100900460ff1680611d9c5750611d9c611d72565b80611daa575060525460ff16155b611dff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f54602e913960400191505060405180910390fd5b605254610100900460ff16158015611e6557605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611e6d6123a4565b611e756124b6565b8015610eaa57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b605254610100900460ff1680611ebf5750611ebf611d72565b80611ecd575060525460ff16155b611f22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f54602e913960400191505060405180910390fd5b605254610100900460ff16158015611f8857605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611f90612646565b608680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416177fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055801561134d57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b60006109ce82612049612732565b612bf3565b6060868686868686604051602001808763ffffffff1660e01b81526004018681526020018563ffffffff1660e01b81526004018463ffffffff1660e01b815260040183815260200182805190602001908083835b602083106120df57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016120a2565b6001836020036101000a038019825116818451168082178552505050505050905001965050505050505060405160208183030381529060405290509695505050505050565b602082015463ffffffff1161219a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6d65726b6c6520747265652066756c6c00000000000000000000000000000000604482015290519081900360640190fd5b6020820180546001019081905560005b60208110156122295781600116600114156121d657828482602081106121cc57fe5b01555061134d9050565b8381602081106121e257fe5b01548360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092506002828161221e57fe5b0491506001016121aa565b50fe5b81546fffffffffffffffffffffffffffffffff80821670010000000000000000000000000000000092839004821660010191821690920291909117835581156109ce576fffffffffffffffffffffffffffffffff8116600090815260019390930160205260409092205590565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b6000815160411461235c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a61237a86828585612cb1565b9695505050505050565b60019103016fffffffffffffffffffffffffffffffff1690565b3b151590565b605254610100900460ff16806123bd57506123bd611d72565b806123cb575060525460ff16155b612420576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f54602e913960400191505060405180910390fd5b605254610100900460ff16158015611e7557605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790558015610eaa57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b605254610100900460ff16806124cf57506124cf611d72565b806124dd575060525460ff16155b612532576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f54602e913960400191505060405180910390fd5b605254610100900460ff1615801561259857605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b60006125a2611ace565b60e980547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610eaa57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b605254610100900460ff168061265f575061265f611d72565b8061266d575060525460ff16155b6126c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f54602e913960400191505060405180910390fd5b605254610100900460ff1615801561272857605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611e756053612ea8565b61273a612eec565b600081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560208201527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060408201527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560608201527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934460808201527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d60a08201527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196860c08201527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8360e08201527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6101008201527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101208201527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101408201527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101608201527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6101808201527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6101a08201527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6101c08201527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26101e08201527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6102008201527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102208201527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102408201527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102608201527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26102808201527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96102a08201527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776102c08201527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526102e08201527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6103008201527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103208201527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103408201527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103608201527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6103808201527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226103a08201527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356103c08201527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96103e082015290565b6020820154600090815b6020811015612ca957600182821c166000868360208110612c1a57fe5b015490508160011415612c5d5780856040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209450612c9f565b84868460208110612c6a57fe5b602002015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012094505b5050600101612bfd565b505092915050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115612d2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612f326022913960400191505060405180910390fd5b8360ff16601b1480612d4157508360ff16601c145b612d96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612f826022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612df2573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116612e9f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b80546fffffffffffffffffffffffffffffffff16610eaa5780547fffffffffffffffffffffffffffffffff0000000000000000000000000000000016600117815550565b604051806104000160405280602090602082028036833750919291505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345434453413a20696e76616c6964207369676e6174757265202773272076616c7565496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565a26469706673582212206f2f00e82aac1075c3b5aca3f72987fa7bec52493f93a137a491de0f677787fd64736f6c63430007060033";

export class TestHome__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestHome> {
    return super.deploy(_localDomain, overrides || {}) as Promise<TestHome>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): TestHome {
    return super.attach(address) as TestHome;
  }
  connect(signer: Signer): TestHome__factory {
    return super.connect(signer) as TestHome__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestHomeInterface {
    return new utils.Interface(_abi) as TestHomeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestHome {
    return new Contract(address, _abi, signerOrProvider) as TestHome;
  }
}
