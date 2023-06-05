const pianoKeys = document.querySelectorAll('.piano-keys .key'),
  volumeSlider = document.querySelector('.volume-slider input'),
  keysCheckbox = document.querySelector('.keys-checkbox input')

let allKeys = [],
  audio = new Audio(`tunes/a.wav`)

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`
  audio.play() // playing audio

  const clickedKey = document.querySelector(`[data-key="${key}"]`)
  clickedKey.classList.add('active')
  setTimeout(() => {
    clickedKey.classList.remove('active')
  }, 250)
}

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key)
  key.addEventListener('click', () => playTune(key.dataset.key))
})

const handleVolume = (e) => {
  audio.volume = e.target.value
}

const showHideKeys = (e) => {
  pianoKeys.forEach((key) => key.classList.toggle('hide'))

  if (e.target.classList.toggle('bg')) {
    e.target.style.backgroundColor = '#343434'
  } else {
    e.target.style.backgroundColor = '#eeeeee'
  }
}

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key)
}

keysCheckbox.addEventListener('click', showHideKeys)
volumeSlider.addEventListener('input', handleVolume)
document.addEventListener('keydown', pressedKey)
