    console.log("Hello world!")

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

//Getting Human input

    function getHumanChoice() {
        let Choice = prompt("Please enter either Paper, Rock or Scissors!")
        Choice = Choice[0].toUpperCase() + Choice.slice(1)
        console.log(Choice)

        
    }

//let Answer = getHumanChoice()
//Answer = Answer[0].toUpperCase() + Answer.slice(1)

//Playing single round

    function playRound(humanChoice, computerChoice) {
        humanChoice = Answer
        computerChoice = getComputerChoice()

    }

console.log(getComputerChoice())
console.log(getHumanChoice())