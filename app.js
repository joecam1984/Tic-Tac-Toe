const gameBoard = document.getElementById("gameboard")
const infoDisplay = document.getElementById("displayInfo")
const circle = document.querySelector("circle")

let turn ="circle";
infoDisplay.innerHTML = "Circle goes first";

function createBoard(){
    const squareElem1 = document.createElement("div")
squareElem1.classList.add("square");
squareElem1.id = 0;
squareElem1.addEventListener ("click", takeTurn);
gameBoard.append(squareElem1);

const squareElem2 = document.createElement("div")
squareElem2.classList.add("square");
squareElem2.id = 1;
squareElem2.addEventListener ("click", takeTurn);
gameBoard.append(squareElem2);

const squareElem3 = document.createElement("div")
squareElem3.classList.add("square");
squareElem3.id = 2;
squareElem3.addEventListener ("click", takeTurn);
gameBoard.append(squareElem3);

const squareElem4 = document.createElement("div")
squareElem4.classList.add("square");
squareElem4.id = 3;
squareElem4.addEventListener ("click", takeTurn);
gameBoard.append(squareElem4);

const squareElem5 = document.createElement("div")
squareElem5.classList.add("square");
squareElem5.id = 4;
squareElem5.addEventListener ("click", takeTurn);
gameBoard.append(squareElem5);

const squareElem6 = document.createElement("div")
squareElem6.classList.add("square");
squareElem6.id = 5;
squareElem6.addEventListener ("click", takeTurn);
gameBoard.append(squareElem6);

const squareElem7 = document.createElement("div")
squareElem7.classList.add("square");
squareElem7.id = 6;
squareElem7.addEventListener ("click", takeTurn);
gameBoard.append(squareElem7);

const squareElem8 = document.createElement("div")
squareElem8.classList.add("square");
squareElem8.id = 7;
squareElem8.addEventListener ("click", takeTurn);
gameBoard.append(squareElem8);

const squareElem9 = document.createElement("div")
squareElem9.classList.add("square");
squareElem9.id = 8;
squareElem9.addEventListener ("click", takeTurn);
gameBoard.append(squareElem9);

}
createBoard();

function takeTurn(e){
    const turnDisplay = document.createElement("div");
    turnDisplay.classList.add(turn);
    e.target.append(turnDisplay);
    if (turn == "circle"){
        turn = "x"
    }
    else{
        turn = "circle"
    }
    infoDisplay.textContent = " it is now " + turn + "'s turn"
    console.log(e.target);

    e.target.removeEventListener("click", takeTurn);

    checkScore();

}
function checkScore(){
    const winner = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    const allSquares = document.querySelectorAll(".square")
   
    //iterate through each winning array

    winner.forEach(function(winningArray){
        let circleWins = true;
        //iterate through winningArray checking if allSquares at that winningArray index contains the class circle
        for(let i = 0; i<winningArray.length; i++){
            let cell = winningArray[i];
            if(!allSquares[cell].firstChild?.classList.contains("circle")){
                circleWins = false;
                break;
            }

        }
        if (circleWins){
                
            infoDisplay.textContent = "Circle Wins";
        }
    })

    winner.forEach(function(winningArray){
        let XWins = true;
        //iterate through winningArray checking if allSquares at that winningArray index contains the class circle
        for(let i = 0; i<winningArray.length; i++){
            let cell = winningArray[i];
            if(!allSquares[cell].firstChild?.classList.contains("x")){
                XWins = false;
                break;
            }
            

        }
        if (XWins){

            infoDisplay.textContent = "X is the winner";
        }
    })
    //Another Way//
    //  winner.forEach(winningArray =>{
    //     let circleWins = array.every(cel => allSquares[cell].firstChild?.classList.contains("circle"));
    //     if(circleWins){
    //         infoDisplay.innerHTML = "Circle Wins"
    //         return;
    //     }
    //  })
}






