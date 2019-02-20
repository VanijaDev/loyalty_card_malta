import {
	Token
} from "../blockchain_models/token";

const App = {
	tokenContract: null,

	start: async () => {
		App.createContract();
	},

	createContract: () => {
		App.tokenContract = Token.build();
		console.log(App.tokenContract);
	},

	test: async function () {
		App.tokenContract.testString.call((err, res) => {
			if (err) {
				console.log("222");
				console.error(err);
			} else {
				// console.log(res);
				// resolve(web3.fromWei(res, "wei"));

				console.log("333");
				console.log(res);
			}
		});
	},

}

window.App = App;

window.addEventListener('load', async () => {
	// Modern dapp browsers...
	if (window.ethereum) {
		window.web3 = new Web3(ethereum);
		try {
			// Request account access if needed
			await ethereum.enable();

			App.start();
		} catch (error) {
			console.error("ethereum.enable() ERROR: ", error);
			alert(error);
		}
	}
	// Legacy dapp browsers...
	else if (window.web3) {
		window.web3 = new Web3(web3.currentProvider);
	}
	// Non-dapp browsers...
	else {
		console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
	}
});