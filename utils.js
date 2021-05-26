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

const getFormattedDate = (date, isForCaption) => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let hour = (date.getHours()<10?'0':'') + date.getHours();
    let minute = (date.getMinutes()<10?'0':'') + date.getMinutes();

    if (isForCaption) {
        return year + month + day + ' | ' + hour + ':' + minute;
    } else {
        return year + month + day + hour + minute;
    }
}

exports.createPalette = createPalette;
exports.getFormattedDate = getFormattedDate;
