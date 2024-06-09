//Title

 console.log("Let's play a game of Paper, rock, scissors!");

//Scores variables

let humanScore = 0;
let computerScore = 0;
let round = 0;

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
        
        function playRound(humanChoice) {
    
            let scoreLine = document.createElement("li");
            let computerChoice = getComputerChoice();
            
            if (humanChoice == "Paper" && computerChoice == "Rock") {
                scoreLine.textContent = "You chose paper and your opponent chose rock, You won!";
                newList.appendChild(scoreLine);
                return humanScore += 1;
    
            } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
                scoreLine.textContent = "You chose rock and your opponent chose scissors, You won!";
                newList.appendChild(scoreLine);
                return humanScore += 1;
            
            } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
                scoreLine.textContent = "You chose scissors and your opponent chose paper, You won!";
                newList.appendChild(scoreLine);
                return humanScore += 1;
     
            } else if (humanChoice === computerChoice) {
                scoreLine.textContent = "Draw!";
                newList.appendChild(scoreLine);
            
            } else if (humanChoice == "Rock" && computerChoice == "Paper") {
                scoreLine.textContent = "You chose rock and your opponent chose paper, You lost!";
                newList.appendChild(scoreLine);
                return computerScore += 1;
            
            } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
                scoreLine.textContent = "You chose scissors and your opponent chose rock, You lost!";
                newList.appendChild(scoreLine);
                return computerScore += 1;
            
            } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
                scoreLine.textContent = "You chose paper and your opponent chose scissors, You lost!";
                newList.appendChild(scoreLine);
                return computerScore += 1;
            
                }
            }

    let buttonPress = document.querySelector("button")
    buttonPress.addEventListener("click", () => {

    let resetButton = document.createElement("button");
    resetButton.textContent = 'CLEAR'
    resetButton.addEventListener("click", () => {
        newList.textContent = '';
    })
        for (let i = 0; i < 9; i++) {
            playRound();

            if (humanScore === 5) {
                alert("You won!");
                humanScore = 0;
                computerScore = 0;
                newList.textContent = ''
                break;

            } else if (computerScore === 5) {
                alert("You lost!");
                humanScore = 0;
                computerScore = 0;
                newList.textContent = ''
                break;
            }
        }
    })


            

});