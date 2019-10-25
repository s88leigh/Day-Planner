var startTime = 9;
var endTime = 17
timeSlots = $(".container");

for(i = startTime; i < endTime; i++) {
    newHour = $("<div>");
    newHour.addClass("row");

    hour = $("<div>");
    hour.addClass("col-2 hour");
    hour.text[i];

    dailyTask = $("<textarea>");
    dailyTask.addClass("col-8");
    dailyTask.addClass("future");
    dailyTask.textContent="";

    saveButton = $("<div>");
    saveButton.addClass("col-2 saveBtn");
    
    

    newHour.append(hour, dailyTask, saveButton);
    timeSlots.append(newHour);
 }
var saveButton = $(".saveBtn");


textAreaEl.addEventListener("keydown")


$(".saveBtn").on("click", function(){
  console.log("clicked save button");
var UserInput = $("textarea").value();
    


    });
  
    // localStorage.setItem("dailyTask", dailyTaskInput);

    var user=JSON.stringify(user);
    localStorage.setItem("user", userJSON);
