/**
 * Kantcoin Project
 * https://kantcoin.org
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/********************  jQuery and Materialize configurations ********************/

$(document).ready(function() {
    //To render selects inside modals
    $('select').material_select()
    //Initializing the materialize tabs
    $('ul.tabs').tabs()
    //initialize all modals
    $('.modal').modal()
    //Placing an empty sidenav on the right side of the screen
    $("#right").sideNav({edge: 'right'})
})

/**
 * To activate menu items when clicked
 */
$("#slide_out1 li").on("click", function() {
    $("#slide_out1 li").removeClass("active")
    $(this).addClass("active")
})

/******************** Constants ********************/

//Minimum password length
const PASSWORD_LENGTH = 8
//Special strings
const THE_AND = "--and--"
const THE_AT = "--at--"
const QUESTION_MARK = "--question--"
const HASHTAG = "--hashtag--"
const QUOTE = "--quote--"
const DOUBLEQUOTE = "--doublequote--"
const SLASH = "--slash--"
const BACKSLASH = "--backslash--"

//Message topics
const REGISTER_VOTER = "RGVT"
const VOTE = "VOTE"
const CONFIRMATION = "CONF"
const STORE_ENODE = "STEN"
const STORE_GROUP = "STGP"
const ENTER_GROUP = "ENGR"

//Refresh rates
const CAMPAIGN_BLOCKCHAIN_RATE = 6000
const MYGROUP_BLOCKCHAIN_RATE = 10000
const CAMPAIGN_IPFS_RATE = 60000

//Storage rates
const STORE_CAMPAIGN_RATE = 5000
const STORE_CAMPAIGN_IPFS_RATE = 20000
const STORE_GROUPS_RATE = 10000

//Other rates
const GET_VOTE_MESSAGE_RATE = 20000
const ENTER_INTO_GROUP_RATE = 20000
const LISTEN_TOR_RATE = 15000
const ENODE_ATTEMP_RATE = 20000
const ACTION_AFTER_CAPTCHA = 15000
const WAIT_TOR_IS_READY = 12000
const WAIT_TO_ADD_PEER = 6000
const WAIT_TO_CREATE_GROUPS = 45000
const TIME_TRYING_TO_CONNECT_WEB3 = 25000

//This contract was created at https://remix.ethereum.org/
const CAMPAIGN_CONTRACT_MGZ3 = [{"constant":false,"inputs":[{"name":"id","type":"bytes32"},{"name":"isdonationsballot","type":"bool"}],"name":"addBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitDonationsStatistics","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"}],"name":"howManyCandidatesInBallot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"validate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"incrementCancellations","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"person","type":"address"},{"name":"pos","type":"uint256"}],"name":"getTor","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"donationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"chairperson","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hashcode","type":"uint256"}],"name":"addVoterHashcode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"validator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"getCancellations","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"howManyGroups","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"preCommit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"hashcodes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"getCandidate","outputs":[{"name":"ipfs","type":"bytes32"},{"name":"count","type":"uint256"},{"name":"donee","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"iterateCandidatesCounter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"remainingDonationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ballots","outputs":[{"name":"id","type":"bytes32"},{"name":"closed","type":"bool"},{"name":"stopped","type":"bool"},{"name":"donations","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"unstopBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"remainingVotationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"howManyBallots","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"toVoter","type":"address"}],"name":"removeRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitVotationPerPosition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"},{"name":"category","type":"bytes32"}],"name":"getVotesPerBallotCandidateCategory","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"},{"name":"pos","type":"uint256"},{"name":"value","type":"bytes32"}],"name":"defineTor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"grp","type":"uint256"},{"name":"value","type":"uint256"}],"name":"defineGroupValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"},{"name":"grp","type":"uint256"}],"name":"defineGroupChairperson","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"hashcode","type":"uint256"}],"name":"findVoterHashcode","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"committed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"voter","type":"address"}],"name":"getVoterNTRUHash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"},{"name":"hashcode","type":"uint256"}],"name":"defineVoterNTRUHash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"},{"name":"first_number","type":"bytes32"},{"name":"the_candidate","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"getVotes","outputs":[{"name":"","type":"bytes32[3]"},{"name":"","type":"uint256[3]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"group","type":"uint256"}],"name":"getGroupVoters","outputs":[{"name":"","type":"address[3]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"groups","outputs":[{"name":"cPerson","type":"address"},{"name":"category","type":"bytes32"},{"name":"value","type":"uint256"},{"name":"size","type":"uint256"},{"name":"closed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"group","type":"uint256"}],"name":"getGroupPubkeys","outputs":[{"name":"","type":"uint256[3]"},{"name":"","type":"bytes32[3]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"toVoter","type":"address"},{"name":"prefix","type":"uint256"},{"name":"pubkey","type":"bytes32"},{"name":"cash","type":"uint256"}],"name":"giveRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentVoteMessage","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"b","type":"bool"}],"name":"defineCanCancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"stopBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"getConfirmations","outputs":[{"name":"","type":"address[3]"},{"name":"","type":"bool[3]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"mayCommit","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitDonations","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"}],"name":"defineValidator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mgz","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"closeBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"canCancel","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"voter","type":"address"}],"name":"getVoter","outputs":[{"name":"pubkey","type":"bytes32"},{"name":"prefix","type":"uint256"},{"name":"group","type":"uint256"},{"name":"cash","type":"uint256"},{"name":"hasGroup1","type":"bool"},{"name":"hasGroup2","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"defineCurrentBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"bytes32"}],"name":"defineCurrentVoteMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"},{"name":"grp","type":"uint256"}],"name":"addVoterToGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"committedStatistics","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitVotationStatisticsPerPosition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"addVoterToGVoters","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentBallot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cPerson","type":"address"}],"name":"addGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"position","type":"uint256"},{"name":"ipfs","type":"bytes32"},{"name":"donee","type":"address"}],"name":"addCandidateIntoBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"grp","type":"uint256"}],"name":"closeGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"grp","type":"uint256"},{"name":"category","type":"bytes32"}],"name":"defineGroupCategory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"position","type":"uint256"},{"name":"ok","type":"bool"}],"name":"confirm","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"vRounds","type":"uint256"},{"name":"dRounds","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"constructor"}]

const CAMPAIGN_CONTRACT_MGZ9 = [{"constant":false,"inputs":[{"name":"id","type":"bytes32"},{"name":"isdonationsballot","type":"bool"}],"name":"addBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitDonationsStatistics","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"}],"name":"howManyCandidatesInBallot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"validate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"incrementCancellations","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"person","type":"address"},{"name":"pos","type":"uint256"}],"name":"getTor","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"donationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"chairperson","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hashcode","type":"uint256"}],"name":"addVoterHashcode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"validator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"getCancellations","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"howManyGroups","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"preCommit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"hashcodes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"getCandidate","outputs":[{"name":"ipfs","type":"bytes32"},{"name":"count","type":"uint256"},{"name":"donee","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"iterateCandidatesCounter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"remainingDonationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ballots","outputs":[{"name":"id","type":"bytes32"},{"name":"closed","type":"bool"},{"name":"stopped","type":"bool"},{"name":"donations","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"unstopBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"remainingVotationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"howManyBallots","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"toVoter","type":"address"}],"name":"removeRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitVotationPerPosition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"},{"name":"category","type":"bytes32"}],"name":"getVotesPerBallotCandidateCategory","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"},{"name":"pos","type":"uint256"},{"name":"value","type":"bytes32"}],"name":"defineTor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"grp","type":"uint256"},{"name":"value","type":"uint256"}],"name":"defineGroupValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"},{"name":"grp","type":"uint256"}],"name":"defineGroupChairperson","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"hashcode","type":"uint256"}],"name":"findVoterHashcode","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"committed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"voter","type":"address"}],"name":"getVoterNTRUHash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"},{"name":"hashcode","type":"uint256"}],"name":"defineVoterNTRUHash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"},{"name":"first_number","type":"bytes32"},{"name":"the_candidate","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"getVotes","outputs":[{"name":"","type":"bytes32[9]"},{"name":"","type":"uint256[9]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"group","type":"uint256"}],"name":"getGroupVoters","outputs":[{"name":"","type":"address[9]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"groups","outputs":[{"name":"cPerson","type":"address"},{"name":"category","type":"bytes32"},{"name":"value","type":"uint256"},{"name":"size","type":"uint256"},{"name":"closed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"group","type":"uint256"}],"name":"getGroupPubkeys","outputs":[{"name":"","type":"uint256[9]"},{"name":"","type":"bytes32[9]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"toVoter","type":"address"},{"name":"prefix","type":"uint256"},{"name":"pubkey","type":"bytes32"},{"name":"cash","type":"uint256"}],"name":"giveRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentVoteMessage","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"b","type":"bool"}],"name":"defineCanCancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"stopBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"getConfirmations","outputs":[{"name":"","type":"address[9]"},{"name":"","type":"bool[9]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"mayCommit","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitDonations","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"}],"name":"defineValidator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mgz","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"closeBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"canCancel","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"voter","type":"address"}],"name":"getVoter","outputs":[{"name":"pubkey","type":"bytes32"},{"name":"prefix","type":"uint256"},{"name":"group","type":"uint256"},{"name":"cash","type":"uint256"},{"name":"hasGroup1","type":"bool"},{"name":"hasGroup2","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"defineCurrentBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"bytes32"}],"name":"defineCurrentVoteMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"},{"name":"grp","type":"uint256"}],"name":"addVoterToGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"committedStatistics","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitVotationStatisticsPerPosition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"addVoterToGVoters","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentBallot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cPerson","type":"address"}],"name":"addGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"position","type":"uint256"},{"name":"ipfs","type":"bytes32"},{"name":"donee","type":"address"}],"name":"addCandidateIntoBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"grp","type":"uint256"}],"name":"closeGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"grp","type":"uint256"},{"name":"category","type":"bytes32"}],"name":"defineGroupCategory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"position","type":"uint256"},{"name":"ok","type":"bool"}],"name":"confirm","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"vRounds","type":"uint256"},{"name":"dRounds","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"constructor"}]

const CAMPAIGN_CONTRACT_MGZ15 = [{"constant":false,"inputs":[{"name":"id","type":"bytes32"},{"name":"isdonationsballot","type":"bool"}],"name":"addBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitDonationsStatistics","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"}],"name":"howManyCandidatesInBallot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"validate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"incrementCancellations","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"person","type":"address"},{"name":"pos","type":"uint256"}],"name":"getTor","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"donationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"chairperson","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hashcode","type":"uint256"}],"name":"addVoterHashcode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"validator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"getCancellations","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"howManyGroups","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"preCommit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"hashcodes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"getCandidate","outputs":[{"name":"ipfs","type":"bytes32"},{"name":"count","type":"uint256"},{"name":"donee","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"iterateCandidatesCounter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"remainingDonationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ballots","outputs":[{"name":"id","type":"bytes32"},{"name":"closed","type":"bool"},{"name":"stopped","type":"bool"},{"name":"donations","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"unstopBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"remainingVotationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"howManyBallots","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"toVoter","type":"address"}],"name":"removeRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitVotationPerPosition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"},{"name":"category","type":"bytes32"}],"name":"getVotesPerBallotCandidateCategory","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"},{"name":"pos","type":"uint256"},{"name":"value","type":"bytes32"}],"name":"defineTor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"grp","type":"uint256"},{"name":"value","type":"uint256"}],"name":"defineGroupValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"},{"name":"grp","type":"uint256"}],"name":"defineGroupChairperson","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"hashcode","type":"uint256"}],"name":"findVoterHashcode","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"committed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"voter","type":"address"}],"name":"getVoterNTRUHash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"},{"name":"hashcode","type":"uint256"}],"name":"defineVoterNTRUHash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"},{"name":"first_number","type":"bytes32"},{"name":"the_candidate","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"getVotes","outputs":[{"name":"","type":"bytes32[15]"},{"name":"","type":"uint256[15]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"group","type":"uint256"}],"name":"getGroupVoters","outputs":[{"name":"","type":"address[15]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"groups","outputs":[{"name":"cPerson","type":"address"},{"name":"category","type":"bytes32"},{"name":"value","type":"uint256"},{"name":"size","type":"uint256"},{"name":"closed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"group","type":"uint256"}],"name":"getGroupPubkeys","outputs":[{"name":"","type":"uint256[15]"},{"name":"","type":"bytes32[15]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"toVoter","type":"address"},{"name":"prefix","type":"uint256"},{"name":"pubkey","type":"bytes32"},{"name":"cash","type":"uint256"}],"name":"giveRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentVoteMessage","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"b","type":"bool"}],"name":"defineCanCancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"stopBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"getConfirmations","outputs":[{"name":"","type":"address[15]"},{"name":"","type":"bool[15]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"mayCommit","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitDonations","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"}],"name":"defineValidator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mgz","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"closeBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"canCancel","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"voter","type":"address"}],"name":"getVoter","outputs":[{"name":"pubkey","type":"bytes32"},{"name":"prefix","type":"uint256"},{"name":"group","type":"uint256"},{"name":"cash","type":"uint256"},{"name":"hasGroup1","type":"bool"},{"name":"hasGroup2","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"defineCurrentBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"bytes32"}],"name":"defineCurrentVoteMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"},{"name":"grp","type":"uint256"}],"name":"addVoterToGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"committedStatistics","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitVotationStatisticsPerPosition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"addVoterToGVoters","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentBallot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cPerson","type":"address"}],"name":"addGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"position","type":"uint256"},{"name":"ipfs","type":"bytes32"},{"name":"donee","type":"address"}],"name":"addCandidateIntoBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"grp","type":"uint256"}],"name":"closeGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"grp","type":"uint256"},{"name":"category","type":"bytes32"}],"name":"defineGroupCategory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"position","type":"uint256"},{"name":"ok","type":"bool"}],"name":"confirm","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"vRounds","type":"uint256"},{"name":"dRounds","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"constructor"}]

const CAMPAIGN_CONTRACT_MGZ21 = [{"constant":false,"inputs":[{"name":"id","type":"bytes32"},{"name":"isdonationsballot","type":"bool"}],"name":"addBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitDonationsStatistics","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"}],"name":"howManyCandidatesInBallot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"validate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"incrementCancellations","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"person","type":"address"},{"name":"pos","type":"uint256"}],"name":"getTor","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"donationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"chairperson","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hashcode","type":"uint256"}],"name":"addVoterHashcode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"validator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"getCancellations","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"howManyGroups","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"preCommit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"hashcodes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"getCandidate","outputs":[{"name":"ipfs","type":"bytes32"},{"name":"count","type":"uint256"},{"name":"donee","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"iterateCandidatesCounter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"remainingDonationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ballots","outputs":[{"name":"id","type":"bytes32"},{"name":"closed","type":"bool"},{"name":"stopped","type":"bool"},{"name":"donations","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"unstopBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"remainingVotationRounds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"howManyBallots","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"toVoter","type":"address"}],"name":"removeRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitVotationPerPosition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"},{"name":"category","type":"bytes32"}],"name":"getVotesPerBallotCandidateCategory","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"},{"name":"pos","type":"uint256"},{"name":"value","type":"bytes32"}],"name":"defineTor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"grp","type":"uint256"},{"name":"value","type":"uint256"}],"name":"defineGroupValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"},{"name":"grp","type":"uint256"}],"name":"defineGroupChairperson","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"hashcode","type":"uint256"}],"name":"findVoterHashcode","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"committed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"voter","type":"address"}],"name":"getVoterNTRUHash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"},{"name":"hashcode","type":"uint256"}],"name":"defineVoterNTRUHash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"},{"name":"first_number","type":"bytes32"},{"name":"the_candidate","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"getVotes","outputs":[{"name":"","type":"bytes32[21]"},{"name":"","type":"uint256[21]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"group","type":"uint256"}],"name":"getGroupVoters","outputs":[{"name":"","type":"address[21]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"groups","outputs":[{"name":"cPerson","type":"address"},{"name":"category","type":"bytes32"},{"name":"value","type":"uint256"},{"name":"size","type":"uint256"},{"name":"closed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"group","type":"uint256"}],"name":"getGroupPubkeys","outputs":[{"name":"","type":"uint256[21]"},{"name":"","type":"bytes32[21]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"toVoter","type":"address"},{"name":"prefix","type":"uint256"},{"name":"pubkey","type":"bytes32"},{"name":"cash","type":"uint256"}],"name":"giveRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentVoteMessage","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"b","type":"bool"}],"name":"defineCanCancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"stopBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"getConfirmations","outputs":[{"name":"","type":"address[21]"},{"name":"","type":"bool[21]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"}],"name":"mayCommit","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitDonations","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"}],"name":"defineValidator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mgz","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"closeBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"canCancel","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"voter","type":"address"}],"name":"getVoter","outputs":[{"name":"pubkey","type":"bytes32"},{"name":"prefix","type":"uint256"},{"name":"group","type":"uint256"},{"name":"cash","type":"uint256"},{"name":"hasGroup1","type":"bool"},{"name":"hasGroup2","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"}],"name":"defineCurrentBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"bytes32"}],"name":"defineCurrentVoteMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"},{"name":"grp","type":"uint256"}],"name":"addVoterToGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"committedStatistics","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"commitVotationStatisticsPerPosition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"},{"name":"grp","type":"uint256"},{"name":"position","type":"uint256"}],"name":"addVoterToGVoters","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentBallot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cPerson","type":"address"}],"name":"addGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"position","type":"uint256"},{"name":"ipfs","type":"bytes32"},{"name":"donee","type":"address"}],"name":"addCandidateIntoBallot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"grp","type":"uint256"}],"name":"closeGroup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"grp","type":"uint256"},{"name":"category","type":"bytes32"}],"name":"defineGroupCategory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"position","type":"uint256"},{"name":"ok","type":"bool"}],"name":"confirm","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"vRounds","type":"uint256"},{"name":"dRounds","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"constructor"}]

const CONTRACT_DATA_MGZ3 = '0x608060405260405160408062004fa8833981018060405281019080805190602001909291908051906020019092919050505060008211801562000043575060058211155b801562000051575060018111155b8015620000615750600581830111155b15156200006d57600080fd5b33600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160088190555081600a8190555080600781905550806009819055505050614ecc80620000dc6000396000f3006080604052600436106102d5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a1162b0146102da5780630c5711ef14610317578063103eb2f71461035857806319730b441461039957806319f1e816146103d05780631dcd1e171461040757806320e614a9146104705780632b1611b51461049b5780632e4176cf146104c6578063399777f31461051d5780633a5381b51461054a578063419cc25f146105a1578063422f675b146105ec57806344428c601461061757806346c1b4b41461064e5780634bd464481461068f5780635182d3f11461071c578063574adce2146107495780635c632b38146107745780635e59d00a146107de578063631af71a1461080b578063656e2a3714610836578063685a9dd8146108615780636f3cb6d6146108a45780637523412b146108e5578063755bd7a51461093e57806376eb1356146109995780637a721d1e146109d05780637eec3f7714610a1d578063812d9dd414610a6257806382eabb9014610abb5780638777027414610b125780638fbd82ef14610b5f57806391f3663314610bb8578063939cf16d14610c5a57806396324bd414610cc35780639973383814610d585780639fdf782414610df0578063a725f0b214610e55578063adedcf7914610e88578063b1bb8fdc14610eb7578063b485478e14610ee4578063b67c27e714610f86578063b9051ee514610fd5578063bb4ba9fb14611016578063c4c1ce4514611059578063d045f1e414611084578063d0f3725f146110b1578063d4f50f98146110e0578063d508d7991461116a578063de655c1514611197578063dfe2aa70146111c8578063e197525814611215578063ee9315811461126e578063f6e8f53f146112af578063f80723a814611306578063f9515f1b14611331578063fa1531c714611374578063fe73cf0b146113d9578063fea234f414611406578063ff02a79a14611441575b600080fd5b3480156102e657600080fd5b506103156004803603810190808035600019169060200190929190803515159060200190929190505050611484565b005b34801561032357600080fd5b50610356600480360381019080803590602001909291908035906020019092919080359060200190929190505050611602565b005b34801561036457600080fd5b506103836004803603810190808035906020019092919050505061192d565b6040518082815260200191505060405180910390f35b3480156103a557600080fd5b506103ce6004803603810190808035906020019092919080359060200190929190505050611947565b005b3480156103dc57600080fd5b5061040560048036038101908080359060200190929190803590602001909291905050506119e5565b005b34801561041357600080fd5b50610452600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611ab2565b60405180826000191660001916815260200191505060405180910390f35b34801561047c57600080fd5b50610485611b0d565b6040518082815260200191505060405180910390f35b3480156104a757600080fd5b506104b0611b13565b6040518082815260200191505060405180910390f35b3480156104d257600080fd5b506104db611b19565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561052957600080fd5b5061054860048036038101908080359060200190929190505050611b3f565b005b34801561055657600080fd5b5061055f611bca565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105ad57600080fd5b506105d66004803603810190808035906020019092919080359060200190929190505050611bf0565b6040518082815260200191505060405180910390f35b3480156105f857600080fd5b50610601611c20565b6040518082815260200191505060405180910390f35b34801561062357600080fd5b5061064c6004803603810190808035906020019092919080359060200190929190505050611c2d565b005b34801561065a57600080fd5b5061067960048036038101908080359060200190929190505050611fd2565b6040518082815260200191505060405180910390f35b34801561069b57600080fd5b506106c46004803603810190808035906020019092919080359060200190929190505050611ff5565b6040518084600019166000191681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34801561072857600080fd5b506107476004803603810190808035906020019092919050505061209f565b005b34801561075557600080fd5b5061075e6120c1565b6040518082815260200191505060405180910390f35b34801561078057600080fd5b5061079f600480360381019080803590602001909291905050506120c7565b60405180856000191660001916815260200184151515158152602001831515151581526020018215151515815260200194505050505060405180910390f35b3480156107ea57600080fd5b506108096004803603810190808035906020019092919050505061212d565b005b34801561081757600080fd5b50610820612213565b6040518082815260200191505060405180910390f35b34801561084257600080fd5b5061084b612219565b6040518082815260200191505060405180910390f35b34801561086d57600080fd5b506108a2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612226565b005b3480156108b057600080fd5b506108e36004803603810190808035906020019092919080359060200190929190803590602001909291905050506122cd565b005b3480156108f157600080fd5b506109286004803603810190808035906020019092919080359060200190929190803560001916906020019092919050505061255c565b6040518082815260200191505060405180910390f35b34801561094a57600080fd5b50610997600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080356000191690602001909291905050506125a6565b005b3480156109a557600080fd5b506109ce600480360381019080803590602001909291908035906020019092919050505061263e565b005b3480156109dc57600080fd5b50610a1b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061273d565b005b348015610a2957600080fd5b50610a4860048036038101908080359060200190929190505050612849565b604051808215151515815260200191505060405180910390f35b348015610a6e57600080fd5b50610aa16004803603810190808035906020019092919080359060200190929190803590602001909291905050506128a0565b604051808215151515815260200191505060405180910390f35b348015610ac757600080fd5b50610afc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506128ef565b6040518082815260200191505060405180910390f35b348015610b1e57600080fd5b50610b5d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050612938565b005b348015610b6b57600080fd5b50610bb66004803603810190808035906020019092919080359060200190929190803590602001909291908035600019169060200190929190803590602001909291905050506129dc565b005b348015610bc457600080fd5b50610bed6004803603810190808035906020019092919080359060200190929190505050612c6e565b6040518083600360200280838360005b83811015610c18578082015181840152602081019050610bfd565b5050505090500182600360200280838360005b83811015610c46578082015181840152602081019050610c2b565b505050509050019250505060405180910390f35b348015610c6657600080fd5b50610c8560048036038101908080359060200190929190505050612d66565b6040518082600360200280838360005b83811015610cb0578082015181840152602081019050610c95565b5050505090500191505060405180910390f35b348015610ccf57600080fd5b50610cee60048036038101908080359060200190929190505050612e26565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018560001916600019168152602001848152602001838152602001821515151581526020019550505050505060405180910390f35b348015610d6457600080fd5b50610d8360048036038101908080359060200190929190505050612e98565b6040518083600360200280838360005b83811015610dae578082015181840152602081019050610d93565b5050505090500182600360200280838360005b83811015610ddc578082015181840152602081019050610dc1565b505050509050019250505060405180910390f35b348015610dfc57600080fd5b50610e53600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803560001916906020019092919080359060200190929190505050613028565b005b348015610e6157600080fd5b50610e6a613163565b60405180826000191660001916815260200191505060405180910390f35b348015610e9457600080fd5b50610eb5600480360381019080803515159060200190929190505050613169565b005b348015610ec357600080fd5b50610ee2600480360381019080803590602001909291905050506131e1565b005b348015610ef057600080fd5b50610f1960048036038101908080359060200190929190803590602001909291905050506132c7565b6040518083600360200280838360005b83811015610f44578082015181840152602081019050610f29565b5050505090500182600360200280838360005b83811015610f72578082015181840152602081019050610f57565b505050509050019250505060405180910390f35b348015610f9257600080fd5b50610fbb6004803603810190808035906020019092919080359060200190929190505050613416565b604051808215151515815260200191505060405180910390f35b348015610fe157600080fd5b50611014600480360381019080803590602001909291908035906020019092919080359060200190929190505050613453565b005b34801561102257600080fd5b50611057600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613741565b005b34801561106557600080fd5b5061106e61383e565b6040518082815260200191505060405180910390f35b34801561109057600080fd5b506110af60048036038101908080359060200190929190505050613843565b005b3480156110bd57600080fd5b506110c6613929565b604051808215151515815260200191505060405180910390f35b3480156110ec57600080fd5b50611121600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061393b565b6040518087600019166000191681526020018681526020018581526020018481526020018315151515815260200182151515158152602001965050505050505060405180910390f35b34801561117657600080fd5b5061119560048036038101908080359060200190929190505050613b05565b005b3480156111a357600080fd5b506111c66004803603810190808035600019169060200190929190505050613bb9565b005b3480156111d457600080fd5b50611213600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050613c23565b005b34801561122157600080fd5b50611254600480360381019080803590602001909291908035906020019092919080359060200190929190505050613eda565b604051808215151515815260200191505060405180910390f35b34801561127a57600080fd5b506112ad600480360381019080803590602001909291908035906020019092919080359060200190929190505050613f29565b005b3480156112bb57600080fd5b50611304600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291905050506141f4565b005b34801561131257600080fd5b5061131b6144a8565b6040518082815260200191505060405180910390f35b34801561133d57600080fd5b50611372600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506144ae565b005b34801561138057600080fd5b506113d760048036038101908080359060200190929190803590602001909291908035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050614613565b005b3480156113e557600080fd5b506114046004803603810190808035906020019092919050505061474c565b005b34801561141257600080fd5b5061143f60048036038101908080359060200190929190803560001916906020019092919050505061493f565b005b34801561144d57600080fd5b506114826004803603810190808035906020019092919080359060200190929190803515159060200190929190505050614a31565b005b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114e057600080fd5b801561150d5760006009541115156114f757600080fd5b6001600960008282540392505081905550611530565b6000600a5411151561151e57600080fd5b6001600a600082825403925050819055505b600360806040519081016040528084600019168152602001600015158152602001600015158152602001831515815250908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000019060001916905560208201518160010160006101000a81548160ff02191690831515021790555060408201518160010160016101000a81548160ff02191690831515021790555060608201518160010160026101000a81548160ff0219169083151502179055505050505050565b600080600060028581548110151561161657fe5b906000526020600020906005020160040160009054906101000a900460ff1615151561164157600080fd5b60038681548110151561165057fe5b906000526020600020906002020160010160009054906101000a900460ff16151561167a57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166002868154811015156116a057fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156116f457600080fd5b60038681548110151561170357fe5b906000526020600020906002020160010160029054906101000a900460ff16151561172d57600080fd5b600060028681548110151561173e57fe5b90600052602060002090600502016002015411151561175c57600080fd5b61011460008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900460ff161515156117ac57600080fd5b6007546002868154811015156117be57fe5b9060005260206000209060050201600201548115156117d957fe5b04925060006001026000191661011160008881526020019081526020016000206000878152602001908152602001600020600086815260200190815260200160002060000154600019161415156119255761011160008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060010154915060028581548110151561187557fe5b906000526020600020906005020160010154905082610110600088815260200190815260200160002060008481526020019081526020016000206000836000191660001916815260200190815260200160002060008282540192505081905550600161011460008881526020019081526020016000206000878152602001908152602001600020600086815260200190815260200160002060006101000a81548160ff0219169083151502179055505b505050505050565b600060108260ff8110151561193e57fe5b01549050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156119a357600080fd5b60016101166000848152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a4157600080fd5b600382815481101515611a5057fe5b906000526020600020906002020160010160009054906101000a900460ff161515611a7a57600080fd5b600161010f60008481526020019081526020016000206000838152602001908152602001600020600082825401925050819055505050565b6000600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b60075481565b60085481565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611b9b57600080fd5b600681908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061010f6000848152602001908152602001600020600083815260200190815260200160002054905092915050565b6000600280549050905090565b6000806000600284815481101515611c4157fe5b906000526020600020906005020160040160009054906101000a900460ff16151515611c6c57600080fd5b600385815481101515611c7b57fe5b906000526020600020906002020160010160009054906101000a900460ff161515611ca557600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16600285815481101515611ccb57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611d1f57600080fd5b6101156000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900460ff16151515611d5e57600080fd5b6000925060009150600090505b6003811015611f8c57600073ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000868152602001908152602001600020600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015611e4e575061011260008681526020019081526020016000206000858152602001908152602001600020600082815260200190815260200160002060000160149054906101000a900460ff16155b8015611e8a57506101166000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900460ff16155b15611e9457611fcb565b6000600102600019166101116000878152602001908152602001600020600086815260200190815260200160002060008381526020019081526020016000206000015460001916141515611ee9576001830192505b600073ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000868152602001908152602001600020600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611f7f576001820191505b8080600101915050611d6b565b60016101156000878152602001908152602001600020600086815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050505050565b600681815481101515611fe157fe5b906000526020600020016000915090505481565b6000806000600f60008681526020019081526020016000206000858152602001908152602001600020600001549250600f60008681526020019081526020016000206000858152602001908152602001600020600101549150600f6000868152602001908152602001600020600085815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690509250925092565b600160108260ff811015156120b057fe5b016000828254019250508190555050565b60095481565b6003818154811015156120d657fe5b90600052602060002090600202016000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900460ff16908060010160029054906101000a900460ff16905084565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561218957600080fd5b600854600754018110151561219d57600080fd5b6003818154811015156121ac57fe5b906000526020600020906002020160010160009054906101000a900460ff161515156121d757600080fd5b60006003828154811015156121e857fe5b906000526020600020906002020160010160016101000a81548160ff02191690831515021790555050565b600a5481565b6000600380549050905090565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561228257600080fd5b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555050565b60006002838154811015156122de57fe5b906000526020600020906005020160040160009054906101000a900460ff1615151561230957600080fd5b60038481548110151561231857fe5b906000526020600020906002020160010160009054906101000a900460ff16151561234257600080fd5b3373ffffffffffffffffffffffffffffffffffffffff1660028481548110151561236857fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156123bc57600080fd5b6003848154811015156123cb57fe5b906000526020600020906002020160010160029054906101000a900460ff161515156123f657600080fd5b61011360008581526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1615151561244657600080fd5b6000600102600019166101116000868152602001908152602001600020600085815260200190815260200160002060008481526020019081526020016000206000015460001916141515612556576101116000858152602001908152602001600020600084815260200190815260200160002060008381526020019081526020016000206001015490506001600f6000868152602001908152602001600020600083815260200190815260200160002060010160008282540192505081905550600161011360008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50505050565b600061011060008581526020019081526020016000206000848152602001908152602001600020600083600019166000191681526020019081526020016000205490509392505050565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156125e057600080fd5b80600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000208160001916905550505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561269a57600080fd5b6000600754828115156126a957fe5b061415156126b657600080fd5b60006002838154811015156126c757fe5b9060005260206000209060050201600301541415156126e557600080fd5b60006002838154811015156126f657fe5b90600052602060002090600502016002015414151561271457600080fd5b8060028381548110151561272457fe5b9060005260206000209060050201600201819055505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561279957600080fd5b6002818154811015156127a857fe5b906000526020600020906005020160040160009054906101000a900460ff161515156127d357600080fd5b600280549050811015156127e657600080fd5b816002828154811015156127f657fe5b906000526020600020906005020160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600080600090505b6006805490508110156128955760068181548110151561286d57fe5b9060005260206000200154831415612888576001915061289a565b8080600101915050612851565b600091505b50919050565b600061011360008581526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1690509392505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561299457600080fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60006002858154811015156129ed57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612a5857600080fd5b600285815481101515612a6757fe5b906000526020600020906005020160040160009054906101000a900460ff16151515612a9257600080fd5b600386815481101515612aa157fe5b906000526020600020906002020160010160009054906101000a900460ff16151515612acc57600080fd5b600386815481101515612adb57fe5b906000526020600020906002020160010160019054906101000a900460ff16151515612b0657600080fd5b6008546007540186101515612b1a57600080fd5b600384101515612b2957600080fd5b6000600102600019166101116000888152602001908152602001600020600087815260200190815260200160002060008681526020019081526020016000206000015460001916141515612b7c57600080fd5b600090505b6003811015612be557826000191661011160008881526020019081526020016000206000878152602001908152602001600020600083815260200190815260200160002060000154600019161415612bd857612c66565b8080600101915050612b81565b82610111600088815260200190815260200160002060008781526020019081526020016000206000868152602001908152602001600020600001816000191690555081610111600088815260200190815260200160002060008781526020019081526020016000206000868152602001908152602001600020600101819055505b505050505050565b612c76614e14565b612c7e614e37565b612c86614e14565b612c8e614e37565b60008090505b6003811015612d5657610111600088815260200190815260200160002060008781526020019081526020016000206000828152602001908152602001600020600001548382600381101515612ce557fe5b60200201906000191690816000191681525050610111600088815260200190815260200160002060008781526020019081526020016000206000828152602001908152602001600020600101548282600381101515612d4057fe5b6020020181815250508080600101915050612c94565b8282945094505050509250929050565b612d6e614e5a565b612d76614e5a565b60008090505b6003811015612e1c57600e6000858152602001908152602001600020600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168282600381101515612dd857fe5b602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508080600101915050612d7c565b8192505050919050565b600281815481101515612e3557fe5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040160009054906101000a900460ff16905085565b612ea0614e37565b612ea8614e14565b612eb0614e14565b612eb8614e37565b60008090505b600381101561301a5760046000600e6000898152602001908152602001600020600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001548382600381101515612f5c57fe5b6020020190600019169081600019168152505060046000600e6000898152602001908152602001600020600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154828260038110151561300457fe5b6020020181815250508080600101915050612ebe565b818394509450505050915091565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561308457600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001816000191690555082600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018190555050505050565b600c5481565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156131c557600080fd5b806000806101000a81548160ff02191690831515021790555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561323d57600080fd5b600854600754018110151561325157600080fd5b60038181548110151561326057fe5b906000526020600020906002020160010160009054906101000a900460ff1615151561328b57600080fd5b600160038281548110151561329c57fe5b906000526020600020906002020160010160016101000a81548160ff02191690831515021790555050565b6132cf614e5a565b6132d7614e7d565b6132df614e5a565b6132e7614e7d565b60008090505b60038110156134065761011260008881526020019081526020016000206000878152602001908152602001600020600082815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838260038110151561335e57fe5b602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505061011260008881526020019081526020016000206000878152602001908152602001600020600082815260200190815260200160002060000160149054906101000a900460ff1682826003811015156133ea57fe5b60200201901515908115158152505080806001019150506132ed565b8282945094505050509250929050565b60006101156000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff16905092915050565b60008060028481548110151561346557fe5b906000526020600020906005020160040160009054906101000a900460ff1615151561349057600080fd5b60038581548110151561349f57fe5b906000526020600020906002020160010160009054906101000a900460ff1615156134c957600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166002858154811015156134ef57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561354357600080fd5b60038581548110151561355257fe5b906000526020600020906002020160010160029054906101000a900460ff16151561357c57600080fd5b600060028581548110151561358d57fe5b9060005260206000209060050201600201541115156135ab57600080fd5b61011360008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060009054906101000a900460ff161515156135fb57600080fd5b60075460028581548110151561360d57fe5b90600052602060002090600502016002015481151561362857fe5b049150600060010260001916610111600087815260200190815260200160002060008681526020019081526020016000206000858152602001908152602001600020600001546000191614151561373a5761011160008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060010154905081600f6000878152602001908152602001600020600083815260200190815260200160002060010160008282540192505081905550600161011360008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561379d57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156137fa57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600381565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561389f57600080fd5b60085460075401811015156138b357600080fd5b6003818154811015156138c257fe5b906000526020600020906002020160010160009054906101000a900460ff161515156138ed57600080fd5b60016003828154811015156138fe57fe5b906000526020600020906002020160010160006101000a81548160ff02191690831515021790555050565b6000809054906101000a900460ff1681565b600080600080600080600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549550600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549450600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549350600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301549250600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff169150600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160019054906101000a900460ff16905091939550919395565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613b6157600080fd5b6008546007540181101515613b7557600080fd5b600381815481101515613b8457fe5b906000526020600020906002020160010160009054906101000a900460ff16151515613baf57600080fd5b80600b8190555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613c1557600080fd5b80600c816000191690555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613c7f57600080fd5b600281815481101515613c8e57fe5b906000526020600020906005020160040160009054906101000a900460ff16151515613cb957600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff16151515613d1557600080fd5b6003600282815481101515613d2657fe5b906000526020600020906005020160030154101515613d4457600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030154600282815481101515613d9657fe5b906000526020600020906005020160020154141515613db457600080fd5b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154111515613e0557600080fd5b80600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055506001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506001600282815481101515613eb857fe5b9060005260206000209060050201600301600082825401925050819055505050565b600061011460008581526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1690509392505050565b600080600284815481101515613f3b57fe5b906000526020600020906005020160040160009054906101000a900460ff16151515613f6657600080fd5b600385815481101515613f7557fe5b906000526020600020906002020160010160009054906101000a900460ff161515613f9f57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16600285815481101515613fc557fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561401957600080fd5b60038581548110151561402857fe5b906000526020600020906002020160010160029054906101000a900460ff1615151561405357600080fd5b61011460008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060009054906101000a900460ff161515156140a357600080fd5b60006001026000191661011160008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060000154600019161415156141ed5761011160008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060010154915060028481548110151561413c57fe5b90600052602060002090600502016001015490506001610110600087815260200190815260200160002060008481526020019081526020016000206000836000191660001916815260200190815260200160002060008282540192505081905550600161011460008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561425057600080fd5b60038110151561425f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600e6000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156142de57600080fd5b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015414151561432e57600080fd5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff16151561438957600080fd5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160019054906101000a900460ff161515156143e557600080fd5b82600e6000848152602001908152602001600020600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160016101000a81548160ff021916908315150217905550505050565b600b5481565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561450a57600080fd5b600260a0604051908101604052808373ffffffffffffffffffffffffffffffffffffffff16815260200160006001026000191681526020016000815260200160008152602001600015158152509080600181540180825580915050906001820390600052602060002090600502016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190600019169055604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555050505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561466f57600080fd5b600060010260001916600f6000868152602001908152602001600020600085815260200190815260200160002060000154600019161415156146b057600080fd5b81600f60008681526020019081526020016000206000858152602001908152602001600020600001816000191690555080600f6000868152602001908152602001600020600085815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156147a957600080fd5b60016002838154811015156147ba57fe5b906000526020600020906005020160040160006101000a81548160ff021916908315150217905550600090505b600381101561493b57600060046000600e6000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160006101000a81548160ff021916908315150217905550600060046000600e6000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160016101000a81548160ff02191690831515021790555080806001019150506147e7565b5050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561499b57600080fd5b60006002838154811015156149ac57fe5b9060005260206000209060050201600301541415156149ca57600080fd5b6000600102600019166002838154811015156149e257fe5b90600052602060002090600502016001015460001916141515614a0457600080fd5b80600283815481101515614a1457fe5b906000526020600020906005020160010181600019169055505050565b600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549150600384101515614a8857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000848152602001908152602001600020600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515614b1c57600080fd5b600385815481101515614b2b57fe5b906000526020600020906002020160010160009054906101000a900460ff16151515614b5657600080fd5b600385815481101515614b6557fe5b906000526020600020906002020160010160019054906101000a900460ff161515614b8f57600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff161515614bea57600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160019054906101000a900460ff161515614c4557600080fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154111515614c9657600080fd5b600090505b6003811015614d43573373ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415614d3657614e0d565b8080600101915050614c9b565b3361011260008781526020019081526020016000206000848152602001908152602001600020600086815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508261011260008781526020019081526020016000206000848152602001908152602001600020600086815260200190815260200160002060000160146101000a81548160ff0219169083151502179055505b5050505050565b606060405190810160405280600390602082028038833980820191505090505090565b606060405190810160405280600390602082028038833980820191505090505090565b606060405190810160405280600390602082028038833980820191505090505090565b6060604051908101604052806003906020820280388339808201915050905050905600a165627a7a723058200fa19a7538be9e04e51977f3e6628409ff0426928c5d7efa9893169b4a8dbb8d0029'

const CONTRACT_DATA_MGZ9 = '0x608060405260405160408062004fac833981018060405281019080805190602001909291908051906020019092919050505060008211801562000043575060058211155b801562000051575060018111155b8015620000615750600581830111155b15156200006d57600080fd5b33600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160088190555081600a8190555080600781905550806009819055505050614ed080620000dc6000396000f3006080604052600436106102d5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a1162b0146102da5780630c5711ef14610317578063103eb2f71461035857806319730b441461039957806319f1e816146103d05780631dcd1e171461040757806320e614a9146104705780632b1611b51461049b5780632e4176cf146104c6578063399777f31461051d5780633a5381b51461054a578063419cc25f146105a1578063422f675b146105ec57806344428c601461061757806346c1b4b41461064e5780634bd464481461068f5780635182d3f11461071c578063574adce2146107495780635c632b38146107745780635e59d00a146107de578063631af71a1461080b578063656e2a3714610836578063685a9dd8146108615780636f3cb6d6146108a45780637523412b146108e5578063755bd7a51461093e57806376eb1356146109995780637a721d1e146109d05780637eec3f7714610a1d578063812d9dd414610a6257806382eabb9014610abb5780638777027414610b125780638fbd82ef14610b5f57806391f3663314610bb8578063939cf16d14610c5a57806396324bd414610cc35780639973383814610d585780639fdf782414610df0578063a725f0b214610e55578063adedcf7914610e88578063b1bb8fdc14610eb7578063b485478e14610ee4578063b67c27e714610f86578063b9051ee514610fd5578063bb4ba9fb14611016578063c4c1ce4514611059578063d045f1e414611084578063d0f3725f146110b1578063d4f50f98146110e0578063d508d7991461116a578063de655c1514611197578063dfe2aa70146111c8578063e197525814611215578063ee9315811461126e578063f6e8f53f146112af578063f80723a814611306578063f9515f1b14611331578063fa1531c714611374578063fe73cf0b146113d9578063fea234f414611406578063ff02a79a14611441575b600080fd5b3480156102e657600080fd5b506103156004803603810190808035600019169060200190929190803515159060200190929190505050611484565b005b34801561032357600080fd5b50610356600480360381019080803590602001909291908035906020019092919080359060200190929190505050611602565b005b34801561036457600080fd5b506103836004803603810190808035906020019092919050505061192d565b6040518082815260200191505060405180910390f35b3480156103a557600080fd5b506103ce6004803603810190808035906020019092919080359060200190929190505050611947565b005b3480156103dc57600080fd5b5061040560048036038101908080359060200190929190803590602001909291905050506119e5565b005b34801561041357600080fd5b50610452600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611ab2565b60405180826000191660001916815260200191505060405180910390f35b34801561047c57600080fd5b50610485611b0d565b6040518082815260200191505060405180910390f35b3480156104a757600080fd5b506104b0611b13565b6040518082815260200191505060405180910390f35b3480156104d257600080fd5b506104db611b19565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561052957600080fd5b5061054860048036038101908080359060200190929190505050611b3f565b005b34801561055657600080fd5b5061055f611bca565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105ad57600080fd5b506105d66004803603810190808035906020019092919080359060200190929190505050611bf0565b6040518082815260200191505060405180910390f35b3480156105f857600080fd5b50610601611c20565b6040518082815260200191505060405180910390f35b34801561062357600080fd5b5061064c6004803603810190808035906020019092919080359060200190929190505050611c2d565b005b34801561065a57600080fd5b5061067960048036038101908080359060200190929190505050611fd2565b6040518082815260200191505060405180910390f35b34801561069b57600080fd5b506106c46004803603810190808035906020019092919080359060200190929190505050611ff5565b6040518084600019166000191681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34801561072857600080fd5b506107476004803603810190808035906020019092919050505061209f565b005b34801561075557600080fd5b5061075e6120c1565b6040518082815260200191505060405180910390f35b34801561078057600080fd5b5061079f600480360381019080803590602001909291905050506120c7565b60405180856000191660001916815260200184151515158152602001831515151581526020018215151515815260200194505050505060405180910390f35b3480156107ea57600080fd5b506108096004803603810190808035906020019092919050505061212d565b005b34801561081757600080fd5b50610820612213565b6040518082815260200191505060405180910390f35b34801561084257600080fd5b5061084b612219565b6040518082815260200191505060405180910390f35b34801561086d57600080fd5b506108a2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612226565b005b3480156108b057600080fd5b506108e36004803603810190808035906020019092919080359060200190929190803590602001909291905050506122cd565b005b3480156108f157600080fd5b506109286004803603810190808035906020019092919080359060200190929190803560001916906020019092919050505061255c565b6040518082815260200191505060405180910390f35b34801561094a57600080fd5b50610997600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080356000191690602001909291905050506125a6565b005b3480156109a557600080fd5b506109ce600480360381019080803590602001909291908035906020019092919050505061263e565b005b3480156109dc57600080fd5b50610a1b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061273d565b005b348015610a2957600080fd5b50610a4860048036038101908080359060200190929190505050612849565b604051808215151515815260200191505060405180910390f35b348015610a6e57600080fd5b50610aa16004803603810190808035906020019092919080359060200190929190803590602001909291905050506128a0565b604051808215151515815260200191505060405180910390f35b348015610ac757600080fd5b50610afc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506128ef565b6040518082815260200191505060405180910390f35b348015610b1e57600080fd5b50610b5d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050612938565b005b348015610b6b57600080fd5b50610bb66004803603810190808035906020019092919080359060200190929190803590602001909291908035600019169060200190929190803590602001909291905050506129dc565b005b348015610bc457600080fd5b50610bed6004803603810190808035906020019092919080359060200190929190505050612c6e565b6040518083600960200280838360005b83811015610c18578082015181840152602081019050610bfd565b5050505090500182600960200280838360005b83811015610c46578082015181840152602081019050610c2b565b505050509050019250505060405180910390f35b348015610c6657600080fd5b50610c8560048036038101908080359060200190929190505050612d66565b6040518082600960200280838360005b83811015610cb0578082015181840152602081019050610c95565b5050505090500191505060405180910390f35b348015610ccf57600080fd5b50610cee60048036038101908080359060200190929190505050612e26565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018560001916600019168152602001848152602001838152602001821515151581526020019550505050505060405180910390f35b348015610d6457600080fd5b50610d8360048036038101908080359060200190929190505050612e98565b6040518083600960200280838360005b83811015610dae578082015181840152602081019050610d93565b5050505090500182600960200280838360005b83811015610ddc578082015181840152602081019050610dc1565b505050509050019250505060405180910390f35b348015610dfc57600080fd5b50610e53600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803560001916906020019092919080359060200190929190505050613028565b005b348015610e6157600080fd5b50610e6a613163565b60405180826000191660001916815260200191505060405180910390f35b348015610e9457600080fd5b50610eb5600480360381019080803515159060200190929190505050613169565b005b348015610ec357600080fd5b50610ee2600480360381019080803590602001909291905050506131e1565b005b348015610ef057600080fd5b50610f1960048036038101908080359060200190929190803590602001909291905050506132c7565b6040518083600960200280838360005b83811015610f44578082015181840152602081019050610f29565b5050505090500182600960200280838360005b83811015610f72578082015181840152602081019050610f57565b505050509050019250505060405180910390f35b348015610f9257600080fd5b50610fbb6004803603810190808035906020019092919080359060200190929190505050613416565b604051808215151515815260200191505060405180910390f35b348015610fe157600080fd5b50611014600480360381019080803590602001909291908035906020019092919080359060200190929190505050613453565b005b34801561102257600080fd5b50611057600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613741565b005b34801561106557600080fd5b5061106e61383e565b6040518082815260200191505060405180910390f35b34801561109057600080fd5b506110af60048036038101908080359060200190929190505050613843565b005b3480156110bd57600080fd5b506110c6613929565b604051808215151515815260200191505060405180910390f35b3480156110ec57600080fd5b50611121600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061393b565b6040518087600019166000191681526020018681526020018581526020018481526020018315151515815260200182151515158152602001965050505050505060405180910390f35b34801561117657600080fd5b5061119560048036038101908080359060200190929190505050613b05565b005b3480156111a357600080fd5b506111c66004803603810190808035600019169060200190929190505050613bb9565b005b3480156111d457600080fd5b50611213600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050613c23565b005b34801561122157600080fd5b50611254600480360381019080803590602001909291908035906020019092919080359060200190929190505050613eda565b604051808215151515815260200191505060405180910390f35b34801561127a57600080fd5b506112ad600480360381019080803590602001909291908035906020019092919080359060200190929190505050613f29565b005b3480156112bb57600080fd5b50611304600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291905050506141f4565b005b34801561131257600080fd5b5061131b6144a8565b6040518082815260200191505060405180910390f35b34801561133d57600080fd5b50611372600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506144ae565b005b34801561138057600080fd5b506113d760048036038101908080359060200190929190803590602001909291908035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050614613565b005b3480156113e557600080fd5b506114046004803603810190808035906020019092919050505061474c565b005b34801561141257600080fd5b5061143f60048036038101908080359060200190929190803560001916906020019092919050505061493f565b005b34801561144d57600080fd5b506114826004803603810190808035906020019092919080359060200190929190803515159060200190929190505050614a31565b005b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114e057600080fd5b801561150d5760006009541115156114f757600080fd5b6001600960008282540392505081905550611530565b6000600a5411151561151e57600080fd5b6001600a600082825403925050819055505b600360806040519081016040528084600019168152602001600015158152602001600015158152602001831515815250908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000019060001916905560208201518160010160006101000a81548160ff02191690831515021790555060408201518160010160016101000a81548160ff02191690831515021790555060608201518160010160026101000a81548160ff0219169083151502179055505050505050565b600080600060028581548110151561161657fe5b906000526020600020906005020160040160009054906101000a900460ff1615151561164157600080fd5b60038681548110151561165057fe5b906000526020600020906002020160010160009054906101000a900460ff16151561167a57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166002868154811015156116a057fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156116f457600080fd5b60038681548110151561170357fe5b906000526020600020906002020160010160029054906101000a900460ff16151561172d57600080fd5b600060028681548110151561173e57fe5b90600052602060002090600502016002015411151561175c57600080fd5b61011460008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900460ff161515156117ac57600080fd5b6007546002868154811015156117be57fe5b9060005260206000209060050201600201548115156117d957fe5b04925060006001026000191661011160008881526020019081526020016000206000878152602001908152602001600020600086815260200190815260200160002060000154600019161415156119255761011160008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060010154915060028581548110151561187557fe5b906000526020600020906005020160010154905082610110600088815260200190815260200160002060008481526020019081526020016000206000836000191660001916815260200190815260200160002060008282540192505081905550600161011460008881526020019081526020016000206000878152602001908152602001600020600086815260200190815260200160002060006101000a81548160ff0219169083151502179055505b505050505050565b600060108260ff8110151561193e57fe5b01549050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156119a357600080fd5b60016101166000848152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a4157600080fd5b600382815481101515611a5057fe5b906000526020600020906002020160010160009054906101000a900460ff161515611a7a57600080fd5b600161010f60008481526020019081526020016000206000838152602001908152602001600020600082825401925050819055505050565b6000600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b60075481565b60085481565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611b9b57600080fd5b600681908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061010f6000848152602001908152602001600020600083815260200190815260200160002054905092915050565b6000600280549050905090565b6000806000600284815481101515611c4157fe5b906000526020600020906005020160040160009054906101000a900460ff16151515611c6c57600080fd5b600385815481101515611c7b57fe5b906000526020600020906002020160010160009054906101000a900460ff161515611ca557600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16600285815481101515611ccb57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611d1f57600080fd5b6101156000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900460ff16151515611d5e57600080fd5b6000925060009150600090505b6009811015611f8c57600073ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000868152602001908152602001600020600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015611e4e575061011260008681526020019081526020016000206000858152602001908152602001600020600082815260200190815260200160002060000160149054906101000a900460ff16155b8015611e8a57506101166000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900460ff16155b15611e9457611fcb565b6000600102600019166101116000878152602001908152602001600020600086815260200190815260200160002060008381526020019081526020016000206000015460001916141515611ee9576001830192505b600073ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000868152602001908152602001600020600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611f7f576001820191505b8080600101915050611d6b565b60016101156000878152602001908152602001600020600086815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050505050565b600681815481101515611fe157fe5b906000526020600020016000915090505481565b6000806000600f60008681526020019081526020016000206000858152602001908152602001600020600001549250600f60008681526020019081526020016000206000858152602001908152602001600020600101549150600f6000868152602001908152602001600020600085815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690509250925092565b600160108260ff811015156120b057fe5b016000828254019250508190555050565b60095481565b6003818154811015156120d657fe5b90600052602060002090600202016000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900460ff16908060010160029054906101000a900460ff16905084565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561218957600080fd5b600854600754018110151561219d57600080fd5b6003818154811015156121ac57fe5b906000526020600020906002020160010160009054906101000a900460ff161515156121d757600080fd5b60006003828154811015156121e857fe5b906000526020600020906002020160010160016101000a81548160ff02191690831515021790555050565b600a5481565b6000600380549050905090565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561228257600080fd5b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555050565b60006002838154811015156122de57fe5b906000526020600020906005020160040160009054906101000a900460ff1615151561230957600080fd5b60038481548110151561231857fe5b906000526020600020906002020160010160009054906101000a900460ff16151561234257600080fd5b3373ffffffffffffffffffffffffffffffffffffffff1660028481548110151561236857fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156123bc57600080fd5b6003848154811015156123cb57fe5b906000526020600020906002020160010160029054906101000a900460ff161515156123f657600080fd5b61011360008581526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1615151561244657600080fd5b6000600102600019166101116000868152602001908152602001600020600085815260200190815260200160002060008481526020019081526020016000206000015460001916141515612556576101116000858152602001908152602001600020600084815260200190815260200160002060008381526020019081526020016000206001015490506001600f6000868152602001908152602001600020600083815260200190815260200160002060010160008282540192505081905550600161011360008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50505050565b600061011060008581526020019081526020016000206000848152602001908152602001600020600083600019166000191681526020019081526020016000205490509392505050565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156125e057600080fd5b80600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000208160001916905550505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561269a57600080fd5b6000600754828115156126a957fe5b061415156126b657600080fd5b60006002838154811015156126c757fe5b9060005260206000209060050201600301541415156126e557600080fd5b60006002838154811015156126f657fe5b90600052602060002090600502016002015414151561271457600080fd5b8060028381548110151561272457fe5b9060005260206000209060050201600201819055505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561279957600080fd5b6002818154811015156127a857fe5b906000526020600020906005020160040160009054906101000a900460ff161515156127d357600080fd5b600280549050811015156127e657600080fd5b816002828154811015156127f657fe5b906000526020600020906005020160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600080600090505b6006805490508110156128955760068181548110151561286d57fe5b9060005260206000200154831415612888576001915061289a565b8080600101915050612851565b600091505b50919050565b600061011360008581526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1690509392505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561299457600080fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60006002858154811015156129ed57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612a5857600080fd5b600285815481101515612a6757fe5b906000526020600020906005020160040160009054906101000a900460ff16151515612a9257600080fd5b600386815481101515612aa157fe5b906000526020600020906002020160010160009054906101000a900460ff16151515612acc57600080fd5b600386815481101515612adb57fe5b906000526020600020906002020160010160019054906101000a900460ff16151515612b0657600080fd5b6008546007540186101515612b1a57600080fd5b600984101515612b2957600080fd5b6000600102600019166101116000888152602001908152602001600020600087815260200190815260200160002060008681526020019081526020016000206000015460001916141515612b7c57600080fd5b600090505b6009811015612be557826000191661011160008881526020019081526020016000206000878152602001908152602001600020600083815260200190815260200160002060000154600019161415612bd857612c66565b8080600101915050612b81565b82610111600088815260200190815260200160002060008781526020019081526020016000206000868152602001908152602001600020600001816000191690555081610111600088815260200190815260200160002060008781526020019081526020016000206000868152602001908152602001600020600101819055505b505050505050565b612c76614e14565b612c7e614e38565b612c86614e14565b612c8e614e38565b60008090505b6009811015612d5657610111600088815260200190815260200160002060008781526020019081526020016000206000828152602001908152602001600020600001548382600981101515612ce557fe5b60200201906000191690816000191681525050610111600088815260200190815260200160002060008781526020019081526020016000206000828152602001908152602001600020600101548282600981101515612d4057fe5b6020020181815250508080600101915050612c94565b8282945094505050509250929050565b612d6e614e5c565b612d76614e5c565b60008090505b6009811015612e1c57600e6000858152602001908152602001600020600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168282600981101515612dd857fe5b602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508080600101915050612d7c565b8192505050919050565b600281815481101515612e3557fe5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040160009054906101000a900460ff16905085565b612ea0614e38565b612ea8614e14565b612eb0614e14565b612eb8614e38565b60008090505b600981101561301a5760046000600e6000898152602001908152602001600020600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001548382600981101515612f5c57fe5b6020020190600019169081600019168152505060046000600e6000898152602001908152602001600020600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154828260098110151561300457fe5b6020020181815250508080600101915050612ebe565b818394509450505050915091565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561308457600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001816000191690555082600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018190555050505050565b600c5481565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156131c557600080fd5b806000806101000a81548160ff02191690831515021790555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561323d57600080fd5b600854600754018110151561325157600080fd5b60038181548110151561326057fe5b906000526020600020906002020160010160009054906101000a900460ff1615151561328b57600080fd5b600160038281548110151561329c57fe5b906000526020600020906002020160010160016101000a81548160ff02191690831515021790555050565b6132cf614e5c565b6132d7614e80565b6132df614e5c565b6132e7614e80565b60008090505b60098110156134065761011260008881526020019081526020016000206000878152602001908152602001600020600082815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838260098110151561335e57fe5b602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505061011260008881526020019081526020016000206000878152602001908152602001600020600082815260200190815260200160002060000160149054906101000a900460ff1682826009811015156133ea57fe5b60200201901515908115158152505080806001019150506132ed565b8282945094505050509250929050565b60006101156000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff16905092915050565b60008060028481548110151561346557fe5b906000526020600020906005020160040160009054906101000a900460ff1615151561349057600080fd5b60038581548110151561349f57fe5b906000526020600020906002020160010160009054906101000a900460ff1615156134c957600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166002858154811015156134ef57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561354357600080fd5b60038581548110151561355257fe5b906000526020600020906002020160010160029054906101000a900460ff16151561357c57600080fd5b600060028581548110151561358d57fe5b9060005260206000209060050201600201541115156135ab57600080fd5b61011360008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060009054906101000a900460ff161515156135fb57600080fd5b60075460028581548110151561360d57fe5b90600052602060002090600502016002015481151561362857fe5b049150600060010260001916610111600087815260200190815260200160002060008681526020019081526020016000206000858152602001908152602001600020600001546000191614151561373a5761011160008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060010154905081600f6000878152602001908152602001600020600083815260200190815260200160002060010160008282540192505081905550600161011360008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561379d57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156137fa57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600981565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561389f57600080fd5b60085460075401811015156138b357600080fd5b6003818154811015156138c257fe5b906000526020600020906002020160010160009054906101000a900460ff161515156138ed57600080fd5b60016003828154811015156138fe57fe5b906000526020600020906002020160010160006101000a81548160ff02191690831515021790555050565b6000809054906101000a900460ff1681565b600080600080600080600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549550600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549450600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549350600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301549250600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff169150600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160019054906101000a900460ff16905091939550919395565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613b6157600080fd5b6008546007540181101515613b7557600080fd5b600381815481101515613b8457fe5b906000526020600020906002020160010160009054906101000a900460ff16151515613baf57600080fd5b80600b8190555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613c1557600080fd5b80600c816000191690555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613c7f57600080fd5b600281815481101515613c8e57fe5b906000526020600020906005020160040160009054906101000a900460ff16151515613cb957600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff16151515613d1557600080fd5b6009600282815481101515613d2657fe5b906000526020600020906005020160030154101515613d4457600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030154600282815481101515613d9657fe5b906000526020600020906005020160020154141515613db457600080fd5b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154111515613e0557600080fd5b80600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055506001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506001600282815481101515613eb857fe5b9060005260206000209060050201600301600082825401925050819055505050565b600061011460008581526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1690509392505050565b600080600284815481101515613f3b57fe5b906000526020600020906005020160040160009054906101000a900460ff16151515613f6657600080fd5b600385815481101515613f7557fe5b906000526020600020906002020160010160009054906101000a900460ff161515613f9f57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16600285815481101515613fc557fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561401957600080fd5b60038581548110151561402857fe5b906000526020600020906002020160010160029054906101000a900460ff1615151561405357600080fd5b61011460008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060009054906101000a900460ff161515156140a357600080fd5b60006001026000191661011160008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060000154600019161415156141ed5761011160008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060010154915060028481548110151561413c57fe5b90600052602060002090600502016001015490506001610110600087815260200190815260200160002060008481526020019081526020016000206000836000191660001916815260200190815260200160002060008282540192505081905550600161011460008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561425057600080fd5b60098110151561425f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600e6000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156142de57600080fd5b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015414151561432e57600080fd5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff16151561438957600080fd5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160019054906101000a900460ff161515156143e557600080fd5b82600e6000848152602001908152602001600020600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160016101000a81548160ff021916908315150217905550505050565b600b5481565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561450a57600080fd5b600260a0604051908101604052808373ffffffffffffffffffffffffffffffffffffffff16815260200160006001026000191681526020016000815260200160008152602001600015158152509080600181540180825580915050906001820390600052602060002090600502016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190600019169055604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555050505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561466f57600080fd5b600060010260001916600f6000868152602001908152602001600020600085815260200190815260200160002060000154600019161415156146b057600080fd5b81600f60008681526020019081526020016000206000858152602001908152602001600020600001816000191690555080600f6000868152602001908152602001600020600085815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156147a957600080fd5b60016002838154811015156147ba57fe5b906000526020600020906005020160040160006101000a81548160ff021916908315150217905550600090505b600981101561493b57600060046000600e6000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160006101000a81548160ff021916908315150217905550600060046000600e6000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160016101000a81548160ff02191690831515021790555080806001019150506147e7565b5050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561499b57600080fd5b60006002838154811015156149ac57fe5b9060005260206000209060050201600301541415156149ca57600080fd5b6000600102600019166002838154811015156149e257fe5b90600052602060002090600502016001015460001916141515614a0457600080fd5b80600283815481101515614a1457fe5b906000526020600020906005020160010181600019169055505050565b600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549150600984101515614a8857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000848152602001908152602001600020600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515614b1c57600080fd5b600385815481101515614b2b57fe5b906000526020600020906002020160010160009054906101000a900460ff16151515614b5657600080fd5b600385815481101515614b6557fe5b906000526020600020906002020160010160019054906101000a900460ff161515614b8f57600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff161515614bea57600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160019054906101000a900460ff161515614c4557600080fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154111515614c9657600080fd5b600090505b6009811015614d43573373ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415614d3657614e0d565b8080600101915050614c9b565b3361011260008781526020019081526020016000206000848152602001908152602001600020600086815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508261011260008781526020019081526020016000206000848152602001908152602001600020600086815260200190815260200160002060000160146101000a81548160ff0219169083151502179055505b5050505050565b61012060405190810160405280600990602082028038833980820191505090505090565b61012060405190810160405280600990602082028038833980820191505090505090565b61012060405190810160405280600990602082028038833980820191505090505090565b610120604051908101604052806009906020820280388339808201915050905050905600a165627a7a723058203ca9d0387977301ebbbf2114572457000852b671b89945728512ba6687510eaa0029'

const CONTRACT_DATA_MGZ15 = '0x608060405260405160408062004fac833981018060405281019080805190602001909291908051906020019092919050505060008211801562000043575060058211155b801562000051575060018111155b8015620000615750600581830111155b15156200006d57600080fd5b33600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160088190555081600a8190555080600781905550806009819055505050614ed080620000dc6000396000f3006080604052600436106102d5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a1162b0146102da5780630c5711ef14610317578063103eb2f71461035857806319730b441461039957806319f1e816146103d05780631dcd1e171461040757806320e614a9146104705780632b1611b51461049b5780632e4176cf146104c6578063399777f31461051d5780633a5381b51461054a578063419cc25f146105a1578063422f675b146105ec57806344428c601461061757806346c1b4b41461064e5780634bd464481461068f5780635182d3f11461071c578063574adce2146107495780635c632b38146107745780635e59d00a146107de578063631af71a1461080b578063656e2a3714610836578063685a9dd8146108615780636f3cb6d6146108a45780637523412b146108e5578063755bd7a51461093e57806376eb1356146109995780637a721d1e146109d05780637eec3f7714610a1d578063812d9dd414610a6257806382eabb9014610abb5780638777027414610b125780638fbd82ef14610b5f57806391f3663314610bb8578063939cf16d14610c5a57806396324bd414610cc35780639973383814610d585780639fdf782414610df0578063a725f0b214610e55578063adedcf7914610e88578063b1bb8fdc14610eb7578063b485478e14610ee4578063b67c27e714610f86578063b9051ee514610fd5578063bb4ba9fb14611016578063c4c1ce4514611059578063d045f1e414611084578063d0f3725f146110b1578063d4f50f98146110e0578063d508d7991461116a578063de655c1514611197578063dfe2aa70146111c8578063e197525814611215578063ee9315811461126e578063f6e8f53f146112af578063f80723a814611306578063f9515f1b14611331578063fa1531c714611374578063fe73cf0b146113d9578063fea234f414611406578063ff02a79a14611441575b600080fd5b3480156102e657600080fd5b506103156004803603810190808035600019169060200190929190803515159060200190929190505050611484565b005b34801561032357600080fd5b50610356600480360381019080803590602001909291908035906020019092919080359060200190929190505050611602565b005b34801561036457600080fd5b506103836004803603810190808035906020019092919050505061192d565b6040518082815260200191505060405180910390f35b3480156103a557600080fd5b506103ce6004803603810190808035906020019092919080359060200190929190505050611947565b005b3480156103dc57600080fd5b5061040560048036038101908080359060200190929190803590602001909291905050506119e5565b005b34801561041357600080fd5b50610452600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611ab2565b60405180826000191660001916815260200191505060405180910390f35b34801561047c57600080fd5b50610485611b0d565b6040518082815260200191505060405180910390f35b3480156104a757600080fd5b506104b0611b13565b6040518082815260200191505060405180910390f35b3480156104d257600080fd5b506104db611b19565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561052957600080fd5b5061054860048036038101908080359060200190929190505050611b3f565b005b34801561055657600080fd5b5061055f611bca565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105ad57600080fd5b506105d66004803603810190808035906020019092919080359060200190929190505050611bf0565b6040518082815260200191505060405180910390f35b3480156105f857600080fd5b50610601611c20565b6040518082815260200191505060405180910390f35b34801561062357600080fd5b5061064c6004803603810190808035906020019092919080359060200190929190505050611c2d565b005b34801561065a57600080fd5b5061067960048036038101908080359060200190929190505050611fd2565b6040518082815260200191505060405180910390f35b34801561069b57600080fd5b506106c46004803603810190808035906020019092919080359060200190929190505050611ff5565b6040518084600019166000191681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34801561072857600080fd5b506107476004803603810190808035906020019092919050505061209f565b005b34801561075557600080fd5b5061075e6120c1565b6040518082815260200191505060405180910390f35b34801561078057600080fd5b5061079f600480360381019080803590602001909291905050506120c7565b60405180856000191660001916815260200184151515158152602001831515151581526020018215151515815260200194505050505060405180910390f35b3480156107ea57600080fd5b506108096004803603810190808035906020019092919050505061212d565b005b34801561081757600080fd5b50610820612213565b6040518082815260200191505060405180910390f35b34801561084257600080fd5b5061084b612219565b6040518082815260200191505060405180910390f35b34801561086d57600080fd5b506108a2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612226565b005b3480156108b057600080fd5b506108e36004803603810190808035906020019092919080359060200190929190803590602001909291905050506122cd565b005b3480156108f157600080fd5b506109286004803603810190808035906020019092919080359060200190929190803560001916906020019092919050505061255c565b6040518082815260200191505060405180910390f35b34801561094a57600080fd5b50610997600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080356000191690602001909291905050506125a6565b005b3480156109a557600080fd5b506109ce600480360381019080803590602001909291908035906020019092919050505061263e565b005b3480156109dc57600080fd5b50610a1b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061273d565b005b348015610a2957600080fd5b50610a4860048036038101908080359060200190929190505050612849565b604051808215151515815260200191505060405180910390f35b348015610a6e57600080fd5b50610aa16004803603810190808035906020019092919080359060200190929190803590602001909291905050506128a0565b604051808215151515815260200191505060405180910390f35b348015610ac757600080fd5b50610afc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506128ef565b6040518082815260200191505060405180910390f35b348015610b1e57600080fd5b50610b5d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050612938565b005b348015610b6b57600080fd5b50610bb66004803603810190808035906020019092919080359060200190929190803590602001909291908035600019169060200190929190803590602001909291905050506129dc565b005b348015610bc457600080fd5b50610bed6004803603810190808035906020019092919080359060200190929190505050612c6e565b6040518083600f60200280838360005b83811015610c18578082015181840152602081019050610bfd565b5050505090500182600f60200280838360005b83811015610c46578082015181840152602081019050610c2b565b505050509050019250505060405180910390f35b348015610c6657600080fd5b50610c8560048036038101908080359060200190929190505050612d66565b6040518082600f60200280838360005b83811015610cb0578082015181840152602081019050610c95565b5050505090500191505060405180910390f35b348015610ccf57600080fd5b50610cee60048036038101908080359060200190929190505050612e26565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018560001916600019168152602001848152602001838152602001821515151581526020019550505050505060405180910390f35b348015610d6457600080fd5b50610d8360048036038101908080359060200190929190505050612e98565b6040518083600f60200280838360005b83811015610dae578082015181840152602081019050610d93565b5050505090500182600f60200280838360005b83811015610ddc578082015181840152602081019050610dc1565b505050509050019250505060405180910390f35b348015610dfc57600080fd5b50610e53600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803560001916906020019092919080359060200190929190505050613028565b005b348015610e6157600080fd5b50610e6a613163565b60405180826000191660001916815260200191505060405180910390f35b348015610e9457600080fd5b50610eb5600480360381019080803515159060200190929190505050613169565b005b348015610ec357600080fd5b50610ee2600480360381019080803590602001909291905050506131e1565b005b348015610ef057600080fd5b50610f1960048036038101908080359060200190929190803590602001909291905050506132c7565b6040518083600f60200280838360005b83811015610f44578082015181840152602081019050610f29565b5050505090500182600f60200280838360005b83811015610f72578082015181840152602081019050610f57565b505050509050019250505060405180910390f35b348015610f9257600080fd5b50610fbb6004803603810190808035906020019092919080359060200190929190505050613416565b604051808215151515815260200191505060405180910390f35b348015610fe157600080fd5b50611014600480360381019080803590602001909291908035906020019092919080359060200190929190505050613453565b005b34801561102257600080fd5b50611057600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613741565b005b34801561106557600080fd5b5061106e61383e565b6040518082815260200191505060405180910390f35b34801561109057600080fd5b506110af60048036038101908080359060200190929190505050613843565b005b3480156110bd57600080fd5b506110c6613929565b604051808215151515815260200191505060405180910390f35b3480156110ec57600080fd5b50611121600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061393b565b6040518087600019166000191681526020018681526020018581526020018481526020018315151515815260200182151515158152602001965050505050505060405180910390f35b34801561117657600080fd5b5061119560048036038101908080359060200190929190505050613b05565b005b3480156111a357600080fd5b506111c66004803603810190808035600019169060200190929190505050613bb9565b005b3480156111d457600080fd5b50611213600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050613c23565b005b34801561122157600080fd5b50611254600480360381019080803590602001909291908035906020019092919080359060200190929190505050613eda565b604051808215151515815260200191505060405180910390f35b34801561127a57600080fd5b506112ad600480360381019080803590602001909291908035906020019092919080359060200190929190505050613f29565b005b3480156112bb57600080fd5b50611304600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291905050506141f4565b005b34801561131257600080fd5b5061131b6144a8565b6040518082815260200191505060405180910390f35b34801561133d57600080fd5b50611372600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506144ae565b005b34801561138057600080fd5b506113d760048036038101908080359060200190929190803590602001909291908035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050614613565b005b3480156113e557600080fd5b506114046004803603810190808035906020019092919050505061474c565b005b34801561141257600080fd5b5061143f60048036038101908080359060200190929190803560001916906020019092919050505061493f565b005b34801561144d57600080fd5b506114826004803603810190808035906020019092919080359060200190929190803515159060200190929190505050614a31565b005b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114e057600080fd5b801561150d5760006009541115156114f757600080fd5b6001600960008282540392505081905550611530565b6000600a5411151561151e57600080fd5b6001600a600082825403925050819055505b600360806040519081016040528084600019168152602001600015158152602001600015158152602001831515815250908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000019060001916905560208201518160010160006101000a81548160ff02191690831515021790555060408201518160010160016101000a81548160ff02191690831515021790555060608201518160010160026101000a81548160ff0219169083151502179055505050505050565b600080600060028581548110151561161657fe5b906000526020600020906005020160040160009054906101000a900460ff1615151561164157600080fd5b60038681548110151561165057fe5b906000526020600020906002020160010160009054906101000a900460ff16151561167a57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166002868154811015156116a057fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156116f457600080fd5b60038681548110151561170357fe5b906000526020600020906002020160010160029054906101000a900460ff16151561172d57600080fd5b600060028681548110151561173e57fe5b90600052602060002090600502016002015411151561175c57600080fd5b61011460008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900460ff161515156117ac57600080fd5b6007546002868154811015156117be57fe5b9060005260206000209060050201600201548115156117d957fe5b04925060006001026000191661011160008881526020019081526020016000206000878152602001908152602001600020600086815260200190815260200160002060000154600019161415156119255761011160008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060010154915060028581548110151561187557fe5b906000526020600020906005020160010154905082610110600088815260200190815260200160002060008481526020019081526020016000206000836000191660001916815260200190815260200160002060008282540192505081905550600161011460008881526020019081526020016000206000878152602001908152602001600020600086815260200190815260200160002060006101000a81548160ff0219169083151502179055505b505050505050565b600060108260ff8110151561193e57fe5b01549050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156119a357600080fd5b60016101166000848152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a4157600080fd5b600382815481101515611a5057fe5b906000526020600020906002020160010160009054906101000a900460ff161515611a7a57600080fd5b600161010f60008481526020019081526020016000206000838152602001908152602001600020600082825401925050819055505050565b6000600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b60075481565b60085481565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611b9b57600080fd5b600681908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061010f6000848152602001908152602001600020600083815260200190815260200160002054905092915050565b6000600280549050905090565b6000806000600284815481101515611c4157fe5b906000526020600020906005020160040160009054906101000a900460ff16151515611c6c57600080fd5b600385815481101515611c7b57fe5b906000526020600020906002020160010160009054906101000a900460ff161515611ca557600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16600285815481101515611ccb57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611d1f57600080fd5b6101156000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900460ff16151515611d5e57600080fd5b6000925060009150600090505b600f811015611f8c57600073ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000868152602001908152602001600020600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015611e4e575061011260008681526020019081526020016000206000858152602001908152602001600020600082815260200190815260200160002060000160149054906101000a900460ff16155b8015611e8a57506101166000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900460ff16155b15611e9457611fcb565b6000600102600019166101116000878152602001908152602001600020600086815260200190815260200160002060008381526020019081526020016000206000015460001916141515611ee9576001830192505b600073ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000868152602001908152602001600020600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611f7f576001820191505b8080600101915050611d6b565b60016101156000878152602001908152602001600020600086815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050505050565b600681815481101515611fe157fe5b906000526020600020016000915090505481565b6000806000600f60008681526020019081526020016000206000858152602001908152602001600020600001549250600f60008681526020019081526020016000206000858152602001908152602001600020600101549150600f6000868152602001908152602001600020600085815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690509250925092565b600160108260ff811015156120b057fe5b016000828254019250508190555050565b60095481565b6003818154811015156120d657fe5b90600052602060002090600202016000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900460ff16908060010160029054906101000a900460ff16905084565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561218957600080fd5b600854600754018110151561219d57600080fd5b6003818154811015156121ac57fe5b906000526020600020906002020160010160009054906101000a900460ff161515156121d757600080fd5b60006003828154811015156121e857fe5b906000526020600020906002020160010160016101000a81548160ff02191690831515021790555050565b600a5481565b6000600380549050905090565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561228257600080fd5b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555050565b60006002838154811015156122de57fe5b906000526020600020906005020160040160009054906101000a900460ff1615151561230957600080fd5b60038481548110151561231857fe5b906000526020600020906002020160010160009054906101000a900460ff16151561234257600080fd5b3373ffffffffffffffffffffffffffffffffffffffff1660028481548110151561236857fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156123bc57600080fd5b6003848154811015156123cb57fe5b906000526020600020906002020160010160029054906101000a900460ff161515156123f657600080fd5b61011360008581526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1615151561244657600080fd5b6000600102600019166101116000868152602001908152602001600020600085815260200190815260200160002060008481526020019081526020016000206000015460001916141515612556576101116000858152602001908152602001600020600084815260200190815260200160002060008381526020019081526020016000206001015490506001600f6000868152602001908152602001600020600083815260200190815260200160002060010160008282540192505081905550600161011360008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50505050565b600061011060008581526020019081526020016000206000848152602001908152602001600020600083600019166000191681526020019081526020016000205490509392505050565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156125e057600080fd5b80600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000208160001916905550505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561269a57600080fd5b6000600754828115156126a957fe5b061415156126b657600080fd5b60006002838154811015156126c757fe5b9060005260206000209060050201600301541415156126e557600080fd5b60006002838154811015156126f657fe5b90600052602060002090600502016002015414151561271457600080fd5b8060028381548110151561272457fe5b9060005260206000209060050201600201819055505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561279957600080fd5b6002818154811015156127a857fe5b906000526020600020906005020160040160009054906101000a900460ff161515156127d357600080fd5b600280549050811015156127e657600080fd5b816002828154811015156127f657fe5b906000526020600020906005020160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600080600090505b6006805490508110156128955760068181548110151561286d57fe5b9060005260206000200154831415612888576001915061289a565b8080600101915050612851565b600091505b50919050565b600061011360008581526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1690509392505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561299457600080fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60006002858154811015156129ed57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612a5857600080fd5b600285815481101515612a6757fe5b906000526020600020906005020160040160009054906101000a900460ff16151515612a9257600080fd5b600386815481101515612aa157fe5b906000526020600020906002020160010160009054906101000a900460ff16151515612acc57600080fd5b600386815481101515612adb57fe5b906000526020600020906002020160010160019054906101000a900460ff16151515612b0657600080fd5b6008546007540186101515612b1a57600080fd5b600f84101515612b2957600080fd5b6000600102600019166101116000888152602001908152602001600020600087815260200190815260200160002060008681526020019081526020016000206000015460001916141515612b7c57600080fd5b600090505b600f811015612be557826000191661011160008881526020019081526020016000206000878152602001908152602001600020600083815260200190815260200160002060000154600019161415612bd857612c66565b8080600101915050612b81565b82610111600088815260200190815260200160002060008781526020019081526020016000206000868152602001908152602001600020600001816000191690555081610111600088815260200190815260200160002060008781526020019081526020016000206000868152602001908152602001600020600101819055505b505050505050565b612c76614e14565b612c7e614e38565b612c86614e14565b612c8e614e38565b60008090505b600f811015612d5657610111600088815260200190815260200160002060008781526020019081526020016000206000828152602001908152602001600020600001548382600f81101515612ce557fe5b60200201906000191690816000191681525050610111600088815260200190815260200160002060008781526020019081526020016000206000828152602001908152602001600020600101548282600f81101515612d4057fe5b6020020181815250508080600101915050612c94565b8282945094505050509250929050565b612d6e614e5c565b612d76614e5c565b60008090505b600f811015612e1c57600e6000858152602001908152602001600020600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168282600f81101515612dd857fe5b602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508080600101915050612d7c565b8192505050919050565b600281815481101515612e3557fe5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040160009054906101000a900460ff16905085565b612ea0614e38565b612ea8614e14565b612eb0614e14565b612eb8614e38565b60008090505b600f81101561301a5760046000600e6000898152602001908152602001600020600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001548382600f81101515612f5c57fe5b6020020190600019169081600019168152505060046000600e6000898152602001908152602001600020600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548282600f8110151561300457fe5b6020020181815250508080600101915050612ebe565b818394509450505050915091565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561308457600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001816000191690555082600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018190555050505050565b600c5481565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156131c557600080fd5b806000806101000a81548160ff02191690831515021790555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561323d57600080fd5b600854600754018110151561325157600080fd5b60038181548110151561326057fe5b906000526020600020906002020160010160009054906101000a900460ff1615151561328b57600080fd5b600160038281548110151561329c57fe5b906000526020600020906002020160010160016101000a81548160ff02191690831515021790555050565b6132cf614e5c565b6132d7614e80565b6132df614e5c565b6132e7614e80565b60008090505b600f8110156134065761011260008881526020019081526020016000206000878152602001908152602001600020600082815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168382600f8110151561335e57fe5b602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505061011260008881526020019081526020016000206000878152602001908152602001600020600082815260200190815260200160002060000160149054906101000a900460ff168282600f811015156133ea57fe5b60200201901515908115158152505080806001019150506132ed565b8282945094505050509250929050565b60006101156000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff16905092915050565b60008060028481548110151561346557fe5b906000526020600020906005020160040160009054906101000a900460ff1615151561349057600080fd5b60038581548110151561349f57fe5b906000526020600020906002020160010160009054906101000a900460ff1615156134c957600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166002858154811015156134ef57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561354357600080fd5b60038581548110151561355257fe5b906000526020600020906002020160010160029054906101000a900460ff16151561357c57600080fd5b600060028581548110151561358d57fe5b9060005260206000209060050201600201541115156135ab57600080fd5b61011360008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060009054906101000a900460ff161515156135fb57600080fd5b60075460028581548110151561360d57fe5b90600052602060002090600502016002015481151561362857fe5b049150600060010260001916610111600087815260200190815260200160002060008681526020019081526020016000206000858152602001908152602001600020600001546000191614151561373a5761011160008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060010154905081600f6000878152602001908152602001600020600083815260200190815260200160002060010160008282540192505081905550600161011360008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561379d57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156137fa57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600f81565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561389f57600080fd5b60085460075401811015156138b357600080fd5b6003818154811015156138c257fe5b906000526020600020906002020160010160009054906101000a900460ff161515156138ed57600080fd5b60016003828154811015156138fe57fe5b906000526020600020906002020160010160006101000a81548160ff02191690831515021790555050565b6000809054906101000a900460ff1681565b600080600080600080600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549550600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549450600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549350600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301549250600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff169150600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160019054906101000a900460ff16905091939550919395565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613b6157600080fd5b6008546007540181101515613b7557600080fd5b600381815481101515613b8457fe5b906000526020600020906002020160010160009054906101000a900460ff16151515613baf57600080fd5b80600b8190555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613c1557600080fd5b80600c816000191690555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613c7f57600080fd5b600281815481101515613c8e57fe5b906000526020600020906005020160040160009054906101000a900460ff16151515613cb957600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff16151515613d1557600080fd5b600f600282815481101515613d2657fe5b906000526020600020906005020160030154101515613d4457600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030154600282815481101515613d9657fe5b906000526020600020906005020160020154141515613db457600080fd5b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154111515613e0557600080fd5b80600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055506001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506001600282815481101515613eb857fe5b9060005260206000209060050201600301600082825401925050819055505050565b600061011460008581526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1690509392505050565b600080600284815481101515613f3b57fe5b906000526020600020906005020160040160009054906101000a900460ff16151515613f6657600080fd5b600385815481101515613f7557fe5b906000526020600020906002020160010160009054906101000a900460ff161515613f9f57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16600285815481101515613fc557fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561401957600080fd5b60038581548110151561402857fe5b906000526020600020906002020160010160029054906101000a900460ff1615151561405357600080fd5b61011460008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060009054906101000a900460ff161515156140a357600080fd5b60006001026000191661011160008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060000154600019161415156141ed5761011160008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060010154915060028481548110151561413c57fe5b90600052602060002090600502016001015490506001610110600087815260200190815260200160002060008481526020019081526020016000206000836000191660001916815260200190815260200160002060008282540192505081905550600161011460008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561425057600080fd5b600f8110151561425f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600e6000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156142de57600080fd5b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015414151561432e57600080fd5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff16151561438957600080fd5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160019054906101000a900460ff161515156143e557600080fd5b82600e6000848152602001908152602001600020600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160016101000a81548160ff021916908315150217905550505050565b600b5481565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561450a57600080fd5b600260a0604051908101604052808373ffffffffffffffffffffffffffffffffffffffff16815260200160006001026000191681526020016000815260200160008152602001600015158152509080600181540180825580915050906001820390600052602060002090600502016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190600019169055604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555050505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561466f57600080fd5b600060010260001916600f6000868152602001908152602001600020600085815260200190815260200160002060000154600019161415156146b057600080fd5b81600f60008681526020019081526020016000206000858152602001908152602001600020600001816000191690555080600f6000868152602001908152602001600020600085815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156147a957600080fd5b60016002838154811015156147ba57fe5b906000526020600020906005020160040160006101000a81548160ff021916908315150217905550600090505b600f81101561493b57600060046000600e6000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160006101000a81548160ff021916908315150217905550600060046000600e6000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160016101000a81548160ff02191690831515021790555080806001019150506147e7565b5050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561499b57600080fd5b60006002838154811015156149ac57fe5b9060005260206000209060050201600301541415156149ca57600080fd5b6000600102600019166002838154811015156149e257fe5b90600052602060002090600502016001015460001916141515614a0457600080fd5b80600283815481101515614a1457fe5b906000526020600020906005020160010181600019169055505050565b600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549150600f84101515614a8857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000848152602001908152602001600020600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515614b1c57600080fd5b600385815481101515614b2b57fe5b906000526020600020906002020160010160009054906101000a900460ff16151515614b5657600080fd5b600385815481101515614b6557fe5b906000526020600020906002020160010160019054906101000a900460ff161515614b8f57600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff161515614bea57600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160019054906101000a900460ff161515614c4557600080fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154111515614c9657600080fd5b600090505b600f811015614d43573373ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415614d3657614e0d565b8080600101915050614c9b565b3361011260008781526020019081526020016000206000848152602001908152602001600020600086815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508261011260008781526020019081526020016000206000848152602001908152602001600020600086815260200190815260200160002060000160146101000a81548160ff0219169083151502179055505b5050505050565b6101e060405190810160405280600f90602082028038833980820191505090505090565b6101e060405190810160405280600f90602082028038833980820191505090505090565b6101e060405190810160405280600f90602082028038833980820191505090505090565b6101e060405190810160405280600f906020820280388339808201915050905050905600a165627a7a72305820befe699a433a2e076f6a4b1a255b703c0564749bf3b7562ef958c6c32c1119880029'

const CONTRACT_DATA_MGZ21 = '0x608060405260405160408062004fac833981018060405281019080805190602001909291908051906020019092919050505060008211801562000043575060058211155b801562000051575060018111155b8015620000615750600581830111155b15156200006d57600080fd5b33600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160088190555081600a8190555080600781905550806009819055505050614ed080620000dc6000396000f3006080604052600436106102d5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a1162b0146102da5780630c5711ef14610317578063103eb2f71461035857806319730b441461039957806319f1e816146103d05780631dcd1e171461040757806320e614a9146104705780632b1611b51461049b5780632e4176cf146104c6578063399777f31461051d5780633a5381b51461054a578063419cc25f146105a1578063422f675b146105ec57806344428c601461061757806346c1b4b41461064e5780634bd464481461068f5780635182d3f11461071c578063574adce2146107495780635c632b38146107745780635e59d00a146107de578063631af71a1461080b578063656e2a3714610836578063685a9dd8146108615780636f3cb6d6146108a45780637523412b146108e5578063755bd7a51461093e57806376eb1356146109995780637a721d1e146109d05780637eec3f7714610a1d578063812d9dd414610a6257806382eabb9014610abb5780638777027414610b125780638fbd82ef14610b5f57806391f3663314610bb8578063939cf16d14610c5a57806396324bd414610cc35780639973383814610d585780639fdf782414610df0578063a725f0b214610e55578063adedcf7914610e88578063b1bb8fdc14610eb7578063b485478e14610ee4578063b67c27e714610f86578063b9051ee514610fd5578063bb4ba9fb14611016578063c4c1ce4514611059578063d045f1e414611084578063d0f3725f146110b1578063d4f50f98146110e0578063d508d7991461116a578063de655c1514611197578063dfe2aa70146111c8578063e197525814611215578063ee9315811461126e578063f6e8f53f146112af578063f80723a814611306578063f9515f1b14611331578063fa1531c714611374578063fe73cf0b146113d9578063fea234f414611406578063ff02a79a14611441575b600080fd5b3480156102e657600080fd5b506103156004803603810190808035600019169060200190929190803515159060200190929190505050611484565b005b34801561032357600080fd5b50610356600480360381019080803590602001909291908035906020019092919080359060200190929190505050611602565b005b34801561036457600080fd5b506103836004803603810190808035906020019092919050505061192d565b6040518082815260200191505060405180910390f35b3480156103a557600080fd5b506103ce6004803603810190808035906020019092919080359060200190929190505050611947565b005b3480156103dc57600080fd5b5061040560048036038101908080359060200190929190803590602001909291905050506119e5565b005b34801561041357600080fd5b50610452600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611ab2565b60405180826000191660001916815260200191505060405180910390f35b34801561047c57600080fd5b50610485611b0d565b6040518082815260200191505060405180910390f35b3480156104a757600080fd5b506104b0611b13565b6040518082815260200191505060405180910390f35b3480156104d257600080fd5b506104db611b19565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561052957600080fd5b5061054860048036038101908080359060200190929190505050611b3f565b005b34801561055657600080fd5b5061055f611bca565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105ad57600080fd5b506105d66004803603810190808035906020019092919080359060200190929190505050611bf0565b6040518082815260200191505060405180910390f35b3480156105f857600080fd5b50610601611c20565b6040518082815260200191505060405180910390f35b34801561062357600080fd5b5061064c6004803603810190808035906020019092919080359060200190929190505050611c2d565b005b34801561065a57600080fd5b5061067960048036038101908080359060200190929190505050611fd2565b6040518082815260200191505060405180910390f35b34801561069b57600080fd5b506106c46004803603810190808035906020019092919080359060200190929190505050611ff5565b6040518084600019166000191681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34801561072857600080fd5b506107476004803603810190808035906020019092919050505061209f565b005b34801561075557600080fd5b5061075e6120c1565b6040518082815260200191505060405180910390f35b34801561078057600080fd5b5061079f600480360381019080803590602001909291905050506120c7565b60405180856000191660001916815260200184151515158152602001831515151581526020018215151515815260200194505050505060405180910390f35b3480156107ea57600080fd5b506108096004803603810190808035906020019092919050505061212d565b005b34801561081757600080fd5b50610820612213565b6040518082815260200191505060405180910390f35b34801561084257600080fd5b5061084b612219565b6040518082815260200191505060405180910390f35b34801561086d57600080fd5b506108a2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612226565b005b3480156108b057600080fd5b506108e36004803603810190808035906020019092919080359060200190929190803590602001909291905050506122cd565b005b3480156108f157600080fd5b506109286004803603810190808035906020019092919080359060200190929190803560001916906020019092919050505061255c565b6040518082815260200191505060405180910390f35b34801561094a57600080fd5b50610997600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080356000191690602001909291905050506125a6565b005b3480156109a557600080fd5b506109ce600480360381019080803590602001909291908035906020019092919050505061263e565b005b3480156109dc57600080fd5b50610a1b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061273d565b005b348015610a2957600080fd5b50610a4860048036038101908080359060200190929190505050612849565b604051808215151515815260200191505060405180910390f35b348015610a6e57600080fd5b50610aa16004803603810190808035906020019092919080359060200190929190803590602001909291905050506128a0565b604051808215151515815260200191505060405180910390f35b348015610ac757600080fd5b50610afc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506128ef565b6040518082815260200191505060405180910390f35b348015610b1e57600080fd5b50610b5d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050612938565b005b348015610b6b57600080fd5b50610bb66004803603810190808035906020019092919080359060200190929190803590602001909291908035600019169060200190929190803590602001909291905050506129dc565b005b348015610bc457600080fd5b50610bed6004803603810190808035906020019092919080359060200190929190505050612c6e565b6040518083601560200280838360005b83811015610c18578082015181840152602081019050610bfd565b5050505090500182601560200280838360005b83811015610c46578082015181840152602081019050610c2b565b505050509050019250505060405180910390f35b348015610c6657600080fd5b50610c8560048036038101908080359060200190929190505050612d66565b6040518082601560200280838360005b83811015610cb0578082015181840152602081019050610c95565b5050505090500191505060405180910390f35b348015610ccf57600080fd5b50610cee60048036038101908080359060200190929190505050612e26565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018560001916600019168152602001848152602001838152602001821515151581526020019550505050505060405180910390f35b348015610d6457600080fd5b50610d8360048036038101908080359060200190929190505050612e98565b6040518083601560200280838360005b83811015610dae578082015181840152602081019050610d93565b5050505090500182601560200280838360005b83811015610ddc578082015181840152602081019050610dc1565b505050509050019250505060405180910390f35b348015610dfc57600080fd5b50610e53600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803560001916906020019092919080359060200190929190505050613028565b005b348015610e6157600080fd5b50610e6a613163565b60405180826000191660001916815260200191505060405180910390f35b348015610e9457600080fd5b50610eb5600480360381019080803515159060200190929190505050613169565b005b348015610ec357600080fd5b50610ee2600480360381019080803590602001909291905050506131e1565b005b348015610ef057600080fd5b50610f1960048036038101908080359060200190929190803590602001909291905050506132c7565b6040518083601560200280838360005b83811015610f44578082015181840152602081019050610f29565b5050505090500182601560200280838360005b83811015610f72578082015181840152602081019050610f57565b505050509050019250505060405180910390f35b348015610f9257600080fd5b50610fbb6004803603810190808035906020019092919080359060200190929190505050613416565b604051808215151515815260200191505060405180910390f35b348015610fe157600080fd5b50611014600480360381019080803590602001909291908035906020019092919080359060200190929190505050613453565b005b34801561102257600080fd5b50611057600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613741565b005b34801561106557600080fd5b5061106e61383e565b6040518082815260200191505060405180910390f35b34801561109057600080fd5b506110af60048036038101908080359060200190929190505050613843565b005b3480156110bd57600080fd5b506110c6613929565b604051808215151515815260200191505060405180910390f35b3480156110ec57600080fd5b50611121600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061393b565b6040518087600019166000191681526020018681526020018581526020018481526020018315151515815260200182151515158152602001965050505050505060405180910390f35b34801561117657600080fd5b5061119560048036038101908080359060200190929190505050613b05565b005b3480156111a357600080fd5b506111c66004803603810190808035600019169060200190929190505050613bb9565b005b3480156111d457600080fd5b50611213600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050613c23565b005b34801561122157600080fd5b50611254600480360381019080803590602001909291908035906020019092919080359060200190929190505050613eda565b604051808215151515815260200191505060405180910390f35b34801561127a57600080fd5b506112ad600480360381019080803590602001909291908035906020019092919080359060200190929190505050613f29565b005b3480156112bb57600080fd5b50611304600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291905050506141f4565b005b34801561131257600080fd5b5061131b6144a8565b6040518082815260200191505060405180910390f35b34801561133d57600080fd5b50611372600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506144ae565b005b34801561138057600080fd5b506113d760048036038101908080359060200190929190803590602001909291908035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050614613565b005b3480156113e557600080fd5b506114046004803603810190808035906020019092919050505061474c565b005b34801561141257600080fd5b5061143f60048036038101908080359060200190929190803560001916906020019092919050505061493f565b005b34801561144d57600080fd5b506114826004803603810190808035906020019092919080359060200190929190803515159060200190929190505050614a31565b005b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114e057600080fd5b801561150d5760006009541115156114f757600080fd5b6001600960008282540392505081905550611530565b6000600a5411151561151e57600080fd5b6001600a600082825403925050819055505b600360806040519081016040528084600019168152602001600015158152602001600015158152602001831515815250908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000019060001916905560208201518160010160006101000a81548160ff02191690831515021790555060408201518160010160016101000a81548160ff02191690831515021790555060608201518160010160026101000a81548160ff0219169083151502179055505050505050565b600080600060028581548110151561161657fe5b906000526020600020906005020160040160009054906101000a900460ff1615151561164157600080fd5b60038681548110151561165057fe5b906000526020600020906002020160010160009054906101000a900460ff16151561167a57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166002868154811015156116a057fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156116f457600080fd5b60038681548110151561170357fe5b906000526020600020906002020160010160029054906101000a900460ff16151561172d57600080fd5b600060028681548110151561173e57fe5b90600052602060002090600502016002015411151561175c57600080fd5b61011460008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900460ff161515156117ac57600080fd5b6007546002868154811015156117be57fe5b9060005260206000209060050201600201548115156117d957fe5b04925060006001026000191661011160008881526020019081526020016000206000878152602001908152602001600020600086815260200190815260200160002060000154600019161415156119255761011160008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060010154915060028581548110151561187557fe5b906000526020600020906005020160010154905082610110600088815260200190815260200160002060008481526020019081526020016000206000836000191660001916815260200190815260200160002060008282540192505081905550600161011460008881526020019081526020016000206000878152602001908152602001600020600086815260200190815260200160002060006101000a81548160ff0219169083151502179055505b505050505050565b600060108260ff8110151561193e57fe5b01549050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156119a357600080fd5b60016101166000848152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a4157600080fd5b600382815481101515611a5057fe5b906000526020600020906002020160010160009054906101000a900460ff161515611a7a57600080fd5b600161010f60008481526020019081526020016000206000838152602001908152602001600020600082825401925050819055505050565b6000600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b60075481565b60085481565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611b9b57600080fd5b600681908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061010f6000848152602001908152602001600020600083815260200190815260200160002054905092915050565b6000600280549050905090565b6000806000600284815481101515611c4157fe5b906000526020600020906005020160040160009054906101000a900460ff16151515611c6c57600080fd5b600385815481101515611c7b57fe5b906000526020600020906002020160010160009054906101000a900460ff161515611ca557600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16600285815481101515611ccb57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611d1f57600080fd5b6101156000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900460ff16151515611d5e57600080fd5b6000925060009150600090505b6015811015611f8c57600073ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000868152602001908152602001600020600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015611e4e575061011260008681526020019081526020016000206000858152602001908152602001600020600082815260200190815260200160002060000160149054906101000a900460ff16155b8015611e8a57506101166000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900460ff16155b15611e9457611fcb565b6000600102600019166101116000878152602001908152602001600020600086815260200190815260200160002060008381526020019081526020016000206000015460001916141515611ee9576001830192505b600073ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000868152602001908152602001600020600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611f7f576001820191505b8080600101915050611d6b565b60016101156000878152602001908152602001600020600086815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050505050565b600681815481101515611fe157fe5b906000526020600020016000915090505481565b6000806000600f60008681526020019081526020016000206000858152602001908152602001600020600001549250600f60008681526020019081526020016000206000858152602001908152602001600020600101549150600f6000868152602001908152602001600020600085815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690509250925092565b600160108260ff811015156120b057fe5b016000828254019250508190555050565b60095481565b6003818154811015156120d657fe5b90600052602060002090600202016000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900460ff16908060010160029054906101000a900460ff16905084565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561218957600080fd5b600854600754018110151561219d57600080fd5b6003818154811015156121ac57fe5b906000526020600020906002020160010160009054906101000a900460ff161515156121d757600080fd5b60006003828154811015156121e857fe5b906000526020600020906002020160010160016101000a81548160ff02191690831515021790555050565b600a5481565b6000600380549050905090565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561228257600080fd5b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555050565b60006002838154811015156122de57fe5b906000526020600020906005020160040160009054906101000a900460ff1615151561230957600080fd5b60038481548110151561231857fe5b906000526020600020906002020160010160009054906101000a900460ff16151561234257600080fd5b3373ffffffffffffffffffffffffffffffffffffffff1660028481548110151561236857fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156123bc57600080fd5b6003848154811015156123cb57fe5b906000526020600020906002020160010160029054906101000a900460ff161515156123f657600080fd5b61011360008581526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1615151561244657600080fd5b6000600102600019166101116000868152602001908152602001600020600085815260200190815260200160002060008481526020019081526020016000206000015460001916141515612556576101116000858152602001908152602001600020600084815260200190815260200160002060008381526020019081526020016000206001015490506001600f6000868152602001908152602001600020600083815260200190815260200160002060010160008282540192505081905550600161011360008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50505050565b600061011060008581526020019081526020016000206000848152602001908152602001600020600083600019166000191681526020019081526020016000205490509392505050565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156125e057600080fd5b80600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000208160001916905550505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561269a57600080fd5b6000600754828115156126a957fe5b061415156126b657600080fd5b60006002838154811015156126c757fe5b9060005260206000209060050201600301541415156126e557600080fd5b60006002838154811015156126f657fe5b90600052602060002090600502016002015414151561271457600080fd5b8060028381548110151561272457fe5b9060005260206000209060050201600201819055505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561279957600080fd5b6002818154811015156127a857fe5b906000526020600020906005020160040160009054906101000a900460ff161515156127d357600080fd5b600280549050811015156127e657600080fd5b816002828154811015156127f657fe5b906000526020600020906005020160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600080600090505b6006805490508110156128955760068181548110151561286d57fe5b9060005260206000200154831415612888576001915061289a565b8080600101915050612851565b600091505b50919050565b600061011360008581526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1690509392505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561299457600080fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60006002858154811015156129ed57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612a5857600080fd5b600285815481101515612a6757fe5b906000526020600020906005020160040160009054906101000a900460ff16151515612a9257600080fd5b600386815481101515612aa157fe5b906000526020600020906002020160010160009054906101000a900460ff16151515612acc57600080fd5b600386815481101515612adb57fe5b906000526020600020906002020160010160019054906101000a900460ff16151515612b0657600080fd5b6008546007540186101515612b1a57600080fd5b601584101515612b2957600080fd5b6000600102600019166101116000888152602001908152602001600020600087815260200190815260200160002060008681526020019081526020016000206000015460001916141515612b7c57600080fd5b600090505b6015811015612be557826000191661011160008881526020019081526020016000206000878152602001908152602001600020600083815260200190815260200160002060000154600019161415612bd857612c66565b8080600101915050612b81565b82610111600088815260200190815260200160002060008781526020019081526020016000206000868152602001908152602001600020600001816000191690555081610111600088815260200190815260200160002060008781526020019081526020016000206000868152602001908152602001600020600101819055505b505050505050565b612c76614e14565b612c7e614e38565b612c86614e14565b612c8e614e38565b60008090505b6015811015612d5657610111600088815260200190815260200160002060008781526020019081526020016000206000828152602001908152602001600020600001548382601581101515612ce557fe5b60200201906000191690816000191681525050610111600088815260200190815260200160002060008781526020019081526020016000206000828152602001908152602001600020600101548282601581101515612d4057fe5b6020020181815250508080600101915050612c94565b8282945094505050509250929050565b612d6e614e5c565b612d76614e5c565b60008090505b6015811015612e1c57600e6000858152602001908152602001600020600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168282601581101515612dd857fe5b602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508080600101915050612d7c565b8192505050919050565b600281815481101515612e3557fe5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040160009054906101000a900460ff16905085565b612ea0614e38565b612ea8614e14565b612eb0614e14565b612eb8614e38565b60008090505b601581101561301a5760046000600e6000898152602001908152602001600020600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001548382601581101515612f5c57fe5b6020020190600019169081600019168152505060046000600e6000898152602001908152602001600020600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154828260158110151561300457fe5b6020020181815250508080600101915050612ebe565b818394509450505050915091565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561308457600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001816000191690555082600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018190555050505050565b600c5481565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156131c557600080fd5b806000806101000a81548160ff02191690831515021790555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561323d57600080fd5b600854600754018110151561325157600080fd5b60038181548110151561326057fe5b906000526020600020906002020160010160009054906101000a900460ff1615151561328b57600080fd5b600160038281548110151561329c57fe5b906000526020600020906002020160010160016101000a81548160ff02191690831515021790555050565b6132cf614e5c565b6132d7614e80565b6132df614e5c565b6132e7614e80565b60008090505b60158110156134065761011260008881526020019081526020016000206000878152602001908152602001600020600082815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838260158110151561335e57fe5b602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505061011260008881526020019081526020016000206000878152602001908152602001600020600082815260200190815260200160002060000160149054906101000a900460ff1682826015811015156133ea57fe5b60200201901515908115158152505080806001019150506132ed565b8282945094505050509250929050565b60006101156000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff16905092915050565b60008060028481548110151561346557fe5b906000526020600020906005020160040160009054906101000a900460ff1615151561349057600080fd5b60038581548110151561349f57fe5b906000526020600020906002020160010160009054906101000a900460ff1615156134c957600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166002858154811015156134ef57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561354357600080fd5b60038581548110151561355257fe5b906000526020600020906002020160010160029054906101000a900460ff16151561357c57600080fd5b600060028581548110151561358d57fe5b9060005260206000209060050201600201541115156135ab57600080fd5b61011360008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060009054906101000a900460ff161515156135fb57600080fd5b60075460028581548110151561360d57fe5b90600052602060002090600502016002015481151561362857fe5b049150600060010260001916610111600087815260200190815260200160002060008681526020019081526020016000206000858152602001908152602001600020600001546000191614151561373a5761011160008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060010154905081600f6000878152602001908152602001600020600083815260200190815260200160002060010160008282540192505081905550600161011360008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561379d57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156137fa57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b601581565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561389f57600080fd5b60085460075401811015156138b357600080fd5b6003818154811015156138c257fe5b906000526020600020906002020160010160009054906101000a900460ff161515156138ed57600080fd5b60016003828154811015156138fe57fe5b906000526020600020906002020160010160006101000a81548160ff02191690831515021790555050565b6000809054906101000a900460ff1681565b600080600080600080600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549550600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549450600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549350600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301549250600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff169150600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160019054906101000a900460ff16905091939550919395565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613b6157600080fd5b6008546007540181101515613b7557600080fd5b600381815481101515613b8457fe5b906000526020600020906002020160010160009054906101000a900460ff16151515613baf57600080fd5b80600b8190555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613c1557600080fd5b80600c816000191690555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613c7f57600080fd5b600281815481101515613c8e57fe5b906000526020600020906005020160040160009054906101000a900460ff16151515613cb957600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff16151515613d1557600080fd5b6015600282815481101515613d2657fe5b906000526020600020906005020160030154101515613d4457600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030154600282815481101515613d9657fe5b906000526020600020906005020160020154141515613db457600080fd5b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154111515613e0557600080fd5b80600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055506001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506001600282815481101515613eb857fe5b9060005260206000209060050201600301600082825401925050819055505050565b600061011460008581526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff1690509392505050565b600080600284815481101515613f3b57fe5b906000526020600020906005020160040160009054906101000a900460ff16151515613f6657600080fd5b600385815481101515613f7557fe5b906000526020600020906002020160010160009054906101000a900460ff161515613f9f57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16600285815481101515613fc557fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561401957600080fd5b60038581548110151561402857fe5b906000526020600020906002020160010160029054906101000a900460ff1615151561405357600080fd5b61011460008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060009054906101000a900460ff161515156140a357600080fd5b60006001026000191661011160008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060000154600019161415156141ed5761011160008681526020019081526020016000206000858152602001908152602001600020600084815260200190815260200160002060010154915060028481548110151561413c57fe5b90600052602060002090600502016001015490506001610110600087815260200190815260200160002060008481526020019081526020016000206000836000191660001916815260200190815260200160002060008282540192505081905550600161011460008781526020019081526020016000206000868152602001908152602001600020600085815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5050505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561425057600080fd5b60158110151561425f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600e6000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156142de57600080fd5b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015414151561432e57600080fd5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff16151561438957600080fd5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160019054906101000a900460ff161515156143e557600080fd5b82600e6000848152602001908152602001600020600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160016101000a81548160ff021916908315150217905550505050565b600b5481565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561450a57600080fd5b600260a0604051908101604052808373ffffffffffffffffffffffffffffffffffffffff16815260200160006001026000191681526020016000815260200160008152602001600015158152509080600181540180825580915050906001820390600052602060002090600502016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190600019169055604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555050505050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561466f57600080fd5b600060010260001916600f6000868152602001908152602001600020600085815260200190815260200160002060000154600019161415156146b057600080fd5b81600f60008681526020019081526020016000206000858152602001908152602001600020600001816000191690555080600f6000868152602001908152602001600020600085815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156147a957600080fd5b60016002838154811015156147ba57fe5b906000526020600020906005020160040160006101000a81548160ff021916908315150217905550600090505b601581101561493b57600060046000600e6000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160006101000a81548160ff021916908315150217905550600060046000600e6000868152602001908152602001600020600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160016101000a81548160ff02191690831515021790555080806001019150506147e7565b5050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561499b57600080fd5b60006002838154811015156149ac57fe5b9060005260206000209060050201600301541415156149ca57600080fd5b6000600102600019166002838154811015156149e257fe5b90600052602060002090600502016001015460001916141515614a0457600080fd5b80600283815481101515614a1457fe5b906000526020600020906005020160010181600019169055505050565b600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549150601584101515614a8857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000848152602001908152602001600020600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515614b1c57600080fd5b600385815481101515614b2b57fe5b906000526020600020906002020160010160009054906101000a900460ff16151515614b5657600080fd5b600385815481101515614b6557fe5b906000526020600020906002020160010160019054906101000a900460ff161515614b8f57600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff161515614bea57600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160019054906101000a900460ff161515614c4557600080fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154111515614c9657600080fd5b600090505b6015811015614d43573373ffffffffffffffffffffffffffffffffffffffff1661011260008781526020019081526020016000206000848152602001908152602001600020600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415614d3657614e0d565b8080600101915050614c9b565b3361011260008781526020019081526020016000206000848152602001908152602001600020600086815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508261011260008781526020019081526020016000206000848152602001908152602001600020600086815260200190815260200160002060000160146101000a81548160ff0219169083151502179055505b5050505050565b6102a060405190810160405280601590602082028038833980820191505090505090565b6102a060405190810160405280601590602082028038833980820191505090505090565b6102a060405190810160405280601590602082028038833980820191505090505090565b6102a0604051908101604052806015906020820280388339808201915050905050905600a165627a7a72305820aff070dc8e1c73ec58e04d18f7e190b667a9e2843fb5393d4931944de161c8e60029'

const DONATIONS_CONTRACT = [{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"end_campaign","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"address"}],"name":"getCandidateDonation","outputs":[{"name":"cash","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalDonatedAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"donations_ok","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"validator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"refund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"donor","type":"address"},{"name":"amount","type":"uint256"}],"name":"confirmDonor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"start_campaign","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidates_addresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"donor","type":"address"}],"name":"getDonor","outputs":[{"name":"confirmed","type":"bool"},{"name":"cash","type":"uint256"},{"name":"donated_amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"address"},{"name":"amount","type":"uint256"}],"name":"setCandidateDonation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"position","type":"uint256"}],"name":"receiveDonation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"validateDonations","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"conf","type":"address"},{"name":"s_campaign","type":"uint256"},{"name":"e_campaign","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}]

const DONATIONS_DATA = '0x60806040526040516060806110488339810180604052810190808051906020019092919080519060200190929190805190602001909291905050503373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561007557600080fd5b428211151561008357600080fd5b818111151561009157600080fd5b33600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160068190555080600781905550505050610f15806101336000396000f3006080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806302d05d3f1461012d5780630e7aa9c0146101845780630edb112c146101af57806320fa44cd1461020657806325b243a8146102315780633a5381b514610260578063590e1ae3146102b75780635e9974e0146102ce5780638690268c1461031b57806387c26d8f1461034657806396c59043146103b3578063a2b6bee01461041c578063d4e9329214610469578063d70c03bc14610480578063ec5f38af146104ad575b34600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282540192505081905550005b34801561013957600080fd5b506101426104c4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019057600080fd5b506101996104ea565b6040518082815260200191505060405180910390f35b3480156101bb57600080fd5b506101f0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104f0565b6040518082815260200191505060405180910390f35b34801561021257600080fd5b5061021b610539565b6040518082815260200191505060405180910390f35b34801561023d57600080fd5b5061024661053f565b604051808215151515815260200191505060405180910390f35b34801561026c57600080fd5b50610275610552565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102c357600080fd5b506102cc610578565b005b3480156102da57600080fd5b50610319600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061067d565b005b34801561032757600080fd5b506103306108ed565b6040518082815260200191505060405180910390f35b34801561035257600080fd5b50610371600480360381019080803590602001909291905050506108f3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103bf57600080fd5b506103f4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610931565b6040518084151515158152602001838152602001828152602001935050505060405180910390f35b34801561042857600080fd5b50610467600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a19565b005b34801561047557600080fd5b5061047e610b80565b005b34801561048c57600080fd5b506104ab60048036038101908080359060200190929190505050610cad565b005b3480156104b957600080fd5b506104c2610e50565b005b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60035481565b600860009054906101000a900460ff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006007544211151561058a57600080fd5b600860009054906101000a900460ff161515156105a657600080fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015490506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106d957600080fd5b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015411151561072a57600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615151561078657600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015481111515156107d757600080fd5b600654421015156107e757600080fd5b6001600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055508060036000828254019250508190555080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254039250508190555080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055505050565b60065481565b60008181548110151561090257fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169250600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549150600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015490509193909250565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a7557600080fd5b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054141515610ac357600080fd5b600081111515610ad257600080fd5b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154111515610bd257600080fd5b60065442111515610be257600080fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015610caa576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055505b50565b600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054111515610cfc57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16600083815481101515610d2257fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610d6f57600080fd5b600860009054906101000a900460ff161515610d8a57600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015610e4c576000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610eac57600080fd5b60065442111515610ebc57600080fd5b60075442101515610ecc57600080fd5b6001600860006101000a81548160ff0219169083151502179055505600a165627a7a7230582046731e338602e76e2ec0d473fa3809b6e9356402e1186595cddc9db39e6192ee0029'

/******************** Global variables ********************/

//Words and name obtained from the file
let file_data = {kantcoin_org_words : "", kantcoin_org_data : ""}

// The innerHTML with the user profile data
let profile_html = ""

//The child window used to create new vault
let child = {}

//For internationalization
let locale = ""

//This variable defines whether the search button will call the search for candidates, campaigns, parties, groups, statistics, donations, voting or questions
let current_search = "campaigns"

//The current campaign with all its data
let current_campaign = {
    id : "",
    ipns: "",
    name: "",
    description: "",
    country: "",
    period: "",
    link: "",
    image: "",
    address: "",
    contract: "",
    regexp: "",
    login_provider: "",
    accepted_donations: "",
    confirmation_address: "",
    donations_contract: "",
    onion: ""
}

//Retrieving the last campaign
if (localStorage.getItem("kantcoin_org_current_campaign")){
    current_campaign = JSON.parse(localStorage.getItem("kantcoin_org_current_campaign"))
}

//Wallet with keys the size required by geth
let wallet = {}

//It is used to connect to the blockchain
let web3 = {}

//It is used to call the methods fromAscii and toAscii
let web3_aux = new Web3()

//This is used to connect with the Mainnet
let web3_mainnet = {}

//The ethereum contract
let the_contract

//The contract on Mainnet
let the_donations_contract

//This provider allows us to register vaults and check users
let login_provider = localStorage.getItem("login_provider") ? localStorage.getItem("login_provider") : "https://login.kantcoin.com" //https://zak7n89d31.execute-api.us-west-2.amazonaws.com/prod

//It allows us to open IPFS pages
let ipfs_provider = localStorage.getItem("ipfs_provider") ? localStorage.getItem("ipfs_provider") : "https://ipfs.io"

//A Tor2web proxy
let tor_provider = localStorage.getItem("tor_provider") ? localStorage.getItem("tor_provider") : ".onion.to"

//An alternative onion address to receive information from the blockchain and it with the information provided by the campaign creator and the group chairperson
let alternative_info_provider = localStorage.getItem("alternative_info_provider") ? localStorage.getItem("alternative_info_provider") : ""

//A Tor2web proxy
let donations_provider = localStorage.getItem("donations_provider") ? localStorage.getItem("donations_provider") : "https://mainnet.infura.io"

//A map of maps. ballot_number => candidates_map
let candidates_per_ballot_map = new Map()

//Questions and parties are independent of ballots
let questions_map = new Map()
let parties_map = new Map()
let group_categories_map = new Map()

//Categories with their groups
let json_groups = {}

//User's ip
let enode_ip = (localStorage.getItem("kantcoin_org_ip") ? localStorage.getItem("kantcoin_org_ip") : "")

//Enode to connect with other peers
let enode_without_ip = ""

//Comma separated enode URLs for P2P v5 discovery bootstrap
let all_enodes = ""

//This variable allows the campaign creator to decide who can share his or her enode address on the campaign's IPFS
let authorized_chairpersons = []

//Each group chairperson must know which are his or her groups in order to commit and precommit
let mygroups = []

//Each group has a distinct and secret vote message (this will be useful if someone with a quantum computer tries to guess voters' votes through their public keys)
let mygroups_messages_map = (localStorage.getItem("mygroups_messages") ? fromJSONStrToMap(localStorage.getItem("mygroups_messages")) : new Map()) //for group chairpersons
let allgroups_messages = (localStorage.getItem("allgroups_messages") ? localStorage.getItem("allgroups_messages").split(",") : []) //for the campaign creator

//Is there a local server - localhost:1985, localhost:8080 and localhost:8080 ?
let using_local_server = true

//Localhost or 127.0.0.1 ? (or neither)
let localhost127 = window.location.href.startsWith("http://localhost") ? "localhost" : "127.0.0.1"

//The amount of ether each voter has to confirm his or her vote
let ether_per_voter = 0.005

//In order to be able to call clearInterval() and then stop receiving tor messages
let messages_handler = 0

//In order to be able to call clearInterval() and then stop providing campaign info
let provide_campaign_info_handler = 0
let provide_campaign_ipfs_info_handler = 0
let provide_mygroup_info_handler = 0

//To receive blockchain info
let get_campaign_info_handler = 0
let get_mygroup_info_handler = 0
let get_vote_message_handler = 0
let get_vote_message_count = 20

//To receive IPFS info
let get_ipfs_info_handler = 0

//The hidden service that interacts with the Tor network
let my_onion_address = ""

//To send Tor messages when not using a local server
let tor2web_page = {}
let tor2web_message = {}
//It is used to reopen the captcha page in case it has been accidentally closed
let last_tor2web_location = ""

//If using the Tor browser, doesn't use the Tor2web proxy
let using_tor_browser = (localStorage.getItem("using_tor_browser") == "true") || probablyTor()

//The last 3 digits of the enode port
let enode_port = (localStorage.getItem("kantcoin_org_port") ? localStorage.getItem("kantcoin_org_port") : "")

//These variables contain info from the blockchain
let campaign_info_json = (localStorage.getItem("campaign_info_json") ? JSON.parse(localStorage.getItem("campaign_info_json")) : {})
let mygroup_info_json = (localStorage.getItem("mygroup_info_json") ? JSON.parse(localStorage.getItem("mygroup_info_json")) : {})

//To which group do the voter belongs?
let mygroup_index = "-3"

//For logs
let verbose_mode = false

//When using a local server (and Electron)
let chosen_language = ""

//My secret to decrypt the group's vote message sent by the campaign creator
let my_secret = ""

//It hides the confirm/enter_into_group button after the user submits a confirmation
let enter_group_button_disabled = false

//It is used with the updateCurrentCampaignWithOnion method
let untested_ipns = ""

//It is used in the enterIntoGroup method
let wait_category = ""

//Display a message when the user requests to join the campaign
let wait_until_participating = false

//It processes the vote in the background
let signer = new Worker('js/signer.js')
//The signature returned by the worker
let last_signature = ""
//How many voters there are in the voter's group
let how_many_voters_mygroup = 0

//Wait until the last created groups are in the blockchain
let last_created_groups = 0

//Web workers that may be used by the campaign creator or group administrators to process votes
let verifier1 = null
let verifier2 = null
let verifier3 = null
let verifier4 = null
let verifier5 = null
let verifier6 = null
let how_many_threads = 0

//My vote in the current campaign
let my_vote = ""

//To prevent the user from overloading the web worker
let last_update_myvote = 0

//A function to be called after the "Done" message appears
let call_after_captcha = null

//It is used to store large amounts of data, as the received votes
let indexed_db = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB

//For parties and candidates
let json_user_data = {}
let user_profile_ipfs = ""

//When this variable is set, it means that the deadline to choose a group has been reached
let only_accepted_groups = parseIntArray(localStorage.getItem("only_accepted_groups"))

//Does the current vault correspond to the last one uploaded?
let valid_vault = true

/******************** Event listeners ********************/

signer.onmessage = function(event) {
    last_signature = event.data
    if (current_campaign.id){
        encSignatureThenStore(event.data)
    }
}

/**
 * Setting some variables
 */
window.addEventListener("load", loadPage)

/**
 * When the child window loads, this page sends the tor2web_message
 */
window.addEventListener("message", function (event){
    if (event.origin && event.origin.startsWith(tor2web_message.href) && event.data == "load"){
        tor2web_page.postMessage(JSON.stringify(tor2web_message), tor2web_message.href)
    } else if (event.origin && event.origin.startsWith(tor2web_message.href) && event.data == "done" && call_after_captcha){
        call_after_captcha()
        call_after_captcha = null
        window.focus()
        tor2web_page.close()
    }
}, false)

/**
 * It reads the vault file (which contains the mnemonics, ekhash and login provider)
 */
words_file_button.addEventListener("change", function (event){
    let input = event.target
    let reader = new FileReader()

    //Cleaning these variables
    file_data.kantcoin_org_data = ""
    file_data.kantcoin_org_words = ""

    reader.addEventListener("load", function(){
        let text = reader.result
        let split = text.split("\r\n")

        //There are only two lines in this file
        if (split.length == 2){
            file_data.kantcoin_org_words = split[0]
            file_data.kantcoin_org_data = split[1]
        }
    })
    reader.readAsText(input.files[0])
})

/**
 * Vault related listeners */
close_vault_link.addEventListener("click",closeVault)

modal1_open.addEventListener("click", openVault)

modal2_save.addEventListener("click", saveVault)

modal3_ok.addEventListener("click", loadPassword)

modal4_confirm.addEventListener("click", createVault)

/**
 * Obtain new chainid from login/campaign provider then insert the campaign into the blockchain
 */
create_campaign_button.addEventListener("click", createCampaign)

/**
 * Verify if the voter meets the requirements then register him/her
 */
register_voter_link.addEventListener("click", registerVoter)

/**
 * It sends the last captcha request again
 */
reopen_captcha_link.addEventListener("click", reopenCaptcha)

/**
 * It displays the delete vote message
 */
delete_vote_link.addEventListener("click", deleteVotePage)

/**
 * It deletes the last vote sent
 */
delete_vote_button.addEventListener("click", deleteVote)

/**
 * Register the user's vault in the login provider
 */
register_vault_link.addEventListener("click", sendVault)

/**
 * These functions paint the password underline red in case of wrong password input
 */
kantcoin_org_password4.addEventListener("focusout", function () {
    if (kantcoin_org_password4.value && kantcoin_org_password3.value){
        if (kantcoin_org_password3.value != kantcoin_org_password4.value || kantcoin_org_password4.value < PASSWORD_LENGTH){
            kantcoin_org_password4.style = "border-bottom: 1px solid red;"
        } else {
            kantcoin_org_password4.style = "border-bottom: 1px solid green;"
        }
    } else {
        kantcoin_org_password4.style = "border-bottom: 1px bold grey;"
    }
})

kantcoin_org_password4.addEventListener("mouseout", function () {
    if (kantcoin_org_password4.value && kantcoin_org_password3.value){
        if (kantcoin_org_password3.value != kantcoin_org_password4.value || kantcoin_org_password4.value < PASSWORD_LENGTH){
            kantcoin_org_password4.style = "border-bottom: 1px solid red;"
        } else {
            kantcoin_org_password4.style = "border-bottom: 1px solid green;"
        }
    } else {
        kantcoin_org_password4.style = "border-bottom: 1px bold grey;"
    }

})

kantcoin_org_password3.addEventListener("focusout", function () {
    if (kantcoin_org_password3.value){
        if (kantcoin_org_password3.value.length >= PASSWORD_LENGTH){
            kantcoin_org_password3.style = "border-bottom: 1px solid bluegreen;"
        } else {
            kantcoin_org_password3.style = "border-bottom: 1px solid red;"
        }
    } else {
        kantcoin_org_password3.style = "border-bottom: 1px bold grey;"
    }
})

kantcoin_org_password3.addEventListener("mouseout", function () {
    if (kantcoin_org_password3.value){
        if (kantcoin_org_password3.value.length >= PASSWORD_LENGTH){
            kantcoin_org_password3.style = "border-bottom: 1px solid bluegreen;"
        } else {
            kantcoin_org_password3.style = "border-bottom: 1px solid red;"
        }
    } else {
        kantcoin_org_password3.style = "border-bottom: 1px bold grey;"
    }
})

/**
 * Error handling
 */
window.onerror = function(event) {
    //console.log(event)
}

/**
 * Left menu items
 */
campaign_info_menu_item.addEventListener("click", campaignInfoClick)

candidates_menu_item.addEventListener("click", candidatesClick)

parties_menu_item.addEventListener("click", partiesClick)

groups_menu_item.addEventListener("click", groupsClick)

questions_menu_item.addEventListener("click", questionsClick)

results_menu_item.addEventListener("click", resultsClick)

donations_menu_item.addEventListener("click", donationsClick)

statistics_menu_item.addEventListener("click", statisticsClick)

/**
 * The logo listener
 */
logo_container.addEventListener("click", logoClick)

/**
 * The settings icon listener
 */
settings_link.addEventListener("click", settingsClick)

/**
 * Mobile icons listeners
 */
home_mobile_icon.addEventListener("click", logoClick)

campaign_info_mobile_icon.addEventListener("click", campaignInfoClick)

candidates_mobile_icon.addEventListener("click", candidatesClick)

parties_mobile_icon.addEventListener("click", partiesClick)

groups_mobile_icon.addEventListener("click", groupsClick)

questions_mobile_icon.addEventListener("click", questionsClick)

results_mobile_icon.addEventListener("click", resultsClick)

donations_mobile_icon.addEventListener("click", donationsClick)

statistics_mobile_icon.addEventListener("click", statisticsClick)

settings_mobile_icon.addEventListener("click", settingsClick)

/**
 * Submiting modal forms in case of enter pressed
 */
kantcoin_org_password1.addEventListener("keypress", function (event) {
    let keyCode = event.keyCode
    if(keyCode == 13){
        modal1_open.click()
    }
})

file_name1.addEventListener("keypress", function (event) {
    let keyCode = event.keyCode
    if(keyCode == 13){
        modal2_save.click()
    }
})

kantcoin_org_password2.addEventListener("keypress", function (event) {
    let keyCode = event.keyCode
    if(keyCode == 13){
        modal3_ok.click()
    }
})

kantcoin_org_password4.addEventListener("keypress", function (event) {
    let keyCode = event.keyCode
    if(keyCode == 13){
        modal4_confirm.click()
    }
})

/**
 * Adding listeners to the searchbar icon
 */
search_icon.addEventListener("click", searchFor)
search.addEventListener("keypress", function (event) {
    let keyCode = event.keyCode
    if(keyCode == 13){
        searchFor()
    }
})

/**
 * Cancel_create_campaign_button listener. It cleans the fields
 */
cancel_create_campaign_button.addEventListener("click", clearCreateCampaignFields)

/**
 * Listener to close admin campaign page
 */
close_campaign_admin_button.addEventListener("click", clearAdminCampaign)

/**
 * Adding listener to the insert_candidates_button. It inserts the candidates into blockchain
 */
insert_candidates_button.addEventListener("click", insertCandidates)

/**
 * They are stored on IPFS
 */
insert_parties_button.addEventListener("click", insertParties)

/**
 * They are stored on IPFS
 */
insert_questions_button.addEventListener("click", insertQuestions)

/**
 * They are stored on IPFS
 */
insert_group_categories_button.addEventListener("click", insertGroupCategories)

/**
 * Adding listener to creating round button. It creates a new donation or votation ballot
 */
create_round_button.addEventListener("click", createRound)

/**
 * It creates a table, with data from the CancellationsStoreN, to be exported to a sheet
 */
export_cancellations_button.addEventListener("click", function () {
    let current_ballot = campaign_info_json.current_ballot

    var received_votes_open = indexed_db.open("ReceivedVotes", 1)

    received_votes_open.onsuccess = function () {
        let db = received_votes_open.result

        let tx = db.transaction("CancellationsStore" + current_ballot, "readwrite")
        let cancellations_store = tx.objectStore("CancellationsStore" + current_ballot)
        var getAllKeysRequest = cancellations_store.getAllKeys()
        getAllKeysRequest.onsuccess = function() {
            let fnumbers = getAllKeysRequest.result
            let fnumbers32 = []
            for (let i = 0; i < fnumbers.length; i++){
                fnumbers32[i] = fromFirstNumberToBytes32(fnumbers[i])
            }

            generateCancellationsFile(fnumbers32)
        }

    }
})

/**
 * This listener create a determined number of groups
 */
create_groups_button.addEventListener("click", createGroups)

/**
 * This listener is intended to give group administrators the resources needed to send voter's votes
 */
transfer_finney_button.addEventListener("click", transferFinney)

/**
 * It updates the localStorage with the authorized voters
 */
insert_authorized_voters_button.addEventListener("click", function () {
    localStorage.setItem("authorized_voters", insert_authorized_voters_textarea.value)
    clearAdminCampaign()
})

/**
 * Listener that turns Tor handler on and off
 */
tor_checkbox.addEventListener("change", function() {
    let status = $(this).prop('checked')
    if (status){
        if (!notNullChars(the_contract.getTor(wallet.address.toLowerCase(), 0))){
            $('#tor_checkbox').prop('checked', '')
            Materialize.toast(klang.must_send_tor, 3000, 'rounded')
        } else {
            listenTorMessages()
        }
    } else {
        clearInterval(messages_handler)
        messages_handler = 0
    }
})

/**
 * Listener to provide info to voters or to stop providing
 */
provide_info_checkbox.addEventListener("change", function () {
    let status = $(this).prop('checked')
    if (status){
        provide_campaign_info_handler = setInterval(storeCampaignInfo, STORE_CAMPAIGN_RATE)
        provide_campaign_ipfs_info_handler = setInterval(storeCampaignIPFSInfo, STORE_CAMPAIGN_IPFS_RATE)
        provide_mygroup_info_handler = setInterval(storeAllGroupsInfo, STORE_GROUPS_RATE)
    } else {
        clearInterval(provide_campaign_info_handler)
        provide_campaign_info_handler = 0
        clearInterval(provide_campaign_ipfs_info_handler)
        provide_campaign_ipfs_info_handler = 0
        clearInterval(provide_mygroup_info_handler)
        provide_mygroup_info_handler = 0
    }
})

/**
 * Listener to stop the current ballot
 */
stop_round_button.addEventListener("click", function (ev) {
    let current_ballot = the_contract.currentBallot().toNumber()
    the_contract.stopBallot(current_ballot)
    current_ballot_status.innerHTML = klang.round_stopped
})

/**
 * Listener to close the current ballot
 */
close_round_button.addEventListener("click", function (ev) {
    let current_ballot = the_contract.currentBallot().toNumber()
    the_contract.closeBallot(current_ballot)
    current_ballot_status.innerHTML = klang.round_closed
})

/**
 * To insert a Tor (.onion) address into the blockchain
 */
add_tor_button.addEventListener("click", addTorAddressIntoBlockchain)

/**
 * Only group chairpersons should call these methods
 */
pre_commit_button.addEventListener("click", preCommitVotes)

commit_button.addEventListener("click", commitVotes)

send_votes_button.addEventListener("click", sendVotes)

send_enode_button.addEventListener("click", sendStoreEnodeMessage)

send_observers_enodes_button.addEventListener("click", sendObserversEnodes)

/**
 * Stop voters from choosing a group
 */
stop_group_membership_button.addEventListener("click", setOnlyAcceptedGroups)

/**
 * Adding listener to the sidenav menu
 */
my_account_menu_item.addEventListener("click", newMyAccountPage)

/**
 * Enabling refresh when F5 key is pressed in electron, and changing the verbose mode for logs when F8 is pressed
 */
if (using_local_server){
    document.onkeydown = function (e){
        if (e.keyCode == 116 && e.key != "t") {
            window.location.reload(true)
        } else if (e.keyCode == 119 && e.key == "F8"){
            verbose_mode = !verbose_mode
            Materialize.toast(verbose_mode? klang.verbose_activated : klang.verbose_deactivated, 2500, 'rounded')

            let request = new XMLHttpRequest()
            request.open('GET', "http://" + localhost127 + ":1985/queryVerbose=" + (verbose_mode ? "true" : "false"), true)
            request.send()
        }
    }
}

/******************** Functions ********************/

/**
 * Starting up the page
 */
function loadPage() {
    //Check the location.href
    isUsingLocalServer()

    //We should use http with Tor since it accesses the .onion addresses via http
    if (window.location.href.startsWith("https:") && using_tor_browser){
        window.location.href = window.location.href.replace("https:", "http:")
    } else if (window.location.href.startsWith("http:") && !using_local_server && !using_tor_browser){
        window.location.href = window.location.href.replace("http:", "https:")
    }

    //Loading the backups
    if (localStorage.getItem("mygroups_backup")){
        mygroups = localStorage.getItem("mygroups_backup").split(",")
    }
    if (localStorage.getItem("authorized_chairpersons_backup")){
        authorized_chairpersons = localStorage.getItem("authorized_chairpersons_backup").split(",")
    }

    if (using_local_server){
        checkChosenLanguage()
    } else {
        languageRelatedSettings()
    }

    //In case of an omnibox search
    let ipns_part = getParameterByName("ipns", null)
    let onion_part = getParameterByName("onion", null)

    //Use this tor provider to search the campaign
    if (getParameterByName("torp", null)){
        tor_provider = getParameterByName("torp", null)
    }

    let query = (ipns_part ? ipns_part : "") + "||" + (onion_part ? onion_part : "")
    if (ipns_part){
        search.value = query
        searchFor()

        //Cleaning the address bar
        if (window.location.href.indexOf("?ipns=") != -1 && window.location.href.split("?ipns=")[0].split("/")[3]){
            window.history.pushState("", "", "/" + window.location.href.split("?ipns=")[0].split("/")[3])
        }
    }

    //Loading the wallet if empty
    if (!wallet.address && sessionStorage.getItem("kantcoin_org_wallet")){
        wallet = JSON.parse(sessionStorage.getItem("kantcoin_org_wallet"))
        //It could be also called when user enters the password
        setImportantVariables()
        checkVaultValidity()
    }

    //Getting from the file system the user's profile data
    loadProfileHTML()

    //On the top-left of the page
    displayUserChip()

    //Cleaning a error message that occurs because we are not using unsafe-eval in the CSP script-src
    setTimeout(console.clear, 1000)
}

/**
 * Displaying user's id and type of identification (phone, e-mail or document)
 */
function displayUserChip(){
    if (sessionStorage.getItem("kantcoin_org_user")){
        let user = sessionStorage.getItem("kantcoin_org_user")
        kantcoin_org_side_nav_user.innerHTML = (user.length < 20 ? user : user.substring(0, 17) + "..")

        if(user.indexOf('@') > 0 && user.indexOf('.') > 0){
            user_icon.innerHTML = "email"
        } else if ((user.match(/-/g) || []).length == 1 && /^\d+$/.test(user.replace(/-/g,""))){
            user_icon.innerHTML = "phone_android"
        } else {
            user_icon.innerHTML = "credit_card"
        }
        user_chip.style = ""
        let user_view_background = user_view_background_url.innerHTML.replace("<!--[CDATA[","").replace("-->","")
        document.body.style.setProperty("--background-user-img", user_view_background)

        let aElementP1 = $('#user_chip')
        aElementP1.attr('data-tooltip', user)
        aElementP1.tooltip()
    } else {
        kantcoin_org_side_nav_user.innerHTML = ""
        user_chip.style = "display:none;"
        document.body.style.setProperty("--background-user-img", "none")
    }
}

/**
 * It could be called when the page loads or when user enters the password
 */
function setImportantVariables(){
    if (current_campaign.id){
        decSignatureFromLocalStorage()
        decVoteFromLocalStorage()
    }

    //Setting the keys to be used to send Tor messages
    setNTRUKeys()

    //Loading stored data to improve user experience
    loadCandidatesFromLocalStorage()
    loadGroupCategoriesFromLocalStorage()
    loadGroupsFromLocalStorage()
    loadQuestionsFromLocalStorage()
    loadPartiesFromLocalStorage()

    if (current_campaign.ipns){
        loadCandidates()
        loadGroupCategories()
        loadGroups()
        loadQuestions()
        loadParties()

        my_secret = generateMySecret()
    }

    //If the voter restarted the page before getting his or her group vote message
    if (mygroup_index && !localStorage.getItem("kantcoin_mygroup_vote_message_" + current_campaign.id)){
        get_vote_message_count = 20
        get_vote_message_handler = setInterval(getVoteMessage, GET_VOTE_MESSAGE_RATE)
    }

    if (using_local_server){
        //Start the indexedDB database(s)
        startDB()

        //Obtaining user's ip to generate the enode after
        whatIsMyIp()

        //The onion address is necessary for users to communicate with the group chairpersons
        whatIsMyTor()

        //Creating a web3 instance to interect with the mainnet (to create a campaign for example)
        web3_mainnet = new Web3(new Web3.providers.HttpProvider(donations_provider))

        //Instantiating workers to process votes
        let cores = (navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 0)
        switch (cores){
            case 0:
            case 1:
            case 2:
            case 3:
                verifier1 = new Worker("js/verifier.js")
                verifier1.onmessage = storeVote
                how_many_threads = 1
                break
            case 4:
                verifier1 = new Worker("js/verifier.js")
                verifier2 = new Worker("js/verifier.js")
                verifier1.onmessage = storeVote
                verifier2.onmessage = storeVote
                how_many_threads = 2
                break
            case 5:
                verifier1 = new Worker("js/verifier.js")
                verifier2 = new Worker("js/verifier.js")
                verifier3 = new Worker("js/verifier.js")
                verifier1.onmessage = storeVote
                verifier2.onmessage = storeVote
                verifier3.onmessage = storeVote
                how_many_threads = 3
                break
            case 6:
                verifier1 = new Worker("js/verifier.js")
                verifier2 = new Worker("js/verifier.js")
                verifier3 = new Worker("js/verifier.js")
                verifier4 = new Worker("js/verifier.js")
                verifier1.onmessage = storeVote
                verifier2.onmessage = storeVote
                verifier3.onmessage = storeVote
                verifier4.onmessage = storeVote
                how_many_threads = 4
                break
            case 7:
                verifier1 = new Worker("js/verifier.js")
                verifier2 = new Worker("js/verifier.js")
                verifier3 = new Worker("js/verifier.js")
                verifier4 = new Worker("js/verifier.js")
                verifier5 = new Worker("js/verifier.js")
                verifier1.onmessage = storeVote
                verifier2.onmessage = storeVote
                verifier3.onmessage = storeVote
                verifier4.onmessage = storeVote
                verifier5.onmessage = storeVote
                how_many_threads = 5
                break
            default:
                verifier1 = new Worker("js/verifier.js")
                verifier2 = new Worker("js/verifier.js")
                verifier3 = new Worker("js/verifier.js")
                verifier4 = new Worker("js/verifier.js")
                verifier5 = new Worker("js/verifier.js")
                verifier6 = new Worker("js/verifier.js")
                verifier1.onmessage = storeVote
                verifier2.onmessage = storeVote
                verifier3.onmessage = storeVote
                verifier4.onmessage = storeVote
                verifier5.onmessage = storeVote
                verifier6.onmessage = storeVote
                how_many_threads = 6
        }

        //Loading the enodes in order to connect to the blockchain
        if (current_campaign.id) {
            initBlockchain(function () {
                //Adding peers via their enodes
                //Calling it recursively until the enodes are set
                setAllEnodes()

                //Connecting to localhost:8545
                instantiateWeb3()

                waitUntilWeb3IsListening().then(function () {
                    //Setting the contract to interact with the blockchain
                    openCampaignContract()
                    //Start listening Tor messages if the user's Tor address is in the blockchain
                    sleep(WAIT_TOR_IS_READY).then(function(){
                        if (!notNullChars(the_contract.getTor(wallet.address.toLowerCase(), 0))){
                            $('#tor_checkbox').prop('checked', '')
                        } else{
                            sleep(1000).then(listenTorMessages)
                        }
                    })

                    if (!isOwner()){
                        provide_info_checkbox.removeAttribute("checked")
                    } else {
                        //If the campaign creator has restarted the server
                        if (allgroups_messages.length > 0){
                            storeAllGroupMessages()
                        }
                        //Creating another web3 instance to interact with the donations contract on the mainnet
                        setTheDonationsContract()
                        //The owner of the campaign must always provide info about the campaign and the groups, because of that, he or she should insert his or her Tor address
                        //into the blockchain if it was not inserted already.
                        if (!notNullChars(the_contract.getTor(wallet.address.toLowerCase(), 0))){
                            addTorAddressIntoBlockchain()
                        }

                        waitUntilTorIsInserted().then(function(){
                            provide_campaign_info_handler = setInterval(storeCampaignInfo, STORE_CAMPAIGN_RATE)
                            provide_campaign_ipfs_info_handler = setInterval(storeCampaignIPFSInfo, STORE_CAMPAIGN_IPFS_RATE)
                            provide_mygroup_info_handler = setInterval(storeAllGroupsInfo, STORE_GROUPS_RATE)

                            storeCampaignInfo().then(updateCampaignInfo)
                            storeAllGroupsInfo()
                        })
                    }
                }, false)
            })
        }
    }

    if (current_campaign.ipns){
        //Refreshing IPFS data periodically
        if(get_ipfs_info_handler){
            clearInterval(get_ipfs_info_handler)
        }

        get_ipfs_info_handler = setInterval(function(){
            if (current_campaign.ipns){
                loadGroupCategories()
                loadGroups()
                loadCandidates()
                loadQuestions()
                loadParties()
            }
        }, CAMPAIGN_IPFS_RATE)

        //These functions bring information about the campaign and the voter's group from the server
        if (get_campaign_info_handler){
            clearInterval(get_campaign_info_handler)
        }

        updateCampaignInfo().then(function(){
            loadCandidatesFromLocalStorage()
        })

        get_campaign_info_handler = setInterval(updateCampaignInfo, CAMPAIGN_BLOCKCHAIN_RATE)

        if (get_mygroup_info_handler) {
            clearInterval(get_mygroup_info_handler)
        }
        whatIsMyGroupIndex().then(updateMyGroupInfo)
        get_mygroup_info_handler = setInterval(updateMyGroupInfo, MYGROUP_BLOCKCHAIN_RATE)
    }
}

/**
 * It creates some ObjectStores inside the IndexedDB
 */
function startDB(){
    //A database to store votes
    var received_votes_open = indexed_db.open("ReceivedVotes", 1)

    received_votes_open.onupgradeneeded = function() {
        let db = received_votes_open.result
        db.createObjectStore("VotesStore", {keyPath: "fnumber"})
        db.createObjectStore("CancellationsStore0", {keyPath: "fnumber"})
        db.createObjectStore("CancellationsStore1", {keyPath: "fnumber"})
        db.createObjectStore("CancellationsStore2", {keyPath: "fnumber"})
        db.createObjectStore("CancellationsStore3", {keyPath: "fnumber"})
        db.createObjectStore("CancellationsStore4", {keyPath: "fnumber"})
    }
}

/**
 * To replace the old web3.eth.net.isListening(), besides that it unlocks the user's account
 * @returns {Promise}
 */
function waitUntilWeb3IsListening(){
    return new Promise(resolve => {
        let resolved = false

        for (let i = 2; i < 24; i++){
            sleep(i * 1000).then(function () {
                if (!resolved && web3 && web3.net && web3.personal && web3.net.listening){
                    resolved = true
                    //First, unlock the account (in the case it was not unlocked by runGeth)
                    sleep(1500).then(function() {
                        web3.personal.unlockAccount(wallet.address.toLowerCase(), genPwd(), 10000000) // > 3 months
                    } )
                    //Wait a few more seconds
                    sleep(3000).then(resolve)
                }
            })
        }

        sleep(TIME_TRYING_TO_CONNECT_WEB3).then(function(){
            if (!resolved){
                console.log("Can't connect to the web3 provider")
            }
        })
    })
}

/**
 * Wait before calling the_contract.getTor()
 * @returns {Promise}
 */
function waitUntilTorIsInserted(){
    return new Promise(resolve => {
        let resolved = false

        for (let i = 0; i < 60; i++){
            sleep(i * 1000).then(function () {
                if (!resolved && notNullChars(the_contract.getTor(wallet.address.toLowerCase(), 0))){
                    resolved = true
                    resolve()
                }
            })
        }
    })
}

/**
 * It checks if the user selected a language other than English on the system tray menu
 */
function checkChosenLanguage(){
    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        chosen_language = this.responseText.substring(0, 2)
        languageRelatedSettings()
    })
    request.addEventListener("error", function() {
        languageRelatedSettings()
    })
    request.open('GET', "http://" + localhost127 + ":1985/queryGetChosenLanguage=", true)
    request.send()
}

/**
 * It checks the user's browser language or the chosen language in the system tray
 */
function languageRelatedSettings(){
    if (chosen_language != ""){
        locale = chosen_language
    } else if (navigator.language){
        locale = navigator.language.substring(0, 2).toLowerCase()
    }

    if (!locale){ klang = klang.english; kcountries = kcountries.en;} else if(locale == 'pt'){klang = klang.portuguese; kcountries = kcountries.pt; } else if(locale == 'ar'){kcountries = kcountries.ar;}
    else if(locale == 'az'){kcountries = kcountries.az;} else if(locale == 'be'){kcountries = kcountries.be;} else if(locale == 'bg'){kcountries = kcountries.bg;}
    else if(locale == 'bs'){kcountries = kcountries.bs;} else if(locale == 'cs'){kcountries = kcountries.cs;} else if(locale == 'da'){kcountries = kcountries.da;}
    else if(locale == 'de'){kcountries = kcountries.de;} else if(locale == 'el'){kcountries = kcountries.el;} else if(locale == 'en'){klang = klang.english; kcountries = kcountries.en}
    else if(locale == 'es'){klang = klang.spanish; kcountries = kcountries.es;} else if(locale == 'et'){kcountries = kcountries.et;} else if(locale == 'fa'){kcountries = kcountries.fa;}
    else if(locale == 'fi'){kcountries = kcountries.fi;} else if(locale == 'fr'){klang = klang.french; kcountries = kcountries.fr;} else if(locale == 'he'){kcountries = kcountries.he;}
    else if(locale == 'hr'){kcountries = kcountries.hr;} else if(locale == 'hu'){kcountries = kcountries.hu;} else if(locale == 'hy'){kcountries = kcountries.hy;}
    else if(locale == 'id'){kcountries = kcountries.id;} else if(locale == 'it'){kcountries = kcountries.it;} else if(locale == 'ja'){kcountries = kcountries.ja;}
    else if(locale == 'ka'){kcountries = kcountries.ka;} else if(locale == 'kk'){kcountries = kcountries.kk;} else if(locale == 'ko'){kcountries = kcountries.ko;}
    else if(locale == 'ky'){kcountries = kcountries.ky;} else if(locale == 'lt'){kcountries = kcountries.lt;} else if(locale == 'lv'){kcountries = kcountries.lv;}
    else if(locale == 'mk'){kcountries = kcountries.mk;} else if(locale == 'mn'){kcountries = kcountries.mn;} else if(locale == 'nb'){kcountries = kcountries.nb;}
    else if(locale == 'nl'){kcountries = kcountries.nl;} else if(locale == 'nn'){kcountries = kcountries.nn;} else if(locale == 'pl'){kcountries = kcountries.pl;}
    else if(locale == 'ro'){kcountries = kcountries.ro;} else if(locale == 'ru'){kcountries = kcountries.ru;} else if(locale == 'sk'){kcountries = kcountries.sk;}
    else if(locale == 'sl'){kcountries = kcountries.sl;} else if(locale == 'sr'){kcountries = kcountries.sr;} else if(locale == 'sv'){kcountries = kcountries.sv;}
    else if(locale == 'tr'){kcountries = kcountries.tr;} else if(locale == 'uk'){kcountries = kcountries.uk;} else if(locale == 'uz'){kcountries = kcountries.uz;}
    else if(locale == 'zh'){kcountries = kcountries.zh;} else {klang = klang.english; kcountries = kcountries.en;}

    document.title = klang.title
    menu_vault_li.innerHTML = klang.vault
    create_vault_link.text = klang.create_vault
    register_vault_link.text = klang.register_vault
    open_vault_link.text = klang.open_vault
    close_vault_link.text = klang.close_vault
    save_vault_link.text = klang.save_vault
    menu_campaign_li.innerHTML = klang.campaign
    menu_captcha_li.innerHTML = klang.menu_captcha_li
    menu_vote_li.innerHTML = klang.menu_vote_li
    register_voter_link.text = klang.register_voter
    reopen_captcha_link.text = klang.reopen_captcha_link
    delete_vote_link.text = klang.delete_vote_link
    create_campaign_link.text = klang.create_campaign
    modal1_title.innerHTML = klang.modal1_title
    modal1_file.innerHTML = klang.modal1_file
    modal1_password.innerHTML = klang.password
    modal1_user.innerHTML = klang.modal1_user
    modal1_open.text = klang.modal1_open
    modal2_title.innerHTML = klang.modal2_title
    modal2_file_name.innerHTML = klang.modal2_file_name
    modal2_save.text = klang.modal2_save
    modal3_title.innerHTML = klang.insert_password
    modal3_user.innerHTML = klang.modal1_user
    modal3_password.innerHTML = klang.password
    modal3_ok.text = klang.ok
    modal4_title.innerHTML = klang.modal4_title
    modal4_user.innerHTML = klang.login
    modal4_password1.innerHTML = klang.modal4_password1
    modal4_password2.innerHTML = klang.modal4_password2
    modal4_confirm.text = klang.modal4_confirm
    campaign_name_label.innerHTML = klang.campaign_name_label
    campaign_description_label.innerHTML = klang.campaign_description_label
    create_campaign_title.innerHTML = klang.create_campaign_title
    country_label.innerHTML = klang.country_label
    prefix_voters_label.innerHTML = klang.prefix_voters_label
    suffix_voters_label.innerHTML = klang.suffix_voters_label
    regexp_label.innerHTML = klang.regexp_label
    votation_rounds_selected_option.innerHTML = klang.votation_rounds_selected_option
    donation_rounds_selected_option.innerHTML = klang.donation_rounds_selected_option
    maximum_group_size_label.innerHTML = klang.maximum_group_size
    create_campaign_button.innerHTML = klang.create_campaign_button
    cancel_create_campaign_button.innerHTML = klang.cancel_button
    image_label.innerHTML = klang.image_label
    campaign_external_page_label.innerHTML = klang.campaign_external_page_label
    initial_date_label.innerHTML = klang.initial_date_label
    final_date_label.innerHTML = klang.final_date_label
    create_campaign_basic_info.innerHTML = klang.create_campaign_basic_info
    create_campaign_votation_info.innerHTML = klang.create_campaign_votation_info
    create_campaign_technical_info.innerHTML = klang.create_campaign_technical_info
    campaign_admin_title.innerHTML = klang.campaign_admin_title
    campaign_admin_candidates.innerHTML = klang.campaign_admin_candidates
    campaign_admin_parties.innerHTML = klang.campaign_admin_parties
    campaign_admin_questions.innerHTML = klang.campaign_admin_questions
    campaign_admin_ballots.innerHTML = klang.campaign_admin_ballots
    campaign_admin_groups.innerHTML = klang.campaign_admin_groups
    campaign_admin_chairpersons.innerHTML = klang.campaign_admin_chairpersons
    close_campaign_admin_button.innerHTML = klang.close_campaign_admin_button
    insert_candidates_title.innerHTML = klang.insert_candidates_title
    insert_candidates_label.innerHTML = klang.insert_candidates_label
    insert_candidates_button.innerHTML = klang.insert_candidates_button
    accepted_donation_values_label.innerHTML = klang.accepted_donation_values_label
    confirmation_address_label.innerHTML = klang.confirmation_address_label
    insert_parties_title.innerHTML = klang.insert_parties_title
    insert_parties_label.innerHTML = klang.insert_parties_label
    insert_parties_button.innerHTML = klang.insert_parties_button
    insert_questions_title.innerHTML = klang.insert_questions_title
    insert_questions_label.innerHTML = klang.insert_questions_label
    insert_questions_button.innerHTML = klang.insert_questions_button
    insert_group_categories_title.innerHTML = klang.insert_group_categories_title
    insert_group_categories_label.innerHTML = klang.insert_group_categories_label
    insert_group_categories_button.innerHTML = klang.insert_group_categories_button
    create_round_title.innerHTML = klang.create_round_title
    create_round_id_label.innerHTML = klang.create_round_id_label
    define_round_type_selected_option.innerHTML = klang.define_round_type_selected_option
    define_round_type_normal.innerHTML = klang.define_round_type_normal
    define_round_type_donations.innerHTML = klang.define_round_type_donations
    define_round_type_label.innerHTML = klang.define_round_type_label
    create_round_button.innerHTML = klang.create_round_button
    listen_tor_title.innerHTML = klang.listen_tor_title
    listen_tor_yes_label.innerHTML = klang.listen_tor_yes_label
    listen_tor_no_label.innerHTML = klang.listen_tor_no_label
    provide_campaign_info.innerHTML = klang.provide_campaign_info
    provide_campaign_info_no_label.innerHTML = klang.provide_campaign_info_no_label
    provide_campaign_info_yes_label.innerHTML = klang.provide_campaign_info_yes_label
    current_ballot_label.innerHTML = klang.current_ballot_label
    cancellations_label.innerHTML = klang.canceled_votes
    export_cancellations_button.innerHTML = klang.export_to_xlsx
    stop_round_button.innerHTML = klang.stop_round_button
    close_round_button.innerHTML = klang.close_round_button
    group_categories_select_label.innerHTML = klang.group_categories_select_label
    create_groups_label.innerHTML = klang.create_groups_label
    how_many_groups_label.innerHTML = klang.how_many_groups_label
    create_groups_button.innerHTML = klang.create_groups_button
    groups_chairperson_label.innerHTML = klang.groups_chairperson_label
    groups_value_label.innerHTML = klang.groups_value_label
    inform_address_label.innerHTML = klang.inform_address_label
    your_tor_title.innerHTML = klang.your_tor_title
    add_tor_label.innerHTML = klang.add_tor_label
    add_tor_button.innerHTML = klang.add_tor_button
    commit_label.innerHTML = klang.commit_label
    pre_commit_button.innerHTML = klang.pre_commit_button
    commit_button.innerHTML = klang.commit_button
    send_votes_label.innerHTML = klang.send_votes_label
    send_votes_button.innerHTML = klang.send_votes_button
    send_enode_label.innerHTML = klang.send_enode_label
    send_enode_button.innerHTML = klang.send_enode_button
    observers_enodes_label.innerHTML = klang.observers_enodes_label
    send_observers_enodes_button.innerHTML = klang.send_observers_enodes_button
    tranfer_finney_label.innerHTML = klang.tranfer_finney_label
    transfer_finney_account_label.innerHTML = klang.transfer_finney_account_label
    transfer_finney_amount_label.innerHTML = klang.transfer_finney_amount_label
    transfer_finney_button.innerHTML = klang.transfer_finney_button
    how_many_enodes_label.innerHTML = klang.how_many_enodes_label
    vote_deletion_title.innerHTML = klang.vote_deletion_title
    close_delete_vote_button.innerHTML = klang.close_delete_vote_button
    delete_vote_button.innerHTML = klang.delete_vote_button
    insert_authorized_voters_label.innerHTML = klang.insert_authorized_voters_label
    insert_authorized_voters_message.innerHTML = klang.insert_authorized_voters_message
    insert_authorized_voters_button.innerHTML = klang.insert_authorized_voters_button
    stop_group_membership_label.innerHTML = klang.stop_group_membership
    stop_group_membership_button.innerHTML = klang.stop_group_membership_button

    //Countries names
    AF_option.innerHTML = kcountries.AF; AX_option.innerHTML = kcountries.AX; AL_option.innerHTML = kcountries.AL; DZ_option.innerHTML = kcountries.DZ; AS_option.innerHTML = kcountries.AS;
    AD_option.innerHTML = kcountries.AD; AO_option.innerHTML = kcountries.AO; AI_option.innerHTML = kcountries.AI; AQ_option.innerHTML = kcountries.AQ; AG_option.innerHTML = kcountries.AG;
    AR_option.innerHTML = kcountries.AR; AM_option.innerHTML = kcountries.AM; AW_option.innerHTML = kcountries.AW; AU_option.innerHTML = kcountries.AU; AT_option.innerHTML = kcountries.AT;
    AZ_option.innerHTML = kcountries.AZ; BS_option.innerHTML = kcountries.BS; BH_option.innerHTML = kcountries.BH; BD_option.innerHTML = kcountries.BD; BB_option.innerHTML = kcountries.BB;
    BY_option.innerHTML = kcountries.BY; BE_option.innerHTML = kcountries.BE; BZ_option.innerHTML = kcountries.BZ; BJ_option.innerHTML = kcountries.BJ; BM_option.innerHTML = kcountries.BM;
    BT_option.innerHTML = kcountries.BT; BO_option.innerHTML = kcountries.BO; BQ_option.innerHTML = kcountries.BQ; BA_option.innerHTML = kcountries.BA; BW_option.innerHTML = kcountries.BW;
    BV_option.innerHTML = kcountries.BV; BR_option.innerHTML = kcountries.BR; IO_option.innerHTML = kcountries.IO; BN_option.innerHTML = kcountries.BN; BG_option.innerHTML = kcountries.BG;
    BF_option.innerHTML = kcountries.BF; BI_option.innerHTML = kcountries.BI; KH_option.innerHTML = kcountries.KH; CM_option.innerHTML = kcountries.CM; CA_option.innerHTML = kcountries.CA;
    CV_option.innerHTML = kcountries.CV; KY_option.innerHTML = kcountries.KY; CF_option.innerHTML = kcountries.CF; TD_option.innerHTML = kcountries.TD; CL_option.innerHTML = kcountries.CL;
    CN_option.innerHTML = kcountries.CN; CX_option.innerHTML = kcountries.CX; CC_option.innerHTML = kcountries.CC; CO_option.innerHTML = kcountries.CO; KM_option.innerHTML = kcountries.KM;
    CG_option.innerHTML = kcountries.CG; CD_option.innerHTML = kcountries.CD; CK_option.innerHTML = kcountries.CK; CR_option.innerHTML = kcountries.CR; CI_option.innerHTML = kcountries.CI;
    HR_option.innerHTML = kcountries.HR; CU_option.innerHTML = kcountries.CU; CW_option.innerHTML = kcountries.CW; CY_option.innerHTML = kcountries.CY; CZ_option.innerHTML = kcountries.CZ;
    DK_option.innerHTML = kcountries.DK; DJ_option.innerHTML = kcountries.DJ; DM_option.innerHTML = kcountries.DM; DO_option.innerHTML = kcountries.DO; EC_option.innerHTML = kcountries.EC;
    EG_option.innerHTML = kcountries.EG; SV_option.innerHTML = kcountries.SV; GQ_option.innerHTML = kcountries.GQ; ER_option.innerHTML = kcountries.ER; EE_option.innerHTML = kcountries.EE;
    ET_option.innerHTML = kcountries.ET; FK_option.innerHTML = kcountries.FK; FO_option.innerHTML = kcountries.FO; FJ_option.innerHTML = kcountries.FJ; FI_option.innerHTML = kcountries.FI;
    FR_option.innerHTML = kcountries.FR; GF_option.innerHTML = kcountries.GF; PF_option.innerHTML = kcountries.PF; TF_option.innerHTML = kcountries.TF; GA_option.innerHTML = kcountries.GA;
    GM_option.innerHTML = kcountries.GM; GE_option.innerHTML = kcountries.GE; DE_option.innerHTML = kcountries.DE; GH_option.innerHTML = kcountries.GH; GI_option.innerHTML = kcountries.GI;
    GR_option.innerHTML = kcountries.GR; GL_option.innerHTML = kcountries.GL; GD_option.innerHTML = kcountries.GD; GP_option.innerHTML = kcountries.GP; GU_option.innerHTML = kcountries.GU;
    GT_option.innerHTML = kcountries.GT; GG_option.innerHTML = kcountries.GG; GN_option.innerHTML = kcountries.GN; GW_option.innerHTML = kcountries.GW; GY_option.innerHTML = kcountries.GY;
    HT_option.innerHTML = kcountries.HT; HM_option.innerHTML = kcountries.HM; VA_option.innerHTML = kcountries.VA; HN_option.innerHTML = kcountries.HN; HK_option.innerHTML = kcountries.HK;
    HU_option.innerHTML = kcountries.HU; IS_option.innerHTML = kcountries.IS; IN_option.innerHTML = kcountries.IN; ID_option.innerHTML = kcountries.ID; IR_option.innerHTML = kcountries.IR;
    IQ_option.innerHTML = kcountries.IQ; IE_option.innerHTML = kcountries.IE; IM_option.innerHTML = kcountries.IM; IL_option.innerHTML = kcountries.IL; IT_option.innerHTML = kcountries.IT;
    JM_option.innerHTML = kcountries.JM; JP_option.innerHTML = kcountries.JP; JE_option.innerHTML = kcountries.JE; JO_option.innerHTML = kcountries.JO; KZ_option.innerHTML = kcountries.KZ;
    KE_option.innerHTML = kcountries.KE; KI_option.innerHTML = kcountries.KI; KP_option.innerHTML = kcountries.KP; KR_option.innerHTML = kcountries.KR; KW_option.innerHTML = kcountries.KW;
    KG_option.innerHTML = kcountries.KG; LA_option.innerHTML = kcountries.LA; LV_option.innerHTML = kcountries.LV; LB_option.innerHTML = kcountries.LB; LS_option.innerHTML = kcountries.LS;
    LR_option.innerHTML = kcountries.LR; LY_option.innerHTML = kcountries.LY; LI_option.innerHTML = kcountries.LI; LT_option.innerHTML = kcountries.LT; LU_option.innerHTML = kcountries.LU;
    MO_option.innerHTML = kcountries.MO; MK_option.innerHTML = kcountries.MK; MG_option.innerHTML = kcountries.MG; MW_option.innerHTML = kcountries.MW; MY_option.innerHTML = kcountries.MY;
    MV_option.innerHTML = kcountries.MV; ML_option.innerHTML = kcountries.ML; MT_option.innerHTML = kcountries.MT; MH_option.innerHTML = kcountries.MH; MQ_option.innerHTML = kcountries.MQ;
    MR_option.innerHTML = kcountries.MR; MU_option.innerHTML = kcountries.MU; YT_option.innerHTML = kcountries.YT; MX_option.innerHTML = kcountries.MX; FM_option.innerHTML = kcountries.FM;
    MD_option.innerHTML = kcountries.MD; MC_option.innerHTML = kcountries.MC; MN_option.innerHTML = kcountries.MN; ME_option.innerHTML = kcountries.ME; MS_option.innerHTML = kcountries.MS;
    MA_option.innerHTML = kcountries.MA; MZ_option.innerHTML = kcountries.MZ; MM_option.innerHTML = kcountries.MM; NA_option.innerHTML = kcountries.NA; NR_option.innerHTML = kcountries.NR;
    NP_option.innerHTML = kcountries.NP; NL_option.innerHTML = kcountries.NL; NC_option.innerHTML = kcountries.NC; NZ_option.innerHTML = kcountries.NZ; NI_option.innerHTML = kcountries.NI;
    NE_option.innerHTML = kcountries.NE; NG_option.innerHTML = kcountries.NG; NU_option.innerHTML = kcountries.NU; NF_option.innerHTML = kcountries.NF; MP_option.innerHTML = kcountries.MP;
    NO_option.innerHTML = kcountries.NO; OM_option.innerHTML = kcountries.OM; PK_option.innerHTML = kcountries.PK; PW_option.innerHTML = kcountries.PW; PS_option.innerHTML = kcountries.PS;
    PA_option.innerHTML = kcountries.PA; PG_option.innerHTML = kcountries.PG; PY_option.innerHTML = kcountries.PY; PE_option.innerHTML = kcountries.PE; PH_option.innerHTML = kcountries.PH;
    PN_option.innerHTML = kcountries.PN; PL_option.innerHTML = kcountries.PL; PT_option.innerHTML = kcountries.PT; PR_option.innerHTML = kcountries.PR; QA_option.innerHTML = kcountries.QA;
    RE_option.innerHTML = kcountries.RE; RO_option.innerHTML = kcountries.RO; RU_option.innerHTML = kcountries.RU; RW_option.innerHTML = kcountries.RW; BL_option.innerHTML = kcountries.BL;
    SH_option.innerHTML = kcountries.SH; KN_option.innerHTML = kcountries.KN; LC_option.innerHTML = kcountries.LC; MF_option.innerHTML = kcountries.MF; PM_option.innerHTML = kcountries.PM;
    VC_option.innerHTML = kcountries.VC; WS_option.innerHTML = kcountries.WS; SM_option.innerHTML = kcountries.SM; ST_option.innerHTML = kcountries.ST; SA_option.innerHTML = kcountries.SA;
    SN_option.innerHTML = kcountries.SN; RS_option.innerHTML = kcountries.RS; SC_option.innerHTML = kcountries.SC; SL_option.innerHTML = kcountries.SL; SG_option.innerHTML = kcountries.SG;
    SX_option.innerHTML = kcountries.SX; SK_option.innerHTML = kcountries.SK; SI_option.innerHTML = kcountries.SI; SB_option.innerHTML = kcountries.SB; SO_option.innerHTML = kcountries.SO;
    ZA_option.innerHTML = kcountries.ZA; GS_option.innerHTML = kcountries.GS; SS_option.innerHTML = kcountries.SS; ES_option.innerHTML = kcountries.ES; LK_option.innerHTML = kcountries.LK;
    SD_option.innerHTML = kcountries.SD; SR_option.innerHTML = kcountries.SR; SJ_option.innerHTML = kcountries.SJ; SZ_option.innerHTML = kcountries.SZ; SE_option.innerHTML = kcountries.SE;
    CH_option.innerHTML = kcountries.CH; SY_option.innerHTML = kcountries.SY; TW_option.innerHTML = kcountries.TW; TJ_option.innerHTML = kcountries.TJ; TZ_option.innerHTML = kcountries.TZ;
    TH_option.innerHTML = kcountries.TH; TL_option.innerHTML = kcountries.TL; TG_option.innerHTML = kcountries.TG; TK_option.innerHTML = kcountries.TK; TO_option.innerHTML = kcountries.TO;
    TT_option.innerHTML = kcountries.TT; TN_option.innerHTML = kcountries.TN; TR_option.innerHTML = kcountries.TR; TM_option.innerHTML = kcountries.TM; TC_option.innerHTML = kcountries.TC;
    TV_option.innerHTML = kcountries.TV; UG_option.innerHTML = kcountries.UG; UA_option.innerHTML = kcountries.UA; AE_option.innerHTML = kcountries.AE; GB_option.innerHTML = kcountries.GB;
    US_option.innerHTML = kcountries.US; UM_option.innerHTML = kcountries.UM; UY_option.innerHTML = kcountries.UY; UZ_option.innerHTML = kcountries.UZ; VU_option.innerHTML = kcountries.VU;
    VE_option.innerHTML = kcountries.VE; VN_option.innerHTML = kcountries.VN; VG_option.innerHTML = kcountries.VG; VI_option.innerHTML = kcountries.VI; WF_option.innerHTML = kcountries.WF;
    EH_option.innerHTML = kcountries.EH; YE_option.innerHTML = kcountries.YE; ZM_option.innerHTML = kcountries.ZM; ZW_option.innerHTML = kcountries.ZW;

    //Datepicker translations
    $('.datepicker').pickadate({
        selectMonths: true,
        //Displaying only 3 years
        selectYears: 3,
        today: klang.today,
        clear: klang.clear,
        close: klang.ok,
        format: "dd/mm/yyyy",
        closeOnSelect: false
    })

    //Setting the data-tooltip of the password input
    let aElementP1 = $('#password_div1')
    aElementP1.attr('data-tooltip', klang.min_chars)
    aElementP1.tooltip()

    //Setting the data-tooltip of the user input
    let aElementP2 = $('#user_div1')
    aElementP2.attr('data-tooltip', klang.hyphen)
    aElementP2.tooltip()

    //Setting the data-tooltip of the stop round button
    let aElementP3 = $('#stop_round_button')
    aElementP3.attr('data-tooltip', klang.stop_round_button_tooltip)
    aElementP3.tooltip()

    //Setting the data-tooltip of the close round button
    let aElementP4 = $('#close_round_button')
    aElementP4.attr('data-tooltip', klang.close_round_button_tooltip)
    aElementP4.tooltip()

    //Sidenav menu
    my_account_menu_item.innerHTML = klang.my_account
    campaign_info_menu_item.innerHTML = klang.campaign_info
    candidates_menu_item.innerHTML = klang.candidates
    parties_menu_item.innerHTML = klang.parties
    groups_menu_item.innerHTML = klang.groups
    questions_menu_item.innerHTML = klang.questions
    results_menu_item.innerHTML = klang.results
    donations_menu_item.innerHTML = klang.donations
    statistics_menu_item.innerHTML = klang.statistics

    //The first title is the whatsup page title
    header_title.innerHTML = klang.whatsup

    //Setting the data-tooltip initial value
    let aElement = $('#search_icon')
    aElement.attr('data-tooltip', klang.search_campaign)
    aElement.tooltip()

    //So far, only this option works
    let anchorElement = $('#search_icon')
    anchorElement.attr('data-tooltip', klang.search_campaign)
    anchorElement.tooltip()

    //Placing the adequate tooltips
    checkKey()

    //It opens the initial page
    newStartPage()
}

/**
 * Store NTRU keys to decrypt messages received via tor
 */
async function setNTRUKeys() {
    if (!localStorage.getItem("kantcoin_tor_pubkey") || !localStorage.getItem("kantcoin_tor_privkey")){
        //Using this algorithm because it is meant to be quantum computers resistant
        let keyPair = await ntru.keyPair()

        let public_key = convertArrayBufferViewtoString(keyPair.publicKey)
        let private_key = convertArrayBufferViewtoString(keyPair.privateKey)
        localStorage.setItem("kantcoin_tor_pubkey", public_key)
        localStorage.setItem("kantcoin_tor_privkey", private_key)
    }
}

/**
 * Functions called by menu item and mobile icon listeners
 */
function campaignInfoClick(){
    header_title.innerHTML = klang.campaign_info
    openCampaignPage()

    let anchorElement = $('#search_icon')
    anchorElement.attr('data-tooltip', klang.search_campaign)
    anchorElement.tooltip()

    current_search = "campaigns"
}

function candidatesClick(){
    header_title.innerHTML = klang.candidates
    header_info.innerHTML = ""

    document.title = klang.title
    newCandidatesPage()
}

function partiesClick(){
    header_title.innerHTML = klang.parties
    content_page.innerHTML = ""
    header_info.innerHTML = ""

    document.title = klang.title
    newPartiesPage()
}

function groupsClick(){
    header_title.innerHTML = klang.groups
    content_page.innerHTML = ""
    header_info.innerHTML = ""

    document.title = klang.title
    newGroupCategoriesPage()
}

function questionsClick(){
    header_title.innerHTML = klang.questions
    content_page.innerHTML = ""
    header_info.innerHTML = ""

    document.title = klang.title
    newQuestionsPage()
}

function resultsClick(){
    header_title.innerHTML = klang.results
    content_page.innerHTML = ""
    header_info.innerHTML = ""

    document.title = klang.title
    newResultsPage()
}

function donationsClick(){
    header_title.innerHTML = klang.donations
    content_page.innerHTML = ""
    header_info.innerHTML = ""

    document.title = klang.title
    newDonationsPage()
}

function statisticsClick(){
    header_title.innerHTML = klang.statistics
    content_page.innerHTML = ""
    header_info.innerHTML = ""

    newStatisticsPage()
    document.title = klang.title
}

function settingsClick(){
    header_title.innerHTML = klang.settings
    content_page.innerHTML = ""
    header_info.innerHTML = ""

    newSettingsPage()
    document.title = klang.title
}

/**
 * Opens the start page when using the local server
 */
function logoClick(){
    header_title.innerHTML = klang.whatsup
    header_info.innerHTML = ""
    newStartPage()
}

/**
 * Displaying user's profile
 */
function newMyAccountPage(){
        header_title.innerHTML = (sessionStorage.getItem("kantcoin_org_user")? klang.my_account: klang.my_account_standard)
        header_info.innerHTML = ""
        document.title = klang.my_account_title
        //Users cannot edit the root profile
        if (getDir() != "kroot"){
            //Getting the html content model
            content_page.innerHTML = my_account_page_html1.innerHTML.replace("<!--[CDATA[","").replace("-->","")
            //Setting the labels
            watch_profile_container.innerHTML = klang.watch_profile
            profile_html_container.innerHTML = profile_html
            edit_profile_container.innerHTML = klang.edit_profile
            my_data_container.innerHTML = klang.my_data
            network_ids_container.innerHTML = klang.network_ids
            save_profile_container.innerHTML = klang.save_profile
            cancel_profile_button_container.innerHTML = klang.cancel_button
            user_id_container.innerHTML = klang.user_id_container + ":&nbsp;&nbsp;"
            pkey_container.innerHTML = klang.pkey_container + ":&nbsp;&nbsp;"
            provider_container.innerHTML = klang.provider_container + ":&nbsp;&nbsp;"
            profile_ipfs_container.innerHTML = klang.profile_ipfs_container + ":&nbsp;&nbsp;"
            candidate_radio_label.innerHTML =  klang.candidate_radio_label
            party_radio_label.innerHTML =  klang.party_radio_label
            user_kind_title.innerHTML = klang.user_kind_title + ":"
            user_photo_title.innerHTML = klang.user_photo_title + ":"
            user_name_title.innerHTML = klang.user_name_title + ":"
            donations_address_title.innerHTML = klang.donations_address_title + ":"
            save_user_data_container.innerHTML = klang.save_user_data_container
            cancel_data_button_container.innerHTML = klang.cancel_button

            //Initially the kind "candidate" will be checked
            candidate_radio.checked = true

            //Save User Data Listener
            save_user_data.addEventListener("click", saveUserData)
            cancel_user_data.addEventListener("click", logoContainerClick)

            //Setting the data
            current_user_id_container.innerHTML = sessionStorage.getItem("kantcoin_org_user")
            //The pkey
            if (wallet.address){
                current_pkey_container.innerHTML = wallet.address
            }
            current_provider_container.innerHTML = login_provider

            //Getting the IPNS address to display
            if (user_profile_ipfs){
                current_profile_ipfs_container.innerHTML = user_profile_ipfs
                if (user_profile_ipfs != klang.no_profile){
                    loadUserData()
                }
            } else{
                let request = new XMLHttpRequest()
                request.addEventListener("load", function() {
                    if (this.responseText != "error" && this.responseText != "") {
                        user_profile_ipfs = this.responseText
                        current_profile_ipfs_container.innerHTML = this.responseText
                        loadUserData()
                    } else if (document.getElementById("current_profile_ipfs_container")){
                        user_profile_ipfs = klang.no_profile
                        current_profile_ipfs_container.innerHTML = klang.no_profile
                    }
                })
                request.open('GET', "http://" + localhost127 + ":1985/queryGetIPNS=" + getDir(), true) //This key contains the ipfs address
                request.send()
            }

            //Setting the materialnote editor with the profile html
            editor.innerHTML = profile_html

            //Adding the listeners
            save_profile.addEventListener("click", saveProfile)
            cancel_profile.addEventListener("click", logoContainerClick)

            $('#editor').materialnote({
                toolbar: [
                    ['all', ['undo','redo', 'paragraph', 'style', 'color', 'clear', 'table', 'hr', 'picture', 'link', 'ul', 'ol', 'bold', 'italic', 'underline', 'fullscreen', 'codeview', 'help']]
                ],
                disableLinkTarget:true,
                height:380,
                lang: (locale?locale:"en-US")
            })

        } else {
            content_page.innerHTML = my_account_page_html2.innerHTML.replace("<!--[CDATA[","").replace("-->","")
            watch_profile_container.innerHTML = klang.watch_profile
            profile_html_container.innerHTML = profile_html
            edit_profile_container.innerHTML = klang.edit_profile
            my_data_container.innerHTML = klang.my_data
            network_ids_container.innerHTML = klang.network_ids
        }
        //initialize this collapsible
        $('#account_collapsible').collapsible()

        let anchorElement = $('#search_icon')
        anchorElement.attr('data-tooltip', klang.search_campaign)
        anchorElement.tooltip()
}

/**
 * Called after the user presses "Save data" button
 */
function saveUserData(){
    json_user_data = {name: user_name_input.value, photo: user_photo_input.value, kind: (candidate_radio.checked? "candidate" : "party"), donee: donations_address_input.value}
    let content = JSON.stringify(json_user_data)
    let content_url = content.replace(/\?/g, QUESTION_MARK)
    content_url = content_url.replace(/#/g, HASHTAG)
    content_url = content_url.replace(/"/g, DOUBLEQUOTE)
    content_url = content_url.replace(/'/g, QUOTE)
    content_url = content_url.replace(/\\/g, BACKSLASH)

    //Inserting the candidate/party's data into the profile directory
    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        profile_html = ""
        loadProfileHTML(logoContainerClick)
    })
    request.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + getDir() + THE_AND + content_url + THE_AND + "data", true)
    request.send()
    showPreloader(klang.wait_saving_profile)
    setTimeout(killPreloader, 240000)

    if(user_profile_ipfs == klang.no_profile){
        //To force an update
        user_profile_ipfs = ""
    }
}

/**
 * Access ipfs to get the name, photo and kind of user
 */
function loadUserData(){
    if (!isEmpty(json_user_data)){
        user_name_input.value = json_user_data.name
        user_photo_input.value = json_user_data.photo
        donations_address_input.value = json_user_data.donee

        //candidate.radio is already checked
        if (json_user_data.kind == "party"){
            party_radio.checked = true
            candidate_radio.checked = false
        }
    } else{
        let request = new XMLHttpRequest()
        request.addEventListener("load", function() {
            if (this.responseText != "error" && this.responseText != ""){
                json_user_data = JSON.parse(this.responseText)
                user_name_input.value = json_user_data.name
                user_photo_input.value = json_user_data.photo
                donations_address_input.value = json_user_data.donee

                //candidate.radio is already checked
                if (json_user_data.kind == "party"){
                    party_radio.checked = true
                    candidate_radio.checked = false
                }
            }
        })

        request.open('GET', "http://" + localhost127 + ":1985/queryGetProfile=" + getDir() + "/data", true)
        request.send()
    }
}

/** Access ipfs to get candidates' name, photo, and party
 * @param {string} ipns
 */
function loadCandidates(){
    let ipns = current_campaign.ipns
    if (!isEmpty(campaign_info_json)){
        let number_ballots = campaign_info_json.how_many_ballots
        for (let j = 0; j < number_ballots; j++){
            let donations_ballot = campaign_info_json.ballots[j].donations
            let request = new XMLHttpRequest()
            request.addEventListener("load", function() {
                if (this.responseText.indexOf("{") == 0){
                    let json_candidates = JSON.parse(this.responseText)
                    let ballot_number = this.responseURL.substring(this.responseURL.length - 1)

                    if (isOwner() && localStorage.getItem("candidates_ipfs_page_" + ballot_number)){
                        let stored_json_candidates = JSON.parse(localStorage.getItem("candidates_ipfs_page_" + ballot_number))
                        if (Object.keys(stored_json_candidates).length > Object.keys(json_candidates).length){
                            return
                        }
                    }

                    localStorage.setItem("candidates_ipfs_page_" + ballot_number, this.responseText)

                    let candidatesMap = new Map()
                    let keys = Object.keys(json_candidates)
                    let values = Object.values(json_candidates)
                    for (let i=0; i < keys.length; i++){
                        if (!campaign_info_json.ballots[ballot_number] || !campaign_info_json.ballots[ballot_number].candidates[i]){
                            continue
                        }
                        if (donations_ballot){
                            values[i].donations = campaign_info_json.ballots[ballot_number].candidates[i].count
                        } else {
                            values[i].votes = campaign_info_json.ballots[ballot_number].candidates[i].count
                        }
                        candidatesMap.set(keys[i],values[i])
                    }
                    candidates_per_ballot_map.set(ballot_number, candidatesMap)
                }
            })

            /*request.addEventListener("error", function() {
                sleep(45000).then(loadCandidates)
            })*/

            request.open('GET', ((!ipfs_provider || isOwner()) && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + ipns + "/candidates_ballot" + j, true)
            request.send()
        }
    }
}

/** Access the localStorage to get candidates' name, photo, and party
 */
function loadCandidatesFromLocalStorage(){
    if (isEmpty(campaign_info_json) || !localStorage.getItem("candidates_ipfs_page_" + campaign_info_json.current_ballot)){
        return
    }

    let number_ballots = campaign_info_json.how_many_ballots
    for (let j = 0; j < number_ballots; j++){
        let donations_ballot = campaign_info_json.ballots[j].donations
        if (!localStorage.getItem("candidates_ipfs_page_" + j)){
            continue
        }
        let json_candidates = JSON.parse(localStorage.getItem("candidates_ipfs_page_" + j))
        let ballot_number = '' + j
        let candidatesMap = new Map()
        let keys = Object.keys(json_candidates)
        let values = Object.values(json_candidates)
        for (let i=0; i < keys.length; i++){
            if (!campaign_info_json.ballots[ballot_number].candidates[i]){
                continue
            }
            if (donations_ballot){
                values[i].donations = campaign_info_json.ballots[ballot_number].candidates[i].count
            } else {
                values[i].votes = campaign_info_json.ballots[ballot_number].candidates[i].count
            }
            candidatesMap.set(keys[i],values[i])
        }
        candidates_per_ballot_map.set(ballot_number, candidatesMap)
    }
}

/**
 * Access ipfs to get topics and questions
 * @param {string} ipns
 */
function loadQuestions(){
    let ipns = current_campaign.ipns
    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        if (this.responseText.indexOf("{") == 0){
            let json_questions = JSON.parse(this.responseText)

            if (isOwner() && localStorage.getItem("questions_ipfs_page")){
                let stored_json_questions = JSON.parse(localStorage.getItem("questions_ipfs_page"))
                if (Object.keys(stored_json_questions).length > Object.keys(json_questions).length){
                    return
                }
            }

            localStorage.setItem("questions_ipfs_page", this.responseText)

            let aux_questionsMap = new Map()
            let keys = Object.keys(json_questions)
            let values = Object.values(json_questions)
            for (let i = 0; i < keys.length; i++){
                aux_questionsMap.set(keys[i],values[i])
            }
            questions_map = aux_questionsMap
        }
    })

    request.open('GET', ((!ipfs_provider || isOwner()) && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + ipns + "/questions", true)
    request.send()
}

/**
 * Access the localStorage to get topics and questions
 */
function loadQuestionsFromLocalStorage(){
    if (!localStorage.getItem("questions_ipfs_page")){
        return
    }
    let json_questions = JSON.parse(localStorage.getItem("questions_ipfs_page"))
    let aux_questionsMap = new Map()
    let keys = Object.keys(json_questions)
    let values = Object.values(json_questions)
    for (let i = 0; i < keys.length; i++){
        aux_questionsMap.set(keys[i],values[i])
    }
    questions_map = aux_questionsMap
}

/**
 * Access ipfs to get group categories and descriptions
 * @param {string} ipns
 */
function loadGroupCategories(){
    let ipns = current_campaign.ipns
    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        if (this.responseText.indexOf("{") == 0){
            let json_group_categories = JSON.parse(this.responseText)

            if (isOwner() && localStorage.getItem("group_categories_ipfs_page")){
                let stored_json_group_categories = JSON.parse(localStorage.getItem("group_categories_ipfs_page"))
                if (Object.keys(stored_json_group_categories).length > Object.keys(json_group_categories).length){
                    return
                }
            }

            localStorage.setItem("group_categories_ipfs_page", this.responseText)

            let aux_group_categoriesMap = new Map()
            let keys = Object.keys(json_group_categories)
            let values = Object.values(json_group_categories)
            for (let i = 0; i < keys.length; i++){
                aux_group_categoriesMap.set(keys[i],values[i])
            }
            group_categories_map = aux_group_categoriesMap
        }
    })

    /*request.addEventListener("error", function() {
        sleep(45000).then(loadGroupCategories)
    })*/

    request.open('GET', ((!ipfs_provider || isOwner()) && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + ipns + "/group_categories", true)
    request.send()
}

/**
 * Access the localStorage to get group categories and descriptions
 */
function loadGroupCategoriesFromLocalStorage(){
    if (!localStorage.getItem("group_categories_ipfs_page")){
        return
    }
    let json_group_categories = JSON.parse(localStorage.getItem("group_categories_ipfs_page"))
    let aux_group_categoriesMap = new Map()
    let keys = Object.keys(json_group_categories)
    let values = Object.values(json_group_categories)
    for (let i = 0; i < keys.length; i++){
        aux_group_categoriesMap.set(keys[i],values[i])
    }
    group_categories_map = aux_group_categoriesMap
}

/**
 * Access ipfs to get parties' names, links and photos
 * @param {string} ipns
 */
function loadParties(){
    let ipns = current_campaign.ipns
    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        if (this.responseText.indexOf("{") == 0){
            let json_parties = JSON.parse(this.responseText)

            if (isOwner() && localStorage.getItem("parties_ipfs_page")){
                let stored_json_parties = JSON.parse(localStorage.getItem("parties_ipfs_page"))
                if (Object.keys(stored_json_parties).length > Object.keys(json_parties).length){
                    return
                }
            }

            localStorage.setItem("parties_ipfs_page", this.responseText)

            let aux_partiesMap = new Map()
            let keys = Object.keys(json_parties)
            let values = Object.values(json_parties)
            for (let i = 0; i < keys.length; i++){
                aux_partiesMap.set(keys[i],values[i])
            }
            parties_map = aux_partiesMap
        }
    })

    /*request.addEventListener("error", function() {
        sleep(45000).then(loadParties)
    })*/

    request.open('GET', ((!ipfs_provider || isOwner()) && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + ipns + "/parties", true)
    request.send()
}

/**
 * Access the localStorage to get parties' names, links and photos
 */
function loadPartiesFromLocalStorage(){
    if (!localStorage.getItem("parties_ipfs_page")){
        return
    }
    let json_parties = JSON.parse(localStorage.getItem("parties_ipfs_page"))
    let aux_partiesMap = new Map()
    let keys = Object.keys(json_parties)
    let values = Object.values(json_parties)
    for (let i = 0; i < keys.length; i++){
        aux_partiesMap.set(keys[i],values[i])
    }
    parties_map = aux_partiesMap
}

/**
 * Loading votation/donations data related to candidates and group categories and providing a way to download it
 */
function newStatisticsPage(){
    if (current_campaign.id){
        if (!isEmpty(campaign_info_json)){
            if (campaign_info_json.how_many_ballots == 0){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_candidates_to_show)
                return
            }

            //This statistics page shows data regarding all ballots
            let current_ballot = campaign_info_json.current_ballot

            if (group_categories_map.size == 0){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_statistics_to_show)
                return
            }

            let tables = ""
            for (let t = 0; t <= current_ballot; t++){
                let candidatesMap = candidates_per_ballot_map.get('' + t)
                let ballot = campaign_info_json.ballots[t]
                let number_candidates = ballot.how_many_candidates

                let table = "<table id='data_table" + t + "'>"

                //Header
                table += "<tr>"
                table += "<td>" + klang.name_groups + "</td>"
                let keys = group_categories_map.keys()
                let key = {}
                do{
                    key = keys.next()

                    if (!key.done){
                        table += "<td>" + key.value + "</td>"
                    }
                }
                while (!key.done)
                table += "</tr>"

                //Content
                let i = 0
                while (i < number_candidates){
                    let candidate = ballot.candidates[i]

                    if (candidate.ipfs && candidatesMap && candidatesMap.get(candidate.ipfs)){
                        table += "<tr>"
                        table += "<td>" + candidatesMap.get(candidate.ipfs).name + "</td>"
                        let keys2 = group_categories_map.keys()
                        let key2 = {}
                        do{
                            key2 = keys2.next()

                            if (!key2.done){
                                table += "<td>" + campaign_info_json.votes_per_ballot_candidate_category[t][i][key2.value] + "</td>"
                            }
                        }
                        while (!key2.done)
                        table += "</tr>"
                    }

                    i++
                }

                table += "</table>"

                tables += table
            }

            statistics_div.innerHTML = tables
            content_page.innerHTML = statistics_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[export_to_xlsx]]", klang.export_to_xlsx).replace("[[export_to_ods]]", klang.export_to_ods).replace("[[text]]", klang.download_data)
            export_xlsx_button.addEventListener("click", exportStatisticsToXLSX)
            export_ods_button.addEventListener("click", exportStatisticsToODS)
        } else {
            if (sessionStorage.getItem("kantcoin_org_user")){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page1)
            } else {
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page3)
            }
        }

    } else {
        content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page2)
    }
}

/**
 * It associates the cancellations with their respective candidates and, then, saves it in an sheet.
 * @param {Array} fnumbers32
 */
function generateCancellationsFile(fnumbers32) {
    let current_ballot = campaign_info_json.current_ballot
    let how_many_groups = campaign_info_json.how_many_groups
    let how_many_candidates = campaign_info_json.how_many_candidates
    let mgz = campaign_info_json.mgz
    let table = "<table id='cancellations_table'>"
    let cancellations_per_candidate = []

    for (let i = 0; i < how_many_candidates; i++){
        cancellations_per_candidate[i] = 0
    }

    //Header
    table += "<tr>"
    table += "<td>" + klang.candidates + "</td><td>" + klang.canceled_votes + "</td>"

    for (let g = 0; g < how_many_groups; g++){
        let votes = the_contract.getVotes(current_ballot, g)
        let fnumbers = votes[0]
        let candidates = votes[1]
        for (let v = 0; v < mgz; v++){
            if (fnumbers32.includes(fnumbers[v])){
                cancellations_per_candidate[candidates[v].toNumber()] += 1
            }
        }
    }

    for (let j = 0; j < how_many_candidates; j++){
        table += "<td>" + j + "</td><td>" + cancellations_per_candidate[j] + "</td>"
    }

    table += "</table>"
    cancellations_div.innerHTML = table

    let filename = klang.canceled_votes_file
    let wb = {SheetNames:[], Sheets:{}}

    let elt = document.getElementById('cancellations_table')
    let ws = XLSX.utils.table_to_sheet(elt)
    wb.SheetNames.push(klang.canceled_votes)
    wb.Sheets[klang.canceled_votes] = ws

    return XLSX.writeFile(wb, filename)
}

/**
 * It allows users to change the login, ipfs and tor providers
 */
function newSettingsPage(){
    content_page.innerHTML = settings_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[login_provider]]", login_provider)
        .replace("[[ipfs_provider]]", ipfs_provider).replace("[[alternative_info_provider]]", alternative_info_provider)
        .replace("[[tor_provider]]", tor_provider).replace("[[donations_provider]]", donations_provider)
        .replace("[[check_if_using_tor_browser]]", (using_tor_browser ? "checked=\"checked\"" : ""))
        .replace("[[disable_if_using_tor_browser]]", (using_tor_browser ? "disabled=\"disabled\"" : ""))
        .replace("[[enode_port]]", enode_port).replace("[[enode_port_tip]]", klang.enode_port_settings_tip)
        .replace("[[enode_ip]]", enode_ip)
    if (using_local_server){
        enode_port_settings_div.removeAttribute("hidden")
        enode_ip_settings_div.removeAttribute("hidden")
    }

    login_provider_settings_label.innerHTML = klang.login_provider_settings_label
    ipfs_provider_settings_label.innerHTML = klang.ipfs_provider_settings_label
    donations_provider_settings_label.innerHTML = klang.donations_provider_settings_label
    tor_provider_settings_label.innerHTML = klang.tor_provider_settings_label
    alternative_info_provider_settings_label.innerHTML = klang.alternative_info_provider_settings_label
    using_tor_settings_label.innerHTML = klang.using_tor_settings_label
    enode_port_settings_label.innerHTML = klang.enode_port_settings_label
    enode_ip_settings_label.innerHTML = klang.enode_ip_settings_label
    update_settings_button.innerHTML = klang.update_settings_button

    Materialize.updateTextFields()
    update_settings_button.addEventListener("click", updateSettings)
    $('#enode_port_div').tooltip()

    using_tor_settings_input.addEventListener("click", function () {
        using_tor_browser = (using_tor_settings_input.value == "on")
        if (using_tor_browser){
            tor_provider_settings_input.disabled = "disabled"
        } else {
            tor_provider_settings_input.removeAttribute("disabled")
        }
    })
}

/**
 * It changes the login, ipfs and tor providers
 */
function updateSettings(){
    login_provider = login_provider_settings_input.value
    localStorage.setItem("login_provider", login_provider)
    ipfs_provider = ipfs_provider_settings_input.value
    localStorage.setItem("ipfs_provider", ipfs_provider)
    tor_provider = tor_provider_settings_input.value
    localStorage.setItem("tor_provider", tor_provider)
    alternative_info_provider = alternative_info_provider_settings_input.value
    localStorage.setItem("alternative_info_provider", alternative_info_provider)
    donations_provider = donations_provider_settings_input.value
    localStorage.setItem("donations_provider", donations_provider)
    using_tor_browser = (using_tor_settings_input.checked ? true : false)
    localStorage.setItem("using_tor_browser", "" + using_tor_settings_input.checked)
    enode_ip = enode_ip_settings_input.value
    localStorage.setItem("kantcoin_org_ip", enode_ip)
    enode_port = enode_port_settings_input.value
    localStorage.setItem("kantcoin_org_port", enode_port)
}

/**
 * It opens the initial page
 */
function newStartPage() {
    content_page.innerHTML = (!valid_vault ? unregistered_vault_chip_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[message]", klang.unregistered_vault) : "")
        + start_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")
    start_page_join.innerHTML = klang.start_page_join
    start_page_choose.innerHTML = klang.start_page_choose
    start_page_vote.innerHTML = klang.start_page_vote
    tutorials.innerHTML = klang.tutorials
    for_voters_button.innerHTML = klang.for_voters_button
    for_creators_button.innerHTML = klang.for_creators_button
}

/**
 * Export the content of data_table and save it into a XLSX file
 */
function exportStatisticsToXLSX() {
    let filename = klang.statistics.toLowerCase()
    filename = filename.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    filename += ".xlsx"
    let wb = {SheetNames:[], Sheets:{}}

    let current_ballot = campaign_info_json.current_ballot
    for (let t = 0; t <= current_ballot; t++){
        let elt = document.getElementById('data_table' + t)
        let ws = XLSX.utils.table_to_sheet(elt)
        wb.SheetNames.push("" + t + ": " + campaign_info_json.ballots[t].id)
        wb.Sheets["" + t + ": " + campaign_info_json.ballots[t].id] = ws
    }

    return XLSX.writeFile(wb, filename)
}

/**
 * Export the content of data_table and save it into an ODS file
 */
function exportStatisticsToODS() {
    let filename = klang.statistics.toLowerCase()
    filename = filename.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    filename += ".ods"
    let wb = {SheetNames:[], Sheets:{}}

    let current_ballot = campaign_info_json.current_ballot
    for (let t = 0; t <= current_ballot; t++){
        let elt = document.getElementById('data_table' + t)
        let ws = XLSX.utils.table_to_sheet(elt)
        wb.SheetNames.push("" + t + ": " + campaign_info_json.ballots[t].id)
        wb.Sheets["" + t + ": " + campaign_info_json.ballots[t].id] = ws
    }

    return XLSX.writeFile(wb, filename)
}

/**
 * Displaying candidates
 */
function newCandidatesPage(){
    if (current_campaign.id){
        if (!isEmpty(campaign_info_json)){
            if (campaign_info_json.how_many_ballots == 0){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_candidates_to_show)
                return
            }
            let current_ballot = campaign_info_json.current_ballot
            let is_donation = campaign_info_json.ballots[current_ballot].donations
            let is_stopped = campaign_info_json.ballots[current_ballot].stopped
            let is_closed = campaign_info_json.ballots[current_ballot].closed

            //Displaying the headers
            content_page.innerHTML = candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")
            candidate_photo_th.innerHTML = klang.candidate_photo_th
            candidate_name_th.innerHTML = klang.candidate_name_th
            candidate_party_th.innerHTML = klang.candidate_party_th
            vote_donate_th.innerHTML = (is_donation ? klang.donate_th : klang.vote_th)

            let ballot = campaign_info_json.ballots[current_ballot]
            let ballot_id = ballot.id
            let closed = ballot.closed
            let stopped = ballot.stopped

            if (ballot_id !== "" && ballot_id !== undefined){
                header_info.innerHTML = ballot_id_header_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[id]]", ballot_id).replace("[[data-tooltip]]", klang.current_ballot_label + " (" + (closed ? klang.round_closed : stopped ? klang.round_stopped : klang.round_active )+ ")").replace("[[color]]", (closed ? "grey" : stopped ? "red" : "green" ))
                let button_element = $('#disabled_round_button')
                button_element.tooltip()
            }

            let json_vote = ""
            if (my_vote){
                json_vote = JSON.parse(my_vote)
                if ((json_vote.ballot != current_ballot)||(json_vote.campaign != current_campaign.id)){
                    json_vote = ""
                    my_vote = ""
                    localStorage.setItem("kantcoin_org_vote_" + current_campaign.id, "")
                }
            }
            let candidatesMap = candidates_per_ballot_map.get('' + current_ballot)
            let i = 0
            let ipfs_hex = ""
            let how_many = 0
            let number_candidates = ballot.how_many_candidates

            if (number_candidates == 0){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_candidates_to_show)
                header_info.innerHTML = ""
                return
            }

            do{
                let candidate = ballot.candidates[i]
                ipfs_hex = fromIPFSToBytes32(candidate.ipfs)
                let ipfs = candidate.ipfs
                if (notNullChars(ipfs_hex) && candidatesMap && candidatesMap.get(ipfs)){
                    let party = candidatesMap.get(ipfs).party
                    let name = candidatesMap.get(ipfs).name
                    let photo = candidatesMap.get(ipfs).photo
                    candidates_tbody.innerHTML += candidates_page_items_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[name]]", name).replace("[[party]]", party)
                        .replace("[[photo]]", photo).replace("[[vote_button_text]]", (is_donation? klang.donate_button_text: klang.vote_button_text))
                        .replace("[[vote_button_id]]", (is_donation? "donate_button_id_" : "vote_button_id_") + i).replace("[[vote_button_th]]", "vote_button_th_" + i)
                        .replace("[[candidate_page_href]]", ((!ipfs_provider || isOwner()) && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + ipfs + "/profile")

                    how_many++
                }
                i++
            }
            while (notNullChars(ipfs_hex) && i < number_candidates)

            if (how_many == 0){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_candidates_to_show)
                header_info.innerHTML = ""
                return
            }

            let button_text = "vote_button_id_"
            if (is_donation){
                button_text = "donate_button_id_"
            }

            //Adding listeners to the candidate items buttons
            for (let j = 0; j < number_candidates; j++){

                if(!document.getElementById(button_text + j)){
                    continue
                }

                if (json_vote && json_vote.ballot !== undefined && mygroup_info_json.ballots && mygroup_info_json.ballots[json_vote.ballot]){
                    if (json_vote.candidate == j){
                        $("#" + button_text + j).addClass('disabled')
                        document.getElementById(button_text + j).innerHTML = sent_icon_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")
                        setTooltip("vote_button_th_" + j, klang.vote_sent, "down")

                        let first_numbers = mygroup_info_json.ballots[json_vote.ballot].votes[0]
                        let candidates = mygroup_info_json.ballots[json_vote.ballot].votes[1]
                        for (let k = 0; k < first_numbers.length; k++){
                            if (first_numbers[k] == fromFirstNumberToBytes32(json_vote.first_number)){
                                //Verifying if the stored candidate is the same as the chosen candidate
                                let s_candidate = (candidates[k].toNumber ? candidates[k].toNumber() : candidates[k])
                                let same_candidate = (s_candidate == json_vote.candidate)
                                if (same_candidate){
                                    if (mygroup_info_json.ballots[json_vote.ballot].committed[k]){
                                        document.getElementById(button_text + j).innerHTML = confirmed_icon_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")
                                        setTooltip("vote_button_th_" + j, klang.vote_confirmed, "down")
                                    } else{
                                        document.getElementById(button_text + j).innerHTML = voted_icon_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")
                                        setTooltip("vote_button_th_" + j, klang.voted, "down")
                                    }
                                } else{
                                    $("#" + button_text + j).removeClass('disabled')
                                    document.getElementById(button_text + j).innerHTML = error_icon_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")
                                    document.getElementById(button_text + j).addEventListener("click", reportError)
                                    setTooltip("vote_button_th_" + j, klang.report_error, "down")
                                }
                                break
                            }
                        }
                    } else {
                        document.getElementById(button_text + j).style.visibility = "hidden"
                    }
                } else {
                    if (!isEmpty(mygroup_info_json) && !mygroup_info_json.no_group){
                        document.getElementById(button_text + j).addEventListener("click", (is_donation? donate : vote))
                    } else {
                        setTooltip(button_text + j, (mygroup_index == "-2" ? klang.must_join_group : klang.must_participate), "left")
                    }
                    if (is_closed || is_stopped){
                        document.getElementById(button_text + j).style.visibility = "hidden"
                    }
                }
            }
        } else {
            content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page1)
        }
    } else {
        content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page2)
    }
}

/**
 * It defines a tooltip to a generic element
 * @param {string} id
 * @param {string} tooltip
 * @param {string} position
 */
function setTooltip(id, tooltip, position){
    document.getElementById(id).setAttribute("data-position", position)
    document.getElementById(id).setAttribute("data-tooltip", tooltip)

    let class_without_tooltip = document.getElementById(id).getAttribute("class")
    document.getElementById(id).setAttribute("class", (class_without_tooltip ? class_without_tooltip : "") + " tooltiped")

    let element = $('#'+ id)
    element.tooltip()
}

/**
 * Displaying voting results
 */
function newResultsPage(){
    if (current_campaign.id){
        content_page.innerHTML = results_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")
        candidate_photo_th.innerHTML = klang.candidate_photo_th
        candidate_name_th.innerHTML = klang.candidate_name_th
        candidate_party_th.innerHTML = klang.candidate_party_th
        votes_th.innerHTML = klang.votes_th

        if (!isEmpty(campaign_info_json)){
            if (campaign_info_json.how_many_ballots == 0){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_candidates_to_show)
                return
            }

            let current_ballot = campaign_info_json.current_ballot

            let ballot = campaign_info_json.ballots[current_ballot]
            let ballot_id = ballot.id
            let closed = ballot.closed
            let stopped = ballot.stopped

            if (ballot_id !== "" && ballot_id !== undefined){
                header_info.innerHTML = ballot_id_header_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[id]]", ballot_id).replace("[[data-tooltip]]", klang.current_ballot_label + " (" + (closed ? klang.round_closed : stopped ? klang.round_stopped : klang.round_active )+ ")").replace("[[color]]", (closed ? "grey" : stopped ? "red" : "green" ))
                let button_element = $('#disabled_round_button')
                button_element.tooltip()
            }

            let is_donation = ballot.donations
            let candidatesMap = candidates_per_ballot_map.get('' + current_ballot)
            let i = 0
            let how_many = 0
            let ipfs_hex = ""
            let votes = 0
            let number_candidates = ballot.how_many_candidates

            if (number_candidates == 0 || is_donation){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_voting_to_show)
                header_info.innerHTML = ""
                return
            }

            do{
                let candidate = ballot.candidates[i]
                ipfs_hex = fromIPFSToBytes32(candidate.ipfs)
                votes = candidate.count
                let ipfs = candidate.ipfs
                if (notNullChars(ipfs_hex) && candidatesMap && candidatesMap.get(ipfs)){
                    let party = candidatesMap.get(ipfs).party
                    let name = candidatesMap.get(ipfs).name
                    let photo = candidatesMap.get(ipfs).photo
                    candidates_tbody.innerHTML += results_page_items_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[name]]", name).replace("[[party]]", party)
                        .replace("[[photo]]", photo).replace("[[votes]]", (is_donation? "-" : votes)).replace("[[candidate_page_href]]", ((!ipfs_provider || isOwner()) && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + ipfs + "/profile")

                    how_many++
                }
                i++
            }
            while (notNullChars(ipfs_hex) && i < number_candidates)

            if (how_many == 0){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_voting_to_show)
                header_info.innerHTML = ""
                return
            }

        } else {
            if (sessionStorage.getItem("kantcoin_org_user")){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page1)
            } else {
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page3)
            }
        }

    } else {
        content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page2)
    }
}

/**
 * Displaying donations results
 */
function newDonationsPage(){
    if (current_campaign.id){
        content_page.innerHTML = donations_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")
        candidate_photo_th.innerHTML = klang.candidate_photo_th
        candidate_name_th.innerHTML = klang.candidate_name_th
        candidate_party_th.innerHTML = klang.candidate_party_th
        donations_th.innerHTML = klang.donations_th

        if (!isEmpty(campaign_info_json)){
            if (campaign_info_json.how_many_ballots == 0){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_candidates_to_show)
                return
            }

            let current_ballot = campaign_info_json.current_ballot

            let ballot = campaign_info_json.ballots[current_ballot]
            let ballot_id = ballot.id
            let closed = ballot.closed
            let stopped = ballot.stopped

            if (ballot_id !== "" && ballot_id !== undefined){
                header_info.innerHTML = ballot_id_header_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[id]]", ballot_id).replace("[[data-tooltip]]", klang.current_ballot_label + " (" + (closed ? klang.round_closed : stopped ? klang.round_stopped : klang.round_active )+ ")").replace("[[color]]", (closed ? "grey" : stopped ? "red" : "green" ))
                let button_element = $('#disabled_round_button')
                button_element.tooltip()
            }

            let is_donation = ballot.donations
            let candidatesMap = candidates_per_ballot_map.get('' + current_ballot)
            let i = 0
            let how_many = 0
            let ipfs_hex = ""
            let donations = 0
            let number_candidates = ballot.how_many_candidates

            if (number_candidates == 0 || !is_donation){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_donations_to_show)
                header_info.innerHTML = ""
                return
            }

            do{
                let candidate = ballot.candidates[i]
                ipfs_hex = fromIPFSToBytes32(candidate.ipfs)
                donations = candidate.count
                let ipfs = candidate.ipfs
                if (notNullChars(ipfs_hex) && candidatesMap && candidatesMap.get(ipfs)){
                    let party = candidatesMap.get(ipfs).party
                    let name = candidatesMap.get(ipfs).name
                    let photo = candidatesMap.get(ipfs).photo
                    candidates_tbody.innerHTML += donations_page_items_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[name]]", name).replace("[[party]]", party)
                        .replace("[[photo]]", photo).replace("[[donations]]", (is_donation? donations : "-")).replace("[[candidate_page_href]]", ((!ipfs_provider || isOwner()) && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + ipfs + "/profile")

                    how_many++
                }
                i++
            }
            while (notNullChars(ipfs_hex) && i < number_candidates)

            if (how_many == 0){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_donations_to_show)
                header_info.innerHTML = ""
                return
            }

        } else {
            if (sessionStorage.getItem("kantcoin_org_user")){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page1)
            } else {
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page3)
            }
        }

    } else {
        content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page2)
    }
}

/**
 * Displaying parties
 */
function newPartiesPage(){
    if (current_campaign.id){
        if (!isEmpty(campaign_info_json)){
            content_page.innerHTML = parties_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")
            party_photo_th.innerHTML = klang.party_photo_th
            party_name_th.innerHTML = klang.party_name_th
            party_url_th.innerHTML = klang.party_url_th

            let keys = parties_map.keys()
            let values = parties_map.values()
            let number_parties = parties_map.size

            if (number_parties == 0){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_parties_to_show)
                return
            }

            let key = {}
            let value = {}
            do{
                value = values.next()
                key = keys.next()

                if (!key.done){
                    let ipfs = key.value
                    let url = value.value.url
                    let name = value.value.name
                    let photo = value.value.photo
                    parties_tbody.innerHTML += parties_page_items_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[name]]", name).replace("[[url]]", "<a href='" + url + "' target='_blank'>" + url.substring(0, 25) + (url.length > 25 ? ".." : "") + "</a>")
                        .replace("[[photo]]", photo).replace("[[party_page_href]]", ((!ipfs_provider || isOwner()) && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + ipfs + "/profile")
                }
            }
            while (!key.done)

        } else {
            if (sessionStorage.getItem("kantcoin_org_user")){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page1)
            } else {
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page3)
            }
        }
    } else {
        content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page2)
    }
}

/**
 * Displaying groups
 */
function newGroupCategoriesPage(){
    if (current_campaign.id){
        if (!isEmpty(campaign_info_json)){
            let has_group = (!isEmpty(mygroup_info_json) && !mygroup_info_json.no_group)
            let hide_buttons = has_group || enter_group_button_disabled || campaign_info_json.stopping_accession_to_groups == "stopped"

            if (hide_buttons && sessionStorage.getItem("kantcoin_org_user")){
                let category = (enter_group_button_disabled ? wait_category : (campaign_info_json.stopping_accession_to_groups == "stopped" && !has_group ? "--" : mygroup_info_json.category))
                header_info.innerHTML = voter_group_header_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[category]]", category).replace("[[data-tooltip]]", klang.your_group_category)
                let button_element = $('#disabled_group_button')
                button_element.tooltip()
            }
            content_page.innerHTML = group_categories_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")

            if (campaign_info_json.stopping_accession_to_groups && !has_group){
                if (campaign_info_json.stopping_accession_to_groups == "stopped"){
                    content_page.innerHTML = stopping_accession_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[message]", klang.accession_stopped)
                        + content_page.innerHTML
                } else if (campaign_info_json.stopping_accession_to_groups == "stopping"){
                    content_page.innerHTML = stopping_accession_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[message]", klang.accession_stopping)
                        + content_page.innerHTML
                }
            }

            group_category_description_th.innerHTML = klang.group_category_description_th
            group_category_id_th.innerHTML = klang.group_category_id_th
            enter_group_th.innerHTML = klang.enter_group_th

            let keys = group_categories_map.keys()
            let values = group_categories_map.values()
            let number_categories = group_categories_map.size

            if (number_categories == 0){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_group_categories_to_show)
                return
            }

            if (number_categories > 0){
                let i = 0
                let key = {}
                let value = {}
                let mgz = current_campaign.mgz
                do{
                    value = values.next()
                    key = keys.next()

                    if (!key.done){
                        let id = key.value
                        let id_label = id
                        let content = value.value.content

                        if (using_local_server && the_contract){
                            //Placing an alert icon in front of the group category id if its groups are almost full
                            let groups = (json_groups[id] ? json_groups[id].split(","): [])
                            let voters_counter = 0
                            let capacity = 0
                            for (let g = 0; g < groups.length; g++){
                                if (groups[g] !== ""){
                                    voters_counter += the_contract.groups(groups[g])[3].toNumber()
                                    capacity += mgz
                                }
                            }

                            if (capacity == 0){
                                capacity = 1
                            }

                            if ((voters_counter/capacity) <= 0.7){
                                id_label = "<span id='gc_" + id + "' class='white tooltiped' data-tooltip='" + klang.occupancy_rate + Math.floor((voters_counter/capacity) * 100) + "%'>" + id_label + "</span>"
                            } else if ((voters_counter/capacity) > 0.7 && (voters_counter/capacity) <= 0.9){
                                id_label = "<span id='gc_" + id + "' class='yellow lighten-2 tooltiped' data-tooltip='" + klang.occupancy_rate + Math.floor((voters_counter/capacity) * 100) + "%'>" + id_label + "</span>"
                            } else if ((voters_counter/capacity) > 0.9){
                                id_label = "<span id='gc_" + id + "' class='red lighten-2 tooltiped' data-tooltip='" + klang.occupancy_rate + Math.floor((voters_counter/capacity) * 100) + "%'>" + id_label + "</span>"
                            }
                        }

                        group_categories_tbody.innerHTML += group_categories_page_items_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[content]]", content).replace("[[group_button_text]]", klang.group_button_text).replace("[[group_button_id]]", "group_button_id_" + i).replace("[[id]]", id_label)
                        group_categories_select.innerHTML += group_categories_select_item_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[id]]", id)

                        if (using_local_server){
                            sleep(200).then(function(){
                                let gc_element = $("#gc_" + id)
                                gc_element.tooltip()
                            })
                        }
                    }
                    i++
                }
                while (!key.done)

                if (hide_buttons || isEmpty(campaign_info_json) || campaign_info_json.stored || !wallet || !wallet.address){
                    document.getElementById("enter_group_th").style.display = "none"
                }

                for (let j = 0; j < i - 1; j++){
                    if (hide_buttons || isEmpty(campaign_info_json) || campaign_info_json.stored || !wallet || !wallet.address){
                        document.getElementById("group_button_id_" + j).style.display = "none"
                    } else{
                        document.getElementById("group_button_id_" + j).addEventListener("click", enterIntoGroup)
                    }
                }
            }
        } else {
            if (sessionStorage.getItem("kantcoin_org_user")){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page1)
            } else {
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page3)
            }
        }
    } else {
        content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page2)
    }
}

/**
 * Displaying questions
 */
function newQuestionsPage(){
    if (current_campaign.id){
        if (!isEmpty(campaign_info_json)){
            content_page.innerHTML = questions_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")
            question_topic_th.innerHTML = klang.question_topic_th
            question_content_th.innerHTML = klang.question_content_th

            let values = questions_map.values()
            let number_questions = questions_map.size

            if (number_questions == 0){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.no_questions_to_show)
                return
            }

            if (number_questions > 0){
                let value = {}
                do{
                    value = values.next()

                    if (!value.done){
                        let topic = value.value.topic
                        let content = value.value.content
                        questions_tbody.innerHTML += questions_page_items_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[topic]]", topic).replace("[[content]]", content)
                    }
                }
                while (!value.done)
            }
        } else {
            if (sessionStorage.getItem("kantcoin_org_user")){
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page1)
            } else {
                content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page3)
            }
        }
    } else {
        content_page.innerHTML = cant_open_candidates_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[text]]", klang.cant_open_candidates_page2)
    }
}

/**
 * Send a vote with Tor
 */
function vote(ev){
    let has_group = (!isEmpty(mygroup_info_json) && !mygroup_info_json.no_group)
    if (!has_group){
        Materialize.toast(klang.must_enter_group, 2500, 'rounded')
        return
    }

    if (!localStorage.getItem("kantcoin_mygroup_vote_message_" + current_campaign.id)){
        Materialize.toast(klang.must_receive_vote_message, 4000, 'rounded')
        return
    }

    if (!last_signature){
        Materialize.toast(klang.vote_not_ready, 3000, 'rounded')
        if (Date.now() > last_update_myvote + 3000){
            last_update_myvote = Date.now()
            updateMyVote(true)
        }
        return
    }

    if (campaign_info_json.mgz > mygroup_info_json.size){
        Materialize.toast(klang.wait_group_complete, 3500, 'rounded')
        return
    }

    //Open it now to avoid popup blockers
    openTor2webPopup()

    //ev can be an event or a number representing a candidate
    sendVoteMessage((isNaN(ev) ? ev.target.id.substring(15) : ev))
    if (using_local_server){
        setTimeout(newCandidatesPage, ACTION_AFTER_CAPTCHA)
    } else{
        call_after_captcha = newCandidatesPage
    }
}

/**
 * Send a donation with Tor
 */
function donate(ev){
    let has_group = (!isEmpty(mygroup_info_json) && !mygroup_info_json.no_group)
    if (!has_group){
        Materialize.toast(klang.must_enter_group, 2500, 'rounded')
        return
    }

    if (!localStorage.getItem("kantcoin_mygroup_vote_message_" + current_campaign.id)){
        Materialize.toast(klang.must_receive_vote_message, 4000, 'rounded')
        return
    }

    if (!last_signature){
        Materialize.toast(klang.vote_not_ready, 3000, 'rounded')
        if (Date.now() > last_update_myvote + 3000){
            last_update_myvote = Date.now()
            updateMyVote(true)
        }
        return
    }
    //Open it now to avoid popup blockers
    openTor2webPopup()

    sendVoteMessage(ev.target.id.substring(17))
    setTimeout(newCandidatesPage, 15000)
}

/**
 * Voters should choose a group to enter
 */
function enterIntoGroup(ev){
    //The index indicates what was the chosen group category
    let index = ev.target.id.substring(16)
    let category = Array.from(group_categories_map.keys())[index]

    let groups = ""
    if (json_groups[category]){
        //Each group category can have many groups
        groups = json_groups[category].split(",")
    } else {
        Materialize.toast(klang.no_groups_category, 2500, 'rounded')
        return
    }

    //If it is an empty group category
    if (groups.length == 0){
        Materialize.toast(klang.no_groups_category, 2500, 'rounded')
        return
    }

    //It indicates the voter is not yet participating in the campaign
    if (mygroup_index == "-1" || mygroup_index == "-3"){
        Materialize.toast(klang.must_participate, 2500, 'rounded')
        return
    }

    if (using_local_server){
        //Change it temporarily to show the wait message in the groups page
        wait_category = klang.wait
        enter_group_button_disabled = true

        newGroupCategoriesPage()
        get_vote_message_count = 30
        finishEnterIntoGroup()
    } else{
        call_after_captcha = function () {
            //Change it temporarily to show the wait message in the groups page
            wait_category = klang.wait
            enter_group_button_disabled = true

            newGroupCategoriesPage()
            get_vote_message_count = 30
            finishEnterIntoGroup()
        }
    }

    //Open it now to avoid popup blockers
    openTor2webPopup()

    //To prove the origin of the message
    let aux_wallet = new ethers.Wallet(wallet.privateKey)
    let signature = aux_wallet.signMessage(current_campaign.id)
    let payload_json = {address: wallet.address, category: category, signature: signature}
    let payload = JSON.stringify(payload_json)

    let onion = campaign_info_json.chairperson_tor.onion
    let public_key = campaign_info_json.chairperson_tor.public_key

    sendTorMessage(ENTER_GROUP, payload, onion, public_key)
}

/**
 * It tries continually to get mygroup_index and the group vote message
 */
function finishEnterIntoGroup(){
    if (get_vote_message_count < 0){
        return
    }

    if (mygroup_index == "-1" || mygroup_index == "-2" || mygroup_index == "-3"){
        whatIsMyGroupIndex().then(updateMyGroupInfo).then(getVoteMessage)
        setTimeout(finishEnterIntoGroup, ENTER_INTO_GROUP_RATE)
    }
}

/**
 * When this function is called, it means that the deadline for voters to choose a group has been reached
 */
function setOnlyAcceptedGroups(){
    let how_many_groups = the_contract.howManyGroups().toNumber()
    let mgz = current_campaign.mgz

    only_accepted_groups = []
    for (let g = 0, i = 0; g < how_many_groups; g++){
        if (the_contract.groups(g)[3].toNumber() > 0 && the_contract.groups(g)[3].toNumber() < mgz){
            only_accepted_groups[i] = g
            i++
        }
    }

    localStorage.setItem("only_accepted_groups", only_accepted_groups.join(","))
    localStorage.setItem("stopping_accession_to_groups", "true")
}

/**
 * Confirm the vote on the blockchain
 */
function confirm(){
    let zeros = "0000000000000000000000000000000000000000000000000000000000000000"

    let current_ballot = campaign_info_json.current_ballot
    let current_ballot_hex = current_ballot.toString(16)

    openTor2webPopup()

    let places_array = []
    let addresses = mygroup_info_json.ballots[current_ballot].confirmations[0]
    for (let j = 0; j < addresses.length; j++){
        if (!notNullChars(addresses[j])){
            places_array.push(j)
        }
    }

    //Adding some randomness to avoid clashes
    let position = places_array[Math.floor(Math.random() * places_array.length)]
    let position_hex = position.toString(16)

    var data = "0xff02a79a" + zeros.substring(0, zeros.length - current_ballot_hex.length) + current_ballot_hex
                            + zeros.substring(0, zeros.length - position_hex.length) + position_hex
                            + zeros.substring(0, zeros.length - 1) + "1"

    //web3.eth.getTransactionCount(web3.eth.coinbase) put it into the mygroup_info_json
    var tx = new ethereumjs.Tx({
        nonce: mygroup_info_json.nonces[wallet.address.substring(2).toLowerCase()],
        gasPrice: "0x4a817c800",
        gasLimit: 100000,
        to: current_campaign.contract,
        value: 0,
        data: data,
    })

    tx.sign(ethereumjs.Buffer.Buffer.from(wallet.privateKey.substring(2), 'hex'))

    var raw = '0x' + tx.serialize().toString('hex')

    let payload_json = {raw: raw, campaign: current_campaign.id}
    let payload = JSON.stringify(payload_json)

    sendTorMessage(CONFIRMATION, payload, mygroup_info_json.chairperson_tor.onion, mygroup_info_json.chairperson_tor.public_key)
    newCandidatesPage()
}

/**
 * Send a signal that your vote was not correctly computed
 */
function reportError(){
    let zeros = "0000000000000000000000000000000000000000000000000000000000000000"

    let current_ballot = campaign_info_json.current_ballot
    let current_ballot_hex = current_ballot.toString(16)

    openTor2webPopup()

    let places_array = []
    let addresses = mygroup_info_json.ballots[current_ballot].confirmations[0]
    for (let j = 0; j < addresses.length; j++){
        if (!notNullChars(addresses[j])){
            places_array.push(j)
        }
    }

    //Adding some randomness to avoid clashes
    let position = places_array[Math.floor(Math.random() * places_array.length)]
    let position_hex = position.toString(16)

    var data = "0xff02a79a" + zeros.substring(0, zeros.length - current_ballot_hex.length) + current_ballot_hex
        + zeros.substring(0, zeros.length - position_hex.length) + position_hex
        + zeros.substring(0, zeros.length - 1) + "0"

    //web3.eth.getTransactionCount(web3.eth.coinbase) put it into the mygroup_info_json
    var tx = new ethereumjs.Tx({
        nonce: mygroup_info_json.nonces[wallet.address.substring(2).toLowerCase()],
        gasPrice: "0x4a817c800",
        gasLimit: 100000,
        to: current_campaign.contract,
        value: 0,
        data: data,
    })

    tx.sign(ethereumjs.Buffer.Buffer.from(wallet.privateKey.substring(2), 'hex'))

    var raw = '0x' + tx.serialize().toString('hex')

    let payload_json = {raw: raw, campaign: current_campaign.id}
    let payload = JSON.stringify(payload_json)

    sendTorMessage(CONFIRMATION, payload, campaign_info_json.chairperson_tor.onion, campaign_info_json.chairperson_tor.public_key)
    newCandidatesPage()
}

/**
 * It checks if the seed is on the localStorage and the key is on the sessionStorage
 * If the key is not there, then print a red key icon to alert the user
 */
function checkKey(){
    if (!localStorage.getItem("kantcoin_org_words")) {
        vault_icon_container.innerHTML = vault_icon_container_html3.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[data-tooltip]]", klang.vault_closed)
        alertKey.innerHTML = ""
        return
    }
    if (!sessionStorage.getItem("kantcoin_org_key")){
        alertKey.innerHTML = floating_button_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[data-tooltip]]", klang.insert_password_again)
        vault_icon_container.innerHTML = vault_icon_container_html1.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[data-tooltip]]", klang.vault_opened_no_password)
    } else{
        alertKey.innerHTML = ""
        vault_icon_container.innerHTML = vault_icon_container_html2.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[data-tooltip]]", klang.vault_opened)
    }
    if (sessionStorage.getItem("kantcoin_org_user")){
        let user = sessionStorage.getItem("kantcoin_org_user")
        kantcoin_org_side_nav_user.innerHTML = (user.length < 20 ? user : user.substring(0, 17) + "..")

        if(user.indexOf('@') > 0 && user.indexOf('.') > 0){
            user_icon.innerHTML = "email"
        } else if ((user.match(/-/g) || []).length == 1 && /^\d+$/.test(user.replace(/-/g,""))){
            user_icon.innerHTML = "phone_android"
        } else {
            user_icon.innerHTML = "credit_card"
        }
        user_chip.style = ""
        let user_view_background = user_view_background_url.innerHTML.replace("<!--[CDATA[","").replace("-->","")
        document.body.style.setProperty("--background-user-img", user_view_background)

        let aElementP1 = $('#user_chip')
        aElementP1.attr('data-tooltip', user)
        aElementP1.tooltip()
    } else {
        kantcoin_org_side_nav_user.innerHTML = ""
        user_chip.style = "display:none;"
        document.body.style.setProperty("--background-user-img", "none")
    }
}

/**
 * It checks if the loaded vault is the most recently uploaded one into the login provider
 */
function checkVaultValidity(){
    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        if (this.responseText == "true"){
            valid_vault = true
        } else{
            valid_vault = false
        }
    })

    let user = sessionStorage.getItem("kantcoin_org_user")
    user = user.replace("@", THE_AT)
    request.open('GET', login_provider + "/checkUser?id=" + user + "&pkey=" + wallet.address, true)
    request.send()
}

/**
 * The user name and the key are stored only in the sessionStorage, so the user should enter his or her password and user name every time he or she loads a new page
 */
function loadPassword(){
    //Getting the mnemonics from local storage
    let words = localStorage.getItem("kantcoin_org_words")
    //Getting the written password
    let password = kantcoin_org_password2.value
    //Getting the user
    let user =  kantcoin_org_user2.value
    //Setting the user in the sessionstorage
    sessionStorage.setItem("kantcoin_org_user", user)

    if (!words || !password || !user){
        Materialize.toast(klang.error, 2000, 'rounded')
        return
    }

    //Closing the modal
    $('#modal3').modal('close')

    //Hiding the pulsing button
    alertKey.innerHTML = ""

    showPreloader("")

    //Generating new key
    let promise = generateKey(words, password, user)

    promise.then(function(){
        //Getting the key to check with the user login and the ekhash
        let key = sessionStorage.getItem("kantcoin_org_key")
        let ekhash = localStorage.getItem("kantcoin_org_ekhash")

        if (!checkuserNPassword(user, key, ekhash)){
            Materialize.toast(klang.wrong_password, 2500, 'rounded')

            //Cleaning up the sessionStorage
            sessionStorage.setItem("kantcoin_org_key","")
            sessionStorage.setItem("kantcoin_org_user","")
            sessionStorage.setItem("kantcoin_org_aux_pubkey","")
            sessionStorage.setItem("kantcoin_org_wallet", "")

            killPreloader(true)
            //Reshowing the pulsing button
            checkKey()
            return
        }

        killPreloader(true)
        //Printing the adequate vault icon
        checkKey()

        //Cleaning these fields
        kantcoin_org_password2.value = ""
        kantcoin_org_user2.value = ""

        setImportantVariables()

        displayUserChip()

        //Loading the user profile
        profile_html = ""
        loadProfileHTML()
    })
}

/**
 * It generates a file with the user's mnemonics and a hash
 * @param {string} filename
 */
function saveVault(filename){
    //Getting the mnemonics from local storage
    let words = localStorage.getItem("kantcoin_org_words")
    //The data to be saved on the file
    let data = ""
    //The data must be encrypted
    let enc = ""
    //The chosen file
    let file = filename

    //If the file name was not received as a parameter, get it from the input
    if (!file || typeof filename !== 'string'){
        file = file_name1.value
    }
    //The user login and the key are necessary to generate the ekhash
    let user =  sessionStorage.getItem("kantcoin_org_user")
    let key = sessionStorage.getItem("kantcoin_org_key")

    //Checking if there are words to be saved and if the file name was provided
    if (!words || !file || !user || !key){
        Materialize.toast(klang.no_vault_saved, 3000, 'rounded')
        return
    }

    //Creating Ekhash in order to check user login and password
    let ekhash = "" + hashCode(key + user)
    ekhash = ekhash.substr(ekhash.length > 4 ? 4 : 0)

    //The data should be formatted as a JSON string
    data = '{'
           + '"login_provider":' + '"' + localStorage.getItem("kantcoin_org_login_provider") + '",'
           + '"ekhash":' + '"' + ekhash + '",'
           + '"secrets_base":' + '"' + localStorage.getItem("kantcoin_org_secrets_base") + '"'
           + '}'
 
    //Encrypting the data
    encrypt(words, data).then(function(value){
        enc = value

        //Removing the prefix in order to difficult file location by this string
        //Saving the mnemonics and data
        let blob = new Blob([words + "\r\n" + enc], {type: "text/plain;charset=utf-8"})
        let objectUrl = URL.createObjectURL(blob)

        file_saver.href = objectUrl
        file_saver.download = file
        file_saver.click()

        file_saver.href = ''
        file_saver.download = ''

        //Cleaning this field
        file_name1.value = ""
        //Closing the modal
        $('#modal1').modal('close')
    })
}

/**
 * It opens the file that constais the user's mnemonics and name
 * Or the user may insert this data manually
 */
function openVault(){
    //It is necessary to generate the keys
    let password = kantcoin_org_password1.value
    //For the ekhash
    let user = kantcoin_org_user1.value

    //Checking if the user login, password and the words were given
    if (!file_data.kantcoin_org_words || !password || !user){
        Materialize.toast(klang.no_vault_opened, 3000, 'rounded')
        return
    }

    cleanVariables()

    //Setting the user in the sessionstorage
    sessionStorage.setItem("kantcoin_org_user",user)

    let words = file_data.kantcoin_org_words
    file_data.kantcoin_org_words = ""

    let m = new Mnemonic("english")

    let is_valid = m.check(words)

    //Checking if the mnemonics were valid
    if (is_valid){
        localStorage.setItem("kantcoin_org_words", words)
    } else {
        Materialize.toast(klang.browser_words_conflict, 4000, 'rounded')
        return
    }

    //Closing the modal
    $('#modal1').modal('close')

    //Hiding the pulsing button
    alertKey.innerHTML = ""

    let data = file_data.kantcoin_org_data
    //file_data.kantcoin_org_data = ""

    //Decrypting data
    decrypt(words, data).then(function (dec) {
        //Filling the localStorage
        loadFileData(dec)

        showPreloader("")
        //Generating the private and public keys and putting them in the sessionStorage
        generateKey(words, password, user).then(function(){
            //Checking if the user and the password are correct (probably)
            if(!checkuserNPassword(user, sessionStorage.getItem("kantcoin_org_key"), localStorage.getItem("kantcoin_org_ekhash"))){
                Materialize.toast(klang.wrong_user_or_password, 3500, 'rounded')

                //Cleaning the fields and sessionStorage
                sessionStorage.setItem("kantcoin_org_key","")
                sessionStorage.setItem("kantcoin_org_user","")
                sessionStorage.setItem("kantcoin_org_aux_pubkey","")
                sessionStorage.setItem("kantcoin_org_wallet", "")

                setImportantVariables()

                killPreloader(true)
                //Reshowing the pulsing button
                checkKey()
                return
            }

            killPreloader(true)
            //Printing the adequate vault icon
            checkKey()

            //Cleaning the fields
            words_file.value = ""
            kantcoin_org_password1.value = ""
            words_file_button.value = ""
            kantcoin_org_user1.value = ""

            displayUserChip()

            //It reloads the profile page
            profile_html = ""
            loadProfileHTML()
        })
    })
}

/**
 * This file has only the mnemonics, the login provider, the base for my_secret, and a hash to verify if the user name matches with the password
 * @param {string} data_text
 */
function loadFileData(data_text){
    let jsonObj = JSON.parse(data_text)
    localStorage.setItem("kantcoin_org_login_provider",jsonObj.login_provider)
    localStorage.setItem("kantcoin_org_ekhash",jsonObj.ekhash)
    localStorage.setItem("kantcoin_org_secrets_base", jsonObj.secrets_base)
}

/**
 * It gets the profile html from the server
 * @param {function} callback
 */
function loadProfileHTML(callback){
    //This function should be called only when there is a local server running
    if (!using_local_server){
        return
    }

    if (profile_html){
        if(callback){
            callback(null)
        }
        return
    }

    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        let parser = new DOMParser()
        let dom = parser.parseFromString(this.responseText.replace("<html>","").replace("</html>",""), "text/html")
        strip_tags(dom)
        profile_html = new XMLSerializer().serializeToString(dom)
        profile_html = profile_html.substr(profile_html.indexOf("<body>")+6, profile_html.lastIndexOf("</body>"))

        if(callback){
            callback(null)
        }
    })
    request.addEventListener("error", function() {
        profile_html = "ERROR"
        if(callback){
            callback(null)
        }
    })

    request.open('GET', "http://" + localhost127 + ":1985/queryGetProfile=" + getDir() + "/profile", true)
    request.send()
}

/**
 * The files stored in .kantcoin/blockchains and .kantcoin/profiles (for users) have names with this format
 */
function getDir(){
    if (sessionStorage.getItem("kantcoin_org_aux_pubkey") && current_campaign.id){
        let hash = "" + hashCode(sessionStorage.getItem("kantcoin_org_aux_pubkey"))
        let small_hash = hash.substr(hash.length > 4 ? 4 : 0)

        return "k" + small_hash + "_" + current_campaign.id
    }
    return "kroot"
}

/**
 * It is called when users close a vault or open a new one
 */
function cleanVariables(){
    localStorage.setItem("kantcoin_org_words","")
    sessionStorage.setItem("kantcoin_org_user","")
    sessionStorage.setItem("kantcoin_org_key","")
    sessionStorage.setItem("kantcoin_org_aux_pubkey","")
    localStorage.setItem("kantcoin_org_login_provider","")
    localStorage.setItem("kantcoin_org_ekhash","")
    localStorage.setItem("kantcoin_tor_privkey","")
    localStorage.setItem("kantcoin_tor_pubkey","")
    wallet = {}
    web3 = {}
    profile_html = ""
    the_contract = null
    candidates_per_ballot_map = new Map()
    questions_map = new Map()
    parties_map = new Map()
    group_categories_map = new Map()
    json_groups = {}
    //enode_without_ip = ""
    //all_enodes = ""
    //authorized_chairpersons = []
    //mygroups = []
    //my_onion_address = ""
}

/**
 * When the user clicks in the close vault menu item
 */
function closeVault(){
    cleanVariables()

    //Hiding the pulsing button...
    checkKey()

    //And the user chip
    kantcoin_org_side_nav_user.innerHTML = ""
    user_chip.style = "display:none;"
    document.body.style.setProperty("--background-user-img", "none")

    //It reloads the profile page
    //Loading the user profile
    profile_html = ""
    loadProfileHTML(logoContainerClick)
}

/**
 * It creates a new vault, but doesn't save it into a file
 */
function createVault() {
    let password3 = kantcoin_org_password3.value
    let password4 = kantcoin_org_password4.value
    let user = kantcoin_org_user3.value

    //Checking if empty
    if (!password3 || !password4 || !user){
        Materialize.toast(klang.empty_fields, 3500, 'rounded')
        return
    }

    //Checking if passwords match
    if (password3 != password4){
        Materialize.toast(klang.different_passwords, 3500, 'rounded')
        return
    }

    //Verifying the password length
    if (password3.length < PASSWORD_LENGTH){
        Materialize.toast(klang.password_too_small, 4000, 'rounded')
        return
    }

    let m = new Mnemonic("english")

    // Generating new mnemonics
    let words = m.generate(128)

    //Using bitcoinjsb to generate a privatekey from the mnemonics and the password
    //This key is used to sign and verify ring signatures
    let keys = bitcoinjsb.keypairsFromMnemonic(words, password3, 3)
    let privkey = bs58.decode(keys[0].keyPair.toWIF()).toString("hex")

    let aux_signingkey = new ethers.SigningKey("0x" + privkey)
    let pubkey = aux_signingkey.publicKey.substring(2)
    let address = aux_signingkey.address.substring(2)

    //This will be used to generate all voter votes
    let keyjson = "{\"address\":\"" + address + "\",\"privkey\":\"" + privkey + "\",\"pubkey\":\"" + pubkey + "\"}"

    //Generating the aux_pkey
    let privkey2 = bs58.decode(keys[1].keyPair.toWIF()).toString("hex")
    let aux_signingkey2 = new ethers.SigningKey("0x" + privkey2)
    //This public key is used to generate the directory
    let aux_pkey = aux_signingkey2.publicKey.substring(2)

    //Setting the local/sessionStorage variables
    localStorage.setItem("kantcoin_org_words", words)
    sessionStorage.setItem("kantcoin_org_user", user)
    sessionStorage.setItem("kantcoin_org_key",keyjson)
    sessionStorage.setItem("kantcoin_org_aux_pubkey",aux_pkey)

    //Creating Ekhash in order to check user login and password
    let ekhash = "" + hashCode(keyjson + user)
    ekhash = ekhash.substr(ekhash.length > 4 ? 4 : 0)

    //Setting the ekhash in the localStorage
    localStorage.setItem("kantcoin_org_ekhash", ekhash)

    //Setting the random secrets_base
    localStorage.setItem("kantcoin_org_secrets_base", randomString(45))

    //Generating new wallet from the mnemonics, user, and password
    ethers.Wallet.fromBrainWallet(words, user + password3).then(function(the_wallet) {
        wallet = the_wallet
        sessionStorage.setItem("kantcoin_org_wallet", JSON.stringify(wallet))

        setImportantVariables()
        checkVaultValidity()
    })

    //Refreshing the screen with the new key and user
    checkKey()

    displayUserChip()

    //Closing the modal
    $('#modal4').modal('close')

    //Cleaning the fields
    kantcoin_org_password3.value = ""
    kantcoin_org_password4.value = ""
    kantcoin_org_user3.value = ""

    //It reloads the profile page
    profile_html = ""
    loadProfileHTML(logoContainerClick)
}

/**
 * It sends the public key and the user id to the login provider
 */
function sendVault(){
    let user = sessionStorage.getItem("kantcoin_org_user")

    if(!user || !wallet.address){
        Materialize.toast(klang.no_vault_opened, 3000, 'rounded')
        return
    }

    let x = (screen.width / 2) - 220
    let y = (screen.height / 2) - 300

    child = window.open("", "_blank", "width=440,height=600,top=" + y + ",left=" + x +
        ",resizable=no,status=no,menubar=no,scrollbars=yes,titlebar=no,toolbar=no")
    if (child.location.href){
        child.location.href = login_provider + "/newUser?pkey=" + wallet.address + "&id=" + user
    } else {
        child.location = login_provider + "/newUser?pkey=" + wallet.address + "&id=" + user
    }
}

/**
 * It generates the main key and the aux public key
 * @param {string} words
 * @param {string} password
 * @param {string} user
 * @returns {Object}
 */
function generateKey(words, password, user){
    //Using bitcoinjsb to generate a privatekey from the mnemonics and the password
    //This key is used to sign and verify ring signatures
    let keys = bitcoinjsb.keypairsFromMnemonic(words, password, 3)
    let privkey = bs58.decode(keys[0].keyPair.toWIF()).toString("hex")

    let aux_signingkey = new ethers.SigningKey("0x" + privkey)
    let pubkey = aux_signingkey.publicKey.substring(2)
    let address = aux_signingkey.address.substring(2)

    let keyjson = "{\"address\":\"" + address + "\",\"privkey\":\"" + privkey + "\",\"pubkey\":\"" + pubkey + "\"}"

    //Generating the aux_pkey
    let privkey2 = bs58.decode(keys[1].keyPair.toWIF()).toString("hex")
    let aux_signingkey2 = new ethers.SigningKey("0x" + privkey2)
    //This public key is used to generate the directory
    let aux_pkey = aux_signingkey2.publicKey.substring(2)

    //The key is stored in window.sessionStorage for user security (less time exposed)
    sessionStorage.setItem("kantcoin_org_key",keyjson)
    sessionStorage.setItem("kantcoin_org_aux_pubkey",aux_pkey)

    return ethers.Wallet.fromBrainWallet(words, user + password).then(function(the_wallet) {
        wallet = the_wallet
        sessionStorage.setItem("kantcoin_org_wallet", JSON.stringify(wallet))
        checkVaultValidity()
    })
}

/**
 * It uses hashcodes to check if the password and user login are correct
 * @param {string} user
 * @param {string} key
 * @param {string} ekhash
 * @returns {boolean}
 */
function checkuserNPassword(user, key, ekhash){
    let hash = "" + hashCode(key + user)
    hash = hash.substr(ekhash.length > 4 ? 4 : 0)
    if (hash == ekhash){
        return true
    }
    return false
}

/**
 * Send the profile html to server to be stored in the file system and published on the IPFS
 */
function saveProfile(){
    //if someway this function was called without the campaign being set
    if (!current_campaign.id){
        Materialize.toast(klang.no_campaign_found, 3000, 'rounded')
        return
    }

    let content = ""
    if (editor && $('#editor').materialnote('code')){
        content =  $('#editor').materialnote('code')

        if (content.length > 10000){
            Materialize.toast(klang.heavy_file, 4500, 'rounded')
            return
        }
        let request = new XMLHttpRequest()
        request.addEventListener("load", function() {
            loadProfileHTML(logoContainerClick)
        })

        //Cleaning the content
        let parser = new DOMParser()
        let dom = parser.parseFromString(content, "text/html")
        strip_tags(dom)
        content = new XMLSerializer().serializeToString(dom)
        content = content.substr(content.indexOf("<body>")+6, content.lastIndexOf("</body>") - (content.indexOf("<body>")+6))
        profile_html = "<html>" + content + "</html>"

        let content_url = content.replace(/\?/g, QUESTION_MARK)
        content_url = content_url.replace(/#/g, HASHTAG)
        content_url = content_url.replace(/"/g, DOUBLEQUOTE)
        content_url = content_url.replace(/'/g, QUOTE)
        content_url = content_url.replace(/\\/g, BACKSLASH)
        content_url = "<html>" + content_url + "</html>"

        request.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + getDir() + THE_AND + content_url + THE_AND + "profile", true)
        request.send()
        showPreloader(klang.wait_saving_profile)
        setTimeout(killPreloader, 240000)

        if(user_profile_ipfs == klang.no_profile){
            //To force an update
            user_profile_ipfs = ""
        }
    }
}

/**
 * It encrypts the vote which will be stored in the localStorage
 * @param {String} vote
 */
function encVoteThenStore(vote){
    if (!wallet.privateKey){
        return
    }

    encrypt(wallet.privateKey.substring(0,29), vote).then(function (value) {
        localStorage.setItem("kantcoin_org_vote_" + current_campaign.id, value)
    })
}

/**
 * It encrypts the last signature which will be stored in the localStorage
 * @param {String} signature
 */
function encSignatureThenStore(signature){
    if (!wallet.privateKey){
        return
    }

    encrypt(wallet.privateKey.substring(0,29), signature).then(function (value) {
        localStorage.setItem("kantcoin_last_signature_" + current_campaign.id, value)
    })
}

/**
 * It decrypts the vote that is stored in the localStorage
 */
function decVoteFromLocalStorage(){
    if (!wallet.privateKey || !current_campaign.id || !localStorage.getItem("kantcoin_org_vote_" + current_campaign.id)){
        return
    }

    decrypt(wallet.privateKey.substring(0,29), localStorage.getItem("kantcoin_org_vote_" + current_campaign.id)).then(function(value){
        my_vote = value
    })
}

/**
 * It decrypts the last signature that is stored in the localStorage
 */
function decSignatureFromLocalStorage(){
    if (!wallet.privateKey || !current_campaign.id || !localStorage.getItem("kantcoin_last_signature_" + current_campaign.id)){
        return
    }
    decrypt(wallet.privateKey.substring(0,29), localStorage.getItem("kantcoin_last_signature_" + current_campaign.id)).then(function(value){
        last_signature = value
    })
}

/**
 * Instantiate the web3 after running the Geth
 */
function instantiateWeb3(){
    if (isEmpty(web3)){
        let role = ""
        if(current_campaign.address == wallet.address){
            role = "001"
            enode_port = role
            localStorage.setItem("kantcoin_org_port", role)
        } else if(enode_port != ""){
            role = enode_port
        } else {
            role = "999"
            enode_port = role
            localStorage.setItem("kantcoin_org_port", role)
        }
        let rpc_port = "8" + role
        web3 = new Web3(new Web3.providers.HttpProvider("http://" + localhost127 + ":" + rpc_port))
    }
}

/**
 * It calls: geth --options...
 * @param {function} callback
 * @returns {Object}
 */
function runBlockChain(callback){
    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        let resp = this.responseText

        if (resp == "complete"){
            let request2 = new XMLHttpRequest()
            request2.addEventListener("load", function() {
                let resp2 = this.responseText

                if (resp2 == "complete"){
                    sleep(3000).then(callback)
                }
            })

            let role = ""
            if(current_campaign.address == wallet.address){
                role = "001"
            } else if(enode_port != ""){
                role = enode_port
            } else {
                role = "999"
            }

            //Secondly, run the blockchain (the address is now the wallet.address and not the current_campaign.address, since the voter is not necessarily the creator)
            request2.open('GET', "http://" + localhost127 + ":1985/queryRunBlockchain=1151985" + current_campaign.id + THE_AND + wallet.address.substring(2).toLowerCase() + THE_AND + getDir() + THE_AND + role, true)
            request2.send()
        }
    })

    //First, create the pwd file
    let pwd = genPwd()
    request.open('GET', "http://" + localhost127 + ":1985/queryCreatePwdFile=" + getDir() + THE_AND + pwd, true)
    request.send()
}

/**
 * Insert a new account with the command geth account import. In order to do that, create new privatekey and password file.
 * @param {function} callback
 */
function insertAccountIntoBlockchain(callback){
    let request = new XMLHttpRequest()

    request.addEventListener("load", function() {
        let resp = this.responseText

        if (resp == "complete" && callback){
            runBlockChain(callback)
        }
    })
    //The password to unlock the main account
    let pwd = genPwd()
    request.open('GET', "http://" + localhost127 + ":1985/queryInsertAccountIntoBlockchain=" + getDir() + THE_AND + wallet.privateKey.substring(2).toLowerCase() + THE_AND + pwd, true)
    request.send()
}

/**
 * Generating the pwd string to unlock ethereum accounts
 * @returns {string}
 */
function genPwd(){
    let keys = bitcoinjsb.keypairsFromMnemonic(sessionStorage.getItem("kantcoin_org_words"), "pwd" + hashCode(sessionStorage.getItem("kantcoin_org_key")), 1)
    let pwd = bs58.decode(keys[0].keyPair.toWIF()).toString("hex")

    return pwd.substring(0, 30)
}

/**
 * Create a new account, insert the account address into the genesis file and then initialize a new geth instance
 * @param {function} callback
 */
function setBlockChain(callback){
    let request = new XMLHttpRequest()

    request.addEventListener("load", function() {
        let resp = this.responseText
        if (resp == "complete"){
            insertAccountIntoBlockchain(callback)
        }
    })

    //The nonce is generated from the country (cannot be changed) and id
    let hash = hashCode(current_campaign.country + current_campaign.id)
    let how_many_enodes_to_connect = (current_campaign.how_many_enodes < 21 ? current_campaign.how_many_enodes - 1 : 20)

    //Query is composed of: first - chainid, second - ethereum address, third - enode, fourth- the directory, fifth - nonce
    request.open('GET', "http://" + localhost127 + ":1985/querySetBlockchain=1151985" + current_campaign.id + THE_AND + current_campaign.address.substring(2).toLowerCase() + THE_AND + how_many_enodes_to_connect + THE_AND + getDir() + THE_AND + hash, true)
    request.send()
}

/**
 * Verify if the genesis file, with the same content, already exists. If it does not exist, then call setBlockChain. However, if it does exist, run the blockchain
   Deletedirs tells if the server should delete blockchain directories in the event of a different genesis file
 * @param {function} callback
 * @param {string} deletedirs
 */
function initBlockchain(callback, deletedirs) {
    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        let exists = this.responseText
        if (exists != "true"){
            setBlockChain(callback)
        } else {
            runBlockChain(callback)
        }
    })
    //The nonce is generated from the country (cannot be changed) and id
    let hash = hashCode(current_campaign.country + current_campaign.id)

    //Query is composed of: first - chainid, second - ethereum address, third - enode, fourth- the directory, fifth - nonce
    request.open('GET', "http://" + localhost127 + ":1985/queryVerifyBlockchain=1151985" + current_campaign.id + THE_AND + current_campaign.address.substring(2).toLowerCase() + THE_AND + "12345" + THE_AND + getDir() + THE_AND + hash + THE_AND + deletedirs, true)
    request.send()
}

/**
 * Search for campaigns (maybe, in the future, search also for candidates, questions, parties, groups...)
 */
function searchFor(){
    if (current_search == "campaigns"){
        let s = search.value.trim()
        //The user can search by inserting the ipns or ipns||onion. If he or she inserts something different from an ipns address, call the search service
        let parts = s.split("||")

        if (parts[0] == current_campaign.ipns){
            Materialize.toast(klang.same_campaign, 2000, 'rounded')
            search.value = ""
            return
        }

        showPreloader("")
        setTimeout(killPreloader, 240000)

        if (parts.length == 1 && parts[0].length == 46){
            updateCurrentCampaign(parts[0], true).then(function () {
                if (using_local_server && wallet.address){
                    initBlockchain(setImportantVariables)
                } else {
                    setImportantVariables()
                }

                //Changing the profile for that campaign
                profile_html = ""
                loadProfileHTML()

                campaignInfoMenuItemClick()
            })
        } else if (parts.length == 2 && parts[0].length == 46){
            updateCurrentCampaignWithOnion(parts[0], parts[1]).then(function () {
                if (using_local_server && wallet.address){
                    initBlockchain(setImportantVariables)
                } else {
                    setImportantVariables()
                }

                //Changing the profile for that campaign
                profile_html = ""
                loadProfileHTML()

                campaignInfoMenuItemClick()
            })
        } else{
            let request = new XMLHttpRequest()
            request.addEventListener("load", function (ev) {
                let results_html = readSearchResults(this.responseText)
                
                header_title.innerHTML = klang.results
                content_page.innerHTML = results_div_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")
                results_div.innerHTML = results_html
                header_info.innerHTML = ""
            })
            request.open('GET', login_provider + "/search?q=" + encodeURIComponent(s))
            request.send()

        }
    }
    search.value = ""
}

/**
 * It receives the raw data from the search provider and then transforms it in a HTML string
 * @param {string} raw_results
 * @returns {string}
 */
function readSearchResults(raw_results) {
    let json_results = JSON.parse(raw_results)
    let hits = json_results.hits

    if (hits.found >= 1){
        let hit = hits.hit

        let results_html = ""
        hit.forEach(function (campaign) {
            let fields = campaign.fields

            let name = fields.name
            let description = fields.description
            let image = fields.image
            let period = fields.start.replace("T00:00:00Z", "") + " - " + fields.end.replace("T00:00:00Z", "")
            let country = fields.country

            let this_website = window.location.href
            this_website = this_website.split("/")[0] + "//" + this_website.split("/")[2]
            let url = this_website + (using_local_server ? "/home.html?ipns=" : "/home?ipns=") + fields.ipns + "&onion=" + fields.onion + "&torp=" + fields.tor_provider

            results_html += results_item_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[name]", name).replace("[description]", description).replace("[image]", image)
                .replace("[period]", period).replace("[country]", country).replace("[url]", url)
        })

        return results_html
    } else {
        return klang.no_campaign_found
    }
}

/**
 * Access the IPFS page containing campaign information
 * @param {string} ipns
 * @param {boolean} search
 * @returns {Promise}
 */
function updateCurrentCampaign(ipns, search){
    return new Promise(resolve => {
        let request = new XMLHttpRequest()
        request.addEventListener("load", function (ev) {
            let jsonObj = JSON.parse(this.responseText)
            current_campaign.id = jsonObj.id
            current_campaign.name = jsonObj.name
            current_campaign.ipns = jsonObj.ipns
            current_campaign.description = jsonObj.description
            current_campaign.country = jsonObj.country
            current_campaign.period = jsonObj.period
            current_campaign.image = jsonObj.image
            current_campaign.link = jsonObj.link
            current_campaign.address = jsonObj.address
            current_campaign.contract = jsonObj.contract
            current_campaign.regexp = jsonObj.regexp
            current_campaign.login_provider = jsonObj.login_provider
            current_campaign.accepted_donations = jsonObj.accepted_donations
            current_campaign.confirmation_address = jsonObj.confirmation_address
            current_campaign.donations_contract = jsonObj.donations_contract
            current_campaign.onion = jsonObj.onion
            current_campaign.how_many_enodes = jsonObj.how_many_enodes
            current_campaign.mgz = jsonObj.mgz

            localStorage.setItem("kantcoin_org_current_campaign", JSON.stringify(current_campaign))

            //Stopping some handlers
            clearInterval(messages_handler)
            messages_handler = 0
            clearInterval(provide_campaign_info_handler)
            provide_campaign_info_handler = 0
            clearInterval(provide_campaign_ipfs_info_handler)
            provide_campaign_ipfs_info_handler = 0
            clearInterval(provide_mygroup_info_handler)
            provide_mygroup_info_handler = 0
            clearInterval(get_campaign_info_handler)
            get_campaign_info_handler = 0
            clearInterval(get_mygroup_info_handler)
            get_mygroup_info_handler = 0
            clearInterval(get_ipfs_info_handler)
            get_ipfs_info_handler = 0

            //Cleaning the backups
            localStorage.setItem("authorized_chairpersons_backup", "")
            localStorage.setItem("mygroups_backup", "")
            localStorage.setItem("allgroups_messages", "")
            localStorage.setItem("mygroups_messages", "")
            localStorage.setItem("kantcoin_org_port", "")
            localStorage.setItem("candidates_ipfs_page_0", "")
            localStorage.setItem("candidates_ipfs_page_1", "")
            localStorage.setItem("candidates_ipfs_page_2", "")
            localStorage.setItem("candidates_ipfs_page_3", "")
            localStorage.setItem("candidates_ipfs_page_4", "")
            localStorage.setItem("parties_ipfs_page", "")
            localStorage.setItem("questions_ipfs_page", "")
            localStorage.setItem("group_categories_ipfs_page", "")
            localStorage.setItem("groups_ipfs_page", "")
            localStorage.setItem("campaign_info_json", "")
            localStorage.setItem("mygroup_info_json", "")
            localStorage.setItem("authorized_voters", "")
            localStorage.setItem("only_accepted_groups", "")
            localStorage.setItem("stopping_accession_to_groups", "")

            //And the respective variables
            authorized_chairpersons = []
            clearStores()
            mygroups = []
            allgroups_messages = []
            mygroups_messages_map = new Map()

            candidates_per_ballot_map = new Map()
            questions_map = new Map()
            parties_map = new Map()
            group_categories_map = new Map()
            json_groups = {}

            campaign_info_json = {}
            mygroup_info_json = {}
            mygroup_index = "-3"

            resolve()
        })

        request.addEventListener("error", function() {
            console.log("Error while updating campaign")
            resolve()
        })

        if (search){
            request.open('GET', (!ipfs_provider && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + ipns + "/profile")
        } else {
            request.open('GET', ((!ipfs_provider || isOwner()) && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + ipns + "/profile")
        }
        request.send()
    })
}

/**
 * It calls the votes_store.clear() and cancellations_storeN.clear()
 */
function clearStores(){
    if (using_local_server){
        var received_votes_open = indexed_db.open("ReceivedVotes", 1)

        received_votes_open.onsuccess = function () {
            let db = received_votes_open.result

            let tx0 = db.transaction("VotesStore", "readwrite")
            let votes_store = tx0.objectStore("VotesStore")
            votes_store.clear()

            let tx1 = db.transaction("CancellationsStore0", "readwrite")
            let cancellations_store0 = tx1.objectStore("CancellationsStore0")
            cancellations_store0.clear()

            let tx2 = db.transaction("CancellationsStore1", "readwrite")
            let cancellations_store1 = tx2.objectStore("CancellationsStore1")
            cancellations_store1.clear()

            let tx3 = db.transaction("CancellationsStore2", "readwrite")
            let cancellations_store2 = tx3.objectStore("CancellationsStore2")
            cancellations_store2.clear()

            let tx4 = db.transaction("CancellationsStore3", "readwrite")
            let cancellations_store3 = tx4.objectStore("CancellationsStore3")
            cancellations_store3.clear()

            let tx5 = db.transaction("CancellationsStore4", "readwrite")
            let cancellations_store4 = tx5.objectStore("CancellationsStore4")
            cancellations_store4.clear()
        }
    }
}

/**
 * It calls the votes_store.clear()
 */
function clearVotesStore(){
    if (using_local_server){
        var received_votes_open = indexed_db.open("ReceivedVotes", 1)

        received_votes_open.onsuccess = function () {
            let db = received_votes_open.result

            let tx0 = db.transaction("VotesStore", "readwrite")
            let votes_store = tx0.objectStore("VotesStore")
            votes_store.clear()
        }
    }
}

/**
 * It puts (inserts or updates) a vote into the IndexedDB
 * @param {JSON Object} json
 */
function putInVotesStore(json){
    var received_votes_open = indexed_db.open("ReceivedVotes", 1)

    received_votes_open.onsuccess = function () {
        let db = received_votes_open.result
        let tx = db.transaction("VotesStore", "readwrite")
        let votes_store = tx.objectStore("VotesStore")
        votes_store.put(json)
    }
}

/**
 * It puts (inserts or updates) a cancellation into the IndexedDB
 * @param {JSON Object} json
 */
function putInCancellationsStore(json, ballot){
    if (isNaN(ballot) || ballot < 0 || ballot > 4){
        return
    }

    var received_votes_open = indexed_db.open("ReceivedVotes", 1)

    received_votes_open.onsuccess = function () {
        let db = received_votes_open.result
        let tx = db.transaction("CancellationsStore" + ballot, "readwrite")
        let cancellations_store = tx.objectStore("CancellationsStore" + ballot)
        cancellations_store.put(json)
    }
}

/**
 * It obtains IPFS information with the hidden service. It is faster than the 'updateCurrentCampaign' method
 * @param {string} ipns
 * @param {string} onionAddr
 * @returns {Promise}
 */
function updateCurrentCampaignWithOnion(ipns, onionAddr){
    untested_ipns = ipns

    return new Promise(resolve => {
        let request = new XMLHttpRequest()
        request.addEventListener("load", function (ev) {
            if (this.responseText.indexOf("[campaign_ipfs_info_error]") < 0 && web3_aux.toAscii(this.responseText).startsWith("{")){
                let jsonObj = JSON.parse(web3_aux.toAscii(this.responseText))
                let profileJSON = jsonObj.profile
                let questionsJSON = jsonObj.questions
                let partiesJSON = jsonObj.parties
                let groupsJSON = jsonObj.groups
                let gcategoriesJSON = jsonObj.gcategories
                let candidates0JSON = jsonObj.candidates0
                let candidates1JSON = jsonObj.candidates1
                let candidates2JSON = jsonObj.candidates2
                let candidates3JSON = jsonObj.candidates3
                let candidates4JSON = jsonObj.candidates4

                if (profileJSON.ipns != untested_ipns){
                    Materialize.toast(klang.different_ipfs, 2500, 'rounded')
                    resolve()
                    return
                }

                current_campaign.id = profileJSON.id
                current_campaign.name = profileJSON.name
                current_campaign.ipns = profileJSON.ipns
                current_campaign.description = profileJSON.description
                current_campaign.country = profileJSON.country
                current_campaign.period = profileJSON.period
                current_campaign.image = profileJSON.image
                current_campaign.link = profileJSON.link
                current_campaign.address = profileJSON.address
                current_campaign.contract = profileJSON.contract
                current_campaign.regexp = profileJSON.regexp
                current_campaign.login_provider = profileJSON.login_provider
                current_campaign.accepted_donations = profileJSON.accepted_donations
                current_campaign.confirmation_address = profileJSON.confirmation_address
                current_campaign.donations_contract = profileJSON.donations_contract
                current_campaign.onion = profileJSON.onion
                current_campaign.how_many_enodes = profileJSON.how_many_enodes
                current_campaign.mgz = profileJSON.mgz

                localStorage.setItem("kantcoin_org_current_campaign", JSON.stringify(current_campaign))

                //Clean these variables first
                localStorage.setItem("candidates_ipfs_page_0", "")
                localStorage.setItem("candidates_ipfs_page_1", "")
                localStorage.setItem("candidates_ipfs_page_2", "")
                localStorage.setItem("candidates_ipfs_page_3", "")
                localStorage.setItem("candidates_ipfs_page_4", "")
                localStorage.setItem("parties_ipfs_page", "")
                localStorage.setItem("questions_ipfs_page", "")
                localStorage.setItem("group_categories_ipfs_page", "")
                localStorage.setItem("groups_ipfs_page", "")

                if (candidates0JSON){
                    localStorage.setItem("candidates_ipfs_page_0", JSON.stringify(candidates0JSON))
                }
                if (candidates1JSON){
                    localStorage.setItem("candidates_ipfs_page_1", JSON.stringify(candidates1JSON))
                }
                if (candidates2JSON){
                    localStorage.setItem("candidates_ipfs_page_2", JSON.stringify(candidates2JSON))
                }
                if (candidates3JSON){
                    localStorage.setItem("candidates_ipfs_page_3", JSON.stringify(candidates3JSON))
                }
                if (candidates4JSON){
                    localStorage.setItem("candidates_ipfs_page_4", JSON.stringify(candidates4JSON))
                }
                if (partiesJSON){
                    localStorage.setItem("parties_ipfs_page", JSON.stringify(partiesJSON))
                }
                if (questionsJSON){
                    localStorage.setItem("questions_ipfs_page", JSON.stringify(questionsJSON))
                }
                if (gcategoriesJSON){
                    localStorage.setItem("group_categories_ipfs_page", JSON.stringify(gcategoriesJSON))
                }
                if (groupsJSON){
                    localStorage.setItem("groups_ipfs_page", JSON.stringify(groupsJSON))
                }

                //Stopping some handlers
                clearInterval(messages_handler)
                messages_handler = 0
                clearInterval(provide_campaign_info_handler)
                provide_campaign_info_handler = 0
                clearInterval(provide_campaign_ipfs_info_handler)
                provide_campaign_ipfs_info_handler = 0
                clearInterval(provide_mygroup_info_handler)
                provide_mygroup_info_handler = 0
                clearInterval(get_campaign_info_handler)
                get_campaign_info_handler = 0
                clearInterval(get_mygroup_info_handler)
                get_mygroup_info_handler = 0
                clearInterval(get_ipfs_info_handler)
                get_ipfs_info_handler = 0

                //Cleaning the backups
                localStorage.setItem("authorized_chairpersons_backup", "")
                localStorage.setItem("mygroups_backup", "")
                localStorage.setItem("allgroups_messages", "")
                localStorage.setItem("mygroups_messages", "")
                localStorage.setItem("kantcoin_org_port", "")
                localStorage.setItem("campaign_info_json", "")
                localStorage.setItem("mygroup_info_json", "")
                localStorage.setItem("authorized_voters", "")
                localStorage.setItem("only_accepted_groups", "")
                localStorage.setItem("stopping_accession_to_groups", "")

                //And the respective variables
                authorized_chairpersons = []
                clearStores()
                mygroups = []
                allgroups_messages = []
                mygroups_messages_map = new Map()

                candidates_per_ballot_map = new Map()
                questions_map = new Map()
                parties_map = new Map()
                group_categories_map = new Map()
                json_groups = {}

                campaign_info_json = {}
                mygroup_info_json = {}
                mygroup_index = "-3"

                resolve()
            } else {
                console.log("Cannot obtain IPFS data with the informed onion address")
                updateCurrentCampaign(untested_ipns, true).then(function () {
                    resolve()
                })
            }
        })

        request.addEventListener("error", function() {
            console.log("Error while obtaining IPFS data with the informed onion address")
            updateCurrentCampaign(untested_ipns, true).then(function () {
                resolve()
            })
        })

        let host = ""
        if (using_local_server){
            host = "http://" + localhost127 + ":1988/querySendTorRequest=" + onionAddr
        } else if (using_tor_browser){
            host = "http://" + onionAddr
        } else {
            host = "https://" + onionAddr.replace(".onion", tor_provider)
        }

        request.open('GET', host + "/queryGetCampaignIPFSInfo=", true)
        request.send()
    })
}

/**
 * Fill in the fields with current_campaign data
 */
function openCampaignPage(){
    document.title = (current_campaign.name ? current_campaign.name : klang.campaign_info)
    header_title.innerHTML = klang.campaign_info
    header_info.innerHTML = ""

    if (current_campaign.id && wallet && wallet.address && !isEmpty(campaign_info_json) && !campaign_info_json.stored){
        let is_owner = isOwner()

        //Entered, wait and register buttons
        if (wait_until_participating && (mygroup_index == "-1" || mygroup_index == "-3")){
            header_info.innerHTML = enter_campaign_button_html1.innerHTML.replace("<!--[CDATA[","").replace("-->","")
            enter_campaign_container.innerHTML = klang.wait
        } else if (wait_until_participating){
            wait_until_participating = false
            header_info.innerHTML = enter_campaign_button_html2.innerHTML.replace("<!--[CDATA[","").replace("-->","")
            entered_container.innerHTML = klang.entered
        } else {
            if (mygroup_index == "-1") {
                header_info.innerHTML = enter_campaign_button_html3.innerHTML.replace("<!--[CDATA[","").replace("-->","")
                participate_container.innerHTML = klang.register_voter
                sleep(500).then(function(){
                    participate_button.addEventListener("click", registerVoter)
                })
            } else if (mygroup_index == "-3") {
                header_info.innerHTML = enter_campaign_button_html1.innerHTML.replace("<!--[CDATA[","").replace("-->","")
                enter_campaign_container.innerHTML = klang.not_entered
            } else {
                header_info.innerHTML = enter_campaign_button_html2.innerHTML.replace("<!--[CDATA[","").replace("-->","")
                entered_container.innerHTML = klang.entered
            }
        }

        //Manage and Collaborate buttons
        if (is_owner  && using_local_server){
            header_info.innerHTML = campaign_admin_button_html.innerHTML.replace("<!--[CDATA[","").replace("-->","") + header_info.innerHTML
            campaign_admin_container.innerHTML = klang.admin

            campaign_admin_candidates_li.style.display = ""
            campaign_admin_parties_li.style.display = ""
            campaign_admin_questions_li.style.display = ""
            campaign_admin_ballots_li.style.display = ""
            campaign_admin_groups_li.style.display = ""

            observers_div.removeAttribute("hidden")

            //Adding listener to the modal7 trigger(admin campaign page)
            campaign_admin_button.addEventListener("click", function () {
                if (campaign_info_json.how_many_ballots > 0){
                    let current_ballot = campaign_info_json.current_ballot
                    let ballot = campaign_info_json.ballots[current_ballot]
                    current_ballot_mark.innerHTML = ballot.id
                    current_ballot_status.innerHTML = ballot.closed ? klang.round_closed : ballot.stopped ? klang.round_stopped : klang.round_active
                }

                insert_authorized_voters_textarea.value = localStorage.getItem("authorized_voters")

                loadGroupCategories()
                loadGroups()
                group_categories_select.innerHTML = ""
                let keys = group_categories_map.keys()
                let values = group_categories_map.values()
                let number_categories = group_categories_map.size

                if (number_categories > 0){
                    let i = 0
                    let key = {}
                    let value = {}
                    do{
                        value = values.next()
                        key = keys.next()

                        if (!key.done){
                            let id = key.value
                            let content = value.value.content
                            group_categories_select.innerHTML += group_categories_select_item_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[id_value]]", id).replace("[[id_text]]", id)
                        }
                        i++
                    }
                    while (!key.done)

                    $("#group_categories_select").material_select()
                }
            })
        } else if (campaign_info_json.chairperson && using_local_server){
            header_info.innerHTML = collaborate_button_html.innerHTML.replace("<!--[CDATA[","").replace("-->","") + header_info.innerHTML
            collaborate_container.innerHTML = klang.collaborate
            campaign_admin_title.innerHTML = klang.collaborate_title

            //Adding listener to the modal7 trigger(admin campaign page)
            collaborate_button.addEventListener("click", function () {
                campaign_admin_candidates_li.style.display = "none"
                campaign_admin_parties_li.style.display = "none"
                campaign_admin_questions_li.style.display = "none"
                campaign_admin_ballots_li.style.display = "none"
                campaign_admin_groups_li.style.display = "none"
            })
        }
    } else if (current_campaign.id && wallet && wallet.address){
        header_info.innerHTML = "<span id='connecting_span'>" + klang.connecting + "</span>"
    }

    content_page.innerHTML = open_campaign_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")

    let no_image_icon = no_image_icon_url.innerHTML.replace("<!--[CDATA[","").replace("-->","")

    campaign_card_image.src = (current_campaign.image? current_campaign.image: no_image_icon)
    campaign_basic_info_container.innerHTML = klang.campaign_basic_info
    campaign_name_container.innerHTML = klang.name + ":&nbsp;&nbsp;"
    current_campaign_name_container.innerHTML = current_campaign.name
    campaign_description_container.innerHTML = klang.description + ":&nbsp;&nbsp;"
    current_campaign_description_container.innerHTML = (current_campaign.description ? current_campaign.description : "-")
    campaign_country_container.innerHTML = klang.country + ":&nbsp;&nbsp;"
    current_campaign_country_container.innerHTML = current_campaign.country
    campaign_period_container.innerHTML = klang.period + ":&nbsp;&nbsp;"
    current_campaign_period_container.innerHTML = (current_campaign.period ? current_campaign.period : "")
    current_campaign_link_container.innerHTML = (current_campaign.link ? current_campaign.link : "-")
    external_link_container.innerHTML = klang.external_link + ":&nbsp;&nbsp;"
    campaign_technical_info_container.innerHTML = klang.campaign_technical_info
    campaign_id_container.innerHTML = klang.campaign_id + ":&nbsp;&nbsp;"
    chainid_container.innerHTML = klang.chainid + ":&nbsp;&nbsp;"
    ipns_address_container.innerHTML = klang.ipns_address + ":&nbsp;&nbsp;"
    ethereum_address_container.innerHTML = klang.ethereum_address + ":&nbsp;&nbsp;"
    contract_address_container.innerHTML = klang.contract_address + ":&nbsp;&nbsp;"
    login_provider_container.innerHTML = klang.login_provider + ":&nbsp;&nbsp;"
    accepted_donations_container.innerHTML = klang.accepted_donations + ":&nbsp;&nbsp;"
    confirmation_address_container.innerHTML = klang.confirmation_address + ":&nbsp;&nbsp;"
    donations_contract_container.innerHTML = klang.donations_contract + ":&nbsp;&nbsp;"
    onion_container.innerHTML = klang.onion_address + ":&nbsp;&nbsp;"
    regexp_container.innerHTML = klang.regexp + ":&nbsp;&nbsp;"
    mgz_container.innerHTML = klang.maximum_group_size + ":&nbsp;&nbsp;"
    current_campaign_id_container.innerHTML = current_campaign.id
    current_chainid_container.innerHTML = "1151985" + current_campaign.id
    current_ipns_address_container.innerHTML = current_campaign.ipns
    current_ethereum_address_container.innerHTML = current_campaign.address
    current_contract_address_container.innerHTML = current_campaign.contract
    current_login_provider_container.innerHTML = current_campaign.login_provider
    current_accepted_donations_container.innerHTML = (current_campaign.accepted_donations ? current_campaign.accepted_donations : "-")
    current_confirmation_address_container.innerHTML = (current_campaign.confirmation_address ? current_campaign.confirmation_address : "-")
    current_donations_contract_container.innerHTML = (current_campaign.donations_contract ? current_campaign.donations_contract : "-")
    current_onion_container.innerHTML = current_campaign.onion
    current_regexp_container.innerHTML = current_campaign.regexp
    current_mgz_container.innerHTML = current_campaign.mgz
    define_round_type_selected_option.innerHTML = klang.define_round_type_selected_option
    define_round_type_normal.innerHTML = klang.define_round_type_normal
    define_round_type_donations.innerHTML = klang.define_round_type_donations
    define_round_type_label.innerHTML = klang.define_round_type_label
    share_link.innerHTML = klang.share

    //Address to be used as group chairperson
    address_to_inform_label.innerHTML = wallet.address
    your_tor_label.innerHTML = my_onion_address

    //Link to share the campaign
    share_link_input.value = "https://kantcoin.org/home?ipns=" + current_campaign.ipns + "&onion=" + current_campaign.onion + "&torp=" + tor_provider
    share_link.addEventListener("click", function(){
        sleep(500).then(function(){
            share_link_input.select()
        })
    })

    //initialize this collapsible
    $('#campaign_collapsible').collapsible()
}

/**
 * Kill it after a deadline
 * @param {boolean} cancel_toast
 */
function killPreloader(cancel_toast){
    if (content_page.innerHTML == preloader_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")){
        if (!cancel_toast){
            Materialize.toast(klang.time_limit_exceeded, 2500, 'rounded')
        }
        logoContainerClick()
    }
}

/**
 * This function is called when searching or creating a campaign
 * @param {string} title
 */
function showPreloader(title){
    header_title.innerHTML = title
    header_info.innerHTML = ""
    content_page.innerHTML = preloader_html.innerHTML.replace("<!--[CDATA[","").replace("-->","")
}

/**
 * Create the files, publish then on IPFS, create a new donations contract on the Mainnet, and insert the campaign into the blockchain
 */
function createCampaign(){
    let user = sessionStorage.getItem("kantcoin_org_user")
    if (!user || !wallet.address){
        Materialize.toast(klang.no_vault_opened, 3000, 'rounded')
        return
    }
    if (!campaign_name_input.value){
        Materialize.toast(klang.campaign_must_have_name, 3000, 'rounded')
        return
    }
    if (!maximum_group_size.value){
        Materialize.toast(klang.error + " - " + klang.maximum_group_size, 3000, 'rounded')
        return
    }
    if (isNaN(how_many_enodes_input.value) || how_many_enodes_input.value < 1){
        Materialize.toast(klang.error + " - " + klang.how_many_enodes_label, 3000, 'rounded')
        console.log("'How many enodes' has to be a positive number.")
        return
    }
    //Closing the modal
    $('#modal6').modal('close')

    showPreloader(klang.wait_few_minutes)
    //30 minutes!
    setTimeout(killPreloader, 1800000)

    let campaignid = generateCampaignID()

    //This hashcode is used to register voters
    localStorage.setItem("users_hashcode_prefix", randomString(20))

    current_campaign.id = campaignid
    current_campaign.address = wallet.address
    current_campaign.name = campaign_name_input.value
    current_campaign.description = campaign_description_input.value
    current_campaign.image = image_input.value
    current_campaign.link = campaign_external_page_input.value
    current_campaign.country = country_select.value
    current_campaign.login_provider = login_provider
    current_campaign.period = initial_date_input.value + " - " + final_date_input.value
    current_campaign.accepted_donations = accepted_donation_values.value
    current_campaign.confirmation_address = confirmation_address.value
    current_campaign.donations_contract = ""
    current_campaign.onion = my_onion_address
    current_campaign.how_many_enodes = how_many_enodes_input.value
    current_campaign.mgz = maximum_group_size.value

    if (regexp_input.value){
        current_campaign.regexp = regexp_input.value
    } else if (prefix_voters_input.value !== "" && prefix_voters_input.value !== undefined){
        current_campaign.regexp = "/\\b" + prefix_voters_input.value + "/i"
    } else {
        current_campaign.regexp = "/" + suffix_voters_input.value + "$/i"
    }

    //Stopping some handlers
    clearInterval(messages_handler)
    messages_handler = 0
    clearInterval(provide_campaign_info_handler)
    provide_campaign_info_handler = 0
    clearInterval(provide_campaign_ipfs_info_handler)
    provide_campaign_ipfs_info_handler = 0
    clearInterval(provide_mygroup_info_handler)
    provide_mygroup_info_handler = 0
    clearInterval(get_campaign_info_handler)
    get_campaign_info_handler = 0
    clearInterval(get_mygroup_info_handler)
    get_mygroup_info_handler = 0
    clearInterval(get_ipfs_info_handler)
    get_ipfs_info_handler = 0

    // This sets the current_campaign.ipns
    obtainIPNS(campaignid)
}

/**
 * Called after obtaining the IPNS
 */
function continueCampaignCreation(){
    //Creating ipfs profile page for the campaign
    let content = JSON.stringify(current_campaign)
    let content_url = content.replace(/\?/g, QUESTION_MARK)
    content_url = content_url.replace(/#/g, HASHTAG)
    content_url = content_url.replace(/"/g, DOUBLEQUOTE)
    content_url = content_url.replace(/'/g, QUOTE)
    content_url = content_url.replace(/\\/g, BACKSLASH)
    let request3 = new XMLHttpRequest()
    request3.addEventListener("load", function (ev) {
        if (this.responseText == "complete"){
            //Initializing the blockchain to start a new campaign
            initBlockchain(insertCampaign, "true")
            createEmptyFiles()
        }
    })
    request3.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + content_url + THE_AND + "profile", true)
    request3.send()
}

/**
 * Questions, parties, candidates per ballot, group categories, enodes and groups files
 */
function createEmptyFiles(){
    let request = new XMLHttpRequest()
    request.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + "empty" + THE_AND + "questions", true)
    request.send()
    let request2 = new XMLHttpRequest()
    request2.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + "empty" + THE_AND + "parties", true)
    request2.send()
    let request3 = new XMLHttpRequest()
    request3.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + "empty" + THE_AND + "candidates_ballot0", true)
    request3.send()
    let request4 = new XMLHttpRequest()
    request4.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + "empty" + THE_AND + "group_categories", true)
    request4.send()
    let request5 = new XMLHttpRequest()
    request5.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + "{}" + THE_AND + "groups", true)
    request5.send()
    let request6 = new XMLHttpRequest()
    request6.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + "empty" + THE_AND + "enodes", true)
    request6.send()
    let request7 = new XMLHttpRequest()
    request7.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + "empty" + THE_AND + "candidates_ballot1", true)
    request7.send()
    let request8 = new XMLHttpRequest()
    request8.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + "empty" + THE_AND + "candidates_ballot2", true)
    request8.send()
    let request9 = new XMLHttpRequest()
    request9.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + "empty" + THE_AND + "candidates_ballot3", true)
    request9.send()
    let request10 = new XMLHttpRequest()
    request10.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + "empty" + THE_AND + "candidates_ballot4", true)
    request10.send()
}

/**
 * Verify if the voter meets the requirements, then send a request to register him/her
 */
function registerVoter(){
    let user = sessionStorage.getItem("kantcoin_org_user")
    if (!user || !wallet.address){
        Materialize.toast(klang.no_vault_opened, 3000, 'rounded')
        return
    }
    if (!current_campaign.id || isEmpty(campaign_info_json)){
        Materialize.toast(klang.no_campaign_opened, 3000, 'rounded')
        return
    }
    if ((!isEmpty(mygroup_info_json) && !mygroup_info_json.no_group) || mygroup_index == "-2"){
        Materialize.toast(klang.voter_already_registered, 3000, 'rounded')
        return
    }

    if (checkVoterRequirements()){
        //Open it now to avoid popup blockers
        openTor2webPopup()

        //Display wait message
        wait_until_participating = true
        if (using_local_server){
            sleep(ACTION_AFTER_CAPTCHA).then(openCampaignPage)
        } else{
            call_after_captcha = openCampaignPage
        }

        sendRegisterVoterMessage()
    } else {
        Materialize.toast(klang.must_meet_requirements, 3000, 'rounded')
    }
}

/**
 * It reopens the last popup shown. It is useful in case it has been accidentally closed.
 */
function reopenCaptcha() {
    if (!last_tor2web_location){
        Materialize.toast(klang.no_captcha_page, 3000, 'rounded')
        return
    }

    openTor2webPopup()
    if (tor2web_page.location.href){
        tor2web_page.location.href = last_tor2web_location
    } else{
        tor2web_page.location = last_tor2web_location
    }
}

/**
 * It displays different messages depending on whether the voter can cancel his or her vote, or not.
 */
function deleteVotePage(){
    let current_ballot = campaign_info_json.current_ballot
    if (!my_vote){
        vote_deletion_message.innerHTML = klang.no_vote_to_delete
        delete_vote_button.style.visibility = "hidden"
    } else if (campaign_info_json.ballots && current_ballot !== undefined
        && !campaign_info_json.ballots[current_ballot].stopped && !campaign_info_json.ballots[current_ballot].closed){
        vote_deletion_message.innerHTML = klang.delete_unregistered_vote
        delete_vote_button.style.visibility = ""
    } else if (campaign_info_json.can_cancel && campaign_info_json.ballots[current_ballot].closed) {
        vote_deletion_message.innerHTML = klang.delete_registered_vote
        delete_vote_button.style.visibility = ""
    } else {
        vote_deletion_message.innerHTML = klang.cant_delete_vote
        delete_vote_button.style.visibility = "hidden"
    }
}

/**
 * It deletes the last vote sent
 */
function deleteVote(){
    let current_ballot = campaign_info_json.current_ballot
    if (!my_vote){
        return
    } else if (campaign_info_json.ballots && current_ballot !== undefined && current_campaign.id !== undefined
        && !campaign_info_json.ballots[current_ballot].stopped && !campaign_info_json.ballots[current_ballot].closed){
        vote(-1)
        if (using_local_server){
            sleep(ACTION_AFTER_CAPTCHA).then(function(){
                my_vote = ""
                localStorage.setItem("kantcoin_org_vote_" + current_campaign.id, "")
                if (header_title.innerHTML == klang.candidates){
                    newCandidatesPage()
                }
            })
        } else{
            call_after_captcha = function(){
                my_vote = ""
                localStorage.setItem("kantcoin_org_vote_" + current_campaign.id, "")
                if (header_title.innerHTML == klang.candidates){
                    newCandidatesPage()
                }
            }
        }
    } else if (campaign_info_json.can_cancel && campaign_info_json.ballots[current_ballot].closed) {
        vote(-2)
    }
}

/**
 * The contract to interact with this campaign
 */
function openCampaignContract() {
    if (current_campaign.contract && current_campaign.mgz){

        let campaign_contract = ''
        switch (current_campaign.mgz){
            case "3":
                campaign_contract = CAMPAIGN_CONTRACT_MGZ3
                break
            case "9":
                campaign_contract = CAMPAIGN_CONTRACT_MGZ9
                break
            case "15":
                campaign_contract = CAMPAIGN_CONTRACT_MGZ15
                break
            case "21":
                campaign_contract = CAMPAIGN_CONTRACT_MGZ21
        }

        let ABI = campaign_contract
        let generic_contract = web3.eth.contract(ABI)
        the_contract = generic_contract.at(current_campaign.contract)
        //In order to execute the contract methods, we need to set the default account
        web3.eth.defaultAccount = wallet.address.toLowerCase()
    }
}

/**
 * For now, the campaign id is just the timestamp
 * @returns {string}
 */
function generateCampaignID() {
    return "" + Math.floor(Date.now() / 100)
}

/**
 * Generate a new IPNS address with the server
 * @param {string} id
 */
function obtainIPNS(id) {
    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        if (this.responseText != "error" && this.responseText != "") {
            let request2 = new XMLHttpRequest()
            request2.addEventListener("load", function() {
                if (this.responseText != "error" && this.responseText != "") {
                    current_campaign.ipns = this.responseText
                    //Continuing campaign creation
                    continueCampaignCreation()
                }
            })
            request2.open('GET', "http://" + localhost127 + ":1985/queryGetIPNS=" + id, true)
            request2.send()
        }
    })
    request.open('GET', "http://" + localhost127 + ":1985/queryAddIPNSKey=" + id, true)
    request.send()
}

/**
 * Create a contract representing the campaign in the blockchain, then set the_contract and insert a donations contract on the Mainnet
 */
function insertCampaign() {
    if (isEmpty(web3)){
        instantiateWeb3()
    }
    //First, unlock the account (in the case it was not unlocked by runGeth)
    web3.personal.unlockAccount(wallet.address.toLowerCase(), genPwd(), 10000000) // > 3 months
    //Wait a few seconds, then create the contract
    sleep(3000).then(function () {
        let v_rounds = (votation_rounds_select.value !== ""? votation_rounds_select.value : 1)
        let d_rounds = (donation_rounds_select.value !== ""? donation_rounds_select.value : 0)

        clearCreateCampaignFields()

        //Storing the enode of the campaign creator
        whatIsMyEnode().then(storeEnode)

        let contract_data = ''
        let campaign_contract = ''
        switch (current_campaign.mgz){
            case "3":
                contract_data = CONTRACT_DATA_MGZ3
                campaign_contract = CAMPAIGN_CONTRACT_MGZ3
                break
            case "9":
                contract_data = CONTRACT_DATA_MGZ9
                campaign_contract = CAMPAIGN_CONTRACT_MGZ9
                break
            case "15":
                contract_data = CONTRACT_DATA_MGZ15
                campaign_contract = CAMPAIGN_CONTRACT_MGZ15
                break
            case "21":
                contract_data = CONTRACT_DATA_MGZ21
                campaign_contract = CAMPAIGN_CONTRACT_MGZ21
        }

        let campaignContract = web3.eth.contract(campaign_contract)
        campaignContract.new(
            v_rounds,
            d_rounds,
            {
                from: wallet.address.toLowerCase(),
                data: contract_data,
                gas: '30000000'
            }, function (e, contract){
                header_title.innerHTML = klang.waiting_contract_mined
                if (typeof contract.address !== 'undefined') {
                    header_title.innerHTML = klang.wait_until_ipns_available
                    console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash)
                    the_contract = contract

                    sleep(10000).then(function () { //!!!!!!!!! While the validator is not yet fully implemented
                        the_contract.defineValidator(wallet.address.toLowerCase())
                    })

                    current_campaign.contract = contract.address //contract.address.substring(2).toLowerCase()

                    //Re-inserting campaign profile page into IPFS
                    let content = JSON.stringify(current_campaign)
                    let content_url = content.replace(/\?/g, QUESTION_MARK)
                    content_url = content_url.replace(/#/g, HASHTAG)
                    content_url = content_url.replace(/"/g, DOUBLEQUOTE)
                    content_url = content_url.replace(/'/g, QUOTE)
                    content_url = content_url.replace(/\\/g, BACKSLASH)
                    let request = new XMLHttpRequest()
                    request.addEventListener("load", function (ev) {
                        if (this.responseText == "complete"){
                            cleanServerVariables()
                            if (donation_rounds_select.value > 0){
                                insertCampaignIntoMainnet()
                            } else {
                                //Since it is the last step of the campaign creation, update te current campaign to display it to the user
                                console.log("Waiting for the campaign data to be available on the IPFS provider")
                                updateCurrentCampaign(current_campaign.ipns).then(function () {
                                    window.location.reload()
                                })
                            }
                        }
                    })
                    request.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + content_url + THE_AND + "profile", true)
                    request.send()
                }
            })
    })
 }

/**
 * It cleans the variables related to the campaign, groups and voters
 */
function cleanServerVariables(){
    let request = new XMLHttpRequest()
    request.open('GET', "http://" + localhost127 + ":1985/queryCleanVariables=", true)
    request.send()
}

/**
 * If donations are enabled for this campaign
 */
function insertCampaignIntoMainnet(){
    let start_date_array = initial_date_input.value.split("/")
    let start_date_milli = new Date(start_date_array[2], start_date_array[1], start_date_array[0], 0, 0, 0, 0).getTime()
    let end_date_array = final_date_input.value.split("/")
    let end_date_milli = new Date(end_date_array[2], end_date_array[1], end_date_array[0], 0, 0, 0, 0).getTime()
    let campaignContract = web3_mainnet.eth.contract(DONATIONS_CONTRACT)
    campaignContract.new(
        current_campaign.confirmation_address,
        start_date_milli,
        end_date_milli,
        {
            from: wallet.address.toLowerCase(),
            data: DONATIONS_DATA,
            gas: '30000000'
        }, function (e, contract){
            console.log(e, contract)
            if (typeof contract.address !== 'undefined') {
                console.log('Donations contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash)
                current_campaign.donations_contract = contract.address //contract.address.substring(2).toLowerCase()
                the_donations_contract = contract

                //Re-inserting campaign profile page into IPFS
                let content = JSON.stringify(current_campaign)
                let content_url = content.replace(/\?/g, QUESTION_MARK)
                content_url = content_url.replace(/#/g, HASHTAG)
                content_url = content_url.replace(/"/g, DOUBLEQUOTE)
                content_url = content_url.replace(/'/g, QUOTE)
                content_url = content_url.replace(/\\/g, BACKSLASH)
                let request = new XMLHttpRequest()
                request.addEventListener("load", function (ev) {
                    if (this.responseText == "complete"){
                        //Since it is the last step of the campaign creation, update te current campaign to display it to the user
                        console.log("Waiting for the campaign data to be available on the IPFS provider")
                        updateCurrentCampaign(current_campaign.ipns).then(function () {
                            window.location.reload()
                        })
                    }
                })
                request.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + content_url + THE_AND + "profile", true)
                request.send()
            }
        })
}

/**
 * Check whether the voter meets the requirements or not (testing a regular expression)
 * @param {string} user
 * @returns {boolean}
 */
function checkVoterRequirements(user) {
    if (!user){
        //This method can be called to register the current user, or to register users via Tor messages request
        user = sessionStorage.getItem("kantcoin_org_user")
    }

    //If the campaign creator has defined a list of pre-authorized voters, the regular expression will not be considered
    if (localStorage.getItem("authorized_voters")){
        if (localStorage.getItem("authorized_voters").indexOf(user) >= 0){
            return true
        }
        return false
    }

    if (current_campaign.regexp){
        let regexp = new RegExp(current_campaign.regexp.split("/")[1], current_campaign.regexp.split("/")[2])
        if (regexp.test(user)){
            return true
        }
    }
    return false
}

/**
 * Check if the user is the owner of the current campaign
 * @returns {boolean}
 */
function isOwner() {
    if (current_campaign.address && wallet.address){
        return (current_campaign.address == wallet.address)
    }
    return false
}

/**
 * Check the messages received via Tor */
function listenTorMessages() {
    if (!notNullChars(the_contract.getTor(wallet.address.toLowerCase(), 0))){
        return
    }
    messages_handler = setInterval(getTorMessages, LISTEN_TOR_RATE)
}

/**
 * Receive the messages from the server
 */
function getTorMessages(){
    let request1 = new XMLHttpRequest()
    request1.addEventListener("load", function () {
        if (this.responseText == "[]"){
            return
        }
        let messages = this.responseText.replace("[","").replace("]","").split(" ")
        messages.forEach(function (payload) {
            //Payload is composed of user, address, public_key, and signature(user)
            //The message was encrypted, since it could come from a login provider Tor server
            if (payload){
                decryptMessage(web3_aux.toAscii(payload), readRegisterVoterMessage)
            }
        })
    })
    request1.open('GET', "http://" + localhost127 + ":1985/queryGetRegisterVoterMessages=", true)
    request1.send()

    let request2 = new XMLHttpRequest()
    request2.addEventListener("load", function () {
        if (this.responseText == "[]"){
            return
        }
        let messages = this.responseText.replace("[","").replace("]","").split(" ")
        //Payload is composed of ballot, proposal, group, vote (VOTE + ":" + campaign id + ":" + ballot), and signature(vote)
        messages.forEach(function (payload) {
            //The message was encrypted, since it could come from a login provider Tor server
            if (payload){
                decryptMessage(web3_aux.toAscii(payload), readVoteMessage)
            }
        })
    })
    request2.open('GET', "http://" + localhost127 + ":1985/queryGetSendVoteMessages==", true)
    request2.send()

    let request3 = new XMLHttpRequest()
    request3.addEventListener("load", function () {
        if (this.responseText == "[]"){
            return
        }
        let messages = this.responseText.replace("[","").replace("]","").split(" ")
        //Payload is composed of how_many_now, how_many_more and signature (how_many_now + "-" + how_many_more)
        messages.forEach(function (payload) {
            //The message was encrypted, since it could come from a login provider Tor server
            if (payload){
                decryptMessage(web3_aux.toAscii(payload), verifyThenAddGroup)
            }
        })
    })
    request3.open('GET', "http://" + localhost127 + ":1985/queryGetStoreGroupMessages=", true)
    request3.send()

    let request4 = new XMLHttpRequest()
    request4.addEventListener("load", function () {
        if (this.responseText == "[]"){
            return
        }
        let messages = this.responseText.replace("[","").replace("]","").split(" ")
        messages.forEach(function (payload) {
            //The message was encrypted, since it could come from a login provider Tor server
            if (payload){
                decryptMessage(web3_aux.toAscii(payload), verifyThenStoreEnode)
            }
        })
    })
    request4.open('GET', "http://" + localhost127 + ":1985/queryGetStoreEnodeMessages=", true)
    request4.send()

    let request5 = new XMLHttpRequest()
    request5.addEventListener("load", function () {
        if (this.responseText == "[]"){
            return
        }
        let messages = this.responseText.replace("[","").replace("]","").split(" ")
        messages.forEach(function (payload) {
            //Payload is composed of address, group category, and signature(campaign id)
            //The message was encrypted, since it could come from a login provider Tor server
            if (payload){
                decryptMessage(web3_aux.toAscii(payload), readEnterGroupMessage)
            }
        })
    })
    request5.open('GET', "http://" + localhost127 + ":1985/queryGetEnterGroupMessages=", true)
    request5.send()

    let request6 = new XMLHttpRequest()
    request6.addEventListener("load", function () {
        if (this.responseText == "[]"){
            return
        }
        let messages = this.responseText.replace("[","").replace("]","").split(" ")
        messages.forEach(function (payload) {
            //Payload is composed of address, group category, and signature(campaign id)
            //The message was encrypted, since it could come from a login provider Tor server
            if (payload){
                decryptMessage(web3_aux.toAscii(payload), readConfirmMessage)
            }
        })
    })
    request6.open('GET', "http://" + localhost127 + ":1985/queryGetConfirmMessages=", true)
    request6.send()
}

/**
 * This message must come from the campaign creator
   It tells if the group chairperson should store a group in mygroups variable in order to receive votes from that group
 * @param {string} data
 */
function verifyThenAddGroup(data){
    let json_payload = JSON.parse(data)
    //Checking if the campaign creator is who sent this message
    if (ethers.Wallet.verifyMessage(json_payload.how_many_now + "-" + json_payload.how_many_more, json_payload.signature) == current_campaign.address){
        addGroupsInMyGroups(json_payload.how_many_now, json_payload.how_many_more, json_payload.messages)
    }
}

/**
 * This message must come from an authorized chairperson
   It tells if the campaign creator should publish the group chairperson enode on the IPNS enodes page
 * @param {string} data
 */
function verifyThenStoreEnode(data){
    let json_payload = JSON.parse(data)
    if ((ethers.Wallet.verifyMessage(current_campaign.id, json_payload.signature) == json_payload.address) && (authorized_chairpersons.includes(json_payload.address) || authorized_chairpersons.includes(json_payload.address.toLowerCase()) || json_payload.address == wallet.address)){
        //It stores the enode of some group chairperson
        storeEnode(json_payload.enode)
    }
}

/**
 * It checks if this message is related to this campaign, then send the raw transaction
 * @param {string} data
 */
function readConfirmMessage(data){
    let json_payload = JSON.parse(data)
    if (json_payload.raw && json_payload.campaign == current_campaign.id){
        web3.eth.sendRawTransaction(json_payload.raw, function (err, transactionHash) {
            //console.log(transactionHash)
        })
    }
}

/**
 * All Tor messages are encrypted, since they could come from a Tor2web proxy
 * @param {string} encrypted_data
 * @param {function} callback
 */
async function decryptMessage(encrypted_data, callback){
    if (!localStorage.getItem("kantcoin_tor_privkey")){
        console.log("Tor privkey not set")
        return
    }

    let private_key = convertStringToArrayBufferView(localStorage.getItem("kantcoin_tor_privkey"))

    let encrypted_slices  = encrypted_data.split(THE_AND)
    let decrypted_data = ""

    for (let i = 0; i < encrypted_slices.length; i++){
        let encrypted_bytes = convertStringToArrayBufferView(encrypted_slices[i])
        let decrypted_data_bytes = await ntru.decrypt(encrypted_bytes, private_key)
        decrypted_data += convertArrayBufferViewtoString(decrypted_data_bytes)
    }

    callback(decrypted_data)
}

/**
 * Group chairpersons must know which are the groups they manage
 * @param {number} how_many_now
 * @param {number} how_many_more
 * @param {string} messages_json
 */
function addGroupsInMyGroups (how_many_now, how_many_more, messages_json){
    let messages = JSON.parse(messages_json)

    for (let i= (how_many_now - how_many_more), k = 0; i < how_many_now; i++, k++){
        if (!mygroups.includes("" + i)) {
            mygroups.push("" + i)

            // Generating a distinct vote message for this group
            mygroups_messages_map.set("" + i, messages[k])
        }
    }

    //Updating the backups
    localStorage.setItem("mygroups_backup", mygroups.join(","))
    localStorage.setItem("mygroups_messages", fromMapToJSONStr(mygroups_messages_map))
}

/**
 * Reading enter group messages and then inserting voters into groups
   Payload is composed of address, group category, and signature(campaign id)
 * @param {string} payload
 */
function readEnterGroupMessage(payload){
    //Only the campaign creator can register voters
    if (current_campaign.address != wallet.address){
        return
    }

    let json_payload = JSON.parse(payload)
    if (json_payload.address && json_payload.signature && json_payload.category !== undefined && json_payload.category !== "" && (ethers.Wallet.verifyMessage(current_campaign.id, json_payload.signature) == json_payload.address)) {
        //The prefix helps to know if the user was given the right to vote
        let prefix = the_contract.getVoter(json_payload.address)[1].toNumber()
        if (prefix == 0){
            return
        }

        //The voter's cash must be the same as the value of the group
        let cash = the_contract.getVoter(json_payload.address)[3].toNumber()

        //The index indicates what was the chosen group category
        let groups = ""
        if (json_groups[json_payload.category]){
            //Each group category can have many groups
            groups = json_groups[json_payload.category].split(",")
        } else {
            return
        }

        //If it is an empty group category
        if (groups.length == 0){
            return
        }

        let position = 0
        for (let i = 0; i < groups.length; i++){
            let size = the_contract.groups(groups[i])[3].toNumber()
            //To check if the user's cash is equal the value of the group
            let value = the_contract.groups(groups[i])[2].toNumber()

            if (size < campaign_info_json.mgz && value == cash){
                position = i
                break
            }
        }

        let places_array = []
        for (let j = 0; j < the_contract.mgz().toNumber(); j++){
            if (!notNullChars(the_contract.getGroupVoters(position)[j])){
                places_array.push(j)
            }
        }

        //Adding some randomness to avoid clashes
        let place = places_array[Math.floor(Math.random() * places_array.length)]

        //When only_accepted_groups is set, it means that the deadline to choose a group has been reached.
        //The voter may enter only in one of these groups while there are vacant positions.
        if (only_accepted_groups && only_accepted_groups.length > 0 && !only_accepted_groups.includes(parseInt(groups[position]))){
            return
        }

        the_contract.addVoterToGroup(json_payload.address, groups[position])
        the_contract.addVoterToGVoters(json_payload.address, groups[position], place)
    }
}

/**
 * Reading register voter messages and then calling the giveRightToVote contract function
   Payload is composed of user, address, pubkey, and signature(campaign id)
 * @param {string} payload
 */
function readRegisterVoterMessage(payload){
    //Only the campaign creator can register voters
    if (current_campaign.address != wallet.address){
        return
    }
    let json_payload = JSON.parse(payload)
    if (json_payload.user && json_payload.signature && json_payload.address && json_payload.pubkey && json_payload.secret
        && checkVoterRequirements(json_payload.user) && (ethers.Wallet.verifyMessage(current_campaign.id, json_payload.signature) == json_payload.address)){
        let request = new XMLHttpRequest()
        request.addEventListener("load", function (ev) {
            if (this.responseText == "true"){
                //Verifying if the voter is already registered
                //Emails could be written in upper or lower case
                let code_plus_user = localStorage.getItem("users_hashcode_prefix") + "-" + json_payload.user.toLowerCase()
                let hash = "" + hashCode(code_plus_user)
                let reverse_hash = "" + hashCode(code_plus_user.split("").reverse().join(""))
                let big_hash = "" + hash + "0000000000".substring(0, 10 - reverse_hash.length) + reverse_hash

                if (the_contract.findVoterHashcode(big_hash)){
                    //Voter is already registered
                    return
                }

                let cash = 0
                if (current_campaign.donations_contract){
                    let total_cash = the_donations_contract.getDonor(json_payload.user)[1].toNumber()
                    let total_cash_finney = total_cash / 1000000000000000
                    let accepted_donations = current_campaign.accepted_donations.split(";")
                    for (let i = 0; i < accepted_donations.length; i ++){
                        if (total_cash_finney >= accepted_donations[i] && accepted_donations[i] > cash){
                            cash = accepted_donations[i]
                        }
                    }
                    the_donations_contract.confirmDonor(json_payload.user, cash)
                }

                the_contract.giveRightToVote(json_payload.address, json_payload.pubkey.substring(1,2), "0x" + json_payload.pubkey.substring(2), cash)
                the_contract.addVoterHashcode(hash)
                the_contract.defineVoterNTRUHash(json_payload.address, json_payload.ntruhash)

                //It stores the voter in the voters map with an empty group (-2)
                let request2 = new XMLHttpRequest()
                request2.open('GET', "http://" + localhost127 + ":1985/queryStoreVoter=" + json_payload.address.toLowerCase(), true)
                request2.send()

                storeVoterSecret(json_payload.address, json_payload.secret)

                //Each voter has an amount of ether to confirm his or her vote
                let wei_amount = web3.toWei(ether_per_voter, "ether")
                web3.eth.sendTransaction({from: wallet.address.toLowerCase(), to: json_payload.address, value: wei_amount})
            }
        })
        //In order to make the URL
        let user = json_payload.user
        user = user.replace("@", THE_AT)
        //Verifying if this address belongs to this user
        request.open('GET', "http://" + localhost127 + ":1985/queryCheckUser=" + user + THE_AND + json_payload.address + THE_AND + login_provider, true)
        request.send()
    }
}

/**
 * It stores a secret used to send the group's vote message to the voter
 * @param {string} voter
 * @param {string} secret
 * @returns {Promise}
 */
function storeVoterSecret(voter, secret){
    return new Promise(resolve => {
        let request = new XMLHttpRequest()
        request.addEventListener("load", function() {
            if (this.responseText == "complete"){
                resolve()
            }
        })

        request.addEventListener("error", function() {
            console.log("Error while storing voter secret")
            resolve()
        })

        request.open('GET', "http://" + localhost127 + ":1985/queryStoreVoterSecret=voter=" + voter + "&secret=" + secret, true)
        request.send()
    })
}

/**
 * Update the file which contains all enodes in this campaign, and then publish it
 * @param {string} enode
 */
function storeEnode(enode){
    if (!enode){
        enode = fullEnode()
    }
    if (!enode){
        return
    }

    let request2 = new XMLHttpRequest()
    request2.addEventListener("load", function() {
        if (this.responseText == ""){
            console.log(klang.cant_open_candidates_page1)
            return
        }
        let content_url = ""
        if (this.responseText == "empty"){
            content_url = enode
        } else {
            content_url = this.responseText + "," + enode
        }

        if (content_url.split(",").length > current_campaign.how_many_enodes){
            Materialize.toast(klang.cant_add_enode, 3500, 'rounded')
            return
        }

        let request = new XMLHttpRequest()
        request.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + content_url + THE_AND + "enodes", true)
        request.send()
    })

    request2.open('GET', ((!ipfs_provider || isOwner()) && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + current_campaign.ipns + "/enodes", true)
    request2.send()
}

/**
 * It gets the enodes that allow geth to interact with this blockchain
 */
function setAllEnodes(){
    if (all_enodes != ""){
        return
    }

    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        if (this.responseText != "empty" && this.responseText != ""){
            all_enodes = this.responseText
            addPeers()
        }
    })

    request.addEventListener("error", function() {
        setTimeout(setAllEnodes, ENODE_ATTEMP_RATE)
    })

    request.open('GET', ((!ipfs_provider || isOwner()) && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + current_campaign.ipns + "/enodes", true)
    request.send()
}

/**
 * Group chairpersons call this method before the commitVotes
 */
function preCommitVotes(){
    mygroups.forEach(function (group) {
        if (group !== undefined && group !== null){
            let current_ballot = the_contract.currentBallot().toNumber()
            the_contract.preCommit(current_ballot, group)
            the_contract.validate(current_ballot, group) //!!!!!!!!! While the validator is not yet fully implemented
        }
    })
}

/**
 * It counts the votes for the candidates
 */
function commitVotes(){
    mygroups.forEach(function (group) {
        if (group !== undefined && group !== null){
            let current_ballot = the_contract.currentBallot().toNumber()
            let mgz = the_contract.mgz().toNumber()

            for (let i = 0; i < mgz; i++){
                the_contract.commitVotationPerPosition(current_ballot, group, i)
                the_contract.commitVotationStatisticsPerPosition(current_ballot, group, i)
            }
        }
    })
}

/**
 * It inserts candidates into blockchain
 */
function insertCandidates(){
    if (insert_candidates_textarea.value && the_contract){
        let number_ballots = the_contract.howManyBallots().toNumber()
        if (number_ballots == 0){
            Materialize.toast(klang.must_create_ballot, 3000, 'rounded')
            return
        }

        let inserted = false
        let current_ballot = the_contract.currentBallot().toNumber()
        let candidates = insert_candidates_textarea.value.split("\n")
        let stored_content = localStorage.getItem("candidates_ipfs_page_" + current_ballot)
        let stored_content_json = (localStorage.getItem("candidates_ipfs_page_" + current_ballot) ? JSON.parse(localStorage.getItem("candidates_ipfs_page_" + current_ballot)) : {})

        let content_url = "{"
        let position = the_contract.howManyCandidatesInBallot(current_ballot).toNumber()
        for (let i = 0; i < candidates.length; i++) {
            let candidate_text = candidates[i]
            let items = candidate_text.split(";")
            //Simply ignore the wrong candidate insertions
            if (items.length != 5){
                continue
            }
            let ipfs = items[0]
            let donee = items[1]
            let name = items[2]
            let party = items[3]
            let photo = items[4]

            //Avoiding equal indexes
            if (Object.keys(stored_content_json).includes(ipfs)){
                continue
            }

            if (ipfs.length == 46 && name.length > 0 && party.length > 0 && photo.indexOf("http") == 0){
                content_url += "\"" + ipfs + "\":{\"name\":\"" + name + "\", \"party\":\"" + party + "\",\"photo\":\"" + photo + "\"},"
                //Call the contract to insert the candidate
                the_contract.addCandidateIntoBallot(current_ballot, position, fromIPFSToBytes32(ipfs), donee)
                the_contract.iterateCandidatesCounter(current_ballot)
                position += 1

                inserted = true
            }
        }

        if (inserted){
            if (stored_content && stored_content.indexOf("{") == 0){
                //Replacing the last '}' with ','
                content_url = stored_content.replace(/}([^}]*)$/,',$1') + content_url.substring(1)
            }
            content_url = content_url.substring(0, content_url.length - 1) + "}"

            localStorage.setItem("candidates_ipfs_page_" + current_ballot, content_url)

            content_url = content_url.replace(/\?/g, QUESTION_MARK)
            content_url = content_url.replace(/#/g, HASHTAG)
            content_url = content_url.replace(/"/g, DOUBLEQUOTE)
            content_url = content_url.replace(/'/g, QUOTE)
            content_url = content_url.replace(/\\/g, BACKSLASH)

            let request = new XMLHttpRequest()
            request.addEventListener("load", function (ev) {
                loadCandidates()
            })
            request.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + content_url + THE_AND + "candidates_ballot" + current_ballot, true)
            request.send()
        } else {
            Materialize.toast(klang.error, 1500, 'rounded')
            return
        }
    } else {
        Materialize.toast(klang.error, 1500, 'rounded')
        return
    }
    clearAdminCampaign()
}

/**
 * It inserts parties into campaign's IPNS page
 */
function insertParties(){
    let parties = insert_parties_textarea.value.split("\n")
    let stored_content = localStorage.getItem("parties_ipfs_page")
    let stored_content_json = (localStorage.getItem("parties_ipfs_page") ? JSON.parse(localStorage.getItem("parties_ipfs_page")) : {})

    if (insert_parties_textarea.value){
        let content_url = "{"
        for (let i = 0; i < parties.length; i++) {
            let party_text = parties[i]
            let items = party_text.split(";")
            //Simply ignore the wrong party insertions
            if (items.length != 4){
                continue
            }
            let ipfs = items[0]
            let name = items[1]
            let photo = items[2]
            let url = items[3]

            //Avoiding equal indexes
            if (Object.keys(stored_content_json).includes(ipfs)){
                continue
            }

            if (ipfs.length == 46 && name.length > 0 && url.length > 0 && photo.indexOf("http") == 0){
                content_url += "\"" + ipfs + "\":{\"name\":\"" + name + "\", \"url\":\"" + url + "\",\"photo\":\"" + photo + "\"},"
            }
        }

        if (stored_content && stored_content.indexOf("{") == 0){
            //Replacing the last '}' with ','
            content_url = stored_content.replace(/}([^}]*)$/,',$1') + content_url.substring(1)
        }
        content_url = content_url.substring(0, content_url.length - 1) + "}"

        localStorage.setItem("parties_ipfs_page", content_url)

        content_url = content_url.replace(/\?/g, QUESTION_MARK)
        content_url = content_url.replace(/#/g, HASHTAG)
        content_url = content_url.replace(/"/g, DOUBLEQUOTE)
        content_url = content_url.replace(/'/g, QUOTE)
        content_url = content_url.replace(/\\/g, BACKSLASH)

        let request = new XMLHttpRequest()
        request.addEventListener("load", function (ev) {
            loadParties()
        })
        request.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + content_url + THE_AND + "parties", true)
        request.send()
    } else {
        Materialize.toast(klang.error, 1500, 'rounded')
        return
    }
    clearAdminCampaign()
}

/**
 * It inserts questions into campaign's IPNS page
 */
function insertQuestions(){
    let questions = insert_questions_textarea.value.split("\n")
    let stored_content = localStorage.getItem("questions_ipfs_page")

    if (insert_questions_textarea.value){
        let stored_json = {}
        let how_many_itens = 0
        if (stored_content && stored_content.indexOf("{") == 0) {
            stored_json = JSON.parse(stored_content)
            how_many_itens = Object.keys(stored_json).length
        }

        let content_url = "{"
        for (let i = 0; i < questions.length; i++) {
            let question_text = questions[i]
            let items = question_text.split(";")
            //Simply ignore the wrong party insertions
            if (items.length != 2){
                continue
            }
            let topic = items[0]
            let content = items[1]

            if (topic.length > 0 && topic.length <= 32 && content.length > 0){
                content_url += "\"" + (i + how_many_itens) + "\":{\"content\":\"" + content + "\", \"topic\":\"" + topic + "\"},"
            }
        }

        if (stored_content && stored_content.indexOf("{") == 0){
            //Replacing the last '}' with ','
            content_url = stored_content.replace(/}([^}]*)$/,',$1') + content_url.substring(1)
        }
        content_url = content_url.substring(0, content_url.length - 1) + "}"

        localStorage.setItem("questions_ipfs_page", content_url)

        content_url = content_url.replace(/\?/g, QUESTION_MARK)
        content_url = content_url.replace(/#/g, HASHTAG)
        content_url = content_url.replace(/"/g, DOUBLEQUOTE)
        content_url = content_url.replace(/'/g, QUOTE)
        content_url = content_url.replace(/\\/g, BACKSLASH)
    } else {
        Materialize.toast(klang.error, 1500, 'rounded')
        return
    }
    clearAdminCampaign()
}

/**
 * It inserts group categories into campaign's IPNS page
 */
function insertGroupCategories(){
    let gcs = insert_group_categories_textarea.value.split("\n")
    let stored_content = localStorage.getItem("group_categories_ipfs_page")
    let stored_content_json = (localStorage.getItem("group_categories_ipfs_page") ? JSON.parse(localStorage.getItem("group_categories_ipfs_page")) : {})

    if (insert_group_categories_textarea.value){
        let content_url = "{"
        for (let i = 0; i < gcs.length; i++) {
            let gc_text = gcs[i]
            let items = gc_text.split(";")
            //Simply ignore the wrong party insertions
            if (items.length != 2){
                continue
            }
            let id = items[0]
            let content = items[1]

            //Avoiding equal indexes
            if (Object.keys(stored_content_json).includes(id)){
                continue
            }
            if (id.length > 0 && id.length <= 32 && content.length > 0){
                content_url += "\"" + id + "\":{\"content\":\"" + content + "\"},"
            }
        }

        if (stored_content && stored_content.indexOf("{") == 0){
            //Replacing the last '}' with ','
            content_url = stored_content.replace(/}([^}]*)$/,',$1') + content_url.substring(1)
        }
        content_url = content_url.substring(0, content_url.length - 1) + "}"

        localStorage.setItem("group_categories_ipfs_page", content_url)

        content_url = content_url.replace(/\?/g, QUESTION_MARK)
        content_url = content_url.replace(/#/g, HASHTAG)
        content_url = content_url.replace(/"/g, DOUBLEQUOTE)
        content_url = content_url.replace(/'/g, QUOTE)
        content_url = content_url.replace(/\\/g, BACKSLASH)

        let request = new XMLHttpRequest()
        request.addEventListener("load", function (ev) {
            loadGroupCategories()
            loadGroups()
        })
        request.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + content_url + THE_AND + "group_categories", true)
        request.send()
    } else {
        Materialize.toast(klang.error, 1500, 'rounded')
        return
    }
    clearAdminCampaign()
}

/**
 * Before inserting candidates, we should create a round, giving it a name and a type
 */
function createRound() {
    if (!create_round_id.value || !define_round_type.value){
        Materialize.toast(klang.empty_fields, 2500, 'rounded')
        return
    }
    let is_donation = (define_round_type.value == "true")
    let how_many_ballots = the_contract.howManyBallots().toNumber()
    the_contract.addBallot(web3_aux.fromAscii(create_round_id.value), is_donation)
    the_contract.defineCurrentVoteMessage(web3_aux.fromAscii(create_round_id.value + " - " + current_campaign.id))
    the_contract.defineCurrentBallot(how_many_ballots)

    //Inserting an empty candidates page for this round
    if (how_many_ballots > 0){
        let request = new XMLHttpRequest()
        request.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + "empty" + THE_AND + "candidates_ballot" + how_many_ballots, true)
        request.send()
    }

    current_ballot_mark.innerHTML = create_round_id.value
    current_ballot_status.innerHTML = klang.round_active

    clearVotesStore()

    //Cleaning up the form
    clearAdminCampaign()
}

/**
 * Adding N groups into the blockchain
 */
function createGroups(){
    if (Date.now() > last_created_groups + WAIT_TO_CREATE_GROUPS){
        last_created_groups = Date.now()
    } else{
        Materialize.toast(klang.wait + " (" + (WAIT_TO_CREATE_GROUPS/1000) + "s)", 2000, 'rounded')
        return
    }

    let how_many = how_many_groups.value
    let chairperson = groups_chairperson.value
    let value = groups_value.value

    if (chairperson == ""){
        chairperson = the_contract.chairperson()
    }

    if (!how_many || !value || isNaN(how_many) || isNaN(value)){
        Materialize.toast(klang.insert_number_error, 2000, 'rounded')
        return
    }

    //Open it now to avoid popup blockers
    openTor2webPopup(klang.wait)

    //Chairpersons in this array can share theirs enodes on the campaign's IPFS
    //I.e., to share their enodes, chairpersons must have groups
    if (!authorized_chairpersons.includes(chairperson)) {
        authorized_chairpersons.push(chairperson)

        //Updating the backup
        localStorage.setItem("authorized_chairpersons_backup", authorized_chairpersons.join(","))
    }

    let how_many_old = the_contract.howManyGroups().toNumber()

    let i = 0
    for (; i < how_many; i++){
        the_contract.addGroup(chairperson)
    }

    waitUntilGroupIsInserted(i - 1).then(function(){
        sleep(5000).then(function () {
            defineValueNCategory(how_many, value)
        })
    })
}

/**
 * It is intended to give group administrators the resources needed to send voter's votes
 */
function transferFinney(){
    let wei_amount = web3.toWei(transfer_finney_amount_value.value, "finney")
    web3.eth.sendTransaction({from: wallet.address.toLowerCase(), to: transfer_finney_account_value.value, value: wei_amount})
    transfer_finney_amount_value.value = ""
    transfer_finney_account_value.value = ""
}

/**
 * Check if the last group was inserted into the blockchain. It should be called before defining value and category of the groups
 * @param {number} last_group
 * @returns {Promise}
 */
function waitUntilGroupIsInserted(last_group){
    return new Promise(resolve => {
        let resolved = false

        for (let i = 2; i < 1028; i = i * 2){
            sleep(i * 1000).then(function () {
                if (!resolved && notNullChars(the_contract.groups(last_group)[0])){
                    resolved = true
                    resolve()
                }
            })
        }

        sleep(1028000).then(function(){
            if (!resolved){
                console.log("Can't connect to the web3 provider")
            }
        })
    })
}

/**
 * It opens a popup containing a captcha
 * @param {string} additional_line
 */
function openTor2webPopup(additional_line){
    let x = (screen.width / 2) - 250
    let y = (screen.height / 2) - 280

    if (!isEmpty(tor2web_page) && !tor2web_page.closed){
        tor2web_page.close()
    }

    tor2web_page = window.open("", "_blank", "left=" + x + ", top=" + y + ", width=500, height=560, menubar=no, scrollbars=yes, status=no, toolbar=no, resizable=no")
    let captcha_page = captcha_page_html.innerHTML.replace("<!--[CDATA[","").replace("-->","").replace("[[title]]", klang.opening_captcha_page)
        .replace("[[warning]]", klang.warning_captcha_page).replace("[[additional]]", (additional_line ? additional_line : ""))
    if (tor2web_page.document){
        tor2web_page.document.title = "Captcha"
        tor2web_page.document.head.innerHTML = "<meta name='viewport' content='width=device-width, initial-scale=1.0' />" + loader_style_css.innerHTML.replace("<!--[CDATA[","").replace("-->","")
        tor2web_page.document.body.innerHTML = captcha_page
    } else{
        tor2web_page.eval("document.title = 'Captcha';")
        tor2web_page.eval("document.head.innerHTML = \"" + "<meta name='viewport' content='width=device-width, initial-scale=1.0' />"  +
            loader_style_css.innerHTML.replace("<!--[CDATA[","").replace("-->","") + "\";")
        tor2web_page.eval("document.body.innerHTML = '" + captcha_page + "';")
    }
}

/**
 * Loading groups ipfs page in order to obtain a json linking categories to groups
 */
function loadGroups(){
    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        if (this.responseText.indexOf("{") == 0) {

            if (isOwner() && localStorage.getItem("groups_ipfs_page")){
                let stored_groups = localStorage.getItem("groups_ipfs_page")
                if (stored_groups.length > this.responseText.length){
                    return
                }
            }

            localStorage.setItem("groups_ipfs_page", this.responseText)
            json_groups = JSON.parse(this.responseText)
        }
    })

    /*request.addEventListener("error", function() {
        sleep(45000).then(loadGroups)
    })*/

    request.open('GET', ((!ipfs_provider || isOwner()) && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + current_campaign.ipns + "/groups", true)
    request.send()
}

/**
 * Access the localStorage in order to obtain a json linking categories to groups
 */
function loadGroupsFromLocalStorage(){
    if (!localStorage.getItem("groups_ipfs_page")){
        return
    }
    json_groups = JSON.parse(localStorage.getItem("groups_ipfs_page"))
}

/**
 * Send a message to the group chairperson with a group to be stored in mygroups
   ps. How_many_now includes the how_many_more
 * @param {number} how_many_now
 * @param {number} how_many_more
 */
function alertChairperson(how_many_now, how_many_more){
    let cperson = groups_chairperson.value
    if (!cperson){
        cperson = the_contract.chairperson()
    }
    let onion = printableChars(the_contract.getTor(cperson, 0))
    let public_key = ""

    let i = 1
    let part = ""
    do {
        part = the_contract.getTor(cperson, i)
        if (notNullChars(part)) {
            public_key += web3_aux.toAscii(part)
        }
        i++
    } while (notNullChars(part))

    //To prove the origin of the message
    let aux_wallet = new ethers.Wallet(wallet.privateKey)
    let signature = aux_wallet.signMessage(how_many_now + "-" + how_many_more)

    let messages = []

    for (let j = (how_many_now - how_many_more), k = 0; j < how_many_now; j++, k++){
        messages[k] = randomString(25)
        storeGroupMessage(j, messages[k])
        allgroups_messages.push("" + j + ":" + messages[k])
    }
    //Backup for allgroupsMessages
    localStorage.setItem("allgroups_messages", allgroups_messages.join(","))

    let payload = {how_many_now: how_many_now, how_many_more: how_many_more, signature: signature, messages: JSON.stringify(messages)}

    sendTorMessage(STORE_GROUP, JSON.stringify(payload), onion, public_key.substring(0, 1027))
}

/**
 * This function is useful when the campaign creator restarts the server
 */
function storeAllGroupMessages(){
    for (let i = 0; i < allgroups_messages.length; i++){
        let group = allgroups_messages[i].split(":")[0]
        let message = allgroups_messages[i].split(":")[1]
        storeGroupMessage(group, message)
    }
}

/**
 * It stores on server the vote message regarding some group
 * @param {number} callback
 * @param {string} message
 */
function storeGroupMessage(group, message){
    let request = new XMLHttpRequest()
    request.open('GET', "http://" + localhost127 + ":1985/queryStoreGroupMessage=group=" + group + "&message=" + message, true)
    request.send()
}

/**
 * It calls the functions that conclude the creation of the groups
 */
function defineValueNCategory(how_many_more, value) {
    let json_groups = {}
    let stored_content = localStorage.getItem("groups_ipfs_page")
    if (stored_content && stored_content.indexOf("{") == 0) {
        json_groups = JSON.parse(stored_content)
    }

    let category = group_categories_select.value
    let how_many_now = the_contract.howManyGroups().toNumber()

    alertChairperson(how_many_now, how_many_more)

    for (let i = (how_many_now - how_many_more); i < how_many_now; i++){
        the_contract.defineGroupCategory(i, web3_aux.fromAscii(category))
        the_contract.defineGroupValue(i, value)
        if (json_groups[category]){
            json_groups[category] += i + ","
        } else {
            json_groups[category] = i + ","
        }
    }

    let content_url = JSON.stringify(json_groups)

    localStorage.setItem("groups_ipfs_page", content_url)

    content_url = content_url.replace(/\?/g, QUESTION_MARK)
    content_url = content_url.replace(/#/g, HASHTAG)
    content_url = content_url.replace(/"/g, DOUBLEQUOTE)
    content_url = content_url.replace(/'/g, QUOTE)
    content_url = content_url.replace(/\\/g, BACKSLASH)

    let request = new XMLHttpRequest()
    request.addEventListener("load", function (ev) {
        clearAdminCampaign()
    })
    request.addEventListener("error", function() {
        Materialize.toast(klang.error, 3000, 'rounded')
        clearAdminCampaign()
    })

    request.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + content_url + THE_AND + "groups", true)
    request.send()
}

/**
 * It receive a vote, which was checked by the urs_worker. If the vote is ok, it is stored.
 * @param {Event} event
 */
function storeVote(event){
    let json_data = JSON.parse(event.data)
    if (json_data.response == "true") {
        //The last vote is the only valid
        putInVotesStore({fnumber: json_data.first_number,
            vote: {
                ballot: json_data.ballot,
                campaign: json_data.campaign,
                candidate: json_data.candidate,
                first_number: json_data.first_number,
                group: json_data.group,
                signature: json_data.signature
            }
        })
    }
}

/**
 * Read a vote message and then sent it to a verifier to check its signature
   Payload is composed of ballot, candidate, first_number, group, vote (VOTE + ":" + campaign id + ":" + ballot), and signature(vote)
 * @param {string} payload
 */
function readVoteMessage(payload){
    let json_payload = JSON.parse(payload)

    //There should be no vacant position in the group
    if (the_contract.mgz().toNumber() > the_contract.groups(json_payload.group)[3].toNumber()){
        return
    }

    let vote_message = mygroups_messages_map.get('' + json_payload.group) + "-" + the_contract.currentBallot().toNumber()
    let pubkeys = makePubkeys(the_contract.getGroupPubkeys(json_payload.group))

    json_payload.vote_message = vote_message
    json_payload.pubkeys = pubkeys

    let str_payload = JSON.stringify(json_payload)

    let worker_number = Math.floor(Math.random() * how_many_threads)

    switch (worker_number){
        case 0:
            verifier1.postMessage(str_payload)
            break
        case 1:
            verifier2.postMessage(str_payload)
            break
        case 2:
            verifier3.postMessage(str_payload)
            break
        case 3:
            verifier4.postMessage(str_payload)
            break
        case 4:
            verifier5.postMessage(str_payload)
            break
        case 5:
            verifier6.postMessage(str_payload)
    }
}

/**
 * Send the votes to the blockchain, which will be inserted if the "wallet.address" was set as the group chairperson
 */
function sendVotes(){
    let ballot = campaign_info_json.ballots[campaign_info_json.current_ballot]
    if (!campaign_info_json.can_cancel && (ballot.stopped || ballot.closed)){
        Materialize.toast(klang.round_not_active, 2500, 'rounded')
        return
    }

    var received_votes_open = indexed_db.open("ReceivedVotes", 1)

    received_votes_open.onsuccess = function () {
        let db = received_votes_open.result
        let tx = db.transaction("VotesStore", "readwrite")
        let votes_store = tx.objectStore("VotesStore")

        var getall_received_votes = votes_store.getAll()
        var can_cancel = the_contract.canCancel()

        getall_received_votes.onsuccess = function(){
            let received_votes = getall_received_votes.result
            received_votes.sort(function(a, b){return 0.5 - Math.random()})

            let votes_per_group = []
            let how_many_groups = the_contract.howManyGroups().toNumber()
            let mgz = the_contract.mgz().toNumber()
            for (let g = 0; g < how_many_groups; g++){
                votes_per_group[g] = 0
            }

            received_votes.forEach(function (json_payload) {
                let json_vote = json_payload.vote
                if (json_vote && json_vote.candidate >= 0 && json_vote.ballot == campaign_info_json.current_ballot){
                    //Search for an empty f_number, in order to determine the vote position
                    let position = votes_per_group[parseInt(json_vote.group)]

                    if (position >= mgz){
                        console.log("Error - more votes than voters")
                        return
                    }
                    votes_per_group[parseInt(json_vote.group)] = position + 1

                    the_contract.vote(json_vote.ballot, json_vote.group, position, fromFirstNumberToBytes32(json_vote.first_number), json_vote.candidate)
                } else if (json_vote && json_vote.candidate == -2 && can_cancel && json_vote.ballot == campaign_info_json.current_ballot){
                    //If the candidate == -2, it is a cancellation.
                    putInCancellationsStore(json_payload, json_vote.ballot)
                }
            })

            votes_store.clear()
        }
    }
}

/**
 * Send the enodes that neither belong to the campaign creator nor to the group chairpersons
 */
function sendObserversEnodes(){
    if (current_campaign.how_many_enodes < 2){
        Materialize.toast(klang.cant_add_enode, 3500, 'rounded')
        return
    }

    let enodes_text = ""
    if (observers_enodes_textarea.value && the_contract){
        enodes_text = observers_enodes_textarea.value.replace(/\n/g, ",")
        enodes_text = enodes_text.replace(",,,", ",").replace(",,",",")
    } else {
        Materialize.toast(klang.error, 2000, 'rounded')
        return
    }
    if (enodes_text != "" && enodes_text.indexOf(",,") < 0){
        if (enodes_text.substring(enodes_text.length - 1) == ","){
            enodes_text = enodes_text.substring(0, enodes_text.length - 1)
        }
        let request = new XMLHttpRequest()
        request.addEventListener("load", function() {
            if (this.responseText == ""){
                 return
            }
            let content_url = ""
            if (this.responseText == "empty"){
                content_url = enodes_text
            } else {
                content_url = this.responseText + "," + enodes_text
            }

            if (content_url.split(",").length > current_campaign.how_many_enodes){
                Materialize.toast(klang.cant_add_enode, 3500, 'rounded')
                return
            }

            let request2 = new XMLHttpRequest()
            request2.open('GET', "http://" + localhost127 + ":1985/queryAddProfile=" + current_campaign.id + THE_AND + content_url + THE_AND + "enodes", true)
            request2.send()

            clearAdminCampaign()
        })

        request.open('GET', ((!ipfs_provider || isOwner()) && using_local_server ? "http://" + localhost127 + ":8080/ipns/" : ipfs_provider + "/ipns/") + current_campaign.ipns + "/enodes", true)
        request.send()
    }
}

/**
 * Send a message via Tor representing a vote
 * @param {string} candidate
 */
function sendVoteMessage(candidate){
    let group = mygroup_info_json.index
    let current_ballot = campaign_info_json.current_ballot

    if (!notNullChars(mygroup_info_json.chairperson_tor.onion) || !notNullChars(mygroup_info_json.chairperson_tor.public_key)){
        return
    }

    //If the candidate == -2, it is a cancellation. And all cancellations should be sent to the campaign creator
    let onion = (candidate == -2 ? campaign_info_json.chairperson_tor.onion : mygroup_info_json.chairperson_tor.onion)
    let public_key = (candidate == -2 ? campaign_info_json.chairperson_tor.public_key : mygroup_info_json.chairperson_tor.public_key)

    let first_number = last_signature.substring(0, last_signature.indexOf("+"))

    //Correcting a problem that may occur
    if (first_number.length < 45){
        first_number = "000000000000000000000000000000000000000000000".substring(0, 45 - first_number.length) + first_number
    }

    let payload_json = {ballot: current_ballot, group: group, candidate: candidate, signature: last_signature, first_number: first_number, campaign:current_campaign.id}
    let payload = JSON.stringify(payload_json)

    sendTorMessage(VOTE, payload, onion, public_key)

    encVoteThenStore(payload)
    my_vote = payload
}

/**
 * Gather the public keys in the format required to run the URS (Unique Ring Signatures) script
 * @param {string[]} pubkeys_array
 * @returns {string}
 */
function makePubkeys(pubkeys_array){
    let result = "{"
    for (let i = 0, j = 0; i < pubkeys_array[0].length; i++) {
        if (pubkeys_array[0][i] && notNullChars(pubkeys_array[1][i])){
            result += "\"" + j + "\":\"" + "0" + (pubkeys_array[0][i].toNumber ? pubkeys_array[0][i].toNumber() : pubkeys_array[0][i]) + pubkeys_array[1][i].substring(2) + "\","
            j++
        }
    }
    result = result.substring(0, result.length - 1) + "}"
    return result
}


/**
 * Prepare the payload and then send a tor message
 */
function sendRegisterVoterMessage(){
    let user = sessionStorage.getItem("kantcoin_org_user")
    let key = JSON.parse(sessionStorage.getItem("kantcoin_org_key"))

    if (!user || !wallet.address){
        Materialize.toast(klang.no_vault_opened, 3000, 'rounded')
        return
    }
    if (!current_campaign.id){
        Materialize.toast(klang.no_campaign_opened, 3000, 'rounded')
        return
    }

    //To prove the origin of the message
    let aux_wallet = new ethers.Wallet(wallet.privateKey)
    let signature = aux_wallet.signMessage(current_campaign.id)
    let ntruhash = hashCode(localStorage.getItem("kantcoin_tor_pubkey"))

    //This secret is used to receive the vote message regarding the voter's group
    my_secret = generateMySecret()

    let payload_json = {user: user, address: wallet.address, pubkey: key.pubkey, signature: signature, ntruhash: ntruhash, secret: my_secret}
    let payload = JSON.stringify(payload_json)

    let onion = campaign_info_json.chairperson_tor.onion
    let public_key = campaign_info_json.chairperson_tor.public_key

    sendTorMessage(REGISTER_VOTER, payload, onion, public_key)
}

/**
 * If generates my_secret for the current campaign
 * @return {string}
 */
function generateMySecret(){
    if (!localStorage.getItem("kantcoin_org_secrets_base") || !current_campaign.ipns){
        return ""
    }
    let part1 = Number(hashCode(localStorage.getItem("kantcoin_org_secrets_base") + current_campaign.ipns)).toString(36)
    let part2 = Number(hashCode(current_campaign.ipns + localStorage.getItem("kantcoin_org_secrets_base"))).toString(36)
    let part3 = Number(hashCode(localStorage.getItem("kantcoin_org_secrets_base").split("").reverse().join("") + current_campaign.ipns.split("").reverse().join(""))).toString(36)
    let part4 = Number(hashCode(current_campaign.ipns.split("").reverse().join("") + localStorage.getItem("kantcoin_org_secrets_base").split("").reverse().join(""))).toString(36)

    return part1 + part2 + part3 + part4
}

/**
 * To store the enode of a group chairperson
 */
function sendStoreEnodeMessage(){
    let user = sessionStorage.getItem("kantcoin_org_user")
    let key = JSON.parse(sessionStorage.getItem("kantcoin_org_key"))

    if (!user || !wallet.address){
        Materialize.toast(klang.no_vault_opened, 3000, 'rounded')
        return
    }
    if (!current_campaign.id){
        Materialize.toast(klang.no_campaign_opened, 3000, 'rounded')
        return
    }

    whatIsMyEnode().then(function(){
        //Open it now to avoid popup blockers
        openTor2webPopup()

        //To prove the origin of the message
        let aux_wallet = new ethers.Wallet(wallet.privateKey)
        let signature = aux_wallet.signMessage(current_campaign.id)
        let payload_json = {address: wallet.address, enode: fullEnode(), signature: signature}
        let payload = JSON.stringify(payload_json)

        let onion = printableChars(the_contract.getTor(the_contract.chairperson(), 0))
        let public_key = ""

        let i = 1
        let part = ""
        do {
            part = the_contract.getTor(the_contract.chairperson(), i)
            if (notNullChars(part)) {
                public_key += web3_aux.toAscii(part)
            }
            i++
        } while (notNullChars(part))

        sendTorMessage(STORE_ENODE, payload, onion, public_key.substring(0, 1027))
    })
}

/**
 * Send an anonymous message via Tor
 */
async function sendTorMessage(topic, payload, onion, pubkey){
    let local_query = ""
    let remote_query = ""

    //Encrypting the payload
    let bytes_payload = convertStringToArrayBufferView(payload)
    let public_key = convertStringToArrayBufferView(pubkey)

    let encrypted_slices = []
    for (let i = 0; i * 100 < bytes_payload.length; i++){
        //This algorithm has a limitation of encrypting only 106 bytes at once
        let encrypted_bytes = await ntru.encrypt(bytes_payload.slice(i * 100, ((i+1) * 100 > bytes_payload.length ? bytes_payload.length : (i+1) * 100)), public_key)
        encrypted_slices[i] = convertArrayBufferViewtoString(encrypted_bytes)
    }

    switch (topic){
        case REGISTER_VOTER:
            local_query = "/queryRegisterVoterHTMLLocal="
            remote_query = "/queryRegisterVoterHTML="
            break
        case VOTE:
            local_query = "/querySendVoteHTMLLocal="
            remote_query = "/querySendVoteHTML="
            break
        case STORE_ENODE:
            local_query = "/queryStoreEnodeHTMLLocal="
            remote_query = "/queryStoreEnodeHTML="
            break
        case STORE_GROUP:
            local_query = "/queryStoreGroupHTMLLocal="
            remote_query = "/queryStoreGroupHTML="
            break
        case ENTER_GROUP:
            local_query = "/queryEnterGroupHTMLLocal="
            remote_query = "/queryEnterGroupHTML="
            break
        case CONFIRMATION:
            local_query = "/queryConfirmHTMLLocal="
            remote_query = "/queryConfirmHTML="
            break
    }

    let data = web3_aux.fromAscii(encrypted_slices.join(THE_AND))
    if (using_local_server){
        if (tor2web_page.location.href){
            tor2web_page.location.href = "http://" + localhost127 + ":1988/querySendTorRequest=" + onion + local_query + "data=" + data + "&onion_address=" + onion + "&opener=" + window.location.href.replace("/#","")
            last_tor2web_location = "http://" + localhost127 + ":1988/querySendTorRequest=" + onion + local_query + "data=" + data + "&onion_address=" + onion + "&opener=" + window.location.href.replace("/#","")
        } else{
            tor2web_page.location = "http://" + localhost127 + ":1988/querySendTorRequest=" + onion + local_query + "data=" + data + "&onion_address=" + onion + "&opener=" + window.location.href.replace("/#","")
            last_tor2web_location = "http://" + localhost127 + ":1988/querySendTorRequest=" + onion + local_query + "data=" + data + "&onion_address=" + onion + "&opener=" + window.location.href.replace("/#","")
        }
    } else if (using_tor_browser){
        tor2web_page.location.href = "http://" + onion + remote_query + "opener=" + window.location.href
        tor2web_message.href = "http://" + onion
        last_tor2web_location = "http://" + onion + remote_query + "opener=" + window.location.href
    } else {
        tor2web_page.location.href = "https://" + onion.replace(".onion", tor_provider) + remote_query + "opener=" + window.location.href
        tor2web_message.href = "https://" + onion.replace(".onion", tor_provider)
        last_tor2web_location = "https://" + onion.replace(".onion", tor_provider) + remote_query + "opener=" + window.location.href
    }
    tor2web_message.data = data
}

/**
 * It sets the variable the_donations_contract
 */
function setTheDonationsContract(){
    if (web3_mainnet.eth && current_campaign.donations_contract){
        let ABI = DONATIONS_CONTRACT
        let generic_contract = web3_mainnet.eth.contract(ABI)
        the_donations_contract = generic_contract.at(current_campaign.donations_contract)
        //In order to execute the contract methods, we need to set the default account
        web3_mainnet.eth.defaultAccount = wallet.address.toLowerCase()
    }
}

/**
 * Group chairpersons can insert their tor addresses and receive messages
 * Each time it is called a new public key is inserted into the blockchain
 */
async function addTorAddressIntoBlockchain(){
    let public_key = ""
    if (!localStorage.getItem("kantcoin_tor_pubkey")){
        //Using this algorithm because it is meant to be quantum computers resistant
        let keyPair = await ntru.keyPair()

        public_key = convertArrayBufferViewtoString(keyPair.publicKey)
        let private_key = convertArrayBufferViewtoString(keyPair.privateKey)
        localStorage.setItem("kantcoin_tor_pubkey", public_key)
        localStorage.setItem("kantcoin_tor_privkey", private_key)
    } else {
        public_key = localStorage.getItem("kantcoin_tor_pubkey")
    }

    if (the_contract.getTor(wallet.address.toLowerCase(), 0) == web3_aux.fromAscii(my_onion_address)){
        return
    }

    the_contract.defineTor(wallet.address.toLowerCase(), 0, web3_aux.fromAscii(my_onion_address))
    for (let i = 0; i * 32 < public_key.length; i++){
        let end = (i + 1) * 32 < public_key.length ? (i + 1) * 32 : public_key.length
        the_contract.defineTor(wallet.address.toLowerCase(), i + 1, web3_aux.fromAscii(public_key.substring(i * 32, end)))
    }
}

/**
 * It gets the user's Hidden Service address
 */
function whatIsMyTor(){
    let request = new XMLHttpRequest()
    request.addEventListener("load", async function() {
        if (this.responseText != "error" && this.responseText != "") {
            my_onion_address = this.responseText.substring(0, 22)
        }
    })

    request.open('GET', "http://" + localhost127 + ":1985/queryGetHiddenServiceHostname=", true)
    request.send()
}

/**
 * Getting user's ip in order to figure out the full enode
  We have to obtain it via third party services
 */
function whatIsMyIp(){
    if (enode_ip){
        return
    }

    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        if (this.responseText.indexOf("{") == 0) {
            jsonResponse = JSON.parse(this.responseText)
            enode_ip = jsonResponse.ip
        }
    })

    request.open('GET', "http://" + localhost127 + ":1985/queryMyIP=", true)
    request.send()
}

/**
 * Getting the full enode
 * In order to send it to the campaign creator and insert it into de enodes IPNS page
 * @returns {Promise}
 */
function whatIsMyEnode(){
    return new Promise (resolve => {
        let request = new XMLHttpRequest()
        request.addEventListener("load", function() {
            if (this.responseText.indexOf("enode://") == 0) {
                enode_without_ip = this.responseText
                resolve()
            }
        })

        request.addEventListener("error", function() {
            console.log("Error while getting the enode")
            resolve()
        })

        let role = ""
        if(current_campaign.address == wallet.address){
            role = "001"
        } else if(enode_port != ""){
            role = enode_port
        } else {
            role = "999"
        }
        let rpc_port = "8" + role

        request.open('GET', "http://" + localhost127 + ":1985/queryEnode=" + rpc_port, true)
        request.send()
    })
}

/**
 * Click the menu item to go to the profile page
 */
function logoContainerClick(){
    logoClick()
    $("#logo_container").click()
}

/**
 * Click the menu item to go to the campaign info page
 */
function campaignInfoMenuItemClick(){
    campaignInfoClick()
    $("#campaign_info_menu_item").click()
}

/**
 * Clean the input fields
 */
function clearCreateCampaignFields(){
    campaign_name_input.value = ""
    campaign_description_input.value = ""
    image_input.value = ""
    image_input.className = image_input.className.replace("invalid","").replace("valid","")
    campaign_external_page_input.value = ""
    campaign_external_page_input.className = campaign_external_page_input.className.replace("invalid","").replace("valid","")
    final_date_input.value = ""
    initial_date_input.value = ""
    prefix_voters_input.value = ""
    suffix_voters_input.value = ""
    regexp_input.value = ""
    accepted_donation_values.value = ""
    confirmation_address.value = ""
    how_many_enodes_input.value = ""
    $('#country_select').val('AF')
    $('#country_select').material_select()
    $('#votation_rounds_select').val('')
    $('#votation_rounds_select').material_select()
    $('#donation_rounds_select').val('')
    $('#donation_rounds_select').material_select()
}

/**
 * Clean the input fields
 */
function clearAdminCampaign(){
    insert_candidates_textarea.value = ""
    insert_parties_textarea.value = ""
    insert_questions_textarea.value = ""
    insert_group_categories_textarea.value = ""
    observers_enodes_textarea.value = ""
    create_round_id.value = ""
    how_many_groups.value = ""
    groups_value.value = ""
    groups_chairperson.value = ""
    insert_authorized_voters_textarea.value = localStorage.getItem("authorized_voters")
}

/**
 * Returns the enode ready to be used
 * @returns {string}
 */
function fullEnode() {
    return enode_without_ip.replace("[::]", enode_ip)
}

/**
 * Some functions are only called when using local server
 * @returns {boolean}
 */
function isUsingLocalServer(){
    if (window.location.href.startsWith("http://localhost:1985") || window.location.href.startsWith("http://127.0.0.1:1985")){
        my_account_menu_li.removeAttribute("hidden")
        using_local_server = true
    } else {
        create_campaign_li.style.display = "none"
        using_local_server = false
    }
}

/**
 * Get current information of the campaign from the blockchain and store it into the server
 * @returns {Promise}
 */
function storeCampaignInfo(){
    if (the_contract){
        let info = {
            chairperson: "",
            mgz: 0,
            votation_rounds: 0,
            donation_rounds: 0,
            remaining_votation_rounds: 0,
            remaining_donation_rounds: 0,
            current_ballot: 0,
            current_vote_message: "",
            chairperson_tor: {},
            how_many_groups: 0,
            how_many_ballots: 0,
            ballots: [],
            votes_per_ballot_candidate_category: [],
            preferred_ipfs_provider: ipfs_provider,
            preferred_tor_provider: tor_provider
        }

        info.chairperson = the_contract.chairperson()
        info.mgz = the_contract.mgz().toNumber()
        info.votation_rounds = the_contract.votationRounds().toNumber()
        info.donation_rounds = the_contract.donationRounds().toNumber()
        info.remaining_donation_rounds = the_contract.remainingDonationRounds().toNumber()
        info.remaining_votation_rounds = the_contract.remainingVotationRounds().toNumber()
        info.current_ballot = the_contract.currentBallot().toNumber()
        info.current_vote_message = printableChars(the_contract.currentVoteMessage())
        info.how_many_ballots = the_contract.howManyBallots().toNumber()
        info.how_many_groups = the_contract.howManyGroups().toNumber()
        info.can_cancel = the_contract.canCancel()

        if (localStorage.getItem("stopping_accession_to_groups") == "true"){
            info.stopping_accession_to_groups = (only_accepted_groups.length > 0 ? "stopping" : "stopped")
        }

        //Getting the tor address
        let onion = ""
        let public_key = ""

        if (notNullChars(info.chairperson) && notNullChars(the_contract.getTor(info.chairperson, 0))){
            onion = printableChars(the_contract.getTor(info.chairperson, 0))
            let i = 1
            let part = ""
            do {
                part = the_contract.getTor(info.chairperson, i)
                if (notNullChars(part)) {
                    public_key += web3_aux.toAscii(part)
                }
                i++
            } while (notNullChars(part))
        }

        info.chairperson_tor.onion = onion
        info.chairperson_tor.public_key = public_key.substring(0, 1027)

        for (let j = 0; j < info.how_many_ballots; j++){
            let ballot = the_contract.ballots(j)

            info.ballots[j] = {}
            info.ballots[j].id = printableChars(ballot[0])
            info.ballots[j].closed = ballot[1]
            info.ballots[j].stopped = ballot[2]
            info.ballots[j].donations = ballot[3]
            info.ballots[j].how_many_candidates = the_contract.howManyCandidatesInBallot(j).toNumber()
            info.ballots[j].candidates = []

            for (let k = 0; k < info.ballots[j].how_many_candidates; k++){
                let candidate = the_contract.getCandidate(j, k)

                info.ballots[j].candidates[k] = {}
                info.ballots[j].candidates[k].ipfs = fromBytes32ToIPFS(candidate[0])
                info.ballots[j].candidates[k].count = candidate[1].toNumber()
                info.ballots[j].candidates[k].donee = candidate[2]
            }
        }

        for (let l = 0; l < info.how_many_ballots; l++){
            info.votes_per_ballot_candidate_category[l] = []
            for (let m = 0; m < info.ballots[l].how_many_candidates; m++){
                info.votes_per_ballot_candidate_category[l][m] = {}

                let keys = group_categories_map.keys()
                let key = {}
                do{
                    key = keys.next()
                    if (!key.done){
                        info.votes_per_ballot_candidate_category[l][m][key.value] = the_contract.getVotesPerBallotCandidateCategory(l, m, web3_aux.fromAscii(key.value)).toNumber()
                    }
                }
                while (!key.done)
            }
        }

        return new Promise(resolve => {
            let request = new XMLHttpRequest()
            let bytes_info = web3_aux.fromAscii(JSON.stringify(info))

            request.addEventListener("load", function() {
                if (this.responseText == "complete"){
                    resolve()
                }
            })

            request.addEventListener("error", function() {
                console.log("Error while storing campaign info")
                resolve()
            })

            request.open('GET', "http://" + localhost127 + ":1985/queryStoreCampaignInfo=" + bytes_info, true)
            request.send()
        })
    } else {
        console.log("Error. Trying to store campaign info without a contract")
        return new Promise(resolve => {resolve()})
    }
}

/**
 * It stores IPFS data to be accessed by voters when searching the campaign
 * @returns {Promise}
 */
function storeCampaignIPFSInfo(){
    return new Promise(resolve => {
        let request = new XMLHttpRequest()

        let info = {}
        if (localStorage.getItem("kantcoin_org_current_campaign")){
            info.profile = JSON.parse(localStorage.getItem("kantcoin_org_current_campaign"))
        }
        if (localStorage.getItem("questions_ipfs_page")){
            info.questions = JSON.parse(localStorage.getItem("questions_ipfs_page"))
        }
        if(localStorage.getItem("parties_ipfs_page")){
            info.parties = JSON.parse(localStorage.getItem("parties_ipfs_page"))
        }
        if(localStorage.getItem("group_categories_ipfs_page")){
            info.gcategories = JSON.parse(localStorage.getItem("group_categories_ipfs_page"))
        }
        if(localStorage.getItem("groups_ipfs_page")){
            info.groups = JSON.parse(localStorage.getItem("groups_ipfs_page"))
        }
        if(localStorage.getItem("candidates_ipfs_page_0")){
            info.candidates0 = JSON.parse(localStorage.getItem("candidates_ipfs_page_0"))
        }
        if(localStorage.getItem("candidates_ipfs_page_1")){
            info.candidates1 = JSON.parse(localStorage.getItem("candidates_ipfs_page_1"))
        }
        if(localStorage.getItem("candidates_ipfs_page_2")){
            info.candidates2 = JSON.parse(localStorage.getItem("candidates_ipfs_page_2"))
        }
        if(localStorage.getItem("candidates_ipfs_page_3")){
            info.candidates3 = JSON.parse(localStorage.getItem("candidates_ipfs_page_3"))
        }
        if(localStorage.getItem("candidates_ipfs_page_4")){
            info.candidates4 = JSON.parse(localStorage.getItem("candidates_ipfs_page_4"))
        }

        let bytes_info = web3_aux.fromAscii(JSON.stringify(info))

        request.addEventListener("load", function() {
            if (this.responseText == "complete"){
                resolve()
            }
        })

        request.addEventListener("error", function() {
            console.log("Error while storing campaign IPFS data")
            resolve()
        })

        request.open('GET', "http://" + localhost127 + ":1985/queryStoreCampaignIPFSInfo=" + bytes_info, true)
        request.send()
    })
}

/**
 * Get current information of a group from the blockchain and store it into the server
 * @returns {Promise}
 */
function storeGroupInfo(g){
    if (the_contract){
        let info = {
            index: g,
            chairperson: "",
            chairperson_tor: {},
            category: "",
            value: 0,
            size: 0,
            closed: false,
            voters: [],
            pubkeys: [],
            ballots: [],
            nonces: {}
        }

        let group = the_contract.groups(g)
        info.chairperson = group[0]
        info.category = printableChars(group[1])
        info.value = group[2].toNumber()
        info.size = group[3].toNumber()
        info.closed = group[4]

        //Getting the tor address
        let onion = ""
        let public_key = ""

        if (notNullChars(info.chairperson) && notNullChars(the_contract.getTor(info.chairperson, 0))){
            onion = printableChars(the_contract.getTor(info.chairperson, 0))
            let i = 1
            let part = ""
            do {
                part = the_contract.getTor(info.chairperson, i)
                if (notNullChars(part)) {
                    public_key += web3_aux.toAscii(part)
                }
                i++
            } while (notNullChars(part))
        }

        info.chairperson_tor.onion = onion
        info.chairperson_tor.public_key = public_key.substring(0, 1027)

        info.voters = the_contract.getGroupVoters(g)
        info.pubkeys = the_contract.getGroupPubkeys(g)

        let mgz = the_contract.mgz().toNumber()
        for (let v = 0; v < mgz; v++){
            if(notNullChars(info.voters[v])){
                info.nonces[info.voters[v].substring(2).toLowerCase()] = web3.eth.getTransactionCount(info.voters[v])
            }
        }

        let how_many_ballots = the_contract.howManyBallots().toNumber()
        for (let j = 0; j < how_many_ballots; j++){
            info.ballots[j] = {}
            info.ballots[j].votes = the_contract.getVotes(j, g)
            info.ballots[j].confirmations = the_contract.getConfirmations(j, g)
            info.ballots[j].committed = []
            for (let k = 0; k < mgz; k++){
                info.ballots[j].committed[k] = the_contract.committed(j, g, k)
            }
        }

        return new Promise(resolve => {
            let request = new XMLHttpRequest()
            request.addEventListener("load", function() {
                if (this.responseText == "complete"){
                    resolve()
                }
            })
            request.addEventListener("error", function() {
                resolve()
            })

            let bytes_info = web3_aux.fromAscii(JSON.stringify(info))
            request.open('GET', "http://" + localhost127 + ":1985/queryStoreGroupInfo=index=" + g + "&voters=" + info.voters.join(",") + "&info=" + bytes_info, true)
            request.send()
        })
    } else{
        console.log("Error. Trying to store group info without a contract")
        return new Promise(resolve => {resolve()})
    }
}

/**
 * It calls the storeGroupInfo for each group in the blockchain
 */
function storeAllGroupsInfo(){
    if (the_contract) {
        let how_many_groups = the_contract.howManyGroups()

        for (let i = 0; i < how_many_groups; i++){
            storeGroupInfo(i)
        }
    }
}

/**
 * It calls admin.appPeer 16 times (or less)
 */
async function addPeers(){
    let rand_enodes = shuffle(all_enodes.split(","))
    let times = all_enodes.split(",").length
    if (times > 16){
        times = 16
    }

    let role = ""
    if(current_campaign.address == wallet.address){
        role = "001"
    } else if(enode_port != ""){
        role = enode_port
    } else {
        role = "999"
    }
    let rpc_port = "8" + role

    for (let i = 0; i < times; i++){
        if (!rand_enodes || rand_enodes[i] == fullEnode()){
            continue
        }
        let request = new XMLHttpRequest()
        request.open('GET', "http://" + localhost127 + ":1985/queryAddPeer=" + rand_enodes[i] + THE_AND + rpc_port, true)
        request.send()
        await sleep(WAIT_TO_ADD_PEER)
    }
}

/**
 * This function gets info from blockchain regarding the voter's group
 * @returns {Promise}
 */
function updateMyGroupInfo(){
    //Update only if the window is focused
    if(!document.hasFocus()){
        return new Promise(resolve => {resolve()})
    }

    if (mygroup_index == "-1" || mygroup_index == "-2" || mygroup_index == "-3"){
        mygroup_info_json = {no_group: true}
        whatIsMyGroupIndex()
        return new Promise(resolve => {resolve()})
    }

    let onionAddr = getOnionAddress()
    if (!onionAddr){
        console.log("Error while updating mygroup info - no onion address")
        return new Promise(resolve => {resolve()})
    }

    let host = ""

    return new Promise(resolve => {
        let request = new XMLHttpRequest()
        request.addEventListener("load", function() {
            if (this.responseText.indexOf("[group_info_error]") < 0 && web3_aux.toAscii(this.responseText).startsWith("{")) {
                if(mygroup_info_json.no_group){
                    if (header_title.innerHTML == klang.candidates){
                        sleep(1000).then(newCandidatesPage)
                    }
                    if (enter_group_button_disabled){
                        wait_category = ""
                        enter_group_button_disabled = false
                        if (header_title.innerHTML == klang.groups){
                            sleep(1000).then(newGroupCategoriesPage)
                        }
                    }

                    last_signature = ""
                    if (current_campaign.id){
                        localStorage.setItem("kantcoin_last_signature_" + current_campaign.id, "")
                    }
                }

                mygroup_info_json = JSON.parse(web3_aux.toAscii(this.responseText))

                let stored_mygroup_info_json = mygroup_info_json
                stored_mygroup_info_json.stored = true
                localStorage.setItem("mygroup_info_json", JSON.stringify(stored_mygroup_info_json))

                updateMyVote()
                resolve()
            }
        })

        request.addEventListener("error", function() {
            console.log("Error while updating mygroup info")
            resolve()
        })

        if (using_local_server){
            host = "http://" + localhost127 + ":1988/querySendTorRequest=" + onionAddr
        } else if (using_tor_browser){
            host = "http://" + onionAddr
        } else {
            host = "https://" + onionAddr.replace(".onion", tor_provider)
        }

        request.open('GET', host + "/queryGetGroupInfo=index=" + mygroup_index, true)
        request.send()
    })
}

/**
 * It checks if the number of voters in the voter's group changed. If so, it sends a message to the worker to generate a new vote
 */
function updateMyVote(force_update){
    if (!mygroup_info_json.voters || !current_campaign.id || !localStorage.getItem("kantcoin_mygroup_vote_message_" + current_campaign.id) || !mygroup_info_json.pubkeys){
        return
    }

    let how_many = 0
    for (let i = 0; i < mygroup_info_json.voters.length; i++){
        if (notNullChars(mygroup_info_json.voters[i])){
            how_many++
        }
    }

    if (how_many != how_many_voters_mygroup || force_update){
        let current_ballot = campaign_info_json.current_ballot
        let vote_message = localStorage.getItem("kantcoin_mygroup_vote_message_" + current_campaign.id) + "-" + current_ballot
        let pubkeys = makePubkeys(mygroup_info_json.pubkeys)
        let keypair = sessionStorage.getItem("kantcoin_org_key")

        let arguments_json = {vote_message: vote_message, pubkeys: pubkeys, keypair: keypair}

        if (vote_message && mygroup_info_json.pubkeys && keypair && current_ballot !== undefined){
            signer.postMessage(JSON.stringify(arguments_json))
            how_many_voters_mygroup = how_many
        }
    }
}

/**
 * The campaign owner stores a map with all voters linked with their groups. It is important to know this index in order to interact with the blockchain
 * @returns {Promise}
 */
function whatIsMyGroupIndex(){
    if (!wallet.address){
        mygroup_index = "-1"
        console.log("Error while getting mygroup index - no wallet")
        return new Promise(resolve => {resolve()})
    }
    let host = ""
    let onionAddr = getOnionAddress()
    if (!onionAddr){
        mygroup_index = "-1"
        console.log("Error while getting mygroup index - no onion address")
        return new Promise(resolve => {resolve()})
    }

    return new Promise(resolve => {
        let request = new XMLHttpRequest()
        request.addEventListener("load", function() {
            if (this.responseText.indexOf("[index_error]") < 0 && !Number.isNaN(this.responseText)){
                if(header_title.innerHTML == klang.campaign_info && mygroup_index != this.responseText){
                    sleep(3000).then(openCampaignPage)
                } else if (header_title.innerHTML == klang.candidates && mygroup_index != this.responseText){
                    sleep(3000).then(newCandidatesPage)
                }
                mygroup_index = (this.responseText != "error" && this.responseText != "[index_error]" ? this.responseText : "-1")
            }
            resolve()
        })

        request.addEventListener("error", function() {
            mygroup_index = "-1"
            console.log("Error while getting mygroup index")
            resolve()
        })

        if (using_local_server){
            host = "http://" + localhost127 + ":1988/querySendTorRequest=" + onionAddr
        } else if (using_tor_browser){
            host = "http://" + onionAddr
        } else {
            host = "https://" + onionAddr.replace(".onion", tor_provider)
        }

        request.open('GET', host + "/queryMyGroupIndex=" + wallet.address.toLowerCase(), true)
        request.send()
    })
}

/**
 * This function gets info from blockchain which should be displayed on candidates, voting, donations and statistics pages
 * @returns {Promise}
 */
function updateCampaignInfo(){
    //Update only if the window is focused
    if(!document.hasFocus()){
        return new Promise(resolve => {resolve()})
    }

    let host = ""
    let onionAddr = getOnionAddress()
    if (!onionAddr){
        console.log("Error while updating campaign - no onion address")
        return new Promise(resolve => {resolve()})
    }

    return new Promise(resolve => {
        let request = new XMLHttpRequest()
        request.addEventListener("load", function() {
            if (this.responseText.indexOf("[campaign_info_error]") < 0 && web3_aux.toAscii(this.responseText).startsWith("{")) {
                //Refreshing the "connecting" message
                if (header_title.innerHTML == klang.campaign_info && (isEmpty(campaign_info_json) || campaign_info_json.stored)){
                    sleep(500).then(openCampaignPage)
                }

                let aux_campaign_info_json = JSON.parse(web3_aux.toAscii(this.responseText))
                if (aux_campaign_info_json.current_ballot != campaign_info_json.current_ballot){
                    last_signature = ""
                    if (current_campaign.id){
                        localStorage.setItem("kantcoin_last_signature_" + current_campaign.id, "")
                    }
                    if (mygroup_info_json && !mygroup_info_json.no_group){
                        sleep(1000).then(function(){
                            updateMyVote(true)
                        })
                    }
                }

                campaign_info_json = JSON.parse(web3_aux.toAscii(this.responseText))

                //The campaign creator/group administrator can choose custom Tor and IPFS providers for a better voter experience
                if (!localStorage.getItem("tor_provider") && campaign_info_json.preferred_tor_provider){
                    tor_provider = campaign_info_json.preferred_tor_provider
                }
                if (!localStorage.getItem("ipfs_provider") && campaign_info_json.preferred_ipfs_provider){
                    ipfs_provider = campaign_info_json.preferred_ipfs_provider
                }

                let stored_campaign_info_json_str = JSON.stringify(campaign_info_json)
                let stored_campaign_info_json = JSON.parse(stored_campaign_info_json_str)
                stored_campaign_info_json.stored = true
                localStorage.setItem("campaign_info_json", JSON.stringify(stored_campaign_info_json))
                resolve()
            }
        })

        request.addEventListener("error", function() {
            console.log("Error while updating campaign")
            resolve()
        })

        if (using_local_server){
            host = "http://" + localhost127 + ":1988/querySendTorRequest=" + onionAddr
        } else if (using_tor_browser){
            host = "http://" + onionAddr
        } else {
            host = "https://" + onionAddr.replace(".onion", tor_provider)
        }

        request.open('GET', host + "/queryGetCampaignInfo=", true)
        request.send()
    })
}

/**
 * It returns the voter's group onion address when it is defined, and the campaign onion address when it is not
 * @returns {string}
 */
function getOnionAddress(){
    if (alternative_info_provider){
        return alternative_info_provider
    }
    if (!isEmpty(mygroup_info_json) && mygroup_info_json.chairperson_tor && mygroup_info_json.chairperson_tor.onion){
        return mygroup_info_json.chairperson_tor.onion
    }
    return current_campaign.onion
}

/**
 * It gets the vote message encrypted with my_secret
 */
function getVoteMessage(){
    get_vote_message_count -= 1
    if (get_vote_message_count < 0){
        clearInterval(get_vote_message_handler)
        get_vote_message_handler = 0
    }
    if (localStorage.getItem("kantcoin_mygroup_vote_message_" + current_campaign.id) || isEmpty(mygroup_info_json) || mygroup_info_json.no_group || isEmpty(campaign_info_json)){
        return
    }

    let onionAddr = campaign_info_json.chairperson_tor.onion
    if (!onionAddr){
        return
    }

    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        if (this.responseText != "error" && this.responseText != "") {
            let encrypted_message = this.responseText
            decrypt(my_secret, encrypted_message).then(function(message){
                localStorage.setItem("kantcoin_mygroup_vote_message_" + current_campaign.id, message)
                clearInterval(get_vote_message_handler)
                get_vote_message_handler = 0
            })
        }
    })

    let host = ""
    if (using_local_server){
        host = "http://" + localhost127 + ":1988/querySendTorRequest=" + onionAddr
    } else if (using_tor_browser){
        host = "http://" + onionAddr
    } else {
        host = "https://" + onionAddr.replace(".onion", tor_provider)
    }

    request.open('GET', host + "/queryGetVoteMessage=voter=" + wallet.address.toLowerCase() + "&group=" + mygroup_index, true)
    request.send()
}

/**
 * This function tells if the user is probably using the Tor browser
 * @returns {boolean}
 */
function probablyTor(){
    if (new Date().getTimezoneOffset() != 0){
        return false
    }
    if (navigator.plugins.length > 0){
        return false
    }
    if (navigator.userAgent.indexOf("Firefox") == -1){
        return false
    }
    if (window.innerWidth != window.screen.width || window.innerHeight != window.screen.height){
        return false
    }
    return true
}

/******************** Tools ********************/

/**
 * Sleep/Delay
 * @returns {Promise}
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * It receives an array of stringifyed JSONs and returns an array of JSONs
 * @param {string[]} array
 * @returns {Object[]}
 */
function parseToJSONArray(array) {
    let array2 = []
    array.forEach(function (value) {
        if (value){
            array2.push(JSON.parse(value))
        }
    })
    return array2
}

/**
 * To store ipfs addresses into the blockchain
 * @param {string} ipfs
 * @returns {string}
 */
function fromIPFSToBytes32(ipfs){
    let bytearray = bs58.decode(ipfs)
    let hex_string = toHexString(bytearray)
    return "0x" + hex_string.substring(4)
}

/**
 * Obtaining the IPFS address from the stored byte32 value
 * @param {string} bytes32
 * @returns {number[]}
 */
function fromBytes32ToIPFS(bytes32){
    bytes32 = bytes32.replace("0x","")
    let bytes = Buffer.from('1220' + bytes32, 'hex')
    return bs58.encode(bytes)
}

/**
 * To store ipfs addresses into the blockchain
 * @param {string} number
 * @returns {string}
 */
function fromFirstNumberToBytes32(number){
    let bytearray = bs58.decode(number.substring(1))
    let hex_string = toHexString(bytearray)
    return "0x" + hex_string
}

/**
 * Convert a byte array in a hex string
 * @param {number[]} byte_array
 * @returns {string}
 */
function toHexString(byte_array) {
    return Array.from(byte_array, function(byte) {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2)
    }).join('')
}

/**
 * Java-style hashcode
 * @param {string} str
 * @returns {number}
 */
function hashCode(str) {
    let hash = 0, i, chr
    if (str.length === 0) return hash
    for (let i = 0; i < str.length; i++) {
        chr   = str.charCodeAt(i)
        hash  = ((hash << 5) - hash) + chr
        hash |= 0 // Convert to 32bit integer
    }
    //return only positive numbers
    return hash + 2147483648
}

/**
 * For search queries
 * @param {string} name
 * @param {string} url
 * @returns {string}
 */
function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href
    }
    name = name.replace(/[\[\]]/g, "\\$&")
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url)
    if (!results) {
        return null
    }
    if (!results[2]) {
        return ''
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "))
}

/**
 * This function 'cleans' the profile html (removes unnecessary tags)
 * @param {Object} dom
 */
function strip_tags (dom) {
    let elements = dom.getElementsByTagName("*")

    for (let i = elements.length; i-->0;){
        if (['div','table','h1','h2','h3','h4','h5','h6','font', 'a','li','ul','ol','p','b','i','u','span','br','td','tr','tbody','th','thead','img', 'body', 'head', 'html', 'pre', 'hr', 'blockquote', 'video', 'source', 'audio'].indexOf(elements[i].tagName.toLowerCase()) < 0){
            elements[i].parentNode.removeChild(elements[i])
        } else {
            removeAllAttrs(elements[i])
            strip_tags(elements[i])
        }
    }
}

/**
 * This function 'cleans' the profile html too (removes unnecessary attributes)
 * @param {Object} element
 */
function removeAllAttrs(element) {
    for (let i= element.attributes.length; i-->0;){
        if (['href','style','class','color ','target','data-filename','src', 'type', 'width', 'height', 'controls', 'alt'].indexOf(element.attributes[i].name.toLowerCase()) < 0){
            element.removeAttributeNode(element.attributes[i])
        } else if (element.attributes[i].name.toLowerCase() == 'href'){
            let address = element.attributes[i].value.toLowerCase()
            if ((!address.indexOf("https://") == 0 && !address.indexOf("http://") == 0)||address.indexOf("localhost") >= 0 || address.indexOf("127.0.0.1") >= 0 || address.indexOf("(") >= 0){
                element.removeAttributeNode(element.attributes[i])
            }
        }  else if (element.attributes[i].name.toLowerCase() == 'style'){
            let style = element.attributes[i].value.toLowerCase()
            if (style.indexOf("url") >= 0 || style.indexOf("absolute") >= 0){
                element.removeAttributeNode(element.attributes[i])
            }
        }   else if (element.attributes[i].name.toLowerCase() == 'class'){
            let the_class = element.attributes[i].value.toLowerCase()
            if (the_class.toLowerCase().indexOf("responsive-table") < 0 || the_class.toLowerCase().indexOf("responsive-img")){
                element.removeAttributeNode(element.attributes[i])
            }
        }  else if (element.attributes[i].name.toLowerCase() == 'target'){
            element.attributes[i].value = "_blank"
        }
    }
}

/**
 * Use it with payloads and keys
 * @param {string} str
 * @returns {number[]}
 */
function convertStringToArrayBufferView(str){
    let bytes = new Uint8Array(str.length)
    for (let iii = 0; iii < str.length; iii++)
    {
        bytes[iii] = str.charCodeAt(iii)
    }

    return bytes;
}

/**
 * Use it with payloads and keys
 * @param {number[]} buffer
 * @returns {string}
 */
function convertArrayBufferViewtoString(buffer){
    let str = ""
    for (let iii = 0; iii < buffer.byteLength; iii++)
    {
        str += String.fromCharCode(buffer[iii])
    }

    return str;
}

/**
 * It randomizes an array
 * @param {Object[]} array
 * @returns {Object[]}
 */
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    return array
}

/**
 * It returns only printable chars
 * @param {string} hex_str
 * @returns {string}
 */
function printableChars(hex_str){
    return web3_aux.toAscii(hex_str).replace(/[^\x20-\x7E]/g, '')
}

/**
 * It removes the zeros from the hex string
 * @param {string} hex_str
 * @returns {string}
 */
function notNullChars(hex_str){
    return web3_aux.toAscii(removeDoubleZeros(hex_str))
}

/**
 * It removes the hexadecimal zeros
 * @param {string} hex_str
 * @return {string}
 */
function removeDoubleZeros(hex_str){
    if (hex_str.length % 2 != 0){
        return ""
    }

    let hex_str_without_zeros = ""
    for (let i = 0; i < (hex_str.length / 2); i++){
        let two_digits = "" + hex_str[2*i] + hex_str[(2*i) + 1]

        if (two_digits != "00"){
            hex_str_without_zeros += two_digits
        }
    }

    return hex_str_without_zeros
}

/**
 * It verifies if an javascript object is empty
 * @param {Object} obj
 * @returns {boolean}
 */
function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false
    if (obj.length === 0)  return true

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (let key in obj) {
        if (hasOwnProperty.call(obj, key)) return false
    }

    return true
}

/**
 * It generates a random string with N chars
 * @param {number} n
 * @returns {string}
 */
function randomString(n) {
    let text = ""
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let i = 0; i < n; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
}

/**
 * It is used for backups
 * @param {Map} map
 * @returns {string}
 */
function fromMapToJSONStr(map){
    let json = {}
    let keys = map.keys()
    let values = map.values()

    let key = {}
    let value = {}
    do{
        key = keys.next()
        value = values.next()

        if (!key.done){
            json[key.value] = value.value
        }
    }
    while (!key.done)

    return JSON.stringify(json)
}

/**
 * It is used to restore maps from backups
 * @param {string} json_str
 * @returns {Map}
 */
function fromJSONStrToMap(json_str){
    let map = new Map()
    let json = JSON.parse(json_str)

    for (key in json) {
        map.set(key, json[key])
    }

    return map
}

/********************  AES encryption tools ********************/

/**
 * Encodes a utf8 string as a byte array.
 * @param {string} str
 * @returns {Uint8Array}
 */
function str2buf(str) {
    if (window.TextEncoder) {
        return new TextEncoder('utf-8').encode(str)
    }
    let utf8 = encodeURIComponent(str)
    let result = new Uint8Array(utf8.length)
    for (let i = 0; i < utf8.length; i++) {
        result[i] = utf8.charCodeAt(i)
    }
    return result
}

/**
 * Decodes a byte array as a utf8 string.
 * @param {Uint8Array} buffer
 * @returns {String}
 */
function buf2str(buffer) {
    if (window.TextDecoder) {
        return new TextDecoder("utf-8").decode(buffer)
    }
    let result = ""
    for (let i = 0; i < buffer.length; i++) {
        result += String.fromCharCode(buffer[i])
    }
    return result
}

/**
 * Decodes a string of hex to a byte array.
 * @param {string} hexStr
 * @returns {Uint8Array}
 */
function hex2buf(hexStr) {
    return new Uint8Array(hexStr.match(/.{2}/g).map(h => parseInt(h, 16)))
}

/**
 * Encodes a byte array as a string of hex.
 * @param {Uint8Array} buffer
 * @returns {String}
 */
function buf2hex(buffer) {
    return Array.prototype.slice
        .call(new Uint8Array(buffer))
        .map(x => [x >> 4, x & 15])
        .map(ab => ab.map(x => x.toString(16)).join(""))
        .join("")
}

/**
 * Given a passphrase, this generates a crypto key
 * using `PBKDF2` with SHA256 and 1000 iterations.
 * If no salt is given, a new one is generated.
 * The return value is an array of `[key, salt]`.
 * @param {string} passphrase
 * @param {UInt8Array} salt [salt=random bytes]
 * @returns {Promise<[CryptoKey,UInt8Array]>}
 */
function deriveKey(passphrase, salt) {
    salt = salt || crypto.getRandomValues(new Uint8Array(8))
    return crypto.subtle
        .importKey("raw", str2buf(passphrase), "PBKDF2", false, ["deriveKey"])
        .then(key =>
            crypto.subtle.deriveKey(
                { name: "PBKDF2", salt, iterations: 1000, hash: "SHA-256" },
                key,
                { name: "AES-GCM", length: 256 },
                false,
                ["encrypt", "decrypt"],
            ),
        )
        .then(key => [key, salt])
}

/**
 * Given a passphrase and some plaintext, this derives a key
 * (generating a new salt), and then encrypts the plaintext with the derived
 * key using AES-GCM. The ciphertext, salt, and iv are hex encoded and joined
 * by a "-". So the result is `"salt-iv-ciphertext"`.
 * @param {string} passphrase
 * @param {string} plaintext
 * @returns {Promise<String>}
 */
function encrypt(passphrase, plaintext) {
    const iv = crypto.getRandomValues(new Uint8Array(12))
    const data = str2buf(plaintext)
    return deriveKey(passphrase).then(([key, salt]) =>
        crypto.subtle
            .encrypt({ name: "AES-GCM", iv }, key, data)
            .then(ciphertext => `${buf2hex(salt)}-${buf2hex(iv)}-${buf2hex(ciphertext)}`),
    )
}

/**
 * Given a key and ciphertext (in the form of a string) as given by `encrypt`,
 * this decrypts the ciphertext and returns the original plaintext
 * @param {string} passphrase
 * @param {string} saltIvCipherHex
 * @returns {Promise<String>}
 */
function decrypt(passphrase, saltIvCipherHex) {
    const [salt, iv, data] = saltIvCipherHex.split("-").map(hex2buf)
    return deriveKey(passphrase, salt)
        .then(([key]) => crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data))
        .then(v => buf2str(new Uint8Array(v)))
}

/**
 * It receives a string containing a list of integers, example: "1,2,3,4", and returns an array of integers
 * @param {string} string_list
 * @returns {int[]}
 */
function parseIntArray(string_list){
    if (!string_list){
        return []
    }

    let array_of_strings = string_list.split(",")
    let array_of_integers = []

    for (let i = 0; i < array_of_strings.length; i++){
        array_of_integers[i] = parseInt(array_of_strings[i])
    }

    return array_of_integers
}