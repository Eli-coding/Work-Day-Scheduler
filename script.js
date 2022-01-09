
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




/*


THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

*/