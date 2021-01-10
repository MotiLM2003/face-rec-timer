const urls = [];

for (let y = 1; y <= 10; y++) {
  if (y < 10) {
    urls.push(`I000` + y + '.jpg');
  } else {
    urls.push(`I00` + y + '.jpg');
  }
}

const curImage = document.getElementById('img');
const button = document.getElementById('btn-image');
let startImages = null;
const results = [];
let i = 0;

const addEvent = () => {
  results.push({ image: urls[i], speed: seconds });
  changeImage();
};

button.addEventListener('click', addEvent);
let start = Date.now();
let seconds = 0;
let sTimer = null;
const images = urls.map((url, index) => {
  const image = new Image();
  image.src = `./images/${url}`;
  //   console.log(image.src);
  return { image: image, name: url, isFace: false };
});

const startTimer = () => {
  sTimer = setInterval(function () {
    var delta = Date.now() - start; // milliseconds elapsed since start
    seconds = delta / 1000; // in seconds
    // output(new Date().toUTCString());
  }, 150); // up
};

const changeImage = () => {
  if (i >= urls.length) {
    clearInterval(startImages);
    document.getElementById('results').innerHTML = JSON.stringify(results);
    button.removeEventListener('click', addEvent);
    return;
  }
  curImage.src = images[i++].image.src;
  start = Date.now();
  startTimer();
  clearInterval(startImages);
  clearInterval(sTimer);
  startImages = setInterval(() => {
    if (i < urls.length) {
      changeImage();
      clearInterval(startImages);
    }
  }, 5000);
};

changeImage();
startTimer();
