/*
  Tournament Winner 
  
  There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. 
  Teams compete in a round robin, where each team faces off against all other teams. 
  Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. 
  In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. 
  The winner of the tournament is the team that receives the most amount of points. 
  Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. 
  The input arrays are named competitions and results , respectively. 
  The competitions array has elements in the form of [homeTeam, awayTeam] , where each team is a string of at most 30 characters representing the name of the team. 
  The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results [l] denotes the winner of competitions [i , where a 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won. 
  It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams. 

*/

// Each team competes against all other teams once in a sequential order (round robin)
// Only 2 teams compete at any given time

// Time Complexity O(n) where n is the number of competitions
// Space Complexity O(m) where m is the number of teams

function tournamentWinner(competitions, results) {
  var points = { "": 0 };
  var leader = "";

  for (var i = 0; i < competitions.length; i++) {
    var competition = competitions[i];
    var result = results[i];
    var winnerIdx = result === 1 ? 0 : 1;
    var winner = competition[winnerIdx];

    if (!points[winner]) points[winner] = 0;

    points[winner] = points[winner] + 3;
    if (points[winner] > points[leader]) {
      leader = winner;
    }
  }

  return leader;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
