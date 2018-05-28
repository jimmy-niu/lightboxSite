$(document).ready(function(){
    bindHandlers();

    width = $(document).width();
    height = $(document).height();
    create_canvas();
});

$(window).on('resize', function(){
    width = $(document).width();
    height = $(document).height();
    resize_canvas();
});

function bindHandlers(){
    $('body').on("click", function(e){
        light_box(e.clientX, e.clientY);
    });
}

function checkHash(hash, obj){
    return hash[obj] === true;
}