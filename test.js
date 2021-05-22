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

    context.fillStyle = color;
    context.fillRect(3 * testImageSize / 8, 0, testImageSize / 4, testImageSize);
    context.fillRect(1 * testImageSize / 8, 2 * testImageSize / 4, 3 * testImageSize / 4, 1 * testImageSize / 4);

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