export function Sounds(){
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  bgAudio.loop = true
  buttonPressAudio.volume = 0.3
  kitchenTimer.volume = 0.3

  function bgAudioPlay(){
    bgAudio.play()
  }

  function bgAudioPause(){
    bgAudio.pause()
  }

  function bgAudioMute(){
    bgAudio.muted = true
    buttonPressAudio.muted = true
    kitchenTimer.muted = true
  }

  function bgAudioUnmute(){
    bgAudio.muted = false
    buttonPressAudio.muted = false
    kitchenTimer.muted = false
  }

  function pressButton(){
    buttonPressAudio.play()
  }

  function timeEnd(){
    bgAudioPause()
    kitchenTimer.play()
  }


  return{
    bgAudioPlay,
    bgAudioPause,
    bgAudioMute,
    bgAudioUnmute,
    pressButton,
    timeEnd,
  }
}