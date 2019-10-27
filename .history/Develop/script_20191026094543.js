var startTime = 9;
var endTime = 17
timeSlots = $(".container");

for(i = startTime; i < endTime; i++) {
    newHour = $("<div>");
    newHour.addClass("row");

    hour = $("<div>");
    hour.addClass("col-2 hour");
    hour.text(i);

    dailyTask = $("<input>");
    dailyTask.addClass("col-8");
    dailyTask.addClass("future");
   
    saveButton = $("<input>");
    saveButton.addClass("col-2 saveBtn");
    saveButton.addClass("saveBtn i:hover");
    
    newHour.append(hour, dailyTask, saveButton);
    timeSlots.append(newHour);
 }
 y.length; i++) {

hour.append(hourArray);
    //  console.log(hourArray)
 }

var saveButton = $(".saveBtn");
var dailyTask = $("input");

$(".saveBtn").on("click", function(){

  console.log("clicked save button");
    });

$("input").on("change", function(event) {
    event.preventDefault();
    console.log("Daily Task");
})

    
    // localStorage.setItem("dailyTask", dailyTaskInput);

    // var saveButton=JSON.stringify(value);
    // localStorage.setItem("saveButton", saveButtonJSON);
