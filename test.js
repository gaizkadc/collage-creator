const {
    createCanvas
} = require('canvas')
const fs = require('fs');

const drawImage = (palette) => {
    const testImageSize = 1000;
    const canvas = createCanvas(testImageSize, testImageSize);
    const context = canvas.getContext('2d');

    const backgroundColor = drawBackground(context, palette, testImageSize)

    do {
        var color1 = palette[Math.floor(Math.random() * palette.length)];
        var color2 = palette[Math.floor(Math.random() * palette.length)];
    } while (color1 == backgroundColor || color2 == backgroundColor || color1 == color2);

    context.fillStyle = color1;

    // Half square 1
    context.translate(0, 0);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, testImageSize);
    context.lineTo(testImageSize, 0);

    context.fillStyle = color1;
    context.fill();

    context.restore();
    context.closePath();

    // X
    context.translate(testImageSize / 2, testImageSize / 2);
    context.rotate(45 * Math.PI / 180);

    context.fillStyle = color2;

    context.fillRect(-3 * testImageSize / 8, -1 * testImageSize / 8, 3 * testImageSize / 4, testImageSize / 4);

    context.rotate(90 * Math.PI / 180);
    context.fillRect(-3 * testImageSize / 8, -1 * testImageSize / 8, 3 * testImageSize / 4, testImageSize / 4);


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