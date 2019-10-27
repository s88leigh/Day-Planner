var startTime = 9;
var endTime = 17
timeSlots = $(".container");

for(i = startTime; i < endTime; i++) {
    newHour = $("<div>");
    newHour.addClass("row");

    hour = $("<div>");
    hour.addClass("col-2 hour");
    // hour.text[i];

    dailyTask = $("<input>");
    dailyTask.addClass("col-8");
    dailyTask.addClass("future");
   

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

var saveButton = $(".saveBtn");
var dailyTtask = $(".#input");

$(".saveBtn").on("click", function(){

  console.log("clicked save button");
    });

$("#input").on("keydown", function(event) {
    event.preventDefault();
    console.log(input);
})

    
    // localStorage.setItem("dailyTask", dailyTaskInput);

    // var user=JSON.stringify(value);
    // localStorage.setItem("saveButton", userJSON);
