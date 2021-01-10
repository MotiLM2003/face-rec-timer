const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const request = require('request');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
console.log('here');
const publicPath = path.join(__dirname, '..', 'client', 'public');

app.listen(PORT, () => {
  console.log('listining');
});
