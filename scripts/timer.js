export function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  playBackgrondSound,
  pauseBackgrondSound,
  endSound,
  timerDisplay,
  controls,
}){
  let timeOut
  let restTimeOut
  let initialFocusMinutes = minutesDisplay.innerText
  let initialRestMinutes = 10
  let focusMinutes 
  let restMinutes = initialRestMinutes

  
  function updateDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2,'0')
    secondsDisplay.textContent = String(seconds).padStart(2,'0')
  }
  
  function reset(minutes){
    updateDisplay(minutes,0)
  }
  
  function resetWhenStop(){
    updateDisplay(initialFocusMinutes,0)
    timerDisplay.classList.remove('rest')
  }

  function runTimer(minutes, seconds){
    if(seconds <= 0){
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(--seconds))
  }

  function changeTimerColors(){
    timerDisplay.classList.add('rest')
  }

  function restCountdown(){
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    pauseBackgrondSound()

    restTimeOut = setTimeout(() => {

      if(minutes <= 0 && seconds <= 0){
        resetControls()
        resetWhenStop()
        return
      }

      runTimer(minutes, seconds)

      restCountdown()
    },1000)
  }

  function countdown(){
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    playBackgrondSound()

    timeOut = setTimeout(() => {

      if(minutes <= 0 && seconds <= 0){
        reset(restMinutes)
        endSound()
        changeTimerColors()
        restCountdown()
        return
      }

      runTimer(minutes, seconds)
  
      countdown()
    },1000)
  }

  function getMinutes(){
    focusMinutes = controls.getFocusMinutes()
    if(!focusMinutes){
      resetWhenStop()
      return
    }

    initialFocusMinutes = focusMinutes
    updateDisplay(focusMinutes,0)

    restMinutes = controls.getRestMinutes()
      if(!restMinutes){
        restMinutes = initialRestMinutes
      return
    }
  }

  function hold(){
    clearTimeout(timeOut)
    clearTimeout(restTimeOut)
  }

  return{
    updateDisplay,
    resetWhenStop,
    countdown,
    timeOut,
    getMinutes,
    hold,
  }
}