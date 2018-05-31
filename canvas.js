let width;
let height;

// Canvas related variables. 
let canvas;
let canvas_context;

function resize_canvas(){
    console.log("resizing!");
    width = window.innerWidth;
    height = window.innerHeight;
    
    $("#canvas_background").css("width", width);
    $("#canvas_background").css("height", height);
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);

    canvas_context.fillStyle = "black";
    canvas_context.fillRect(0, 0, width, height);
    canvas_context.stroke();
    
    drawGrid();
}

function create_canvas(){
    canvas = document.createElement("canvas");
    canvas_context = canvas.getContext("2d");  
    resize_canvas();
}

function drawGrid(){
    canvas_context.fillStyle = "#050505";
    canvas_context.strokeStyle = "ghostwhite";
    canvas_context.lineWidth = '0.15';
    
    canvas_context.beginPath();
    for(let i = X_OFFSET; i <= width; i += SQUARE_SIZE + X_OFFSET){
        for(let j = Y_OFFSET; j <= height; j += SQUARE_SIZE + Y_OFFSET){
            canvas_context.rect(i, j, SQUARE_SIZE, SQUARE_SIZE);
            canvas_context.fillRect(i, j, SQUARE_SIZE, SQUARE_SIZE);
        }
    }
    
    // let to_draw = lit_squares;
    lit_squares = [];
    // let size = to_draw.length;
    // for(let i = 0; i < size; i++){
    //     let square = to_draw[i].coor;
    //     draw_from_index(square.x, square.y);
    // }

    canvas_context.closePath();
    canvas_context.stroke();

    // Use the canvas as background.
    $("#canvas_background").append(canvas); 
    //document.body.style.background = "url(" + canvas.toDataURL() + ")";
}

function change_size(size){

}

function change_x(offset){

}

function change_y(offset){

}