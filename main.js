


$("#button-1").click(() => {
    $("#button-1").html("X").css("font-size", "100px");
    $("#button-1").val("X");
    // $( ":button" ).not($("#button-1")).not($('#Rest-Button')).not($('#Play-Agein')).html("O")
    // $("#button-2").html("O").css("font-size","100px");
    // $("#button-2").prop('disabled', true)
    // $("#button-1").prop('disabled', true)


});
$("#button-2").click(() => {
    $("#button-2").html("X").css("font-size", "100px");
    $("#button-2").val("X");
    // $("#button-3").html("O").css("font-size","100px");
    // $("#button-3").prop('disabled', true)


});

$("#button-3").click(() => {
    $("#button-3").html("X").css("font-size", "100px");
    $("#button-3").val("X");
    // $("#button-5").html("O").css("font-size","100px");
    // $("#button-1").prop('disabled', true)


});
$("#button-4").click(() => {
    $("#button-4").html("X").css("font-size", "100px");
    $("#button-4").val("X");
    // $("#button-7").html("O").css("font-size","100px");
    // $("#button-5").prop('disabled', true)


});
$("#button-5").click(() => {
    $("#button-5").html("X").css("font-size", "100px");
    $("#button-5").val("X");
    // $("#button-4").html("O").css("font-size","100px");
    // $("#button-4").prop('disabled', true)


});
$("#button-6").click(() => {
    $("#button-6").html("X").css("font-size", "100px");
    $("#button-6").val("X");
    // $("#button-7").html("O").css("font-size","100px");
    // $("#button-7").prop('disabled', true)


});
$("#button-7").click(() => {
    $("#button-7").html("X").css("font-size", "100px");
    $("#button-7").val("X");
    // $("#button-8").html("O").css("font-size","100px");
    // $("#button-8").prop('disabled', true)


});
$("#button-8").click(() => {
    $("#button-8").html("X").css("font-size", "100px");
    $("#button-8").val("X");
    // $("#button-9").html("O").css("font-size","100px");
    // $("#button-9").prop('disabled', true)


});
$("#button-9").click(() => {
    $("#button-9").html("X").css("font-size", "100px");
    $("#button-9").val("X");
    // $("#button-6").html("O").css("font-size","100px");
    // $("#button-6").prop('disabled', true)
    // $("#button-9").prop('disabled', true)




});

$("#Rest-Button").click(() => {
    var input = $(":button").not($('#Rest-Button')).not($('#Play-Agein')).addClass("marked");
    input.text("")
});


// &&$("#button-5").val()&&$("#button-9").val()


function win() {
    if ($("#button-1").val() && $("#button-5").val() && $("#button-9").val() === "X") {
        console.log("you win ")


    } else if ($("#button-1").val() && $("#button-4").val() && $("#button-7").val() === "X") {
        console.log("you win ")
    } else if ($("#button-1").val() && $("#button-2").val() && $("#button-3").val() === "X") {
        console.log("you win ")
    } else if ($("#button-4").val() && $("#button-5").val() && $("#button-6").val() === "X") {
        console.log("you win ")
    } else if ($("#button-7").val() && $("#button-8").val() && $("#button-9").val() === "X") {
        console.log("you win ")
    } else if ($("#button-2").val() && $("#button-5").val() && $("#button-8").val() === "X") {
        console.log("you win ")
    } else if ($("#button-3").val() && $("#button-6").val() && $("#button-9").val() === "X") {
        console.log("you win ")
    } else if ($("#button-3").val() && $("#button-5").val() && $("#button-7").val() === "X") {
        console.log("you win ")
    }

}



function reply_click(clicked_id) {
    // alert(clicked_id);
    $(`#${clicked_id}`).on('click', win);

    if (clicked_id === "button-1") {
        $("#button-1").prop('disabled', true)
        if(!$("#button-2").val("O")||!$("#button-2").val("X")){ 
        $("#button-2").html("O").css("font-size", "100px");
        $("#button-2").prop('disabled', true)
    } else {
        $("#button-4").html("O").css("font-size", "100px");
        $("#button-4").prop('disabled', true)
    }
     
    }
     else if (clicked_id === "button-2") {
          $("#button-2").prop('disabled', true)
        if(!$("#button-3").val("O")||!$("#button-2").val("X"))
        {  $("#button-3").html("O").css("font-size", "100px");
        $("#button-3").prop('disabled', true)}
      
       
    } 
    else if (clicked_id === "button-3") {
        $("#button-5").html("O").css("font-size", "100px");
        $("#button-3").prop('disabled', true)
        $("#button-5").prop('disabled', true)
    } 
    else if (clicked_id === "button-4") {
        $("#button-1").html("O").css("font-size", "100px");
        $("#button-1").prop('disabled', true)
        $("#button-4").prop('disabled', true)
    }
     else if (clicked_id === "button-5") {
        $("#button-8").html("O").css("font-size", "100px");
        $("#button-8").prop('disabled', true)
        $("#button-5").prop('disabled', true)
    }
    else if (clicked_id === "button-6") {
        $("#button-9").html("O").css("font-size", "100px");
        $("#button-9").prop('disabled', true)
        $("#button-6").prop('disabled', true)
    }
    else if (clicked_id === "button-7") {
        $("#button-4").html("O").css("font-size", "100px");
        $("#button-4").prop('disabled', true)
        $("#button-7").prop('disabled', true)
    }
    else if (clicked_id === "button-8") {
        $("#button-7").html("O").css("font-size", "100px");
        $("#button-8").prop('disabled', true)
        $("#button-7").prop('disabled', true)
    } else if (clicked_id === "button-9") {
        $("#button-6").html("O").css("font-size", "100px");
        $("#button-6").prop('disabled', true)
        $("#button-9").prop('disabled', true)
    }

}



