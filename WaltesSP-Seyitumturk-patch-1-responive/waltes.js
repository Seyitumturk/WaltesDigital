const dice = [
    { plain: true },
    { plain: true },
    { plain: true },
    { plain: true },
    { plain: true },
    { plain: true }
  ];
  
  const countingSticks = {
    plain: 51,
    oldWoman: 3,
    oldMan: 1
  };
  
  function rollDice() {
    for (let i = 0; i < dice.length; i++) {
      if (Math.random() < 0.5) {
        dice[i].plain = !dice[i].plain;
      }
    }
  }
  
  function countPoints() {
    let points = 0;
    let plainCount = 0;
    let nonPlainCount = 0;
  
    for (let i = 0; i < dice.length; i++) {
      if (dice[i].plain) {
        plainCount++;
      } else {
        nonPlainCount++;
      }
    }
  
    if (plainCount === 5 || nonPlainCount === 5) {
      points = 1;
    } else if (plainCount === 6 || nonPlainCount === 6) {
      points = 5;
    }
  
    return points;
  }
  
  function playRound() {
    rollDice();
    return countPoints();
  }
  
  function playGame() {
    let player1Points = 0;
    let player2Points = 0;
  
    while (player1Points < countingSticks.plain && player2Points < countingSticks.plain) {
      player1Points += playRound();
      player2Points += playRound();
    }
  
    if (player1Points > player2Points) {
      console.log("Player 1 wins!");
    } else if (player2Points > player1Points) {
      console.log("Player 2 wins!");
    } else {
      console.log("It's a tie!");
    }
  }
  
  playGame();
  