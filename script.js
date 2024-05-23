    console.log("Hello world!")


//Getting CPU output

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
console.log(getComputerChoice())