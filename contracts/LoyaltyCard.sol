pragma solidity ^0.4.24;


contract LoyaltyCard {
    
    uint256 public totalPoints;
    
    address store;
    address customerAddress;
    uint256 stake;
    uint256 cashback;
    
    struct customer
    {
        string username;
        uint256 points;
        uint[] customerRewards;
        bool status;
		bool isAdmin;
    }
    
    struct reward
    {
        uint rewardId;
        string rewardName;
        uint256 points;
        bytes32 image;
        bool status;
    }
    
    //avoid struct in struct
    struct hashedImage 
    {
        string imageURL;
        uint timeStamp;
    }
    
    //reward[] Rewards;
    //customer[] customers;
    
    mapping ( bytes32 => hashedImage) hashedImages; // this allows to look up notarizedImages by their SHA256notaryHash
    bytes32[] imagesByHash; // this is like a whitepages of all images, by SHA256notaryHash

    mapping ( uint => reward ) rewards;   // this allows to look up Users by their ethereum address
    uint[] rewardList;  // this is like a whitepages of all users, by ethereum address

    mapping ( address => customer ) customers;   // this allows to look up Users by their ethereum address
    address[] customerList;  // this is like a whitepages of all users, by ethereum address
    
    constructor(uint256 currentPoints, address cust) public payable
    {
        require(msg.sender!=cust, "The code maker cannot be the code breaker.");
        
        // 12 attempts max and 1 wei for transfers
        //require(msg.value == 13 wei,"The code maker must deposit 13 wei to play the game.");
        
        totalPoints = currentPoints;
        stake = msg.value;
        customerAddress = cust;
    }
    
    
    //admin
    //******************************STORE**********************************************************
    function getStore() public view returns(address){
        return store;
    }
    //******************************STORE**********************************************************
    
    //******************************CUSTOMER**********************************************************
    //https://blockgeeks.com/guides/solidity/
    function addCustomer(string username, uint256 points, uint[] customerRewards) public returns (bool success) 
    {
        address newCustomer = msg.sender;
        // don't overwrite existing entries, and make sure handle isn't null
        if(bytes(customers[msg.sender].username).length == 0 && bytes(username).length != 0)
        {
            customers[newCustomer].username = username;
            customers[newCustomer].points = points;
            customers[newCustomer].customerRewards = customerRewards;
            customers[newCustomer].status = true;

            customerList.push(newCustomer);  // adds an entry for this user to the user 'whitepages'
            success = true;
        } 
        else 
        {
            success = false; // either handle was null, or a user with this handle already existed
        }
    }
    
    function removeCustomer(address cust)
    {
        customers[cust].status = false;
    }
    
    function getCustomer() public view returns(address){
        return customerAddress;
    }
    //******************************CUSTOMER**********************************************************
    
    //******************************POINTS**********************************************************
    function addPoints(uint256 value) public returns (uint256)
    {
        uint256 val = value;
        
        //get 1 point for every 1 currency value spent
        uint256 points = val;
        if (val >= 100)
        {
            uint256 hundreds = div(val, 100);
            //get and extra 1000 points for every 100 currency value spent
            points += hundreds * 1000;
            val -= hundreds * 100;
        }
        if (val >= 50)
        {
            //get and extra 400 points for every 50 currency value spent
            uint256 fifties = div(val , 50);
            points += fifties * 400;
            val -= hundreds * 50;
        }
        
        return points;
    }
    
    //https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/math/SafeMath.sol
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // Solidity only automatically asserts when dividing by 0
        require(b > 0);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }
    
    function test() public pure returns (uint256)
    {
        return 100;
    }

    function redeemPoints(address cust, uint256 points, uint256 rewardId)
    {
        //check if user has enough points 
        require(points != 0, "You cannot redeem zero points.");
        require(customers[cust].points >= points, "Customer does not have enough points.");
        
        //add reward to rewardlist
        addReward(cust, rewardId);
        
        //deduct points
        totalPoints -= points;
    }
    
    function getPoints() public view returns (uint256)
    {
        return totalPoints;
    }
    //******************************POINTS**********************************************************
    
    //******************************CASHBACK**********************************************************
    function addCashBack(uint256 value) public
    {
        require(msg.value == value);
        uint256 val = value;
        
        if (val >= 100)
        {
            uint256 hundreds = val / 100;
            //get and extra 1000 points for every 100 currency value spent
            cashback += hundreds * 7;
            val -= hundreds * 100;
        }
        if (val >= 50)
        {
            //get and extra 400 points for every 50 currency value spent
            uint256 fifties = val / 50;
            cashback += fifties * 3;
            val -= hundreds * 50;
        }
        
        //transfer
        
        //check
    }
    
    function redeemCashBack(uint256 value) public
    {
        cashback -= value;
    }
    
    function getCashBack() public view returns (uint256)
    {
        return cashback;
    }
    //******************************CASHBACK**********************************************************
    
    //******************************REWARDS**********************************************************
    function addCustomerReward(address _customer, uint256 rewardId)
    {
        //customers[_customer].customerRewards[rewardId].status = true;
        customers[_customer].customerRewards.push(rewardId);
    }
    
   /* function deleteCustomerReward(address _customer, uint256 rewardId)
    {
        //customers[_customer].customerRewards[rewardId].status = false;
    }*/
    
   /* function getCustomerRewards() public view returns (reward[])
    {
        return rewards;
    }*/
    
    //fix
    function addReward(address _customer, uint256 rewardId)
    {
        //customerList(_customer).customerRewards[rewardId].status = true;
        reward r;
        r.rewardId = rewardId;
        rewards[rewardId] =(r);
    }
    
    function deleteReward(address _customer, uint256 rewardId)
    {
        rewards[rewardId].status = false;

    }
    
    function getReward(uint rewardId, bool status) public view returns (string _rewardname, uint256 _points, bytes32 _image)
    {
        return (rewards[rewardId].rewardName, rewards[rewardId].points, rewards[rewardId].image);
    }
    
    function getRewards() public view returns (uint[])
    {
        return rewardList;
    }
    
    //https://blockgeeks.com/guides/solidity/
    function addImageToReward(uint256 rewardId, string imageURL, bytes32 SHA256notaryHash) returns (bool success) 
    {
        reward rewarditem = rewards[rewardId];
        if(bytes(rewarditem.rewardName).length != 0 && rewarditem.rewardId != 0)
        { // make sure this user has created an account first
            if(bytes(imageURL).length != 0)
            {   // ) {  // couldn't get bytes32 null check to work, oh well!
                // prevent users from fighting over sha->image listings in the whitepages, but still allow them to add a personal ref to any sha
                if(bytes(hashedImages[SHA256notaryHash].imageURL).length == 0) 
                {
                    imagesByHash.push(SHA256notaryHash); // adds entry for this image to our image whitepages
                }
                hashedImages[SHA256notaryHash].imageURL = imageURL;
                hashedImages[SHA256notaryHash].timeStamp = block.timestamp; // note that updating an image also updates the timestamp
                rewarditem.image = SHA256notaryHash; // add the image hash to this users .myImages array
                return true;
        } 
        else 
        {
            return false; // either imageURL or SHA256notaryHash was null, couldn't store image
        }
        return true;
    } 
    else 
    {
      return false; // user didn't have an account yet, couldn't store image
    }
  }
    //******************************REWARDS**********************************************************
    
}