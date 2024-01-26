
let globalWin = false;
const head  = document.querySelector("p")

/*
** The Gameboard represents the state of the board
** Each square holds a Cell (defined later)
** and we expose a markedLocation method to be able to add Cells to squares
*/

function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];
  
    // Create a 2d array that will represent the state of the game board.
    // For this 2d array, row 0 will represent the top row and
    // column 0 will represent the left-most column.
    // This nested-loop technique is a simple and common way to create a 2d array.
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(Cell());
      }
    }
  
    // This will be the method of getting the entire board that our
    // UI will eventually need to render it.
    const getBoard = () => board;
// console.log(getBoard());
  
// this function marks the positioning of the players marker.
  
    const markedLocation = (column,row,player) => {
      board[row][column].addToken(player)
      
  }

  function showValue(column,row){ return board[row][column].getValue()}

    // This method will be used to print our board to the console.
    // It is helpful to see what the board looks like after each turn as we play,
    // but we won't need it after we build our UI
    
    const printBoard = () => {
      const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
      console.log(boardWithCellValues);
    };
 
    // console.log(board[0][0].getValue());
  
    // Here, we provide an interface for the rest of our
    // application to interact with the board
    return { getBoard, printBoard,markedLocation,showValue };
  }
  
  /*
  ** A Cell represents one "square" on the board and can have one of
  ** 0: no token is in the square,
  ** X: Player One's token,
  ** O: Player 2's token
  */
  
  function Cell() {
    let value = 0;
  
    // Accept a player's token to change the value of the cell
    const addToken = (player) => {
      value = player;
    };
  
    // How we will retrieve the current value of this cell through closure
    const getValue = () => value;
  
    return {
      addToken,
      getValue
    };
  }
  
  /* 
  ** The GameController will be responsible for controlling the 
  ** flow and state of the game's turns, as well as whether
  ** anybody has won the game
  */
  function GameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
  ) {
    const board = Gameboard();
  
    const players = [
      {
        name: playerOneName,
        token: "X"
      },
      {
        name: playerTwoName,
        token: "O"
      }
    ];


    let activePlayer = players[0];
  
    const switchPlayerTurn = () => {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;
  
    const printNewRound = () => {
      // board.printBoard();
      return`${getActivePlayer().name}'s turn.`
    };
  
    const playRound = (column,row) => {
      // Drop a token for the current player
      console.log(
        `Dropping ${getActivePlayer().name}'s token into column ${column} and row ${row}`
      );
      board.markedLocation(column,row, getActivePlayer().token);
  
      /*  This is where we would check for a winner and handle that logic,
          such as a win message. */
      // Switch player turn
      switchPlayerTurn();
      printNewRound();
  //  console.log(board.showValue(0,0));

    
    };
  
    // Initial play game message
    printNewRound();
  
    // For the console version, we will only use playRound, but we will need
    // getActivePlayer for the UI version, so I'm revealing it now
    return {
      playRound,
      getActivePlayer,
      printNewRound
    };
  }


  function preventingReAssign(){
    let value0 = false;
    let value1 = false;
    let value2 = false;
    let value3 = false;
    let value4 = false;
    let value5 = false;
    let value6 = false;
    let value7 = false;
    let value8 = false;

    const changePreventValue0 = ()=> value0 = true;
    const changePreventValue0F = ()=> value0 = false;
    const getPreventValue0 = ()=> value0;

    const changePreventValue1 = ()=> value1 = true;
    const changePreventValue1F = ()=> value1 = false;
    const getPreventValue1 = ()=> value1;

    const changePreventValue2 = ()=> value2 = true;
    const changePreventValue2F = ()=> value2 = false;
    const getPreventValue2 = ()=> value2;

    const changePreventValue3 = ()=> value3 = true;
    const changePreventValue3F = ()=> value3 = false;
    const getPreventValue3 = ()=> value3;

    const changePreventValue4 = ()=> value4 = true;
    const changePreventValue4F = ()=> value4 = false;
    const getPreventValue4 = ()=> value4;

    const changePreventValue5 = ()=> value5 = true;
    const changePreventValue5F = ()=> value5 = false;
    const getPreventValue5 = ()=> value5;

    const changePreventValue6 = ()=> value6 = true;
    const changePreventValue6F = ()=> value6 = false;
    const getPreventValue6 = ()=> value6;

    const changePreventValue7 = ()=> value7 = true;
    const changePreventValue7F = ()=> value7 = false;
    const getPreventValue7 = ()=> value7;

    const changePreventValue8 = ()=> value8 = true;
    const changePreventValue8F = ()=> value8 = false;
    const getPreventValue8 = ()=> value8;

    return {changePreventValue0,getPreventValue0,changePreventValue0F,changePreventValue1,getPreventValue1,
      changePreventValue2,getPreventValue2,changePreventValue3,getPreventValue3,
      changePreventValue4,getPreventValue4,changePreventValue5,getPreventValue5,
      changePreventValue6,getPreventValue6,changePreventValue7,getPreventValue7,
      changePreventValue8,getPreventValue8,changePreventValue1F,changePreventValue2F,changePreventValue3F,
      changePreventValue4F,changePreventValue5F,changePreventValue6F,changePreventValue7F,changePreventValue8F
    };
  }


  function declareResults (){
    let resultSet = [[],[],[]];

    return {resultSet}
  }
  
  const screenPlay = () => {

// !Game Logic
const game = GameController();
const preventMarker = preventingReAssign()
const result = declareResults()
const reset = document.querySelector(".two")

const divElements = Array.from(document.querySelectorAll(".container>div"));

divElements.map((element,index)=>{
element.addEventListener("click",(e) => {

  console.log("globalwin:",globalWin );
 if (globalWin == true) return

//  !prevention variables;

 

  switch (index) {
    
    case 0:
    if(preventMarker.getPreventValue0() === true) return
    preventMarker.changePreventValue0();
    element.textContent = game.getActivePlayer().token
    game.playRound(0,0)
    head.textContent = game.printNewRound();
    result.resultSet[0][0]=(element.textContent)
  
    break;
  case 1:
    if(preventMarker.getPreventValue1() === true) return
    preventMarker.changePreventValue1();
    element.textContent = game.getActivePlayer().token
    game.playRound(1,0)
    head.textContent = game.printNewRound();
    result.resultSet[0][1]=(element.textContent)
   
    break;
  case 2:
    if(preventMarker.getPreventValue2() === true) return
    preventMarker.changePreventValue2();
    element.textContent = game.getActivePlayer().token
    game.playRound(2,0)
    head.textContent = game.printNewRound();
    result.resultSet[0][2]=(element.textContent)
   
    break;
  case 3:
    if(preventMarker.getPreventValue3() === true) return
    preventMarker.changePreventValue3();
    element.textContent = game.getActivePlayer().token
    game.playRound(0,1)
    head.textContent = game.printNewRound();
    result.resultSet[1][0]=(element.textContent)
   
    break;
  case 4:
    if(preventMarker.getPreventValue4() === true) return
    preventMarker.changePreventValue4();
    element.textContent = game.getActivePlayer().token
    game.playRound(1,1)
    head.textContent = game.printNewRound();
    result.resultSet[1][1]=(element.textContent)
   
    break;
  case 5:
    if(preventMarker.getPreventValue5() === true) return
    preventMarker.changePreventValue5();
    element.textContent = game.getActivePlayer().token
    game.playRound(2,1)
    head.textContent = game.printNewRound();
    result.resultSet[1][2]=(element.textContent)
   
    break;
  case 6:
    if(preventMarker.getPreventValue6() === true) return
    preventMarker.changePreventValue6();
    element.textContent = game.getActivePlayer().token
    game.playRound(0,2)
    head.textContent = game.printNewRound();
    result.resultSet[2][0]=(element.textContent)
   
    break;
  case 7:
    if(preventMarker.getPreventValue7() === true) return
    preventMarker.changePreventValue7();
    element.textContent = game.getActivePlayer().token
    game.playRound(1,2)
    head.textContent = game.printNewRound();
    result.resultSet[2][1]=(element.textContent)
   
    break;
  case 8:
    if(preventMarker.getPreventValue8() === true) return
    preventMarker.changePreventValue8();
    element.textContent = game.getActivePlayer().token
    // console.log(element);
    game.playRound(2,2)
    head.textContent = game.printNewRound();
    result.resultSet[2][2]=(element.textContent)
    break;

  default:
    console.log("Error Occurred");
    break;
}

  //! Resultlogic with if else Statement.
  winning(result.resultSet)

  // Reset Logic

 

})
})

reset.addEventListener("click",()=>{
  globalWin = false;
  result.resultSet = [[],[],[]];
  console.log(result.resultSet);
  preventMarker.changePreventValue0F()
  preventMarker.changePreventValue1F()
  preventMarker.changePreventValue2F()
  preventMarker.changePreventValue3F()
  preventMarker.changePreventValue4F()
  preventMarker.changePreventValue5F()
  preventMarker.changePreventValue6F()
  preventMarker.changePreventValue7F()
  preventMarker.changePreventValue8F()
  divElements.map(element =>{
    element.textContent = ""
    // screenPlay()
  })



 })


return{ result }
}

screenPlay()

function globalWinChange (){
  globalWin = true;
}



// ! Dom manupulation so for button and Scoreboard!

const restart = document.querySelector(".one")



restart.addEventListener("click",()=>{
  console.log("Game Restarted!");
  location.reload()
})

const playerOnePoints = document.querySelector(".playerOnePoints")
const playerTwoPoints= document.querySelector(".playerTwoPoints")







function winning(array){

  console.log(array[0][1]);
  console.log(array[1][1]);
  console.log(array[2][1]);

if(array[0][0] !== undefined && array[1][0] !== undefined && array[2][0] !== undefined && array[0][1] !== undefined && array[1][1] !== undefined && array[2][1] !== undefined &&    array[0].length == 3 && array[1].length == 3 && array[2].length == 3){
  head.textContent = "Match is Draw Please reset to start Again!"
  globalWinChange()
  console.log(array);

}
  else if(array[0][0] == "X" && array[0][1] == "X" && array[0][2] =="X" || array[1][0]=="X" && array[1][1]=="X" && array[1][2]=="X" || array[2][0]=="X" && array[2][1]=="X" && array[2][2]=="X"){
    playerOnePoints.textContent = ++playerOnePoints.textContent
    globalWinChange()
    head.textContent = "Player One Won, Please Reset to Start Again!"



  }
  else if(array[0][0] == "O" && array[0][1] == "O" && array[0][2] == "O" || array[1][0] == "O" && array[1][1] == "O" && array[1][2] == "O" || array[2][0] == "O" && array[2][1] == "O" && array[2][2] == "O"){
   
    playerTwoPoints.textContent = ++playerTwoPoints.textContent
    globalWinChange()
    head.textContent = "Player Two Won, Please Reset to Start Again!"
  }


  else if (  array[0][0]== "X" && array[1][0] == "X" && array[2][0] == "X" ||  array[0][1] == "X" && array[1][1] == "X" && array[2][1] == "X" ||  array[0][2] == "X" && array[1][2] == "X" && array[2][2] == "X"){
    // some function to stop execution and display player winning
    playerOnePoints.textContent = ++playerOnePoints.textContent
    globalWinChange()
    head.textContent = "Player One Won, Please Reset to Start Again!"

  }

  else if (  array[0][0] == "O" && array[1][0] == "O" && array[2][0] == "O" ||  array[0][1] == "O" && array[1][1] == "O" && array[2][1] == "O" ||  array[0][2] == "O" && array[1][2] == "O" && array[2][2] == "O" ){
    // some function to stop execution and display player winning
    playerTwoPoints.textContent = ++playerTwoPoints.textContent
    globalWinChange()
    head.textContent = "Player Two Won, Please Reset to Start Again!"
  }

  else if(array[0][0] == "X" && array[1][1] == "X" && array[2][2] == "X" || array[0][2] == "X" && array[1][1] == "X" && array[2][0] == "X" ){
    // some function to stop execution and display player winning
    playerOnePoints.textContent = ++playerOnePoints.textContent
    globalWinChange()
    head.textContent = "Player One Won, Please Reset to Start Again!"
  }
 
  else if(array[0][0] == "O" && array[1][1] == "O" && array[2][2] == "O" || array[0][2] == "O" && array[1][1] == "O" && array[2][0] == "O" ){
    // some function to stop execution and display player winning
    playerTwoPoints.textContent = ++playerTwoPoints.textContent
    globalWinChange()
    head.textContent = "Player Two Won, Please Reset to Start Again!"
  }
}

