
//display time 
var timeDisplay = moment().format('MMMM Do YYYY, h:mm:ss a');
var display = $('#currentDay');
display.text(timeDisplay);

//check time for blocks
function checkTime() {
    var currentHour = moment().hour();
    $(".time-block").each(function () {

        var time = parseInt($(this).attr("id"));

        if (time < currentHour) {

            $(this).addClass("past");


        } else if (time === currentHour) {

            $(this).removeClass("past");
            $(this).addClass("present");


        } else {

            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");

        }
    });

}


//save button for that time block and text saved in local strorage
$(".btn ").click(function (event) {
    
    
    event.preventDefault();
    var keyVarId = $(this).parent().attr('id'); //getting the id of the parent
    var inputVar = $(this).siblings('.description').val(); //siblings

    console.log($(this).siblings('.description').val());
    localStorage.setItem(keyVarId, JSON.stringify(inputVar));


});


//console.log(localStorage.getItem("9"));
//console.log($("#9").children("textarea"));

//items saved and persist after refreshing page.
$("#9").children("textarea").val(localStorage.getItem("9"));
$("#10").children("textarea").val(localStorage.getItem("10"));
$("#11").children("textarea").val(localStorage.getItem("11"));
$("#12").children("textarea").val(localStorage.getItem("12"));
$("#13").children("textarea").val(localStorage.getItem("13"));
$("#14").children("textarea").val(localStorage.getItem("14"));
$("#15").children("textarea").val(localStorage.getItem("15"));
$("#16").children("textarea").val(localStorage.getItem("16"));
$("#17").children("textarea").val(localStorage.getItem("17"));


