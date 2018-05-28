let width;
let height;

// Canvas related variables. 
let canvas;
let c;

function resize_canvas(){
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
    c.strokeStyle = "white";
    c.lineWidth = '0.15';
    
    squares = {};
    c.beginPath();
    for(let i = X_OFFSET; i <= width; i += SQUARE_SIZE + X_OFFSET){
        for(let j = Y_OFFSET; j <= height; j += SQUARE_SIZE + Y_OFFSET){
            let coord = i + "," + j;
            squares[coord] = true;

            c.rect(i, j, SQUARE_SIZE, SQUARE_SIZE);
            c.fillRect(i, j, SQUARE_SIZE, SQUARE_SIZE);
        }
    }
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