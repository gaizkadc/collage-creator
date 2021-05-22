const {
    createCanvas
} = require('canvas')
const fs = require('fs');

const drawImage = (palette) => {
    const testImageSize = 200;
    const canvas = createCanvas(testImageSize, testImageSize);
    const context = canvas.getContext('2d');

    const backgroundColor = drawBackground(context, palette, testImageSize)

    do {
        var color = palette[Math.floor(Math.random() * palette.length)];
    } while (color == backgroundColor);

    context.save();
    context.translate(0, 0);

    context.beginPath();
    context.arc(testImageSize / 2, testImageSize / 2, testImageSize / 2, 0, 2 * Math.PI, false);

    context.fillStyle = color;
    context.fill();

    context.restore();
    context.closePath();

    const buffer = canvas.toBuffer('image/png');

    fs.writeFileSync('./test.png', buffer);
}

function drawBackground(context, palette, testImageSize) {
    const color = palette[Math.floor(Math.random() * palette.length)];

    context.fillStyle = color;
    context.fillRect(0, 0, testImageSize, testImageSize);

    return color;
}

function createPalette() {
    const paletteSize = 4;
    const palette = [];
    const colorHexSize = 6;
    const genRandHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')

    for (i = 0; i < paletteSize; i++) {
        palette.push('#' + genRandHex(colorHexSize));
    }

    return palette;
};


// MAIN

const palette = createPalette();

drawImage(palette);