var startTime = 9;
var endTime = 17
timeSlots = $(".container");

for(i = startTime; i < endTime; i++) {
    newHour = $("<div>");
    newHour.addClass("row");

    hour = $("<div>");
    hour.addClass("col-2 hour");
    // hour.text[i];

    dailyTask = $("<textarea>");
    dailyTask.addClass("col-8");
    dailyTask.addClass("future");
    dailyTask.textContent="";

    saveButton = $("<div>");
    saveButton.addClass("col-2 saveBtn");
    saveButton.addClass("saveBtn i:hover");
    
    

    newHour.append(hour, dailyTask, saveButton);
    timeSlots.append(newHour);
 }
 var hourArray = [
    "9 am",
    "10 am",
    "11 am",
    "12 pm",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm"
 ]
 for (var i=0; i < hourArray.length; i++) {

hour.append(hourArray);
    //  console.log(hourArray)
 }
// function display(hourArray ) {
//     for var
// }
    //  function numHour(number) {
    //      var hour = number +9;

    //      if(hour > 12) {
    //          hour = hour -12;
    //          hour = hour + " pm"
    //      }
    //      else if (
    //          hour ==12)
         

    //  }

var saveButton = $(".saveBtn");

$(".saveBtn").on("click", function(){
  console.log("clicked save button");
    });
  
    // localStorage.setItem("dailyTask", dailyTaskInput);

    // var user=JSON.stringify(value);
    // localStorage.setItem("saveButton", userJSON);
