let timer;
const time = 30;
let timeLeft = time; //timeLeft in sec

window.addEventListener('DOMContentLoaded', (event)=>{
  startBtn.addEventListener('click', start);
  cancelBtn.addEventListener('click', cancel);
})

function updateBtnState(state){
  switch(state) {
    case 'start':
      startBtn.setAttribute("disabled", "disabled");
      cancelBtn.removeAttribute("disabled");
      break;
    case 'finish':
    case 'cancel':
      startBtn.removeAttribute("disabled");
      cancelBtn.setAttribute("disabled", "disabled");
      break;
    default:
      console.log("unknown state")
  }
}

function updatePie(percentage){
  // paint pie by percentage
  const pie = document.querySelector('.pie__segment') 
  pie.style.cssText = `--value: ${percentage}; --over50: ${percentage >= 50 ? 1 : 0}`; 
}

function start(event){
  if(this.disabled){
    return 
  }
  updateBtnState('start')
  console.log('click start')
  timer = setInterval(countDown, 1000)
}
function cancel(event){
  if(this.disabled){
    return 
  }
  clearInterval(timer);
  finish();
  console.log('click cancel')
}
function finish(){
  updateBtnState("finish");
  console.log("Finish!!!");
  timeLeft = time;
      alert("倒數結束");

    clearInterval(countdownid);
  updatePie(0);

}
function countDown(){
  if(--timeLeft < 0){
    finishTimer();
    return
  }
  console.log(timeLeft/time*100)
  updatePie(100 - timeLeft/time*100);
}
function finishTimer(){
  console.log("finish timer")
  clearInterval(timer);
  finish();
}
