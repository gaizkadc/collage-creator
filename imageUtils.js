const prompt = require('prompt-sync')({
    sigint: true
});

const getImageProperties = () => {
    return {
        width: 1000,
        height: 1000,
        piece: 100,
        grayscale: true
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
                const hexLetter = genRandHex(colorHexSize)[0];
                palette.push('#' + hexLetter.repeat(3));
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