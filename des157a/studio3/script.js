(function() {
    'use strict';

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const gameData = {
        dice: ['images/die1.png', 'images/die2.png', 'images/die3.png', 'images/die4.png', 'images/die5.png', 'images/die6.png'],
        players: ['player1', 'player2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0, // who starts first - 0: player1, 1: player2
        clicks: 0,
        clicksLeft: 5,
    };

    startGame.addEventListener("click", function() {
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h3>The Game Has Started</h3>';
        gameControl.innerHTML += '<button id="quit">Restart</button>';
        document.getElementById('quit').addEventListener("click", function() {
            location.reload();
        });
        setUpTurn();
    });


    function setUpTurn() {
        game.innerHTML = `<p id="rollthe">Roll the dice for the <em>${gameData.players[gameData.index]}</em> </p>`;
        actionArea.innerHTML = '<button id= "roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function() {
            console.log("roll the dice!");
            throwDice();
        });
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        game.innerHTML = `<p id="rollthe">Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML = `<p class="players">${gameData.players[gameData.index]}:</p>
        <img class="players" src ="${gameData.dice[gameData.roll1 - 1]}">
        <img class="players" src = "${gameData.dice[gameData.roll2 - 1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        gameData.score[gameData.index] += gameData.rollSum;
        actionArea.innerHTML = '<button id="pass">PASS</button>';
        checkWinningCondition();
        document.getElementById('pass').addEventListener('click', function() {
            gameData.clicks++;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            gameData.rollSum = 0;
            setUpTurn();
        });
    }

    function checkWinningCondition() {
        let winner = null;
        let round = (Math.floor(gameData.clicks / 2)) + 1;

        score.innerHTML = score.innerHTML + `Round ${round}:
            <p id = "score">The score is currently <em> ${gameData.players[0]}:
            ${gameData.score[0]}</em> VS. <em>${gameData.players[1]}:
            ${gameData.score[1]}</em></p>`;

        if (gameData.clicks == gameData.clicksLeft) {
            actionArea.innerHTML = 'Game Ends';
            if (gameData.score[0] > gameData.score[1]) {
                winner = gameData.players[0];
            } else if (gameData.score[0] < gameData.score[1]) {
                winner = gameData.players[1];
            }

            if (winner == undefined) {
                score.innerHTML = score.innerHTML + `<h3>It's a tie!</h3>`;
            } else {
                score.innerHTML = score.innerHTML + `<h3>Winner is ${winner}!</h3>`;
            }
            actionArea.innterHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }
    }
})();