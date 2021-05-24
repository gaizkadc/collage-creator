require('dotenv').config();

const iu = require('./imageUtils');
const du = require('./drawUtils');
const ig = require('./igUtils');

// MAIN

console.log('getting image properties...');
const imageProperties = iu.getImageProperties();
console.log('image properties: ' + imageProperties);

console.log('creating palette...');
const palette = iu.createPalette(imageProperties.grayscale);
console.log('palette: ' + palette);

console.log('drawing image...');
du.drawImage(imageProperties, palette);

if (process.env.DRY_RUN == 1) {
    console.log('checking instagram login');
    ig,ig.checkIgLogin();
} else {
    console.log('posting to instagram...');
    ig.postToIg(palette);
}