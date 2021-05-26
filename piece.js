export class Piece {
    constructor(ctx, size, palette, figures, position) {
        this.ctx = ctx,
        this.size = size,
        this.palette = palette,
        this.figures = figures,
        this.position = position
    }

    drawPiece() {
        for (let i = 0; i < this.figures.length; i++) {
            this.figures[i].drawFigure(this.ctx, this.size, this.palette, this.position);
        }
    }
}
