let lit_squares = [];

const SQUARE_SIZE = 15;
const X_OFFSET = 10;
const Y_OFFSET = 10;

let possible_calls = [
    function(index_x, index_y, ctx) {draw_from_index(index_x, index_y - 1, ctx)},
    function(index_x, index_y, ctx) {draw_from_index(index_x, index_y + 1, ctx)},
    function(index_x, index_y, ctx) {draw_from_index(index_x -1 , index_y, ctx)},
    function(index_x, index_y, ctx) {draw_from_index(index_x + 1, index_y, ctx)}];

function light_box(x, y){
    let index_x = Math.floor(x / (SQUARE_SIZE + X_OFFSET));
    let index_y  = Math.floor(y / (SQUARE_SIZE + Y_OFFSET));


    let context = canvas.getContext("2d");
    context.beginPath();

    draw_from_index(index_x, index_y, context);
    
    let rand = Math.floor((Math.random() * 4) + 1);
    possible_calls = shuffle(possible_calls);
    
    for(let i = 0; i < rand; i++){
        possible_calls[i](index_x, index_y, context);
    }

    context.closePath();
    context.stroke();

    setTimeout(fadeSquares, 500, context);
}

function draw_from_index(x, y, ctx){
    ctx.fillStyle = "white";
    ctx.strokeStyle = "orange";
    ctx.lineWidth = '0.15';

    let x_pixel = x * (X_OFFSET + SQUARE_SIZE) + X_OFFSET;
    let y_pixel = y * (Y_OFFSET + SQUARE_SIZE) + Y_OFFSET;

    
    ctx.rect(x_pixel, y_pixel, SQUARE_SIZE, SQUARE_SIZE);
    ctx.fillRect(x_pixel, y_pixel, SQUARE_SIZE, SQUARE_SIZE);

    // let lit = {coor: {x: x, y: y}, context: ctx};
    // lit_squares.push(lit);
}

function fadeSquares(context){
    console.log(context.globalAlpha);  
    console.log(context);
    $(context).css("opacity", 0); 
    // context.globalAlpha = 0;
}

