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
    
    c.closePath();
    c.stroke();

    $("#canvas_background").append(canvas); 
}