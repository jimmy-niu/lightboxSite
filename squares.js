let lit_squares = {};

const SQUARE_SIZE = 15;
const X_OFFSET = 10;
const Y_OFFSET = 10;

function light_box(x, y){
    let index_x = x / (SQUARE_SIZE + X_OFFSET);
    let upper_x = Math.ceil(index_x);
    let lower_x = Math.floor(index_x);

    let index_y = y / (SQUARE_SIZE + Y_OFFSET);

    let within_x = false;
    let within_y = false;

    console.log(lower_x + "," + upper_x);
    console.log('~~~~~~~~~~~~~~~~~~~')
}