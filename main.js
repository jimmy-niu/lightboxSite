$(document).ready(function(){
    bind_handlers();

    console.log("ptoato");

    width = $(document).width();
    height = $(document).height();
    create_canvas();
});

$(window).on('resize', function(){
    width = $(document).width();
    height = $(document).height();
    resize_canvas();
});

function bind_handlers(){
    console.log("inside bind");
    $(document).on("click", function(e){
        light_box(e.clientX, e.clientY);
    });
}

function checkHash(hash, obj){
    return hash[obj] === true;
}