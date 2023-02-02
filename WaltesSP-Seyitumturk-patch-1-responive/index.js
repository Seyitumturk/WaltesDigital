
console.log("Welcome to Waltes");


// socket.on('connection', data =>{
// console.log(data)
// })

// socket.on('gameCode', handleGameCode);

// socket.on('chat-message', data => {
// console.log(data)
// })
// // With emit we are sending an event and with socket, with .on we are actually receiving that message. 


// const gameScreen = document.getElementById('plate-flex');
// const initialScreen = document.getElementById('initialScreen');
// const newGameBtn = document.getElementById('newGameButton');
// const joinGameBtn = document.getElementById('joinGameButton');
// const gameCodeInput = document.getElementById('gameCodeInput');
// const gameCodeDisplay = document.getElementById('gameCodeDisplay');

// newGameBtn.addEventListener('click', newGame);
// joinGameBtn.addEventListener('click', joinGame);

// function newGame(){
//    socket.emit('newGame');
//    init();
// }

// function joinGame() {
//    const code = gameCodeInput.value;
//    socket.emit('joinGame', code);
//    init();
// }

// function handleGameCode(gameCode){
//    gameCodeDisplay.innerText = gameCode;

// } 



// function handleUnknownGame(){
//    reset();
//    alert('Unknown game code');
// }

// function handleTooManyPlayers()
// {
//    reset();
//    alert('This game is already in progress');

// }


// function reset(){
//    playerNumber = null;
//    gameCodeInput.value = "";
//    gameCodeDisplay.innerText = "";
//    initialScreen.style.display = 'flex';
//    gameScreen.style.display = "none";


// }




// // Game logic 



// function init(){

// initialScreen.style.display = 'none';
// gameScreen.style.display = 'flex';

//  }

// Global vars

const turnIndicator = document.getElementById('winText');

turnIndicator.classList.add('turn-indicator');

const plateDiv = document.getElementById('plate')

plateDiv.appendChild(turnIndicator);





let currentPlayer = 1;
let canTakeTurn = true;


let player1_score = 0;
let player2_score = 0;

let player1_oldlady_count = 0;
let player2_oldlady_count = 0;

let player1_oldMan_count = 0;
let player2_oldMan_count = 0;

let remainingSticks = 17;
let remainingLadySticks = 3;
let oldManStick = 1;


// On click animation : assign classes on click.

function diceAnimation() {


   document.getElementById("bowl-img").className = "bowlAnimations";
   document.getElementById("star").className = "diceAnimations";
   document.getElementById("dice0").className = "diceAnimations";
   document.getElementById("dice1").className = "diceAnimations";
   document.getElementById("dice2").className = "diceAnimations";
   document.getElementById("dice3").className = "diceAnimations";
   document.getElementById("dice4").className = "diceAnimations";

   console.log("Button Clicked");

   //Clearing the class in the function again.

   setTimeout(waitAnim, 1000)

   function waitAnim() {

      document.getElementById("bowl-img").className = " ";
      document.getElementById("star").className = " ";
      document.getElementById("dice0").className = " ";
      document.getElementById("dice1").className = " ";
      document.getElementById("dice2").className = " ";
      document.getElementById("dice3").className = " ";
      document.getElementById("dice4").className = " ";

   }



}



function shake() {


   // clicks += 1; 

   // console.log(clicks);

   // var modulus_val = clicks % 2; 

   const dice1 = Math.floor(Math.random() * 2);
   const dice2 = Math.floor(Math.random() * 2);
   const dice3 = Math.floor(Math.random() * 2);
   const dice4 = Math.floor(Math.random() * 2);
   const dice5 = Math.floor(Math.random() * 2);
   const dice6 = Math.floor(Math.random() * 2);

   let dice_sum = dice1 + dice2 + dice3 + dice4 + dice5 + dice6;


   let pointImage = document.createElement("img");
   pointImage.id = "point-img"
   pointImage.src = "Point.png";

   let ladyPointImage = document.createElement("img");
   ladyPointImage.id = "ledy-point-img"
   ladyPointImage.src = "OldLady.png";

   let manPointImage = document.createElement("img");
   manPointImage.id = "man-point-img"
   manPointImage.src = "OldMan.png";



   // Element creation 

   const scoreTable1 = document.getElementById("player1-header");
   const scoreTable2 = document.getElementById("player2-header");

   const stickContainerOne = document.getElementById("stick-container1")
   const stickContainerTwo = document.getElementById("stick-container2")

   const pointStickCounter = document.getElementById("pointDivCounter");
   const ladyStickCounter = document.getElementById("ladyDivCounter");
   const oldManStickCounter = document.getElementById("oldManDivCounter");

   const shakeButton = document.getElementById("shake-button");
   const shakeButton2 = document.getElementById("shake-button2");

   const diceAudio = document.getElementById("dice-sound");

   shakeButton.addEventListener("click", function () {
      diceAudio.play()
   })


   shakeButton2.addEventListener("click", function () {
      diceAudio.play()
   })


   // Setting point counters 
   pointStickCounter.innerHTML = remainingSticks;
   ladyStickCounter.innerHTML = remainingLadySticks;
   oldManStickCounter.innerHTML = oldManStick;




   //WALTES RULES

   //Normal waltes for P2 
   if (currentPlayer == 1 && (dice_sum == 5 || dice_sum == 1)) {

      stickContainerOne.appendChild(pointImage)

      player1_score += 3;
      remainingSticks -= 1;

      console.log("player1_Waltes")

      canTakeTurn = true;

      turnIndicator.innerHTML = `Current Player: ${currentPlayer}`



   } else {
      // Player did not score, so it's the next player's turn
      canTakeTurn = false;
      currentPlayer = currentPlayer === 1 ? 2 : 1;
   }

   //Normal waltes for P2 
   if (currentPlayer == 2 && (dice_sum == 5 || dice_sum == 1)) {

      stickContainerOne.appendChild(pointImage)

      player1_score += 3;
      remainingSticks -= 1;

      console.log("player1_Waltes")

      canTakeTurn = true;

   } else {
      // Player did not score, so it's the next player's turn
      canTakeTurn = false;
      currentPlayer = currentPlayer === 2 ? 1 : 2;
   }


   //Old lady waltes for P1


   if (currentPlayer == 1 && (dice_sum == 6 || dice_sum == 0)) {

      player1_score += 5;
      player1_oldlady_count += 1;
      remainingLadySticks -= 1;

      console.log("PLAYER 1 WALTES -- OLD LADY !!!")

      stickContainerOne.appendChild(ladyPointImage)

   }

   //Old lady waltes for P2
   if (currentPlayer == 2 && (dice_sum == 6 || dice_sum == 0)) {


      player2_score += 5;
      player2_oldlady_count += 1;
      remainingLadySticks -= 1;

      window.alert("PLAYER 2 WALTES  -- OLD LADY !!!")


      stickContainerTwo.appendChild(ladyPointImage)

   }








   // Dice Placement

   console.log("Line");

   console.log(dice1);
   console.log(dice2);
   console.log(dice3);
   console.log(dice4);
   console.log(dice5);
   console.log(dice6);

   console.log("Line End");



   const dice0_element = document.getElementById("dice0");
   const dice1_element = document.getElementById("dice1");
   const dice2_element = document.getElementById("dice2");
   const dice3_element = document.getElementById("dice3");
   const dice4_element = document.getElementById("dice4");

   if (dice1 == 1) {
      dice0_element.src = "Flat.png";
   }


   if (dice1 == 0) {
      dice0_element.src = "Star.png";
   }


   if (dice2 == 1) {
      dice1_element.src = "Flat.png";
   }

   if (dice2 == 0) {
      dice1_element.src = "Star.png";
   }


   if (dice3 == 1) {
      dice2_element.src = "Flat.png";
   }


   if (dice3 == 0) {
      dice2_element.src = "Star.png";
   }


   if (dice4 == 1) {
      dice3_element.src = "Flat.png";
   }

   if (dice4 == 0) {
      dice3_element.src = "Star.png";
   }

   if (dice5 == 1) {
      dice4_element.src = "Flat.png";
   }

   if (dice5 == 0) {
      dice4_element.src = "Star.png";
   }

   if (dice6 == 1) {
      star.src = "Flat.png";
   }

   if (dice6 == 0) {
      star.src = "Star.png";
   }


   const pointParagparh = document.getElementsByClassName("pointHolder")

   pointParagparh.innerHTML = player1_score






   return { dice1, dice2, dice3, dice4, dice5, dice6, pointStickCounter, ladyStickCounter, oldManStickCounter };

}


