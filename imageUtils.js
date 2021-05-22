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

    console.log('Palette size');
    console.log('[2] Two-color palette');
    console.log('[3] Three-color palette');
    console.log('[4] Four-color palette');
    const palette = prompt('Palette: ');

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

    switch (parseInt(palette)) {
        case 2:
            paletteSize = 2;
            break;
        case 4:
            paletteSize = 4;
            break;
        default:
            paletteSize = 3;
    }

    return {
        width: imageWidth,
        height: imageHeight,
        piece: pieceSize,
        palette: paletteSize
    };
}

const createPalette = (paletteSize) => {
    const palette = [];
    const colorHexSize = 6;
    const genRandHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')

    for (i = 0; i < paletteSize; i++) {
        palette.push('#' + genRandHex(colorHexSize));
    }

    return palette;
};

exports.getImageProperties = getImageProperties;
exports.createPalette = createPalette;