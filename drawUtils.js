const {
    createCanvas
} = require('canvas')
const fs = require('fs');

const drawImage = (imageProperties, palette) => {
    const canvas = createCanvas(imageProperties.width, imageProperties.height);
    const context = canvas.getContext('2d');

    const horizontalPieces = imageProperties.width / imageProperties.piece;
    const verticalPieces = imageProperties.height / imageProperties.piece;

    for (i = 0; i < horizontalPieces; i++) {
        for (j = 0; j < verticalPieces; j++) {
            const figure = Math.floor(Math.random() * 3);

            switch (figure) {
                case 0:
                    drawCircle(imageProperties, context, palette, i, j);
                    break;
                case 1:
                    drawTriangle(imageProperties, context, palette, i, j);
                    break;
                default:
                    drawPiece(imageProperties, context, palette, i, j);
            }

        }
    }

    const buffer = canvas.toBuffer('image/png');

    fs.writeFileSync('./test.png', buffer);
}

function drawPiece(imageProperties, context, palette, i, j) {
    const color = palette[Math.floor(Math.random() * palette.length)];

    context.fillStyle = color;
    context.fillRect(i * imageProperties.piece, j * imageProperties.piece, imageProperties.piece, imageProperties.piece);

    return color;
}

function drawCircle(imageProperties, context, palette, i, j) {
    const bgColor = drawPiece(imageProperties, context, palette, i, j);

    do {
        var color = palette[Math.floor(Math.random() * palette.length)];
    } while (color == bgColor);

    context.save();
    context.translate(i * imageProperties.piece, j * imageProperties.piece);
    context.beginPath();
    context.arc(imageProperties.piece / 2, imageProperties.piece / 2, imageProperties.piece / 2, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
    context.restore();
    context.closePath();
}

function drawTriangle(imageProperties, context, palette, i, j) {
    const bgColor = drawPiece(imageProperties, context, palette, i, j);

    do {
        var color = palette[Math.floor(Math.random() * palette.length)];
    } while (color == bgColor);

    context.save();
    context.translate(i * imageProperties.piece, j * imageProperties.piece);
    context.beginPath();
    context.moveTo(0, imageProperties.piece);
    context.lineTo(imageProperties.piece, 0);
    context.lineTo(0, 0);
    context.fillStyle = color;
    context.fill();
    context.restore();
    context.closePath();
}

exports.drawImage = drawImage;