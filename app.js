require('dotenv').config();

const iu = require('./imageUtils');
const du = require('./drawUtils');
const ig = require('./igUtils');

// MAIN

console.log('getting image properties...');
const imageProperties = iu.getImageProperties();

console.log('creating palette...');
const [palette, accentColor] = iu.createPalette(imageProperties.grayscale);
console.log('palette: ' + palette);
console.log('accent color: ' + accentColor);

console.log('drawing image...');
du.drawImage(imageProperties, palette, accentColor);

if (process.env.DRY_RUN == 1) {
    console.log('checking instagram login');
    ig,ig.checkIgLogin();
} else if (process.env.DRY_RUN == 0) {
    console.log('posting to instagram...');
    ig.postToIg(palette, accentColor);
} else {
    console.log('and we are done');
}