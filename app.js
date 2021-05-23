const iu = require('./imageUtils');
const du = require('./drawUtils');
const ig = require('./igUtils');

// MAIN

console.log('getting image properties...');
const imageProperties = iu.getImageProperties();

console.log('creating palette...');
const palette = iu.createPalette(imageProperties.grayscale);
console.log('palette: ' + palette);

console.log('drawing image...');
du.drawImage(imageProperties, palette);

console.log('posting to instagram...');
ig.postToIg(palette);