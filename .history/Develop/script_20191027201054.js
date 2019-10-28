var startTime = 9;
var endTime = 17;
const curDay = document.querySelector(".currentDay");
const now = moment();
var input = [];
input = JSON.parse(localStorage.getItem("input"));


function updateTime() {

  const date = now.format("dddd, MMM Do YYYY");

  currentDay.textContent = date;
}
setInterval(updateTime, 1000)
updateTime();


for (i = startTime; i <= endTime; i++) {
  newRow = $("<div>");
  newRow.addClass("row");

  hour = $("<div>");
  hour.addClass("col-2 hour");
  Time1 = moment(i, "hA");
  hour.text(Time1.format("hA"));


  dailyTask = $("<textarea>");
  dailyTask.addClass("col-8");
  dailyTask.attr("id",i);
  dailyTask.val(input[i-startTime])

  Time2 = moment(i + 1, "hA");
  if (Time2 > now && now > Time1) {
    dailyTask.addClass("present")
  }
  else if (Time1.isBefore(now)) {
    dailyTask.addClass("past")
  }
  else {
    dailyTask.addClass("future");
  }



  saveButton = $("<button>");
  saveButton.addClass("col-2 saveBtn");
  saveButton.addStyle(".hover");
  saveButton.text("save");

  newRow.append(hour, dailyTask, saveButton);
  $(".container").append(newRow);
}



$(".saveBtn").on("click", function(){
  var id =  $(this).siblings("textarea").attr("id");
  input[id - startTime] = $(this).siblings("textarea").val();
  
   localStorage.setItem("input", JSON.stringify(input));
 
  console.log("clicked save button");
    });

    