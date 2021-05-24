const prompt = require('prompt-sync')({
    sigint: true
});
require('dotenv').config();

const getImageProperties = () => {
    const width = parseInt(process.env.COLLAGE_WIDTH);
    const height = parseInt(process.env.COLLAGE_HEIGHT);

    var numberPieces = parseInt(process.env.NUMBER_PIECES);

    if (numberPieces == 0) {
        const possiblePiecesNumber = [5, 8, 10];
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

    return {
        width: width,
        height: height,
        piece: pieceSize,
        grayscale: grayscale
    };
}

const createPalette = (grayscale) => {
    const paletteSize = 3;
    const palette = [];
    const colorHexSize = 6;
    const genRandHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')

    if (grayscale) {
        do {
            for (i = 0; i < paletteSize; i++) {
                var greyTone = genRandHex(colorHexSize).substr(0, 2).repeat(3);
                palette.push('#' + greyTone);
            }
        } while (palette[0] == palette[1] || palette[0] == palette[2] || palette[1] == palette[2]);
    } else {
        for (i = 0; i < paletteSize; i++) {
            palette.push('#' + genRandHex(colorHexSize));
        }
    }

    return palette;
};

exports.getImageProperties = getImageProperties;
exports.createPalette = createPalette;
