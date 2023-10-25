const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");

const gameBoardArr = ["O", "X", "X", "O", "O", "X", "X", "O", "X"];

gameBoardArr.forEach((item, i) => {
  squares[i].textContent = item;
});

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
