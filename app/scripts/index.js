// Import the page's CSS. Webpack will know what to do with it.
//import '../styles/app.css'

// Import libraries we need.
// import {
// 	default as Web3
// } from 'web3'
// import {
// 	default as contract
// } from 'truffle-contract'

import {
	Token
} from "../blockchain_models/token";


// // Import our contract artifacts and turn them into usable abstractions.
// import loyaltyCardArtifact from '../../build/contracts/LoyaltyCard.json'

// // Loyalty Card is our usable abstraction, which we'll use through the code below.
// const LoyaltyCard = contract(loyaltyCardArtifact)

// // Bootstrap the LoyaltyCard abstraction for Use.
// LoyaltyCard.setProvider(web3.currentProvider)

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
let accounts
let account

const App = {
	meta: null,
	loyaltyContract: null,

	createContract: async () => {
		App.loyaltyContract = Token.build();
		console.log(App.loyaltyContract);
	},


	test: async function () {
		App.loyaltyContract.test((err, res) => {
			if (err) {
				console.error(err);
			} else {
				console.log(web3.fromWei(res.toNumber(), "wei"));
			}
		});
	},

	/*attemptBreak: function(){
		const self = this;
		
		let meta
		LoyaltyCard.deployed().then(function (instance) {
      meta = instance
	  
	  var val1 = document.getElementById('val1').value;
	  var val2 = document.getElementById('val2').value;
	  var val3 = document.getElementById('val3').value;
	  var val4 = document.getElementById('val4').value;
	  
	  var attempt= [];
	  attempt.push(val1);
	  attempt.push(val2);
	  attempt.push(val3);
	  attempt.push(val4);
	  
      return meta.attemptBreak(attempt, { from: accounts[0], value: 1, gas:1400000 })
    }).then(function () {
      return  meta.getLastResultAttempts.call({from:accounts[1]});
   
    }).then(function(result){
		alert(result);
	}).catch(function (e) {
      console.log(e)
      //self.setStatus('Error getting balance; see log.')
    })
		
	},*/

	start: function () {
		const self = this

		// Get the initial account balance so it can be displayed.
		web3.eth.getAccounts(function (err, accs) {
			if (err != null) {
				alert('There was an error fetching your accounts.')
				return
			}

			if (accs.length === 0) {
				alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.")
				return
			}

			accounts = accs
			account = accounts[0]

			App.createContract();

			// alert('Accounts achieved')
			// alert(accs[0])
			// alert(accs[1])

		})
	},

	registerNewCustomer: () => {
		let username = document.getElementById("username").value;
		if (username.length == 0) {
			console.error("name cannot be empty");
			return;
		}

		App.loyaltyContract.addCustomer(username, 0, [], (err, res) => {
			if (err) {
				console.error(err);
			} else {
				console.log(res);
			}
		});
	}
}

window.App = App

window.addEventListener('load', async function () {
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
})