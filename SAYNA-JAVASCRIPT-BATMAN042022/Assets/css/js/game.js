$("window").ready(function() {
    $(".boutons a").hover(function() {
        $(this).css("font-weight", "bold");
        $(this).css("text-decoration", "underline");
        $(this).css("color", "white");
    }, function() {
        $(this).css("font-weight", "lighter");
        $(this).css("text-decoration", "none");
        $(this).css("color", "white");
    });

    $("#demarrer a").hover(function() {
        $(this).css("font-weight", "bold");
        $(this).css("color", "white");
    }, function() {
        $(this).css("font-weight", "lighter");
        $(this).css("color", "white");
    });

    $("#demarrer p").hover(function() {
        $(this).css("background", "rgb(193,2,19)");
        $(this).css("background", "linear-gradient(90deg, rgba(193,2,19,1) 1%, rgba(73,41,41,1) 51%, rgba(75,74,75,1) 100%)");
    }, function() {
        $(this).css("background", "rgb(75, 74, 75)");
        $(this).css("background", "linear-gradient(90deg, rgba(75, 74, 75, 1) 0%, rgba(73, 41, 41, 1) 50%, rgba(193, 2, 19, 1) 100%)");
    });

    $(".logo").hover(function() {
        $(this).css("border", "solid 2px yellow");
    }, function() {
        $(this).css("border", "none");
    })


});

$('document').ready(function() {

})