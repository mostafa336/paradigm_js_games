class EightQueens extends GameEngine {
  constructor() {
    super();
    this.gameStarted = false;
  }
  drawer(board) {
    document.open();
    document.write(`
        <style>
          body {
            height: 100%;
            margin: 0;
            font-family: 'Finger Paint', cursive;
          }
          .board-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 120vh;
            background-image: url('assets/backgrounds/chess.jpg');
            background-repeat: 2;
            background-size: contain;
          }
          .board {
            display: grid;
            grid-template-columns: repeat(8, 70px);
            grid-template-rows: repeat(8, 70px);
            background-color: #d1a05f;
            width: calc(70px * 8);
            height: calc(70px * 8);
            border: 2px solid #000;
            border-collapse: collapse;
            box-shadow: 0 0 30px #626b74; /* Add a subtle box shadow */
            background-color: #fff; /* Add a white background color */
          }
          #pos{
            position: relative;
            bottom: 43%;
            right: 37%;
            color: #191919;
            font-size: 0.6rem;
          }
          .board-cell {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0em;
            font-weight: bold;
            border: 1px solid #000;
            background-color: white;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          .board-cell.black {
            background-color: #aea2a2;
          }
          .selected {
            background-color: #ffffcc !important;
          }
    `);

    if (this.gameStarted) {
      document.write(`
        .container {
          display: flex;
          margin-left: 10px;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Adjust the height as needed */
        }
        .fancy-button {
          display: inline-block;
          border: none;
          background-color: #676568;
          color: white;
          text-align: center;
          font-size: 16px;
          padding: 20px 10px;
          border-radius: 4px;
        }
      </style>
      `);
    } else {
      document.write(`
        .container {
          display: flex;
          margin-left: 10px;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Adjust the height as needed */
        }
        .fancy-button {
          display: inline-block;
          border: none;
          background-color: #4CAF50;
          color: white;
          text-align: center;
          font-size: 16px;
          padding: 20px 10px;
          cursor: pointer;
          border-radius: 4px;
          transition-duration: 0.4s;
          box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
        }
        .fancy-button:hover {
          background-color: #45a049;
        }
      </style>
      `);
    }
    document.write("<title>8 Queens</title>");
    document.write('<div class="board-container">');
    document.write('<div class="board">');
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let cellClasses = "board-cell";
        if ((i + j) % 2 === 0) {
          cellClasses += " white";
        } else {
          cellClasses += " black";
        }
        let cellImgSrc = "";
        if (board[i][j] == "Q") {
          cellImgSrc = "images/Bqueen.png";
        }
        let cell = `<div class="${cellClasses}" style="background-image: url('${cellImgSrc}')" data-row="${i}" data-col="${j}"><span id="pos">${i}${j}</span></div>`;
        document.write(cell);
      }
    }
    document.write("</div>");
    document.write(`
      <div class="container">
        <button class="fancy-button">Solve</button>
      </div>
    `);
    document.write("</div>");
    if (!this.gameStarted) {
      this.gameStarted = true;
      const fancyButton = document.querySelector(".fancy-button");
      fancyButton.addEventListener("click", function () {
        console.log("Button clicked!");
      });
    }
    document.close();
  }

  //input: rc
  controller(board, input, playerTurn) {
    if ([...input].length != 2) {
      return { BD: board, f: false };
    }
    let Row = parseInt(input[0]);
    let Col = parseInt(input[1]);
    if (isNaN(Row) || isNaN(Col) || Row > 7 || Row < 0 || Col > 7 || Col < 0) {
      //alert('Wrong Input');
      return { BD: board, f: false };
    } else if (board[Row][Col] == "Q") {
      return { BD: board, f: false };
    } else if (board[Row][Col] == "n") {
      return { BD: board, f: false };
    } else {
      board[Row][Col] = "Q";
      //get all valid cells that can queen move to and write it in array as n
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (board[i][j] != "Q") {
            if (
              i == Row ||
              j == Col ||
              i - j == Row - Col ||
              i + j == Row + Col
            ) {
              board[i][j] = "n";
            }
          }
        }
      }
      this.gameStarted = true;
      return { BD: board, f: true };
    }
  }
}
