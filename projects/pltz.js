$(function(){
    $( ".draggable" ).draggable({

        stack: ".draggable",
        containment: ".container"

    });


    //toggle switch
$(".switch").click(function(){
$(".container").toggleClass(".darkmode");
})
})