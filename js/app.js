//создать функцию которая сразу будет сбрасывать счетчики score current name- на player player-0-panel - class winner // class active and add active to player 0 .dice none
// nextPlayer function 
//.btn-roll
//// 1. Random number
//создать переменную где будет хранится число от 1 до 6 округленное 

//2. Display result 
//создать переменную где будет хранится класс dice - картинка которая в зависимости от числа будет менятся 
//
//3. Update the round score if the rolled number was NOT a 1 - //add score - //next player


//.btn-hold
// add current score to global score 
// Update user interface 
// Check if player won the game


//Basic variables
var scores, roundScore, activePlayer, stopWhenWinGame;
//Reset all paramentrs
init();

// Button Roll 
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Random number
    if(stopWhenWinGame) {
        var dice = Math.floor(Math.random() * 6) + 1;
    // 2. Display Result Picture(appear dice, apear img)
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    
    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
    
    diceSix += dice;
    }
});

// Button Hold
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(stopWhenWinGame) {
        // add current score to global score 
    var globalScore =+ roundScore;
    document.getElementById('score-' + activePlayer).textContent = globalScore;
    document.querySelector('#current-' + activePlayer).textContent = '0';
    
    if (globalScore >= 20) {
        document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        stopWhenWinGame = false;
    } else {
        nextPlayer();
    }
    }
    
    
});

// Button New Game 

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    stopWhenWinGame = true;
    
    // reset 
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    //hide Dice Picture 
    document.querySelector('.dice').style.display = 'none';
    
}


function nextPlayer () {
    // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; - тернальный оператор 
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    roundScore = 0;
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.current-0').textContent= '0';
    document.querySelector('.current-1').textContent= '0';
    
    document.querySelector('.dice').style.display= 'none';
}

 




















