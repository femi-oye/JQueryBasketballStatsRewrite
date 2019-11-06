// create an empty array of Stats
const statsDB = [];

// create a class called Stats
class Stats {
    constructor (name, fieldGoalAve, threePointsMade, year) {
        this.name = name;
        this.fieldGoalAve = fieldGoalAve;
        this.threePointsMade = threePointsMade;
        this.year = year;
   
    } 
}

// function that grabs user input
function getStats(){
    if ($('#nameIn').val() == "" || $('#fieldGoalAveIn').val() == "" || $('#threePointsMadeIn').val() == "" || $('#yearIn').val() == ""){
        alert("Fields cannot be empty");
    } 
    else{
        addToStat($('#nameIn').val(), $('#fieldGoalAveIn').val(), $('#threePointsMadeIn').val(), $('#yearIn').val());
        ($('#nameIn').val(""), $('#fieldGoalAveIn').val(""), $('#threePointsMadeIn').val(""), $('#yearIn').val(""));
    }
} // end getStats

$ (document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $ ('#submitBtn').on('click', getStats);
 
} // end readyNow

// function to create new player and push to Stats array for user input from getStats
function addToStat(name, FG, threePT, year){
    statsDB.push(new Stats (name, FG, threePT, year));
    console.log(statsDB);
    displayStat();

    return true;

}
// function to display stats to user
function displayStat(){
    let outputEl = $('#displayDiv');
    outputEl.empty();
    for (player of statsDB){
        outputEl.append(`<li> ${player.name} </li> <li> ${player.fieldGoalAve} </li> <li> ${player.threePointsMade} </li> <li> ${player.year} </li>`);

    }
    return true;

} // end displayStat

// Another function to find a player's stat by field goal ave
function findStat(playerStat){
    for (let stat of statsDB) {
        if (playerStat == stat.fieldGoalAve) 
            return playerStat + " is an actual player's field goal percentage"
    }

    return false
}


