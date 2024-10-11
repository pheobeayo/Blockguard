// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BlockGuard {
    struct Hackathon {
        IERC20 token; // Token used for hackathon rewards
        uint256 startTime; // Hackathon start time
        uint256 endTime; // Hackathon end time
        uint256 totalFunds; // Total prize pool
        uint256[] distribution; // Distribution ratio for winners (in percentage basis points, e.g. 5000 = 50%)
        address[] winners; // Winners of the hackathon
        bool fundsDistributed; // Has the fund been distributed to winners?
    }

    uint256 public hackathonCount; // Keeps track of hackathons
    mapping(uint256 hackId => Hackathon) public hackathons;
    mapping(uint256 hackId => address sponsor) public hackIdToSponsor;
    mapping(uint256 hackId => mapping(address winner => bool claimed)) public hasClaimed; // Tracks if a winner has claimed their reward

    event HackathonCreated(uint256 hackathonId, address token, uint256 startTime, uint256 endTime, uint256 totalFunds);
    event WinnersUpdated(uint256 hackathonId, address[] winners);
    event FundsClaimed(uint256 hackathonId, address winner, uint256 amount);

    modifier validHackathon(uint256 _hackathonId) {
        require(_hackathonId < hackathonCount, "Hackathon does not exist");
        _;
    }

    modifier onlyAfterEnd(uint256 _hackathonId) {
        require(block.timestamp > hackathons[_hackathonId].endTime, "Hackathon has not ended");
        _;
    }

    modifier onlyWinner(uint256 _hackathonId) {
        require(isWinner(_hackathonId, msg.sender), "You are not a winner");
        _;
    }

    // Create a new hackathon
    function createHackathon(
        IERC20 _token,
        uint256 _startTime,
        uint256 _endTime,
        uint256[] memory _distribution, // in percentage basis points multiply by 100
        uint256 _numberOfWinners
    ) external {
        require(_startTime < _endTime, "Invalid time frame");
        uint256 totalPercentage = 0;
        for (uint256 i = 0; i < _distribution.length; i++) {
            totalPercentage += _distribution[i];
        }
        require(totalPercentage == 10000, "Total distribution must equal 100%");
        hackIdToSponsor[hackathonCount] = msg.sender;
        hackathons[hackathonCount] = Hackathon({
            token: _token,
            startTime: _startTime,
            endTime: _endTime,
            totalFunds: 0,
            distribution: _distribution,
            winners: new address[](_numberOfWinners),
            fundsDistributed: false
        });

        emit HackathonCreated(hackathonCount, address(_token), _startTime, _endTime, 0);

        hackathonCount++;
    }

    // Deposit funds into a hackathon
    function depositFunds(uint256 _hackathonId, uint256 _amount) external validHackathon(_hackathonId) {
        Hackathon storage hackathon = hackathons[_hackathonId];
        require(block.timestamp < hackathon.endTime, "Hackathon already ended");
        hackathon.token.transferFrom(msg.sender, address(this), _amount);
        hackathon.totalFunds += _amount;
    }

    // Update the winners for a hackathon
    function updateWinners(uint256 _hackathonId, address[] memory _winners)
        external
        validHackathon(_hackathonId)
        onlyAfterEnd(_hackathonId)
    {
        Hackathon storage hackathon = hackathons[_hackathonId];
        address sponsor = hackIdToSponsor[_hackathonId];
        require(hackathon.winners[0] == address(0), "Winners already set");
        require(sponsor == msg.sender, "not sponsor");
        require(_winners.length == hackathon.distribution.length, "Invalid number of winners");

        hackathon.winners = _winners;

        emit WinnersUpdated(_hackathonId, _winners);
    }

    // Allow winners to claim their funds after the hackathon ends
    function claimFunds(uint256 _hackathonId)
        external
        validHackathon(_hackathonId)
        onlyAfterEnd(_hackathonId)
        onlyWinner(_hackathonId)
    {
        Hackathon storage hackathon = hackathons[_hackathonId];
        require(!hasClaimed[_hackathonId][msg.sender], "Funds already claimed");

        uint256 winnerIndex = getWinnerIndex(_hackathonId, msg.sender);
        uint256 winnerShare = (hackathon.totalFunds * hackathon.distribution[winnerIndex]) / 10000;

        hasClaimed[_hackathonId][msg.sender] = true;
        hackathon.token.transfer(msg.sender, winnerShare);

        emit FundsClaimed(_hackathonId, msg.sender, winnerShare);
    }

    // Helper function to check if an address is a winner
    function isWinner(uint256 _hackathonId, address _addr) public view returns (bool) {
        Hackathon storage hackathon = hackathons[_hackathonId];
        for (uint256 i = 0; i < hackathon.winners.length; i++) {
            if (hackathon.winners[i] == _addr) {
                return true;
            }
        }
        return false;
    }

    // Helper function to get the index of a winner
    function getWinnerIndex(uint256 _hackathonId, address _winner) public view returns (uint256) {
        Hackathon storage hackathon = hackathons[_hackathonId];
        for (uint256 i = 0; i < hackathon.winners.length; i++) {
            if (hackathon.winners[i] == _winner) {
                return i;
            }
        }
        revert("Winner not found");
    }
}
