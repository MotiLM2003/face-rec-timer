const urls = ['I0001.png', 'I0002.png', 'I0003.png', '0004.png', 'I0005.png'];

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
  if (i > 4) {
    clearInterval(startImages);
    document.getElementById('results').innerHTML = JSON.stringify(results);
    return;
  }
  curImage.src = images[i++].image.src;
  start = Date.now();
  startTimer();
  clearInterval(startImages);
  startImages = setInterval(() => {
    if (i >= 4) {
      changeImage();
      clearInterval(startImages);
      console.log(results);
    }
  }, 5000);
};

changeImage();
