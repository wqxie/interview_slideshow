$( document ).ready(function() {
    console.log("ready");
    $(".slide-left").on("click", function(){
        console.log("left");
    });
    $(".slide-right").on("click", function(){
        console.log("right");
    });
});