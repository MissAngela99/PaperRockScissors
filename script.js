//Title

 console.log("Let's play a game of Paper, rock, scissors!")

//Scores variables

let humanScore = 0
let computerScore = 0

let newList = document.querySelector(".list");
let resultList = document.querySelector(".result")

//Getting CPU choice

let computerLine = document.createElement("li");

    function getComputerChoice() {
        
        let cpunumber = Math.random()

        if (cpunumber < 0.33) {
            return "Paper"

        } else if(cpunumber > 0.33 && cpunumber < 0.66) {
            return "Rock"

        } else if(cpunumber >= 0.66) {
            return "Scissors"
    }
}


//getting player inpu
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            
            let newLine = document.createElement("li");
            
            newLine.textContent = 'You chose ' + button.id + '! And your opponent chose ' + getComputerChoice() 
            newList.appendChild(newLine)

            const humanChoice = button.id
            playRound(humanChoice)

        });
        
        function playRound(humanChoice) {
    
            let scoreLine = document.createElement("li");
            let computerChoice = getComputerChoice()
            
            if (humanChoice == "Paper" && computerChoice == "Rock") {
                scoreLine.textContent = "You won!"
                newList.appendChild(scoreLine);
                return humanScore += 1
    
            } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
                scoreLine.textContent = "You won!"
                newList.appendChild(scoreLine);
                return humanScore += 1
            
            } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
                scoreLine.textContent = "You won!"
                newList.appendChild(scoreLine);
                return humanScore += 1
     
            } else if (humanChoice === computerChoice) {
                scoreLine.textContent = "Draw!"
                newList.appendChild(scoreLine);
            
            } else if (humanChoice == "Rock" && computerChoice == "Paper") {
                scoreLine.textContent = "You lost!"
                newList.appendChild(scoreLine);
                return computerScore += 1
            
            } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
                scoreLine.textContent = "You lost!"
                newList.appendChild(scoreLine);
                return computerScore += 1
            
            } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
                scoreLine.textContent = "You lost!"
                newList.appendChild(scoreLine);
                return computerScore += 1
            
                }
            }

            playRound();
/*
                // 5 rounds logic
        while (humanScore <  5 || computerScore < 5) {
            playRound()
            console.log("Your score: " + humanScore, "Cpu score: " + computerScore)

            if (humanScore == 5) { 
                alert("You got 5 points, you win!")
                console.log("You got 5 points, you win!")
                break
            } else if (computerScore == 5) {
                alert("Computer got 5 points, you lost!")
                console.log("Computer got 5 points, you lost!")
                break
            }
        }
*/
    });



//Playing single round




