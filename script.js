const lys = document.getElementById("lyspære");
const text = document.getElementById("status");

let isLightOn = false;

function toggleLight() {
  isLightOn = !isLightOn
  if (isLightOn) {
    text.innerText = "På";
  } else {
    text.innerText = "Av";
  }
  lys.classList.toggle("on")
}