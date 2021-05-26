import { Figure } from './figure'

function drawBackground(ctx, pieceSize, palette, position) {
    const color = palette[Math.floor(Math.random() * palette.length)];

    context.fillStyle = color;
    context.fillRect(position[0] * pieceSize, position[1] * pieceSize, pieceSize, pieceSize);

    ctx.save();

    return color;
}

function drawAntichrist(ctx, pieceSize, palette, position) {
    const bgColor = drawBackground(ctx, pieceSize, palette, position);

    do {
        var color = palette[Math.floor(Math.random() * palette.length)];
    } while (color == bgColor);

    ctx.translate(position[0] * pieceSize, position[1] * pieceSize);

    ctx.fillStyle = color;
    ctx.fillRect(3 * pieceSize / 8, 0, pieceSize / 4, pieceSize);
    ctx.fillRect(1 * pieceSize / 8, 2 * pieceSize / 4, 3 * pieceSize / 4, pieceSize / 4);

    ctx.restore();
    ctx.closePath();
}

function drawCross(ctx, pieceSize, palette, position) {
    const bgColor = drawBackground(ctx, pieceSize, palette, position);

    do {
        var color = palette[Math.floor(Math.random() * palette.length)];
    } while (color == bgColor);

    context.translate(position[0] * pieceSize + pieceSize * 0.5, position[1] * pieceSize + pieceSize * 0.5);

    context.fillStyle = color;
    context.rotate(45 * Math.PI / 180);

    context.fillRect(-3 * pieceSize / 8, -1 * pieceSize / 8, 3 * pieceSize / 4, pieceSize / 4);

    context.rotate(90 * Math.PI / 180);
    context.fillRect(-3 * pieceSize / 8, -1 * pieceSize / 8, 3 * pieceSize / 4, pieceSize / 4);

    context.restore();
    context.closePath();
}

var allFigures = [];

var antichrist = new Figure(drawAntichrist);
allFigures.push(antichrist);

var cross = new Figure(drawCross);
allFigures.push(cross);

exports.allFigures = allFigures;
