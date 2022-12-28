import { Controls } from "./controls.js"
import { Events } from "./events.js"
import { Sounds } from "./sounds.js"
import { Timer } from "./timer.js"
import {   
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
  timerDisplay,
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
})

const sounds = Sounds()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerDisplay,
  resetControls: controls.reset,
  playBackgrondSound: sounds.bgAudioPlay,
  pauseBackgrondSound: sounds.bgAudioPause,
  endSound: sounds.timeEnd,
  controls,
})

Events({
  controls,
  timer,
  sounds,
})