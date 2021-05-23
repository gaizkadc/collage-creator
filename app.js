const iu = require('./imageUtils');
const du = require('./drawUtils');
const ig = require('./igUtils');

// MAIN

const imageProperties = iu.getImageProperties();
const palette = iu.createPalette(imageProperties.grayscale);

du.drawImage(imageProperties, palette);

ig.postToIg(palette);