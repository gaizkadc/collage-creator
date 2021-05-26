require('dotenv').config();

import { Collage } from './collage'

const ig = require('./igUtils');

console.log('creating canvas...');
const canvas = createCanvas(this.width, this.height);
const ctx = canvas.getContext('2d');

console.log('getting pieces...')
// TODO: get pieces

console.log('getting collage properties...');
var collage = new Collage(pieces, ctx);

if (process.env.DRY_RUN == 1) {
    console.log('checking instagram login');
    ig,ig.checkIgLogin();
} else if (process.env.DRY_RUN == 0) {
    console.log('posting to instagram...');
    ig.postToIg(palette);
} else {
    console.log('and we are done');
}