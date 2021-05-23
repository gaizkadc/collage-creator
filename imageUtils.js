const prompt = require('prompt-sync')({
    sigint: true
});

const getImageProperties = () => {
    console.log('Image size');
    console.log('[1] Small (500x500)');
    console.log('[2] Normal (1920x1080)');
    console.log('[3] Big (2K)');
    console.log('[4] Very big (4K)');
    const size = prompt('Size: ');

    console.log('Number of pieces');
    console.log('[1] A few (5)');
    console.log('[2] Normal (10)');
    console.log('[3] Many (20)');
    const pieces = prompt('Pieces: ');

    const grayscale = prompt('Grayscale: ');

    var imageWidth, imageHeight, pieceSize = 0;

    switch (parseInt(size)) {
        case 1:
            imageWidth = 500;
            imageHeight = 500;
            break;
        case 3:
            imageWidth = 2040;
            imageHeight = 1080;
            break;
        case 4:
            imageWidth = 3840;
            imageHeight = 2160;
            break;
        default:
            imageWidth = 1920;
            imageHeight = 1080;
    }

    switch (parseInt(pieces)) {
        case 1:
            pieceSize = imageWidth / 5;
            break;
        case 3:
            pieceSize = imageWidth / 20;
            break;
        default:
            pieceSize = imageWidth / 10;
    }

    var gsBool = false;
    if (grayscale == 'y') {
        gsBool = true;
    }

    return {
        width: imageWidth,
        height: imageHeight,
        piece: pieceSize,
        grayscale: gsBool
    };
}

const createPalette = (grayscale) => {
    const paletteSize = 3;
    const palette = [];
    const colorHexSize = 6;
    const genRandHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')

    if (grayscale) {
        for (i = 0; i < paletteSize; i++) {
            const hexLetter = genRandHex(colorHexSize)[0];
            palette.push('#' + hexLetter.repeat(3));
        }
    } else {
        for (i = 0; i < paletteSize; i++) {
            palette.push('#' + genRandHex(colorHexSize));
        }
    }

    return palette;
};

exports.getImageProperties = getImageProperties;
exports.createPalette = createPalette;