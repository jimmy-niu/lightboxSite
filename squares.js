let lit_squares = [];
let to_redraw = false;

let old_x = 0;
let old_y = 0;

const SQUARE_SIZE = 15;
const X_OFFSET = 10;
const Y_OFFSET = 10;

$(document).ready(function () {
    setInterval(fadeSquares, 500);
});

let possible_calls = [
    function (index_x, index_y) { draw_from_index(index_x, index_y - 1) },
    function (index_x, index_y) { draw_from_index(index_x, index_y + 1) },
    function (index_x, index_y) { draw_from_index(index_x - 1, index_y) },
    function (index_x, index_y) { draw_from_index(index_x + 1, index_y) }];

function light_box(x, y) {
    if (Math.abs(old_x - x) > 2 || Math.abs(old_y - y) > 2) {
        let index_x = Math.floor(x / (SQUARE_SIZE + X_OFFSET));
        let index_y = Math.floor(y / (SQUARE_SIZE + Y_OFFSET));

        c.beginPath();

        draw_from_index(index_x, index_y);

        let rand = Math.floor((Math.random() * 4) + 1);
        possible_calls = shuffle(possible_calls);

        for (let i = 0; i < rand; i++) {
            possible_calls[i](index_x, index_y);
        }

        c.closePath();
        c.stroke();

        setTimeout(fadeSquares, 1000);
        to_redraw = true;
    }
    old_x = x;
    old_y = y;
}

function draw_from_index(x, y) {
    c.fillStyle = "grey";
    c.globalAlpha = 1;

    let x_pixel = x * (X_OFFSET + SQUARE_SIZE) + X_OFFSET;
    let y_pixel = y * (Y_OFFSET + SQUARE_SIZE) + Y_OFFSET;


    c.rect(x_pixel, y_pixel, SQUARE_SIZE, SQUARE_SIZE);
    c.fillRect(x_pixel, y_pixel, SQUARE_SIZE, SQUARE_SIZE);

    let lit = { x: x_pixel, y: y_pixel, alpha: 0.1 };
    lit_squares.push(lit);
}

function fadeSquares() {
    let size = lit_squares.length;
    for (let i = 0; i < size; i++) {
        let coor = lit_squares[i];

        c.globalAlpha = coor.alpha;
        c.lineWidth = '0.15';
        c.fillStyle = "#050505";
        c.strokeStyle = "ghostwhite";
        c.fillRect(coor.x, coor.y, SQUARE_SIZE, SQUARE_SIZE);


        coor.alpha += 0.01;

        if (coor.alpha >= 0.4) {
            lit_squares.splice(i, 1);
            size--;
        }
    }

    if (to_redraw && lit_squares.length === 0) {
        resize_canvas();
        to_redraw = false;
    }
}

