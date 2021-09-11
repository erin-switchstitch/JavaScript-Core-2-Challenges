const setTime = document.getElementById("setTime");
const startBtn = document.getElementById("startGameBtn");
const leftCount = document.getElementById("leftCount");
const rightCount = document.getElementById("rightCount");
console.log(startBtn);
let time;
let timer;
let sCounter = 0;
let lCounter = 0;


function startGame() {
  // sCounter = 0;
  // lCounter = 0;

  time = Number(setTime.value);
  timer = setInterval(function(){
    
    console.log(time)
    time--;

    if(time === 0){
      clearInterval(timer);
      console.log("sCounter : " + sCounter)
      console.log("lCounter : " + lCounter)
      console.log("TIME ENDED")
    } else if (time <= 0) {
      clearInterval(timer);
      alert("Incorrect time input")
    }

  }, 1000);
  
  
}

function keyBoardEvents(e) {
  console.log(e.keyCode);

  if (time > 0) {
      if ((e.keyCode === 83) || (e.keyCode === 115))  {
        // On 'S' Pressed
        sCounter ++;
        //console.log("sCounter : " + sCounter)
        leftCount.innerText = sCounter;
      } else if ((e.keyCode === 76) || (e.keyCode === 108))  {
        // On 'L' Pressed
        lCounter ++;
        //console.log("lCounter : " + lCounter)
        rightCount.innerText = lCounter;
      }
  }
}

document.addEventListener("keypress", keyBoardEvents);
// document.removeEventListener
 startBtn.addEventListener("click", ()=>{
   startGame();
})