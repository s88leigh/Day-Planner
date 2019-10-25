var startTime = 9;
var endTime = 17
timeSlots = $(".container");

for(i = startTime; i < endTime; i++) {
    newHour = $("<div>");
    newHour.addClass("row");

    hour = $("<div>");
    hour.addClass("col-2 hour");
    hour.text[i];

    userInput = $("<input>");
    userInput.addClass("col-8");
    userInput.addClass("future");
    userInput.textContent="";

    saveButton = $("<div>");
    saveButton.addClass("col-2 saveBtn");
    

    newHour.append(hour, userInput, saveButton);
    timeSlots.append(newHour);
 }
var saveButton = $(".saveBtn");
var text = document.querySelector(".col-8");

$(".saveBtn").on("click", function()
    {
        console.log("clicked save button");
    });
  

    var dailyTask = document.querySelector(".col-8").value;

    localStorage.setItem("dailyTask", dailyTask);

