$(document).ready(function(){
    bind_handlers();
    create_canvas();
});

$(window).on('resize', function(){
    resize_canvas();
});

function bind_handlers(){
    $(document).on("mousemove", function(e){
        light_box(e.clientX, e.clientY);
    });
}

function checkHash(hash, obj){
    return hash[obj] === true;
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