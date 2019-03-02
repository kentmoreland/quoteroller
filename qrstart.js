const express = require('express');
const path = require('path');

const qr = express();

require('dotenv').config({path: 'variables.env'});

qr.use(express.static(path.join(__dirname, 'dist')));

qr.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

qr.listen(process.env.PORT, () => {
  console.log(`quoteroller is running on port ${process.env.PORT}`);
});
