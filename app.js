const iu = require('./imageUtils');
const du = require('./drawUtils');

// MAIN

const imageProperties = iu.getImageProperties();
const palette = iu.createPalette(imageProperties.palette);

du.drawImage(imageProperties, palette);