// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity ^0.8.9;

contract Lock {
    uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    error Lock__UnlockTimeShouldBeInTheFuture();
    error Lock__YouCantWithdrawYet();
    error Lock__YouArentTheOwner();

    constructor(uint _unlockTime) payable {
        if (block.timestamp >= _unlockTime) revert Lock__UnlockTimeShouldBeInTheFuture();

        unlockTime = _unlockTime;

        owner = payable(msg.sender);
    }

    function withdraw() public {
        if (block.timestamp < unlockTime) revert Lock__YouCantWithdrawYet();
        if (msg.sender != owner) revert Lock__YouArentTheOwner();

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}
