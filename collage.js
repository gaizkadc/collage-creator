require('dotenv').config();

const utils = require('./utils');
const { createCanvas } = require('canvas')
const fs = require('fs');

export class Collage {
    constructor(pieces, ctx) {
        this.pieces = pieces;
        this.ctx;

        this.width = parseInt(process.env.COLLAGE_WIDTH);
        this.height = parseInt(process.env.COLLAGE_HEIGHT);

        var numberPieces = parseInt(process.env.NUMBER_PIECES);

        if (numberPieces == 0) {
            const possiblePiecesNumber = [2, 4, 5, 8, 10];
            const pieceIndex = Math.floor(Math.random() * possiblePiecesNumber.length);

            numberPieces = possiblePiecesNumber[pieceIndex];
            console.log('number of pieces: ' + numberPieces);
        }

        this.pieceSize = width / numberPieces;

        if (process.env.GRAYSCALE == 1) {
            this.grayscale = true;
        } else {
            this.grayscale = false;
        }

        this.palette = utils.createPalette(this.grayscale);
        console.log('palette: ' + palette);

        const now = new Date();
        this.collageName = utils.getFormattedDate(now, false);
        console.log('collage name: ' + this.collageName);
    }

    createCollage() {
        console.log('creating collage...');
    
        const horizontalPieces = this.width / this.pieceSize;
        const verticalPieces = this.height / this.pieceSize;
    
        for (let i = 0; i < horizontalPieces; i++) {
            for (let j = 0; j < verticalPieces; j++) {
                const pieceIndex = Math.floor(Math.random() * pieces.length);
                pieces[pieceIndex].drawPiece(this.ctx, this.pieceSize, this.palette, figures, [i, j]);
            }
        }
    
        const buffer = canvas.toBuffer('image/' + process.env.FORMAT);
        
        fs.writeFileSync('./' + this.collageName + '.' + process.env.FORMAT, buffer);
    }
}
