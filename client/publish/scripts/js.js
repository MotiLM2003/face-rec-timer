const urls = [];

let stage = 0;
//63

for (let y = 1; y <= 60; y++) {
  const no = [];
  if (no.includes(y)) {
    continue;
  }
  if (y < 10) {
    urls.push(`I000` + y + '.jpg');
  } else {
    urls.push(`I00` + y + '.jpg');
  }
}

const btnstart = document.getElementById('btn');
const intro = document.getElementById('intro');
const main = document.getElementById('main');
const curImage = document.getElementById('img');
const button = document.getElementById('btn-image');
const outro = document.getElementById('outro');
let startImages = null;
const results = [];
let i = 0;

const addEvent = (isClick = true) => {
  results.push({ image: urls[i], speed: isClick ? seconds : 'no click' });
  i++;
  if (i < urls.length) {
    changeImage();
  } else {
    clearInterval(startImages);
    outro.style.display = 'block';
    main.style.display = 'none';
    button.removeEventListener('click', addEvent);

    $.post({
      traditional: true,
      url: 'https://moti-api-server.herokuapp.com/pictures/',
      contentType: 'application/json',
      data: JSON.stringify(results),
      dataType: 'json',
      success: function (response) {
        console.log(response);
      },
    });
    console.log(results);
    return;
  }
};

btnstart.addEventListener('click', () => {
  let start = 5;
  const interval = setInterval(() => {
    btnstart.innerHTML = `Starting in ${start--}`;
    if (start < 0) {
      clearInterval(interval);
      intro.style.display = 'none';
      main.style.display = 'flex';

      changeImage();
      startTimer();
    }
  }, 1000);
  btnstart.value = '10';
  console.log(btnstart);
});
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
  curImage.src = images[i].image.src;
  start = Date.now();
  startTimer();
  clearInterval(startImages);
  clearInterval(sTimer);

  startImages = setInterval(() => {
    addEvent(false);
  }, 5000);
};
