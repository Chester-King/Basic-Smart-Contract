pragma solidity 0.8.4;

contract t1{

    uint256 public value;

    constructor(){
        value = 1;
    }

    function setValue(uint256 _value) public{
        value = _value;
    }
}