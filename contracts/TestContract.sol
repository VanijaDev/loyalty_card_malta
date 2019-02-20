pragma solidity ^0.4.24;


contract TestContract {
    string public ttt = "ttt string";

    function getStringTTT() public view returns (string) {
        return ttt;
    }
    
    function getStringName() public view returns (string) {
        return "getString1 rrr";
    }
}