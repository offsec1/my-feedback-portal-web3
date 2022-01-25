// SPDX-License-Identifier: UNLICENSED


pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract FeedbackPortal {

    string[] feedback;

    constructor() {
        console.log("Yo yo, I'm a smart feedback portal");
    }

    function submitFeedback(string memory newFeedback) public {
        feedback.push(newFeedback);
        console.log("%s has submitted feedback!", msg.sender);
    }

    function getAllFeedback() public view returns (string[] memory) {
        console.log("We have %d total feedbacks!", feedback.length);
        return feedback;
    }
}