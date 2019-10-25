var startTime = 9;
var endTime = 17
timeSlots = $(".container");

for(i = startTime; i < endTime; i++) {
    newHour = $("<div>");
    newHour.addClass("row");

    hour = $("<div>");
    hour.addClass("col-2 hour");
    hour.text[i];

    dailyTask = $("<input>");
    dailyTask.addClass("col-8");
    dailyTask.addClass("future");
    dailyTask.textContent="";

    saveButton = $("<div>");
    saveButton.addClass("col-2 saveBtn");
    saveButton.addClass("col-2 i:hover");
    

    newHour.append(hour, dailyTask, saveButton);
    timeSlots.append(newHour);
 }
var saveButton = $(".saveBtn");
var text = document.querySelector(".col-8");

$(".saveBtn").on("click", function()
    {$(document).ready(function(){
        $("#p1").hover(function(){
          alert("You entered p1!");
        },
        console.log("clicked save button");
    var dailyTaskInput = $(".col-8").value;

    localStorage.setItem("dailyTask", dailyTaskInput);

    });
  

    
