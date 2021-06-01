const {
    createCanvas
} = require('canvas')
const fs = require('fs');
require('dotenv').config();

const drawImage = (imageProperties, palette, accentColor) => {
    const canvas = createCanvas(imageProperties.width, imageProperties.height);
    const context = canvas.getContext('2d');

    const horizontalPieces = imageProperties.width / imageProperties.piece;
    const verticalPieces = imageProperties.height / imageProperties.piece;

    const coloredPiecePosition = [Math.floor(Math.random() * horizontalPieces), Math.floor(Math.random() * verticalPieces)];

    const figures = [drawFigure0, drawFigure1, drawFigure2, drawFigure3, drawFigure4, drawFigure5, drawFigure6, drawFigure7];

    for (i = 0; i < horizontalPieces; i++) {
        for (j = 0; j < verticalPieces; j++) {
            const figureIndex = Math.floor(Math.random() * figures.length);

            if (i == coloredPiecePosition[0] && j == coloredPiecePosition[1] && imageProperties.grayscale && imageProperties.accentedPiece) {
                const coloredPalette = [palette[0], accentColor];

                drawFigure6(imageProperties, context, coloredPalette, i, j);
            } else {
                figures[figureIndex](imageProperties, context, palette, i, j);
            }
        }
    }

    const buffer = canvas.toBuffer('image/' + process.env.FORMAT);

    fs.writeFileSync('./collage.' + process.env.FORMAT, buffer);
}

// Blank
function drawBackground(imageProperties, context, palette, i, j) {
    const color = palette[Math.floor(Math.random() * palette.length)];

    context.fillStyle = color;
    context.fillRect(i * imageProperties.piece, j * imageProperties.piece, imageProperties.piece, imageProperties.piece);

    return color;
}

// Circle
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

// Triangle half square 1
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

// Envelope
function drawFigure2(imageProperties, context, palette, i, j) {
    const bgColor = drawBackground(imageProperties, context, palette, i, j);

    do {
        var color = palette[Math.floor(Math.random() * palette.length)];
    } while (color == bgColor);

    context.save();
    context.translate(i * imageProperties.piece, j * imageProperties.piece);

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(imageProperties.piece / 2, imageProperties.piece / 2);
    context.lineTo(imageProperties.piece, 0);

    context.fillStyle = color;
    context.fill();

    context.restore();
    context.closePath();
}

// Pyramid from above
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

// Two half-circles facing each other
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

// Triangle half square 2
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

// Antichrist
function drawFigure6(imageProperties, context, palette, i, j) {
    const bgColor = drawBackground(imageProperties, context, palette, i, j);

    do {
        var color = palette[Math.floor(Math.random() * palette.length)];
    } while (color == bgColor);

    context.save();
    context.translate(i * imageProperties.piece, j * imageProperties.piece);

    context.fillStyle = color;
    context.fillRect(3 * imageProperties.piece / 8, 0, imageProperties.piece / 4, imageProperties.piece);
    context.fillRect(1 * imageProperties.piece / 8, 2 * imageProperties.piece / 4, 3 * imageProperties.piece / 4, imageProperties.piece / 4);

    context.restore();
    context.closePath();
}

// X
function drawFigure7(imageProperties, context, palette, i, j) {
    const bgColor = drawBackground(imageProperties, context, palette, i, j);

    do {
        var color = palette[Math.floor(Math.random() * palette.length)];
    } while (color == bgColor);

    context.save();
    context.translate(i * imageProperties.piece + imageProperties.piece * 0.5, j * imageProperties.piece + imageProperties.piece * 0.5);

    context.fillStyle = color;
    context.rotate(45 * Math.PI / 180);

    context.fillRect(-3 * imageProperties.piece / 8, -1 * imageProperties.piece / 8, 3 * imageProperties.piece / 4, imageProperties.piece / 4);

    context.rotate(90 * Math.PI / 180);
    context.fillRect(-3 * imageProperties.piece / 8, -1 * imageProperties.piece / 8, 3 * imageProperties.piece / 4, imageProperties.piece / 4);

    context.restore();
    context.closePath();
}

// Half square 1 + X
function drawFigure8(imageProperties, context, palette, i, j) {
    const bgColor = drawBackground(imageProperties, context, palette, i, j);

    do {
        var color1 = palette[Math.floor(Math.random() * palette.length)];
        var color2 = palette[Math.floor(Math.random() * palette.length)];
    } while (color1 == bgColor || color2 == bgColor || color1 == color2);

    context.save();

    context.translate(i * imageProperties.piece, j * imageProperties.piece);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, imageProperties.piece);
    context.lineTo(imageProperties.piece, 0);

    context.fillStyle = color1;
    context.fill();

    context.restore();
    context.closePath();

    context.save();
    context.translate(i * imageProperties.piece + imageProperties.piece * 0.5, j * imageProperties.piece + imageProperties.piece * 0.5);

    context.fillStyle = color2;
    context.rotate(45 * Math.PI / 180);

    context.fillRect(-3 * imageProperties.piece / 8, -1 * imageProperties.piece / 8, 3 * imageProperties.piece / 4, imageProperties.piece / 4);

    context.rotate(90 * Math.PI / 180);
    context.fillRect(-3 * imageProperties.piece / 8, -1 * imageProperties.piece / 8, 3 * imageProperties.piece / 4, imageProperties.piece / 4);

    context.restore();
    context.closePath();
}

exports.drawImage = drawImage;
