var chickenContainer = document.querySelector(".chickenContainer");
var bullet = document.querySelector("#bullet");
var rocketLeft = 0;
var rocketBottom = 0;

document.addEventListener('keydown', function (e) {
  if (e.code == 'ArrowRight') {
    rocketLeft += 50;
    chickenContainer.style.left = rocketLeft + 'px';
  }
  else if (e.code == 'ArrowLeft') {
    rocketLeft -= 50;
    chickenContainer.style.left = rocketLeft + 'px';
  }
  else if (e.code == 'ArrowUp') {
    rocketBottom += 50;
    chickenContainer.style.bottom = rocketBottom + 'px';
  }
  else if (e.code == 'ArrowDown') {
    rocketBottom -= 50;
    chickenContainer.style.bottom = rocketBottom + 'px';
  }
  else if (e.code == 'Space') {
    bullet.style.opacity = 1;
    bullet.style.bottom = 400 + 'px';
    document.getElementById('bulletAudio').play();
  }
})

const Container = document.getElementById('Container');
let photoCount = 0;
let intervalId = setInterval(() => {
  createChicken()
}, 50);
function createChicken() {
  if (photoCount <= 70) {
    var myChicken = document.createElement('img')
    myChicken.setAttribute('src', './img/chicken.png');
    myChicken.style.width = 85 + 'px';
    Container.append(myChicken);
    photoCount++;
  }
  else {
    clearInterval(intervalId);
  }
}
