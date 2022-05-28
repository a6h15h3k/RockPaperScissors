game();

//Plays 5 rounds of the game
function game() {
    for(let i = 0; i < 5; i++)  {
        let playerSelection = window.prompt("Please enter your choice: ROCK / PAPER / SCISSORS:");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

//This function randomly returns Rock/Paper/Scissors
function computerPlay() {
    let play = Math.floor(Math.random() * 3 + 1);
    
    switch(play)    {
        case 1:
            return("ROCK");
            break;
        case 2:
            return("PAPER");
            break;
        case 3:
            return("SCISSORS");
            break;
    }
}

//This function determines the result of the game and displays it to the console
function playRound(playerSelection, computerSelection) {
    let result = selectionToInt(playerSelection) - selectionToInt(computerSelection);
    
    if(result == 0)    {
        //Draw
        return("It's a Draw!");
    }   else if(result == -1 || result == 2) {
        //Computer Wins
        return("You Lose! " + computerSelection + " beats "+ playerSelection.toUpperCase());
    }else {
        //Player Wins
        return("You Win! " + playerSelection.toUpperCase() + " beats "+ computerSelection);
    }
}

//This function converts Player's input into a numerical value
function selectionToInt(selection) {
    if(selection.toUpperCase() == "ROCK"){
        return 1;
    } else if(selection.toUpperCase() == "PAPER") {
        return 2;
    } else if(selection.toUpperCase() == "SCISSORS") {
        return 3;
    }
}