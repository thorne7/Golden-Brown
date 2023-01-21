// Initiate after document ready
$(document).ready(function () {
  setCurrentDate();
  setHourStyles();
  getSavedNotes();

  $(".saveBtn").click(function () {
    var timeBlock = $(this).parent().get(0)

    var hour = timeBlock.id
    var note = $(this).siblings(".description").val();

    setHourNote(hour, note)
  })
})

function setCurrentDate() {
  var today = dayjs();
  $("#currentDay").text(today.format('dddd, MMMM D'));
}

function setHourStyles() {
  var today = dayjs();
  var currentHour = Number(today.format('H'))
  var timeBlocks = $('.time-block')

  for (var timeBlock of timeBlocks) {
    var timeBlockID = timeBlock.id;
    var timeBlockHour = Number(timeBlockID.replace('hour-', ''));

    // set the background color based on the time
    if (timeBlockHour > currentHour) {
      $(timeBlock).find('.description').addClass("future");
    } else if (timeBlockHour === currentHour) {
      $(timeBlock).find('.description').addClass("present");
    } else {
      $(timeBlock).find('.description').addClass("past");
    }
  }
}

function getSavedNotes() {
  var today = dayjs();
  var todayKey = today.format('YYYYMMDD')
  var todayNotes = localStorage.getItem(todayKey)

  if (todayNotes) {
    var todayNotesObject = JSON.parse(todayNotes)

    for (var timeBlockKey in todayNotesObject) {
      var timeBlockNote = todayNotesObject[timeBlockKey]
      $('#' + timeBlockKey).find('.description').val(timeBlockNote)
    }
  }
}

function setHourNote(hour, note) {
  var today = dayjs();
  var todayKey = today.format('YYYYMMDD')

  var todayNotes = localStorage.getItem(todayKey)
  var todayNotesObject = {}

  if (todayNotes) {
    todayNotesObject = JSON.parse(todayNotes)
  }

  todayNotesObject[hour] = note

  localStorage.setItem(todayKey, JSON.stringify(todayNotesObject))
}