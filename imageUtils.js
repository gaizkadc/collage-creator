const prompt = require('prompt-sync')({
    sigint: true
});
require('dotenv').config();

const getImageProperties = () => {
    const width = parseInt(process.env.COLLAGE_WIDTH);
    const height = parseInt(process.env.COLLAGE_HEIGHT);

    var numberPieces = parseInt(process.env.NUMBER_PIECES);

    if (numberPieces == 0) {
        const possiblePiecesNumber = [2, 4, 5, 8, 10];
        const pieceIndex = Math.floor(Math.random() * possiblePiecesNumber.length);

        console.log('piece index: ' + pieceIndex);

        numberPieces = possiblePiecesNumber[pieceIndex];
    }

    const pieceSize = width / numberPieces;
    console.log('piece size: ' + pieceSize);

    var grayscale = false;
    if (process.env.GRAYSCALE == 1) {
        grayscale = true;
    }

    var accentedPiece = false;
    if (process.env.COLORED_PIECE == 1) {
        accentedPiece = true;
    }

    return {
        width: width,
        height: height,
        piece: pieceSize,
        grayscale: grayscale,
        accentedPiece: accentedPiece
    };
};

const createPalette = (grayscale) => {
    const paletteSize = 3;
    const palette = [];

    const intPalette = []

    const getRandomInt = max => Math.floor(Math.random() * max);
    const paletteMax = 127;

    const colorHexSize = 6;
    const genRandHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    if (grayscale) {
        do {
            for (i = 0; i < paletteSize; i++) {
                var greyTone = getRandomInt(paletteMax);
                intPalette.push(greyTone);
            }

            intPalette.sort((a, b) => a - b);
        } while (intPalette[1] >= intPalette[0] + 15 && intPalette[2] >= intPalette[1] + 15);

        intPalette.forEach(greyTone => palette.push('#' + greyTone.toString(16).repeat(3)));

    } else {
        for (i = 0; i < paletteSize; i++) {
            palette.push('#' + genRandHex(colorHexSize));
        }
    }

    const accentColor = '#' + genRandHex(colorHexSize);

    return [palette, accentColor];
};

exports.getImageProperties = getImageProperties;
exports.createPalette = createPalette;