let lit_squares = [];

const SQUARE_SIZE = 15;
const X_OFFSET = 10;
const Y_OFFSET = 10;

let possible_calls = [
    function(index_x, index_y) {draw_from_index(index_x, index_y - 1)},
    function(index_x, index_y) {draw_from_index(index_x, index_y + 1)},
    function(index_x, index_y) {draw_from_index(index_x -1 , index_y)},
    function(index_x, index_y) {draw_from_index(index_x + 1, index_y)}];

function light_box(x, y){
    let index_x = Math.floor(x / (SQUARE_SIZE + X_OFFSET));
    let index_y = Math.floor(y / (SQUARE_SIZE + Y_OFFSET));

    c.beginPath();
    draw_from_index(index_x, index_y);

    let rand = Math.floor((Math.random() * 4) + 1);
    possible_calls = shuffle(possible_calls);
    
    for(let i = 0; i < rand; i++){
        possible_calls[i](index_x, index_y);
    }

    c.closePath();
    c.stroke();
}

function draw_from_index(x, y){
    // let ctx = canvas. 
    c.fillStyle = "white";
    c.strokeStyle = "orange";
    c.lineWidth = '0.15';

    let x_pixel = x * (X_OFFSET + SQUARE_SIZE) + X_OFFSET;
    let y_pixel = y * (Y_OFFSET + SQUARE_SIZE) + Y_OFFSET;

    
    c.rect(x_pixel, y_pixel, SQUARE_SIZE, SQUARE_SIZE);
    c.fillRect(x_pixel, y_pixel, SQUARE_SIZE, SQUARE_SIZE);
}