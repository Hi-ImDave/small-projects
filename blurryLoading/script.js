const loadText = document.querySelector('.loading-text')
const background = document.querySelector('.bg')

let load = 0;

let interval = setInterval(blur, 30)

function blur() {
  load++
  if(load > 99) {
    clearInterval(interval)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)

  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

// maps loading percentage 0->100 to opacity range 1->0 
function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}