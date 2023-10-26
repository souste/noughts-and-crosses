const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");

const gameBoardArr = [];

function addToBoard(choice, i) {
  gameBoardArr.push(choice);
  gameBoardArr.forEach((item) => {
    squares[i].textContent = item;
  });
}

addToBoard("X", 6);
addToBoard("0", 7);

console.log(gameBoardArr);

// NEED TO EVENTUALLY CREATE A NESTED ARRAY AND CORRESPONDING OBJECT?
// const gameBoardArr = [[], [], []];
// then perhaps an object to fill this?

// THE PLAYER CREATION FUNCTION - WHEN I KNOW WHAT TO DO WITH IT
// function createPlayer(name, type) {
//     const newPlayer = {};
//     newPlayer.name = name;
//     newPlayer.type = type;
//     return newPlayer;
//   }

//   const playerOne = createPlayer("Player One", "O");
//   const playerTwo = createPlayer("Player Two", "X");
