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
            const figure = Math.floor(Math.random() * 7);

            switch (figure) {
                case 0:
                    drawFigure0(imageProperties, context, palette, i, j);
                    break;
                case 1:
                    drawFigure1(imageProperties, context, palette, i, j);
                    break;
                case 2:
                    drawFigure2(imageProperties, context, palette, i, j);
                    break;
                case 3:
                    drawFigure3(imageProperties, context, palette, i, j);
                    break;
                case 4:
                    drawFigure4(imageProperties, context, palette, i, j);
                    break;
                case 5:
                    drawFigure5(imageProperties, context, palette, i, j);
                    break;
                default:
                    drawBlankPiece(imageProperties, context, palette, i, j);
            }

        }
    }

    const buffer = canvas.toBuffer('image/png');

    fs.writeFileSync('./collage.png', buffer);
}

function drawBlankPiece(imageProperties, context, palette, i, j) {
    const color = palette[Math.floor(Math.random() * palette.length)];

    context.fillStyle = color;
    context.fillRect(i * imageProperties.piece, j * imageProperties.piece, imageProperties.piece, imageProperties.piece);
}

function drawBackground(imageProperties, context, palette, i, j) {
    const color = palette[Math.floor(Math.random() * palette.length)];

    context.fillStyle = color;
    context.fillRect(i * imageProperties.piece, j * imageProperties.piece, imageProperties.piece, imageProperties.piece);

    return color;
}

function drawFigure0(imageProperties, context, palette, i, j) {
    const bgColor = drawBackground(imageProperties, context, palette, i, j);

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

function drawFigure1(imageProperties, context, palette, i, j) {
    const bgColor = drawBackground(imageProperties, context, palette, i, j);

    do {
        var color = palette[Math.floor(Math.random() * palette.length)];
    } while (color == bgColor);

    context.save();
    context.translate(i * imageProperties.piece, j * imageProperties.piece);

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, imageProperties.piece);
    context.lineTo(imageProperties.piece, 0);

    context.fillStyle = color;
    context.fill();

    context.restore();
    context.closePath();
}

function drawFigure2(imageProperties, context, palette, i, j) {
    const bgColor = drawBackground(imageProperties, context, palette, i, j);

    do {
        var color = palette[Math.floor(Math.random() * palette.length)];
    } while (color == bgColor);

    context.save();
    context.translate(i * imageProperties.piece, j * imageProperties.piece);

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(imageProperties.piece / 2, imageProperties.piece);
    context.lineTo(imageProperties.piece, 0);

    context.fillStyle = color;
    context.fill();

    context.restore();
    context.closePath();
}

function drawFigure3(imageProperties, context, palette, i, j) {
    const bgColor = drawBackground(imageProperties, context, palette, i, j);

    do {
        var color = palette[Math.floor(Math.random() * palette.length)];
    } while (color == bgColor);

    context.save();
    context.translate(i * imageProperties.piece, j * imageProperties.piece);

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, imageProperties.piece);
    context.lineTo(imageProperties.piece / 2, imageProperties.piece / 2);

    context.fillStyle = color;
    context.fill();

    context.beginPath();
    context.moveTo(imageProperties.piece / 2, imageProperties.piece / 2);
    context.lineTo(imageProperties.piece, imageProperties.piece);
    context.lineTo(imageProperties.piece, 0);

    context.fillStyle = color;
    context.fill();

    context.restore();
    context.closePath();
}

function drawFigure4(imageProperties, context, palette, i, j) {
    const bgColor = drawBackground(imageProperties, context, palette, i, j);

    do {
        var color = palette[Math.floor(Math.random() * palette.length)];
    } while (color == bgColor);

    context.save();
    context.translate(i * imageProperties.piece, j * imageProperties.piece);

    context.beginPath();
    context.arc(0, imageProperties.piece / 2, imageProperties.piece / 2, -0.5 * Math.PI, 0.5 * Math.PI, false);

    context.fillStyle = color;
    context.fill();

    context.beginPath();
    context.arc(imageProperties.piece, imageProperties.piece / 2, imageProperties.piece / 2, 0.5 * Math.PI, -0.5 * Math.PI, false);

    context.fillStyle = color;
    context.fill();

    context.restore();
    context.closePath();
}

function drawFigure5(imageProperties, context, palette, i, j) {
    const bgColor = drawBackground(imageProperties, context, palette, i, j);

    do {
        var color = palette[Math.floor(Math.random() * palette.length)];
    } while (color == bgColor);

    context.save();
    context.translate(i * imageProperties.piece, j * imageProperties.piece);

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(imageProperties.piece, imageProperties.piece);
    context.lineTo(imageProperties.piece, 0);

    context.fillStyle = color;
    context.fill();

    context.restore();
    context.closePath();
}

exports.drawImage = drawImage;