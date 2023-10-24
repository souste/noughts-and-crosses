const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");

const gameBoardArr = ["O", "X", "X", "O", "O", "X", "X", "O", "X"];

gameBoardArr.forEach((item, i) => {
  squares[i].textContent = item;
});

// squares.forEach((square, i) => {
//   for (let i = 0; i < gameBoardArr.length - 1; i++) {
//     const cell = document.createElement("div");
//     cell.innerText = gameBoardArr[i];
//   }
// });

// const gameBoard = {
//   gameBoardArr: ["O", "X", "X", "O", "O", "X", "X", "O", "X"],
// };

const playerOne = {
  name: "Isla",
  marker: "X",
};

const playerTwo = {
  name: "Ava",
  marker: "O",
};
