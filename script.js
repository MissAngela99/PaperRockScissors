    console.log("Let's play a game of Paper, rock, scissors!")

//Scores variables

let humanScore = 0
let computerScore = 0

//Getting CPU choice

    function getComputerChoice() {
        
        let cpunumber = Math.random()

        if (cpunumber < 0.33) {
            return "Paper"

        } else if(cpunumber > 0.33 && cpunumber < 0.66) {
            return "Rock"

        } else if(cpunumber >= 0.66) {
            return "Scissors"

        } else {
            return cpunumber
        }
    }


//Playing single round

    function playRound(humanChoice, computerChoice) {

//Getting Human input

        function getHumanChoice() {
            Choice = prompt("Please enter either Paper, Rock or Scissors!")
            return Choice[0].toUpperCase() + Choice.slice(1).toLowerCase()
        }

        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()

        if (humanChoice == "Paper" && computerChoice == "Rock") {
            console.log("You got a point!")
            return humanScore += 1

        } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
            console.log("You got a point!")
            return humanScore += 1

        } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            console.log("You got a point!")
            return humanScore += 1

        } else if (humanChoice === computerChoice) {
            console.log("Draw!")
            return humanScore += 1
        } else {
            console.log("You lose, one point to the computer!")
            return computerScore += 1
        }
    }
    

    if (humanScore <  5 || computerScore < 5) {
        playRound()
    } else if (humanScore == 5 || computerScore == 5) {
        
    }

playRound()
