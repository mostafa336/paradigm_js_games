function startGame(i) {
   switch(i){ 
      case(1):
        const A = new XO();
        A.drawer();
        break;
      case(2):
        const B = new connect_4();
        B.drawer();  
        break; 
      case(3):
        const c = new checkers();
        c.drawer();  
        break;
      case(4):
        const d = new Chess();
        d.drawer();  
        break;
      case(5):
        const e = new Sudoku();
        e.drawer();  
        break;
      case(6):
        const f = new Queens_8();
        f.drawer();  
        break;   
   }
}

class XO {
    constructor() {
      this.playerTurn=true;  
      this.row = 3;
      this.col = 3;
      this.newRow=1;
      this.newCol=1;
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
          /*
          .input-container {
            display: flex;
            align-items: center;
            margin: -200px 300px 100px 50px;
          }
          
          form {
            display: flex;
            flex-direction: row;
          }
          
          label {
            margin-right: 0px;
            margin-left: 10px; 
          }
      
          input[type="submit"] {
            margin-left: 10px; 
          }*/
          </style>
          `);
        document.write('<div class="board-container">');
      /*  document.write('<div class="input-container">');
        document.write(`
          <form>
            <label for="newRow">Row:</label>
            <input type="number" id="newRow" name="newRow" min="1" max="3" value="${this.newRow}">
            <label for="newCol">Col:</label>
            <input type="number" id="newCol" name="newCol" min="1" max="3" value="${this.newCol}">
            <input type="submit" value="Submit">
          </form>
        `);
        document.write('</div>');*/
        document.write('<div class="board">');
        for (let i = 0; i < this.row; i++) {
          for (let j = 0; j < this.col; j++) {
            document.write(`<div class="board-cell" data-row="${i}" data-col="${j}">${this.board[i][j]}</div>`);
          }
        }
        document.write('</div>');
        document.write('</div>');
         // Add event listener to the form submit button
        const form = document.querySelector('form');
      /*  form.addEventListener('submit', (event) => {
           event.preventDefault();
           this.controller();
        });*/
  }

  controller() {
   // const newRow = document.querySelector('#newRow').value - 1;
   // const newCol = document.querySelector('#newCol').value - 1;
  
    if (this.board[newRow][newCol] === ' ') {
        if (this.playerTurn) {
          this.board[newRow][newCol] = 'X';
        } else {
          this.board[newRow][newCol] = 'O';
        }
        this.playerTurn = !this.playerTurn;
      } else {
        alert('This place is already occupied.');
      }
    //document.querySelector('.board-container').innerHTML = '';

    this.drawer();
  }
  
}

class connect_4{
    constructor(){
        this.playerTurn=true;  
        this.row = 6;
        this.col = 7;
        this.newRow=1;
        this.newCol=1;
        this.board = Array(this.row).fill().map(() => Array(this.col).fill(' '));
        this.boardLength= new Array(this.col);
        this.boardLength.fill(0);
    }drawer() {
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
    
      /*
            .input-container {
              display: flex;
              align-items: center;
              margin: -150px 300px 103px -200px;
            }
            
            form {
              display: flex;
              flex-direction: row;
            }
            
            label {
              margin-right: 0px;
              margin-left: 10px; 
            }
        
            input[type="submit"] {
              margin-left: 10px; 
            }*/
          </style>
        `);
        document.write('<div class="board-container">');
       /* document.write('<div class="input-container">');
        document.write(`
          <form>
            <label for="newCol">Column:</label>
            <input type="number" id="newCol" name="newRow" min="1" max="7" value="${this.newCol}">
            <input type="submit" value="Submit">
          </form>
        `);
        document.write('</div>');*/
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
        
    /*    // Add event listener to the form submit button
        const form = document.querySelector('form');
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          this.controller();
        });*/
      }
      
  controller() {
    //const newCol = document.querySelector('#newCol').value - 1;
  
    if(this.boardLength[newCol] >= this.row ){
        alert('This column is full.');
        this.drawer();
        return;
    }
    if( this.board[this.boardLength[newCol]][newCol]==' ') {
        if (this.playerTurn) {
          this.board[this.boardLength[newCol]][newCol] = 'X';
          this.boardLength[newCol]++;
        } else {
            this.board[this.boardLength[newCol]][newCol] = 'O';
            this.boardLength[newCol]++;
        }
        this.playerTurn = !this.playerTurn;
      } else {
        alert('This place is already occupied.');
      }
   // document.querySelector('.board-container').innerHTML = '';
    this.drawer();
  }
}

class checkers{
    constructor(){}
    drawer(){}
    controller(){}
}

class Chess {
  constructor() {
    this.board = [      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ];
    this.currentPlayer = true;
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
          height: 100vh;
        }

        .board {
          display: grid;
          margin-left: 110px;
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
/*
        .input-container {
          display: flex;
          align-items: center;
          margin: 70px 177px 100px 70px;
        }
        
        form {
          display: flex;
          flex-direction: row;
        }
        
        label {
          margin-right: 0px;
          margin-left: 10px; 
        }
    
        input[type="submit"] {
          margin-left: 10px; 
        }*/
      </style>
    `);
    document.write('<div class="board-container">');
 /*   document.write('<div class="input-container">');
    document.write(`
      <form>
        <label for="from">From:</label>
        <input type="number" id="from" name="from"  value="${this.from}">
        <label for=TO">To:</label>
        <input type="number" id="To" name="To"  value="${this.to}">
        <input type="submit" value="Submit">
      </form>
    `);*/
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
     // Add event listener to the form submit button
   /*  const form = document.querySelector('form');
     form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.controller();
     });*/
  }


  controller() {

 //   const from = document.querySelector('#from').value ;
 //   const to = document.querySelector('#to').value ;

    var fromCol =  (from % 10) -1;
    var fromRow = 8 - Math.floor(from / 10);
    var a7 = to ;
    var toCol = (a7 % 10)-1;
    var toRow = 8 - Math.floor(a7 / 10);
    
    /*console.log("fromCol:", fromCol);
    console.log("fromRow:", fromRow);
    console.log("toCol:", toCol);
    console.log("toRow:", toRow);
    */
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
                      this.board[fromRow][fromCol]=' ';this.currentPlayer=!this.currentPlayer;
                      this.drawer();
                      return;
                }else if(fromRow==6 && toCol==fromCol&& toRow==(fromRow-2) && this.board[toRow][toCol]==' '){
                      this.board[toRow][toCol] = 'p';
                      this.board[fromRow][fromCol]=' ';this.currentPlayer=!this.currentPlayer;
                      this.drawer();
                      return;
                }
                else if(toCol==(fromCol+1) && (fromCol+1)<=7 && toRow==(fromRow-1) && 
                        'A'<=this.board[toRow][toCol]&&this.board[toRow][toCol]<='Z'){
                      this.board[toRow][toCol]='p';
                      this.board[fromRow][fromCol]=' ';this.currentPlayer=!this.currentPlayer;
                      this.drawer();
                      return;
                }else if(toCol==(fromCol-1) && 0<=(fromCol-1) && toRow==(fromRow-1) && 
                         'A'<=this.board[toRow][toCol]&&this.board[toRow][toCol]<='Z'){
                      this.board[toRow][toCol]='p';
                      this.board[fromRow][fromCol]=' ';this.currentPlayer=!this.currentPlayer;
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
                      this.board[fromRow][fromCol]=' ';this.currentPlayer=!this.currentPlayer;
                      this.drawer();
                  }else if(fromRow==1 && toCol==fromCol&& toRow==(fromRow+2) && this.board[toRow][toCol]==' '){
                      this.board[toRow][toCol] = 'P';
                      this.board[fromRow][fromCol]=' ';this.currentPlayer=!this.currentPlayer;
                      this.drawer();
                  }
                  else if(toCol==(fromCol+1) && (fromCol+1)<=7 && toRow==(fromRow+1) && 
                          'a'<=this.board[toRow][toCol]&&this.board[toRow][toCol]<='z'){
                      this.board[toRow][toCol]='P';
                      this.board[fromRow][fromCol]=' ';this.currentPlayer=!this.currentPlayer;
                      this.drawer();
                  }else if(toCol==(fromCol-1) && 0<=(fromCol-1) && toRow==(fromRow+1) && 
                           'a'<=this.board[toRow][toCol]&&this.board[toRow][toCol]<='z'){
                      this.board[toRow][toCol]='P';
                      this.board[fromRow][fromCol]=' ';this.currentPlayer=!this.currentPlayer;
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

class sudoku{
    constructor(){}
    drawer(){}
    controller(){}
}

class Queens_8{
    constructor(){}
    drawer(){}
    controller(){} 
}