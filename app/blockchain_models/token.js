let Token = {
    address: "0x76251881D525a0D985a86952AB9a8BCF50975Cfb",
    abi: [{
            "constant": true,
            "inputs": [],
            "name": "totalPoints",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x567142be"
        },
        {
            "inputs": [{
                    "name": "currentPoints",
                    "type": "uint256"
                },
                {
                    "name": "cust",
                    "type": "address"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "constructor",
            "signature": "constructor"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getStore",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xc2722ecc"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "username",
                    "type": "string"
                },
                {
                    "name": "points",
                    "type": "uint256"
                },
                {
                    "name": "customerRewards",
                    "type": "uint256[]"
                }
            ],
            "name": "addCustomer",
            "outputs": [{
                "name": "success",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xfd5eabb6"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "cust",
                "type": "address"
            }],
            "name": "removeCustomer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x8eb06ccf"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getCustomer",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x650d993b"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "value",
                "type": "uint256"
            }],
            "name": "addPoints",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x12fb1cbd"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "test",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "pure",
            "type": "function",
            "signature": "0xf8a8fd6d"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "testString",
            "outputs": [{
                "name": "",
                "type": "string"
            }],
            "payable": false,
            "stateMutability": "pure",
            "type": "function",
            "signature": "0xfb8f0f59"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "cust",
                    "type": "address"
                },
                {
                    "name": "points",
                    "type": "uint256"
                },
                {
                    "name": "rewardId",
                    "type": "uint256"
                }
            ],
            "name": "redeemPoints",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xfd06b37c"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getPoints",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xf4b7095b"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "value",
                "type": "uint256"
            }],
            "name": "addCashBack",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xfd84a1bb"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "value",
                "type": "uint256"
            }],
            "name": "redeemCashBack",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x88190f23"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getCashBack",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xf8e1e241"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "_customer",
                    "type": "address"
                },
                {
                    "name": "rewardId",
                    "type": "uint256"
                }
            ],
            "name": "addCustomerReward",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xe0fb5d15"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "_customer",
                    "type": "address"
                },
                {
                    "name": "rewardId",
                    "type": "uint256"
                }
            ],
            "name": "addReward",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x9feb8f50"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "_customer",
                    "type": "address"
                },
                {
                    "name": "rewardId",
                    "type": "uint256"
                }
            ],
            "name": "deleteReward",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x727a1e92"
        },
        {
            "constant": true,
            "inputs": [{
                    "name": "rewardId",
                    "type": "uint256"
                },
                {
                    "name": "status",
                    "type": "bool"
                }
            ],
            "name": "getReward",
            "outputs": [{
                    "name": "_rewardname",
                    "type": "string"
                },
                {
                    "name": "_points",
                    "type": "uint256"
                },
                {
                    "name": "_image",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xe4165f7a"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getRewards",
            "outputs": [{
                "name": "",
                "type": "uint256[]"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x0572b0cc"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "rewardId",
                    "type": "uint256"
                },
                {
                    "name": "imageURL",
                    "type": "string"
                },
                {
                    "name": "SHA256notaryHash",
                    "type": "bytes32"
                }
            ],
            "name": "addImageToReward",
            "outputs": [{
                "name": "success",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xef83559c"
        }
    ],

    build: function () {
        return web3.eth.contract(this.abi).at(this.address);
    }
}

export {
    Token
};