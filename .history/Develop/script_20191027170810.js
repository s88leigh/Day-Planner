var startTime = 9;
var endTime = 17
timeSlots = $(".container");

// for(i = startTime; i < endTime; i++) {
    newRow = $("<div>");
    newRow.addClass("row");

    hour = $("<div>");
    hour.addClass("col-2 hour");
    hour.text(i);

    dailyTask = $("<textarea>");
    dailyTask.addClass("col-8");
    dailyTask.addClass("future");
   
    saveButton = $("<button>");
    saveButton.addClass("col-2 saveBtn");
    saveButton.addClass("saveBtn i:hover");
    saveButton.text("save");
    
    newRow.append(hour, dailyTask, saveButton);
    timeSlots.append(newRow);
//  }
 

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
