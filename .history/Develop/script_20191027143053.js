var startTime = 9;
var endTime = 17;
const curDay = document.querySelector(".currentDay");
const now = moment();

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

Time2 = moment(i+1)
  if (Time1.isBefore(now)) {
    dailyTask.addClass("past")
  }
  else {
    dailyTask.addClass("future");
  }



  saveButton = $("<button>");
  saveButton.addClass("col-2 saveBtn");
  saveButton.addClass("saveBtn i:hover");
  saveButton.text("save");

  newRow.append(hour, dailyTask, saveButton);
  $(".container").append(newRow);
}


// var saveButton = $(".saveBtn");

//  var inputTask = $(".col-8").value;

// $(".saveBtn").on("click", function(){

//   var input = inputTask;
//   input.textContent=value;

//  if (input && value) {
//    localStorage.setItem("input", input);
//  }
  // console.log("clicked save button");
    // });

    // // Get id of element clicked by user
    // $(".row").click(function(event) {
    //   dailyTaskInput = event.target.class;

    // }


    // var saveButton=JSON.stringify(value);
    // localStorage.setItem("saveButton", saveButtonJSON);
