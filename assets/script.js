
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

    var keyVar = $(this).parent("container"); //parent
    var inputVar = $(this).siblings(".description").val(); //siblings
   
    localStorage.setItem(keyVar, JSON.stringify(inputVar));

});



