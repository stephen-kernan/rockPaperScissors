let responses = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;


function computerChoice() {
    return responses[Math.floor(Math.random()*responses.length)]
};
    window.addEventListener("click", function(e) {

        e = window.event;

        let target = e.target;
        let userPlay = target.value;
        let scoreSpan = document.getElementById('score');
        let alertSpan = document.getElementById('alerts');

        while (userScore + computerScore < 5 && userScore < 3 && computerScore < 3) { 

            let computerPlay = computerChoice(); 
            let userPlay = window.event.target.value;
            if (userPlay === 'rock') { 

                if (computerPlay === 'rock') {
                    alertSpan.innerHTML = 'It\'s a draw.';
                    scoreSpan.innerHTML = 'User Score: ' +
                        userScore + '. Computer Score: ' + computerScore;
                    return;
                } 
                
                else if (computerPlay === 'paper') {
                    computerScore++;
                    alertSpan.innerHTML = 'You lose, because paper covers rock for some reason.';
                    scoreSpan.innerHTML = 'User Score: ' +
                        userScore + '. Computer Score: ' + computerScore;
                    return;
                } 
                
                else if (computerPlay === 'scissors') {
                    userScore++;
                    alertSpan.innerHTML = 'You win. Their scissors are crushed.';
                    scoreSpan.innerHTML = 'User Score: ' +
                        userScore + '. Computer Score: ' + computerScore;
                    return;
                } 
                
                else {
                    userScore++;
                    alertSpan.innerHTML = 'The computer has forfeited.';
                    scoreSpan.innerHTML = 'User Score: ' +
                        userScore + '. Computer Score: ' + computerScore;
                    return;
                }
            } 
            
            else if (userPlay === 'paper') {
                
                
                if (computerPlay === 'rock') {
                    userScore++;
                    alertSpan.innerHTML = 'You win because paper covers rock for some reason.';
                    scoreSpan.innerHTML = 'User Score: ' +
                        userScore + '. Computer Score: ' + computerScore;
                    return;
                } 
                
                else if (computerPlay === 'paper') {
                    alertSpan.innerHTML = 'It\'s a draw. Papercuts for everybody.';
                    scoreSpan.innerHTML = 'User Score: ' +
                        userScore + '. Computer Score: ' + computerScore;
                    return;
                } 
                
                else if (computerPlay === 'scissors') {
                    computerScore++;
                    alertSpan.innerHTML = 'You lose, and your paper is now confetti.'
                    scoreSpan.innerHTML = 'User Score: ' +
                        userScore + '. Computer Score: ' + computerScore;
                    return;
                } 
                
                else {
                    userScore++
                    alertSpan.innerHTML = 'The computer has forfeited.';
                    scoreSpan.innerHTML = 'User Score: ' +
                        userScore + '. Computer Score: ' + computerScore;
                    return;
                }
            } 
            
            else if (userPlay === 'scissors') {
                if (computerPlay === 'rock') {
                    computerScore++;
                    alertSpan.innerHTML = 'Your scissors were crushed. You lose.';
                    scoreSpan.innerHTML = 'User Score: ' +
                        userScore + '. Computer Score: ' + computerScore;
                    return;
                } 
                
                else if (computerPlay === 'paper') {
                    userScore++;
                    alertSpan.innerHTML = 'You win. Their paper is now confetti.';
                    scoreSpan.innerHTML = 'User Score: ' +
                        userScore + '. Computer Score: ' + computerScore;
                    return;
                } 
                
                else if (computerPlay === 'scissors') {
                    alertSpan.innerHTML = 'It\'s a draw.';
                    scoreSpan.innerHTML = 'User Score: ' +
                        userScore + '. Computer Score: ' + computerScore;
                    return;
                } 
                
                else {
                    userScore++;
                    alertSpan.innerHTML = 'The computer has forfeited.';
                    scoreSpan.innerHTML = 'User Score: ' +
                        userScore + '. Computer Score: ' + computerScore;
                    return;
                }
            } 
        };

        while (userScore + computerScore === 5 || userScore === 3 || computerScore === 3) {
            
            if (userScore > computerScore) {
                alertSpan.innerHTML = 'You win. Choose your weapon to play again.';
                scoreSpan.innerHTML = 'User Score: 0. Computer Score: 0';
                computerScore = 0;
                userScore = 0;
            } 
            
            else if (userScore < computerScore) {
                alertSpan.innerHTML = 'You lose. Choose your weapon to try again.';
                scoreSpan.innerHTML = 'User Score: 0. Computer Score: 0';
                computerScore = 0;
                userScore = 0;
            }
        };
    }, false);
