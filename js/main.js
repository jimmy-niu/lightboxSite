$(document).ready(function() {
    var height = $('.menu-item').height();
    var y_pos = $('.menu-item').position().top;
    console.log(y_pos);
    $(".modal-dialog").css("top", 9.25+height);
    console.log(height);
});
$(window).resize(function() {
    var height = $('.menu-item').height();
    var y_pos = $('.menu-item').position().top;
    console.log(y_pos);
    $(".modal-dialog").css("top", y_pos+height);
});

$(".menu-item").click(function () {
    // Get the currently selected id.
    $("#mainpage").css("display", "none");

    // KILL babies
    $(".modal-dialog").removeClass("show");
    all_ids = $(".modal-dialog").toArray();
    for(i = 0; i < all_ids.length; i++){
        id = '#' + ($(all_ids[i]).attr('id')).split('-')[0];
        $(id).css("opacity", "0.5");
        $(id).css("text-decoration", "none");
        // $(id).css("background-color", "rgba(0, 188, 212, 0.5)");
    }




    // HELP SAM. why isn't this working?
    // scrollTop: $("#about-text").offset().top - 20;

    // Time to get the id of the box
    menu_item_id = '#' + $(this).attr('id');
    $(menu_item_id).css("opacity", "1");
    $(menu_item_id).css("text-decoration", "underline");
    $(menu_item_id + "-box").addClass("show");

});

$(".modal-dialog .close").click(function(){
    opened = $(this).closest(".modal-dialog");
    opened.removeClass("show");

    all_ids = $(".modal-dialog").toArray();
    for(i = 0; i < all_ids.length; i++){
        id = '#' + ($(all_ids[i]).attr('id')).split('-')[0];
        $(id).css("opacity", "1");
        $(id).css("text-decoration", "none");
        // $(id).css("background-color", "rgba(0, 188, 212, 0.5)");
    }
    $("#mainpage").css("display", "block");
});
