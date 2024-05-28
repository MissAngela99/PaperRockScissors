//Title

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
    }
}


//Playing single round

    function playRound() {

//Getting Human input

        function getHumanChoice() {
            Choice = prompt("Please enter either Paper, Rock or Scissors!")
            return Choice[0].toUpperCase() + Choice.slice(1).toLowerCase()
        }

        //Playing the game

        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()

        if (humanChoice == "Paper" && computerChoice == "Rock") {
            console.log("Computer chose Rock, You got a point!")
            alert("Computer chose Rock, You got a point!")
            return humanScore += 1

        } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
            console.log("Computer chose Scissors, You got a point!")
            alert("Computer chose Scissors, You got a point!")
            return humanScore += 1

        } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            console.log("Computer chose Paper, You got a point!")
            alert("Computer chose Paper, You got a point!")
            return humanScore += 1

        } else if (humanChoice === computerChoice) {
            console.log("Draw!")
            alert("Draw!")

        } else if (humanChoice == "Rock" && computerChoice == "Paper") {
            console.log("Computer chose Paper! One point to the computer!")
            alert("Computer chose Paper! One point to the computer!")
            return computerScore += 1

        } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
            console.log("Computer chose Rock! One point to the computer!")
            alert("Computer chose Rock! One point to the computer!")
            return computerScore += 1

        } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
            console.log("Computer Chose Scissors! One point to the computer!")
            alert("Computer Chose Scissors! One point to the computer!")
            return computerScore += 1

        } else {
            window.confirm("You entered the wrong word, try again - paper, rock or scissors!")
        }
    }
    

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