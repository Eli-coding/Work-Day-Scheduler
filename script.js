
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
$( ".btn " ).click(function(event) {
    event.preventDefault();
   
   // console.log($(this))
    //console.log($(this).siblings())
    //console.log($(this).parent())
    
  
    var keyVar = $(this).parent("container"); //parent
    var inputVar = $(this).siblings("textarea").val(); //siblings
    console.log(keyVar);
    console.log(inputVar);

    localstorage.setItem(keyVar, inputVar);
  
  });
    
    
  //1. Create a variable that targets the input value using $(this).siblings()  (as well as .val)
 // 2. create a variable that targets the div id that holds your input and buttion.  That will be similar but using parents
 // 3. save those to local storage localStorage.setItem( vorForID, varForInputValue)

// localstroage.setItem ("activitySaved", JSON.stringify (textarea)); 
    //var activitySaved = localstroage.getItem ("activitySaved");

