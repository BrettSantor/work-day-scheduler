// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dateEl = $("#currentDay")
var currentDate = dayjs()
var currentHour = dayjs().format('[hour-]H')
var saveBtn = $(".saveBtn")
var hours = $("div[id|='hour']")
// var dateCheck =  dayjs().isbefore(thatDate, 'hour')

$(function() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

saveBtn.on('click', function(){

  // console.log($(this).attr('description'))
  toDos = $('#text').val()
  localStorage.setItem('what', toDos)
})

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
hours.each(function(){
  if(this.id === currentHour){
    $(this).removeClass('past future').addClass('present')
  } else if(this.id < currentHour){
    $(this).removeClass('present future').addClass('past')
  } else if(this.id > currentHour){
    $(this).removeClass('past present').addClass('future')
  }
})

  // for(var i = 0; i < hours.length; i++) {
    //  if(hours[i] == currentHour) {
      // hours[i].removeclass('present future').addclass('past');
      // hours[i].removeclass('future')
      // hours[i].addclass('past');
    //  }
  // }
  console.log(currentHour)
console.log(hours)

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
console.log(hours.length)

  // TODO: Add code to display the current date in the header of the page.
  dateEl.text(currentDate.format("MMMM, dddd D, YYYY"))
});

