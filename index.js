let imageContent = document.querySelectorAll(".images"); // select all imageContent
let YouWinner = document.getElementById("YouWinner"); // use Winner
let CompWinner = document.getElementById("CompWinner"); // comp winner
let ShowResult = document.getElementById("ShowResult"); // showresult

let user = 0;
let computer = 0;



function GamDrew() {
    ShowResult.innerText = "Game Was Drew.. Try Again";
    ShowResult.style.backgroundColor = 'black';
}

const GameChange = () => {
    const option = ["Rock", "Paper", "Scissor"];
    const RandomIndex = Math.floor(Math.random() * 3);
    return option[RandomIndex];
};

function winner(userWin, ComChoice, UserChoice) {
    if (userWin) {
        user++;
        YouWinner.innerHTML = user;
        ShowResult.style.backgroundColor = 'Green';
        ShowResult.innerText = `You Win! ${UserChoice} beats ${ComChoice}`;
    } else {
        computer++;
        CompWinner.innerHTML = computer;
        ShowResult.style.backgroundColor = 'red';
        ShowResult.innerText = `You Lose! ${ComChoice} beats ${UserChoice}`;
    }
}

const playGame = (UserChoice) => {
    const ComChoice = GameChange();
    if (UserChoice === ComChoice) {
        GamDrew();
    } else {
        let userWin = false;
        if (UserChoice === 'Rock') {
            userWin = ComChoice === 'Scissor'; 
        } else if (UserChoice === 'Paper') {
            userWin = ComChoice === 'Rock'; 
        } else if (UserChoice === 'Scissor') {
            userWin = ComChoice === 'Paper'; 
        }
        winner(userWin, ComChoice, UserChoice);
    }
};

imageContent.forEach((element) => {
    element.addEventListener("click", function () {
        const UserChoice = element.getAttribute('data-choice');
        playGame(UserChoice);
    });
});
