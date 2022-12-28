export function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
}){
  function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset(){
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
  
  function formatMinutes(minutes){
    return parseInt(minutes)
  }
  
  function getFocusMinutes(){
    let focusMinutes = formatMinutes(prompt('Deseja fazer uma seção de quantos minutos?'))
    while(focusMinutes < 1 || focusMinutes > 600){
      focusMinutes = formatMinutes(prompt('Por favor, o valor digitado deve ser um número inteiro entre 1 e 600'))
    }

    if(!focusMinutes){
      return false
    }
  
    return focusMinutes
  }

  function getRestMinutes(){
    let restMinutes = formatMinutes(prompt('Deseja descansar quantos minutos?'))
    while(restMinutes < 1 || restMinutes > 120){
      restMinutes = formatMinutes(prompt('Por favor, o valor digitado deve ser um número inteiro entre 1 e 120'))
    }

    if(!restMinutes){
      return false
    }
  
    return restMinutes
  }
  
  return{
    reset,
    play,
    pause,
    getRestMinutes,
    getFocusMinutes,
  }
}