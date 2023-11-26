
// confirm("Вы хотите поиграть в Крестики-нолики");
const message  = document.querySelector("#message");
const cells= document.querySelectorAll(".cell");
const startButton= document.querySelector("#start_button");
startButton.addEventListener("click", restartGame );

const combinations = [ 
    [0,4,8],
    [6,4,2],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
] ;

let currentPlayer = "X";
let  cellsState = ["", "", "", "", "", "", "", "", ""];
let running = false;

startGame();

function startGame() {
   cells.forEach(cell => cell.addEventListener("click", cellClicked ));
   message.textContent =`Ход ${currentPlayer}`;
   running = true;
}

// function add(cell) {
//     cell.addEventListener("click", cellClicked );
// }

function cellClicked() {
    let cellIndex = this.getAttribute("index");

    if (cellsState[cellIndex] != "" || running == false)
        return ;

    updateCell(this,cellIndex);
               
}

function updateCell(cell , index) {
    cell.textContent = currentPlayer;
    cellsState[index] = currentPlayer;
    // changePlayer();
    checkWinner();
}

function changePlayer() {
    // if (currentPlayer == "0") {
    //     currentPlayer = "X";
    // } else if (currentPlayer == "X") {
    //     currentPlayer = "0";
    // }
    currentPlayer = (currentPlayer == "X") ? "0" : "X";
    message.textContent = `ход ${currentPlayer}`;          
}

function checkWinner() {
    let win = false;
  for (let i = 0; i < combinations.length; i++) {
    const combo = combinations[i];
    const a = cellsState[combo[0]]; // cellsState [0] = "X"
    const b = cellsState[combo[1]]; // cellsState [4] = ""
    const c = cellsState[combo[2]]; // cellsState [8] = ""

    if (a == "" || b == "" || c == "") {
        continue;
    }

    if (a == b && a == c) {
        win = true;
        break;
    }

  }
    if (win == true) {
        message.textContent = `winner ${currentPlayer}`;
        running = false;
    } else if (!cellsState.includes("")) {
        message.textContent = `ничья`;
    } else {
        changePlayer();
    }
    
}

function restartGame() {
    cellsState = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    message.textContent = `ход ${currentPlayer}`;
    cells.forEach(cell => cell.textContent = "");
  running = true;
}
console.log(1111)






