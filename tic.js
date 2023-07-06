console.log("WELCOME TO TIC TAC TOE GAME")
let music = new Audio("music.mp3")
let turn = new Audio("ting,mp3")
let gameover= new Audio("gameover.mp3")
let turn = "X"
const changeTurn = ()=>{
    return turn ==="X"?"0": "X"
}

const checkWin =()=>{
    let boxtexts= document.getElementsByClassName('boxtext');
 let wins = [
    { 0,1,2},
    {3,4,5},
    {6,7,8},
    {0,3,6},
    {1,4,7},
    {2,5,8},
    {1,4,7},
    {0,4,8},
    {2,4,6},

]
 wins.forEach(e =>{
    if(boxtext[e[0]].innerText == boxtext[e[0]].innerText) && (boxtext[e[1]].innerText == boxtext[e[2]].innerText && ())        )
    document.querySelector

 })
}

// GAME LOGIC
le t boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
let boxtest = document.querySelector('.boxtext');
element.addEventListener('click',()=>{
    if(element.innerText === ''){
        element.innerText = turn;
        turn=changeTurn()
        Audioturn.play();
        checkWin();
        document.getElementsByClassName(turn).innerText ="Turn for" + turn;
    }

}
})
