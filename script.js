//Title

 console.log("Let's play a game of Paper, rock, scissors!");

//Scores variables

let humanScore = 0;
let computerScore = 0;
let newScore = 0;

let newList = document.querySelector(".list");
let resultList = document.querySelector(".result");

//Getting CPU choice

let computerLine = document.createElement("li");

    function getComputerChoice() {
        
        let cpunumber = Math.random();

        if (cpunumber < 0.33) {
            return "Paper";

        } else if(cpunumber > 0.33 && cpunumber < 0.66) {
            return "Rock";

        } else if(cpunumber >= 0.66) {
            return "Scissors";
    }
}


//getting player inpu
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            
            let newLine = document.createElement("li");

            const humanChoice = button.id;
            playRound(humanChoice);

        });
        
        function playRound(hmnChoice) {
    
            let scoreLine = document.createElement("li");
            let computerChoice = getComputerChoice();
            
            if (hmnChoice == "Paper" && computerChoice == "Rock") {
                scoreLine.textContent = "You chose paper and your opponent chose rock, You won!";
                newList.appendChild(scoreLine);
                return humanScore += 1;
    
            } else if (hmnChoice == "Rock" && computerChoice == "Scissors") {
                scoreLine.textContent = "You chose rock and your opponent chose scissors, You won!";
                newList.appendChild(scoreLine);
                return humanScore += 1;
            
            } else if (hmnChoice == "Scissors" && computerChoice == "Paper") {
                scoreLine.textContent = "You chose scissors and your opponent chose paper, You won!";
                newList.appendChild(scoreLine);
                return humanScore += 1;
     
            } else if (hmnChoice === computerChoice) {
                scoreLine.textContent = "Draw!";
                newList.appendChild(scoreLine);
            
            } else if (hmnChoice == "Rock" && computerChoice == "Paper") {
                scoreLine.textContent = "You chose rock and your opponent chose paper, You lost!";
                newList.appendChild(scoreLine);
                return computerScore += 1;
            
            } else if (hmnChoice == "Scissors" && computerChoice == "Rock") {
                scoreLine.textContent = "You chose scissors and your opponent chose rock, You lost!";
                newList.appendChild(scoreLine);
                return computerScore += 1;
            
            } else if (hmnChoice == "Paper" && computerChoice == "Scissors") {
                scoreLine.textContent = "You chose paper and your opponent chose scissors, You lost!";
                newList.appendChild(scoreLine);
                return computerScore += 1;
            
                }
            }

const resetButton = document.createElement("button")
resetButton.textContent = "Click to clear the logs!"
resetButton.addEventListener("click", () => {
    newList.textContent = ''
});

button.addEventListener("click", () => {
  
        if (humanScore == 5) {
            humanScore = 0;
            computerScore = 0;
            alert("You Won! Congrats!");
            newList.appendChild(resetButton)

        } else if (computerScore == 5) {
            humanScore = 0;
            computerScore = 0;
            alert("You Lost, try again!");
            newList.appendChild(resetButton)
        };
    
});

            

});