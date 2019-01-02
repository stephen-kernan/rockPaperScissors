let responses = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;
function computerPlay() {
    return responses[Math.floor(Math.random()*responses.length)]
}
function playGame() {
    while (userScore<5 && computerScore<5) {
        let computerChoice = computerPlay();
        let userPlay;
        document.addEventListener(click){
            let userPlay = document.querySelector(this.value);
        }; 
            if (userPlay.toLowerCase() === 'rock') {
            if (computerChoice === 'rock') {
                alert('Tied like a bow. User Score: ' + userScore + '. Computer Score: ' + computerScore);
            } else if (computerChoice === 'paper') {
                computerScore++
                alert('Paper covers rock for some reason. You lose. User Score: ' +
                    userScore + '. Computer Score: ' + computerScore)
            } else if (computerChoice === 'scissors') {
                userScore++
                alert('You have crushed the scissors. You win. User Score: ' +
                    userScore + '. Computer Score: ' + computerScore)
            } else {
                userScore++
                alert('The computer has forfeited. You win.  User Score: ' +
                    userScore + '. Computer Score: ' + computerScore)
            }
        } else if (userPlay.toLowerCase() === 'paper') {
            if (computerChoice === 'rock') {
                userScore++;
                alert('Paper covers rock for some reason. You win. User Score: ' +
                    userScore + '. Computer Score: ' + computerScore)
            } else if (computerChoice === 'paper') {
                alert('Papercuts for everybody. It\'s a draw. User Score: ' +
                    userScore + '. Computer Score: ' + computerScore)
            } else if (computerChoice === 'scissors') {
                computerScore++;
                alert('Even against safety scissors, you never stood a chance. You lose.  User Score: ' +
                    userScore + '. Computer Score: ' + computerScore)
            } else {
                userScore++
                alert('The computer has forfeited. You win.  User Score: ' +
                    userScore + '. Computer Score: ' + computerScore)
            }
        } else if (userPlay.toLowerCase() === 'scissors') {
            if (computerChoice === 'rock') {
                computerScore++;
                alert('You were crushed.  User Score: ' +
                    userScore + '. Computer Score: ' + computerScore)
            } else if (computerChoice === 'paper') {
                userScore++;
                alert('You have turned their paper into confetti. You win. User Score: ' +
                    userScore + '. Computer Score: ' + computerScore)
            } else if (computerChoice === 'scissors') {
                alert('Neither can live while the other survives. It\s a draw.  User Score: ' +
                    userScore + '. Computer Score: ' + computerScore)
            } else {
                userScore++
                alert('The computer has forfeited. You win.  User Score: ' +
                    userScore + '. Computer Score: ' + computerScore)
            }
        } else {
        alert('That weapon is not allowed in this hallowed competition. Please choose another.')
        }
    } 
}
playGame();