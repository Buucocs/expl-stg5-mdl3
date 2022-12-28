import {   
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
} from "./elements.js"

export function Events({
  controls,
  timer,
  sounds,
}){
  buttonPlay.addEventListener('click',() => {
    controls.play()
    timer.countdown()
    sounds.pressButton()
  })
  
  buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
    sounds.pressButton()
    sounds.bgAudioPause()
  })
  
  buttonSet.addEventListener('click', () => {
    sounds.pressButton()
    timer.getMinutes()
  })
  
  buttonStop.addEventListener('click', () => {
    controls.reset()
    timer.hold()
    timer.resetWhenStop()
    sounds.pressButton()
    sounds.bgAudioPause()
  })
  
  buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sounds.bgAudioMute()
  })
  
  buttonSoundOff.addEventListener('click', () => {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
    sounds.pressButton()
    sounds.bgAudioUnmute()
  })
}