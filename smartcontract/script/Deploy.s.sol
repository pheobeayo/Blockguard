// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import {BlockGuard} from "../src/BlockGuard.sol";
import {TestToken} from "../src/MockERC20.sol";

contract DeployScript is Script {
    BlockGuard blockGuard;
    TestToken testToken;

    function run() public {
        vm.startBroadcast();
        blockGuard = new BlockGuard();
        testToken = new TestToken();
        vm.stopBroadcast();

        console.log("blockguard address:", address(blockGuard));
        console.log("testToken address:", address(testToken));
    }
}
