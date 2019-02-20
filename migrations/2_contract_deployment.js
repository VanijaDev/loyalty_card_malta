const LoyaltyCard = artifacts.require("./LoyaltyCard.sol");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(LoyaltyCard, 100, accounts[1]);
};