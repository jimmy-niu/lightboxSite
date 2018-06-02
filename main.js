let last_x = 0;
let last_y = 0;

$(document).ready(function(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini|Mobile/i.test(navigator.userAgent)) {
        set_up_mobile();
    } else{
        create_canvas();
        set_mouse_move();
    }

    bind_handlers();
});

$(window).on('resize', function(){
    resize_canvas();
});

function bind_handlers(){
    
}

function set_mouse_move(){
    $(document).on("mousemove", function(e){
        let x_dif = Math.abs(e.clientX - last_x);
        let y_dif = Math.abs(e.clientY - last_y);
        if(x_dif >= 5 || y_dif >=5){
            light_squares(e.clientX, e.clientY);
        }
        last_x = e.clientX;
        last_y = e.clientY;
    });
}

function set_up_mobile(){
    $("#cards").css("display", "none");
    $("#mobile_bar").css("display", "flex");
    create_canvas();
}

function checkHash(hash_set, obj){
    return hash_set[obj] !== undefined;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }