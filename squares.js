let lit_squares = {};

const SQUARE_SIZE = 15;
const X_OFFSET = 10;
const Y_OFFSET = 10;

function light_box(x, y){
    console.log("inside light box");
    let index_x = x / (SQUARE_SIZE + X_OFFSET);
    let upper_x = Math.ceil(index_x);
    let lower_x = Math.floor(index_x);

    let index_y = y / (SQUARE_SIZE + Y_OFFSET);
    let upper_y = Math.ceil(index_y);
    let lower_y = Math.floor(index_y);

    draw_from_index(upper_x, upper_y);
    draw_from_index(upper_x, lower_y);
    draw_from_index(lower_x, upper_y);
    draw_from_index(lower_x, lower_y);
}

function draw_from_index(x, y){
    console.log(x, y);

    c.fillStyle = "white";
    c.strokeStyle = "orange";
    c.lineWidth = '0.15';

    let x_pixel = x * (X_OFFSET + SQUARE_SIZE);
    let y_pixel = y * (Y_OFFSET + SQUARE_SIZE);

    c.beginPath();
    c.rect(x_pixel, y_pixel, SQUARE_SIZE, SQUARE_SIZE);
    c.fillRect(x_pixel, y_pixel, SQUARE_SIZE, SQUARE_SIZE);
    c.closePath();
    c.stroke();

    //$("#canvas_background").append(canvas);
}