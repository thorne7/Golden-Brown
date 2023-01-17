// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
$("#currentDay").text(today.format('dddd, MMMM D H:mm A'))

var hour = [9, 10, 11, 12, 1, 2, 3, 4, 5];

$(".saveBtn").click(saveButton);

function saveButton() {
 event.preventDefault();
 var description = ('description').value;
 var hourData = $(this).siblings(".description").val();
 console.log("this worked")



  localStorage.setItem(hourData, description);
 }



    // <script>
    //         function saveData(){
    //     localStorage.saveServer
    //     }
    //     </script>
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  // };

// $(".saveBtn").click(function () {

// for (var i = 0; i < hour.length; i++) {
//   // var dataHour = localStorage.getItem(x[i]);

// if ('hour')dayjs().isBefore(dayjs("H")) 
//   $(".time-block").addClass("past"); 

// if ('hour')dayjs().isSame(dayjs("H"))
// $(".time-block").addClass("present");

// if ('hour')dayjs().isAfter(dayjs("H"))
// $(".time-block").addClass("future");

// }})


// $(".saveBtn").click(function () {
//   if ('hour')dayjs().isSame(dayjs("H")); {
//     $(".time-block").addClass("present");
//   }
//     })
    
//     $(".saveBtn").click(function () {
//   if ('hour')dayjs().isAfter(dayjs("H")); {
//     $(".time-block").addClass("future");
//   }
//     })