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
button.addEventListener('click', () => {
  console.log(seconds);
  results.push({ image: urls[i], speed: seconds });
  changeImage();
});
let start = Date.now();
let seconds = 0;
const images = urls.map((url, index) => {
  const image = new Image();
  image.src = `./images/${url}`;
  //   console.log(image.src);
  return { image: image, name: url, isFace: false };
});

const startTimer = () => {
  setInterval(function () {
    var delta = Date.now() - start; // milliseconds elapsed since start
    seconds = delta / 1000; // in seconds

    // output(new Date().toUTCString());
  }, 300); // up
};

const changeImage = () => {
  if (i > urls.length) {
    clearInterval(startImages);
    document.getElementById('results').innerHTML = JSON.stringify(results);
    return;
  }
  curImage.src = images[i++].image.src;
  start = Date.now();
  startTimer();
  clearInterval(startImages);
  startImages = setInterval(() => {
    if (i >= url.length) {
      changeImage();
      clearInterval(startImages);
      console.log(results);
    }
  }, 5000);
};

changeImage();
