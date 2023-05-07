class TicTacToe{
  constructor() {
    this.playerTurn = true;
    this.row = 3;
    this.col = 3;
    this.count = 0;
    this.board = Array(this.row).fill().map(() => Array(this.col).fill(' '));
  }

  drawer() {
    document.open();
    document.write(`
      <style>
      .board-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      
      .board {
        display: grid;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        width: 70%;
        max-width: 300px;
        height: 70%;
        max-height: 300px;
        border: 5px solid #000;
        border-collapse: collapse;
      }
      
      .board-cell {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5em;
        font-weight: bold;
        border: 1px solid #000;
      }
      </style>
    `);

    document.write('<div class="board-container">');
    document.write('<div class="board">');
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        document.write(`<div class="board-cell" data-row="${i}" data-col="${j}">${this.board[i][j]}</div>`);
      }
    }
    document.write('</div>');
    document.write('</div>');
  }
  
  controller(row, col) {
    let newRow = row;
    let newCol = col;
    if((newRow != '0' && newRow != '1' && newRow != '2') || (newCol != '0' && newCol != '1' && newCol != '2')) {
      alert('Wrong Input');
    }
    else if (this.board[newRow][newCol] === ' ') {
      if (this.playerTurn) {
        this.board[newRow][newCol] = 'X';
      } else {
        this.board[newRow][newCol] = 'O';
      }
      this.playerTurn = !this.playerTurn;
      this.count++;
    } 
    else {
      alert('This place is already occupied.');
    }
    this.drawer();
    if(this.count === this.row * this.col) return false;
    return true;
  }
}

class Connect4{
  constructor(){
    this.playerTurn=true;  
    this.row = 6;
    this.col = 7;
    this.count = 0;
    this.board = Array(this.row).fill().map(() => Array(this.col).fill(' '));
    this.boardLength= new Array(this.col);
    this.boardLength.fill(0);
  }

  drawer() {
    document.open();
    document.write(`
      <style>
        .board-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
  
        .board {
          display: grid;
          grid-template-columns: repeat(${this.col}, 70px);
          grid-template-rows: repeat(${this.row}, 70px);
          background-color: blue;
          width: calc(70px * ${this.col});
          height: calc(70px * ${this.row});
          border: 2px solid #000;
          border-collapse: collapse;
        }
        
        .board-cell {
          display: flex;
          margin : 3px;
          justify-content: center;
          align-items: center;
          font-size: 0em;
         // font-weight: bold;
          border: 1px solid #000;
          border-radius: 50%;
          background-color: white;
        }
      </style>
    `);

    document.write('<div class="board-container">');
    document.write('<div class="board">');
    for (let i = this.row-1; i >=0 ; i--) {
        for (let j = 0; j < this.col; j++) {
          let cellValue = this.board[i][j];
          let backgroundColor = "white";
          if (cellValue === "X") {
            backgroundColor = "yellow";
          } else if (cellValue === "O") {
            backgroundColor = "red";
          }
          let cell = `<div class="board-cell" data-row="${i}" data-col="${j}" style="background-color:${backgroundColor}">${cellValue}</div>`;
          document.write(cell);
        }
    }
    document.write('</div>');
    document.write('</div>');
  }

  controller(col) {
    let newCol = col;
    if(newCol != '0' && newCol != '1' && newCol != '2' && newCol != '3' && newCol != '4' && newCol != '5' && newCol != '6'){
      alert('Wrong Input');
    }
    else if(this.boardLength[newCol] >= this.row){
      alert('This column is full.');
    }
    else if( this.board[this.boardLength[newCol]][newCol]==' ') {
      if (this.playerTurn) {
        this.board[this.boardLength[newCol]][newCol] = 'X';
        this.boardLength[newCol]++;
      } else {
          this.board[this.boardLength[newCol]][newCol] = 'O';
          this.boardLength[newCol]++;
      }
      this.playerTurn = !this.playerTurn;
      this.count++;
    } 
    else {
      alert('This place is already occupied.');
    }
    this.drawer();
    if(this.count === this.row * this.col) return false;
    return true;
  }
}

class Checkers{
  constructor() {
    this.board = [      
      [' ', 'b', ' ', 'b', ' ', 'b', ' ', 'b'],
      ['b', ' ', 'b', ' ', 'b', ' ', 'b', ' '],
      [' ', 'b', ' ', 'b', ' ', 'b', ' ', 'b'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ['w', ' ', 'w', ' ', 'w', ' ', 'w', ' '],
      [' ', 'w', ' ', 'w', ' ', 'w', ' ', 'w'],
      ['w', ' ', 'w', ' ', 'w', ' ', 'w', ' ']
    ];
    this.playerTurn = true;
    this.validMoves = [];
    this.selectedPiece = null;
    this.row = 8;
    this.col = 8;
    this.from = 0;
    this.to = 0;
  }
  drawer() {
    document.open();
    document.write(`
      <style>
        .board-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 120vh;
        }
        .board {
          display: grid;
          margin-left: 10px;
          grid-template-columns: repeat(8, 70px);
          grid-template-rows: repeat(8, 70px);
          background-color: #d1a05f;
          width: calc(70px * 8);
          height: calc(70px * 8);
          border: 2px solid #000;
          border-collapse: collapse;
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
      </style>
    `);

    document.write('<div class="board-container">');
    document.write('<div class="board">');
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        let cellValue = this.board[i][j];
        let cellClasses = 'board-cell';
        if ((i + j) % 2 === 0) {
          cellClasses += ' white';
        } else {
          cellClasses += ' black';
        }
       let cellImgSrc = '';
       switch(cellValue) {
         case 'w':
           cellImgSrc = 'images/white.png';
           break;
         case 'b':
           cellImgSrc = 'images/black.png';
           break;
         default:
           cellImgSrc = ''; 
       }
      let cell = `<div class="${cellClasses}" style="background-image: url('${cellImgSrc}')" data-row="${i}" data-col="${j}"></div>`; 
      document.write(cell);
      }
    }
    document.write('</div></div>');
    document.close();
  }
}

class Chess{
  constructor() {
    this.board = [      
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ];
    this.playerTurn = true;
    this.validMoves = [];
    this.selectedPiece = null;
    this.row = 8;
    this.col = 8;
    this.from = 0;
    this.to = 0;
  }
  drawer() {
    document.open();
    document.write(`
      <style>
        .board-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 120vh;
        }
        .board {
          display: grid;
          margin-left: 10px;
          grid-template-columns: repeat(8, 70px);
          grid-template-rows: repeat(8, 70px);
          background-color: #d1a05f;
          width: calc(70px * 8);
          height: calc(70px * 8);
          border: 2px solid #000;
          border-collapse: collapse;
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
      </style>
    `);

    document.write('<div class="board-container">');
    document.write('<div class="board">');
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        let cellValue = this.board[i][j];
        let cellClasses = 'board-cell';
        if ((i + j) % 2 === 0) {
          cellClasses += ' white';
        } else {
          cellClasses += ' black';
        }
       let cellImgSrc = '';
       switch(cellValue) {
         case 'K':
           cellImgSrc = 'images/Bking.png';
           break;
         case 'Q':
           cellImgSrc = 'images/Bqueen.png';
           break
         case 'R':
           cellImgSrc = 'images/Brook.png';
           break;
         case 'B':
           cellImgSrc = 'images/Bbishop.png';
           break;
         case 'N':
           cellImgSrc = 'images/Bknight.png';
           break;
         case 'P':
           cellImgSrc = 'images/Bpawn.png';
           break;
         case 'k':
           cellImgSrc = 'images/Wking.png';
           break;
         case 'q':
           cellImgSrc = 'images/Wqueen.png';
           break;
         case 'r':
           cellImgSrc = 'images/Wrook.png';
           break;
         case 'b':
           cellImgSrc = 'images/Wbishop.png';
           break;
         case 'n':
           cellImgSrc = 'images/Wknight.png';
           break;
         case 'p':
           cellImgSrc = 'images/Wpawn.png';
           break;
         default:
           cellImgSrc = ''; 
       }
      let cell = `<div class="${cellClasses}" style="background-image: url('${cellImgSrc}')" data-row="${i}" data-col="${j}"></div>`; 
      document.write(cell);
      }
    }
    document.write('</div></div>');
    document.close();
  }

  controller(fromRow, fromCol, toRow, toCol) {

    if( !(0<=fromCol&&fromCol<=7 && 0<=fromRow && fromRow<=7 && 0<=toCol&&toCol<=7 &&0<=toRow&&toRow<=7) ){
      alert(`Enter correct index`);
      this.drawer();
      return;
    }
    if( ('A'<=this.board[fromRow][fromCol] && this.board[fromRow][fromCol]<='Z') ||('a'<=this.board[fromRow][fromCol] && this.board[fromRow][fromCol]<='z') ){
        if((  'a'<=this.board[fromRow][fromCol] && this.board[fromRow][fromCol]<='z') ||
          (  'A'<=this.board[fromRow][fromCol] && this.board[fromRow][fromCol]<='Z')){ 
            //queen   Q or q    وزرير
            //bishop  b or B    الفيل
            if (this.board[fromRow][fromCol] === 'b' || this.board[fromRow][fromCol] === 'B') {
              // Check if the move is diagonal
              if (Math.abs(toRow - fromRow) == Math.abs(toCol - fromCol)) {
                const rowDistance = toRow - fromRow;
                const colDistance = toCol - fromCol;
            
                // Check if there are any pieces in the path
                let i = fromRow;
                let j = fromCol;
                const rowStep = rowDistance < 0 ? -1 : 1;
                const colStep = colDistance < 0 ? -1 : 1;
            
                while (i != toRow && j != toCol ) {
                  i += rowStep;
                  j += colStep;
                  
                  if ((this.board[fromRow][fromCol] == 'b' && 'A' <= this.board[toRow][toCol] && this.board[toRow][toCol] <= 'Z' ) ||
                    (this.board[fromRow][fromCol] == 'B' &&  'a' <= this.board[toRow][toCol] && this.board[toRow][toCol] <= 'z')) {
                      this.board[toRow][toCol] = this.board[fromRow][fromCol];
                      this.board[fromRow][fromCol] = ' ';
                      this.drawer();
                      return;
                  }
                }
            
                // Check if there is a piece at the destination, and if it is of the opposite color
                if (this.board[toRow][toCol]==' ' || (this.board[fromRow][fromCol] == 'b' && 'A' <= this.board[toRow][toCol] && this.board[toRow][toCol] <= 'Z' ) ||
                    (this.board[fromRow][fromCol] == 'B' &&  'a' <= this.board[toRow][toCol] && this.board[toRow][toCol] <= 'z')) {
                  this.board[toRow][toCol] = this.board[fromRow][fromCol];
                  this.board[fromRow][fromCol] = ' ';
                  this.drawer();
                  return;
                } else {
                  alert('Invalid movement: The destination contains a piece of the same color');
                  return;
                }
              } else {
                alert('Invalid movement: The bishop moves only diagonally');
                return;
              }
            }
            
            //King    k or K    الملك
            if (this.board[fromRow][fromCol] == 'K' || this.board[fromRow][fromCol] == 'k') {
              // Determine the row and column distance
              const rowDistance = Math.abs(toRow - fromRow);
              const colDistance = Math.abs(toCol - fromCol);
            
              console.log(`row : `,rowDistance,` ,col `,colDistance);
              
              // Check if the move is valid for a king
              if ((rowDistance <= 1 && colDistance <= 1)) {
                // Check if there is a piece at the destination, and if it is of the opposite color
                if ((this.board[fromRow][fromCol] == 'k' && 'A' <= this.board[toRow][toCol] && this.board[toRow][toCol] <= 'Z') ||
                    (this.board[fromRow][fromCol] == 'K' && 'a' <= this.board[toRow][toCol] && this.board[toRow][toCol] <= 'z') || 
                    this.board[toRow][toCol] == ' ') {
                  this.board[toRow][toCol] = this.board[fromRow][fromCol];    
                  this.board[fromRow][fromCol] = ' ';
                  this.drawer();
                  return;
                } else {
                  alert('Invalid movement wergwegwegwe');
                  return;
                }
              } else {
                alert('Invalid movement');
                return;
              }
            }
                        
            

            //knight  N or n    حصان
            if (this.board[fromRow][fromCol] === 'n' || this.board[fromRow][fromCol] === 'N') {
              // Determine the row and column distance
              const rowDistance = Math.abs(toRow - fromRow);
              const colDistance = Math.abs(toCol - fromCol);
            
              console.log(`row : `,rowDistance,` ,col `,colDistance);
              // Check if the move is valid for a knight
              if ( (rowDistance == 1 && colDistance == 2) || (rowDistance == 2 && colDistance === 1) ) {
                // Check if there is a piece at the destination, and if it is of the opposite color
                if ((this.board[fromRow][fromCol] == 'n' && 'A' <= this.board[toRow][toCol] && this.board[toRow][toCol] <= 'Z' ) ||
                    (this.board[fromRow][fromCol] == 'N' &&  'a' <= this.board[toRow][toCol] && this.board[toRow][toCol] <= 'z')  
                    || (this.board[toRow][toCol]==' ') 
                  ){     
                  this.board[toRow][toCol] = this.board[fromRow][fromCol];
                  this.board[fromRow][fromCol] = ' ';
                  this.drawer();
                  return;
                } else {
                  alert('Invalid movement nljknlknj');
                  return;
                }
              } else {
                alert('Invalid movement');
                return;
              }

            }
            //rook   R or r     تابية
              if (this.board[fromRow][fromCol] == 'r' || this.board[fromRow][fromCol] == 'R') {
                var end, cnst, tmp, i, j, tmp1 = 'R';
                var cap = true;
              
                if (this.board[fromRow][fromCol] == 'r') {
                  cap = false;
                  tmp1 = 'r';
                }
              
                i = fromRow;
                j = fromCol;
              
                if (fromCol == toCol && fromRow != toRow) {
                  end = toRow;
                  cnst = 0;
                  if (fromRow < toRow) {
                    tmp = 1;
                  } else if (fromRow > toRow) {
                    tmp = -1;
                  }
                } else if (fromRow == toRow && fromCol != toCol) {
                  end = toCol;
                  cnst = 1;
                  if (fromCol < toCol) {
                    tmp = 1;
                  } else if (fromCol > toCol) {
                    tmp = -1;
                  }
                } else {
                  alert(`INVALID MOVEMENT `);
                  return;
                }
              
                while (true) {
                  //increament and check condition   
                  if (cnst == 0) {
                    i += tmp;
                    if (tmp == 1 && i > end) break;
                    else if (tmp == -1 && i < end) break;
                  } else if (cnst == 1) {
                    j += tmp;
                    if (tmp == 1 && j > end) break;
                    else if (tmp == -1 && j < end) break;
                  }
                  //check logic
                  if ((cap && 'a' <= this.board[i][j] && this.board[i][j] <= 'z') ||
                    (!cap && 'A' <= this.board[i][j] && this.board[i][j] <= 'Z')) {
                    this.board[fromRow][fromCol] = ' ';
                    this.board[i][j] = tmp1;
                    this.drawer();
                    return;
                  } else if ((!cap && 'a' <= this.board[i][j] && this.board[i][j] <= 'z') ||
                    (cap && 'A' <= this.board[i][j] && this.board[i][j] <= 'Z')) {
                      alert(`Eating friend `);
                      return;
                  }
                }
                this.board[fromRow][fromCol] = ' ';
                this.board[toRow][toCol] = tmp1;
                this.drawer();
                return;
              }
              //pawn    P or p    عسكري
              //for white pawn
              if(this.board[fromRow][fromCol]=='p'){
                if(toCol==fromCol && toRow==(fromRow-1) && this.board[toRow][toCol]==' '){
                      this.board[toRow][toCol] = 'p';
                      this.board[fromRow][fromCol]=' ';this.playerTurn=!this.playerTurn;
                      this.drawer();
                      return;
                }else if(fromRow==6 && toCol==fromCol&& toRow==(fromRow-2) && this.board[toRow][toCol]==' '){
                      this.board[toRow][toCol] = 'p';
                      this.board[fromRow][fromCol]=' ';this.playerTurn=!this.playerTurn;
                      this.drawer();
                      return;
                }
                else if(toCol==(fromCol+1) && (fromCol+1)<=7 && toRow==(fromRow-1) && 
                        'A'<=this.board[toRow][toCol]&&this.board[toRow][toCol]<='Z'){
                      this.board[toRow][toCol]='p';
                      this.board[fromRow][fromCol]=' ';this.playerTurn=!this.playerTurn;
                      this.drawer();
                      return;
                }else if(toCol==(fromCol-1) && 0<=(fromCol-1) && toRow==(fromRow-1) && 
                        'A'<=this.board[toRow][toCol]&&this.board[toRow][toCol]<='Z'){
                      this.board[toRow][toCol]='p';
                      this.board[fromRow][fromCol]=' ';this.playerTurn=!this.playerTurn;
                      this.drawer();
                      return;
                }
                else{
                  alert(`INVALID MOVEMENT `);return;
                }
              }
              //for black pawn
              if(this.board[fromRow][fromCol]=='P'){
                  if(toCol==fromCol && toRow==(fromRow+1) && this.board[toRow][toCol]==' '){
                      this.board[toRow][toCol] = 'P';
                      this.board[fromRow][fromCol]=' ';this.playerTurn=!this.playerTurn;
                      this.drawer();
                  }else if(fromRow==1 && toCol==fromCol&& toRow==(fromRow+2) && this.board[toRow][toCol]==' '){
                      this.board[toRow][toCol] = 'P';
                      this.board[fromRow][fromCol]=' ';this.playerTurn=!this.playerTurn;
                      this.drawer();
                  }
                  else if(toCol==(fromCol+1) && (fromCol+1)<=7 && toRow==(fromRow+1) && 
                          'a'<=this.board[toRow][toCol]&&this.board[toRow][toCol]<='z'){
                      this.board[toRow][toCol]='P';
                      this.board[fromRow][fromCol]=' ';this.playerTurn=!this.playerTurn;
                      this.drawer();
                  }else if(toCol==(fromCol-1) && 0<=(fromCol-1) && toRow==(fromRow+1) && 
                          'a'<=this.board[toRow][toCol]&&this.board[toRow][toCol]<='z'){
                      this.board[toRow][toCol]='P';
                      this.board[fromRow][fromCol]=' ';this.playerTurn=!this.playerTurn;
                      this.drawer();
                  }
                  else{
                    alert(`INVALID INPUT `);return;
                  }
              }

        }else{
            alert(`you cannot choose this item`);
        }
    }else{
      alert('it is an empty cell');
    }
  }
}

class Sudoku{
  constructor() {
    this.row = 9;
    this.col = 9;
    this.board = Array(this.row).fill().map(() => Array(this.col).fill(' '));
  }

  drawer() {
    document.open();
    document.write(`
      <style>
        .board-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        
        .board {
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          grid-template-rows: repeat(9, 1fr);
          grid-gap: 1px;
          background-color: #e0e0e0;
          padding: 20px;
        }
        
        .board-cell {
          display: flex;
          font-size: 20px;
          background-color: #ffffff;
          border: 1px solid #000000;
          justify-content: center;
          align-items: center;
          height: 60px;
          width: 60px;
        }
        
        .board-cell[data-row="2"], 
        .board-cell[data-row="5"], 
        .board-cell[data-row="8"] {
          border-bottom-width: 3px;
        }
        
        .board-cell[data-col="2"], 
        .board-cell[data-col="5"], 
        .board-cell[data-col="8"] {
          border-right-width: 3px;
        }
      </style>
    `);

    document.write('<div class="board-container">');
    document.write('<div class="board">');
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        document.write(`<div class="board-cell" data-row="${i}" data-col="${j}">${this.board[i][j]}</div>`);
      }
    }
    document.write('</div>');
    document.write('</div>');
  }
}

class EightQueens{

}

// const prompt=require("prompt-sync")(); 
async function gameLoop(){
  await new Promise(resolve => setTimeout(resolve, 1000));
  while(true){
    while(true){
      var c1 = prompt('1- TicTacToe \n2- Connect4 \n3- Checkers \n4- Chess \n5- Sudoku \n6- EightQueens \n7- Exit');
      if(c1 === '1' || c1 === '2' || c1 === '3' || c1 === '4' || c1 === '5' || c1 === '6' || c1 === '7') break;
    }
    if(c1 === '7') break;
    var game;
    switch(c1){
      case('1'):{
        game = new TicTacToe(); break;
      }
      case('2'):{
        game = new Connect4(); break;
      }
      case('3'):{
        game = new Checkers(); break;
      }
      case('4'):{
        game = new Chess(); break;
      }
      case('5'):{
        game = new Sudoku(); break;
      }
      case('6'):{
        game = new EightQueens(); break;
      }
    }
    game.drawer();
    await new Promise(resolve => setTimeout(resolve, 500));
    while(true){
      let flag;
      switch(c1){
        case('1'):{
          let row = prompt('Please, Enter a cell row');
          let col = prompt('Please, Enter a cell column');
          flag = game.controller(row, col);
          break;
        }
        case('2'):{
          let col = prompt('Please, Enter a cell column');
          flag = game.controller(col);
          break;
        }
        case('3'):{
          break;
        }
        case('4'):{
          let fromRow = prompt('Please, Enter a cell row to move from');
          let fromCol = prompt('Please, Enter a cell column to move from');
          let toRow = prompt('Please, Enter a cell row to move to');
          let toCol = prompt('Please, Enter a cell column to move to');
          flag = game.controller(fromRow, fromCol, toRow, toCol);
          break;
        }
        case('5'):{
          break;
        }
        case('6'):{
          break;
        }
      }
      await new Promise(resolve => setTimeout(resolve, 500));
      if(!flag) break;
    }
  }
}
gameLoop();