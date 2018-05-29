let width;
let height;

// Canvas related variables. 
let canvas;
let c;

function resize_canvas(){
    console.log("resizing!");
    width = window.innerWidth;
    height = window.innerHeight;
    
    $("#canvas_background").css("width", width);
    $("#canvas_background").css("height", height);
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);

    c.fillStyle = "black";
    c.fillRect(0, 0, width, height);
    c.stroke();
    
    drawGrid();
}

function create_canvas(){
    canvas = document.createElement("canvas");
    c = canvas.getContext("2d");  
    resize_canvas();
}

function drawGrid(){
    c.fillStyle = "#050505";
    c.strokeStyle = "ghostwhite";
    c.lineWidth = '0.15';
    
    c.beginPath();
    for(let i = X_OFFSET; i <= width; i += SQUARE_SIZE + X_OFFSET){
        for(let j = Y_OFFSET; j <= height; j += SQUARE_SIZE + Y_OFFSET){
            c.rect(i, j, SQUARE_SIZE, SQUARE_SIZE);
            c.fillRect(i, j, SQUARE_SIZE, SQUARE_SIZE);
        }
    }
    
    // let to_draw = lit_squares;
    lit_squares = [];
    // let size = to_draw.length;
    // for(let i = 0; i < size; i++){
    //     let square = to_draw[i].coor;
    //     draw_from_index(square.x, square.y);
    // }

    c.closePath();
    c.stroke();

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