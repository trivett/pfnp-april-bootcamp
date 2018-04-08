
function farenheitToCelsiusConverter(f) {
  // paste in your function here
}

function clearInputsAndWarnings() {
  // this function will clear the form input and hide the message saying it is boiling or freezing  
}

function showAnswersAndWarnings(c) {
  // this function will take the result of temp conversion and display the correct message based on that.
}

// I wrote this for you, let's look at it together.

$("#temperature-conversion-form").on("submit", function () {
  let f = $('#farenheit-input').val();
  clearInputsAndWarnings();
  let c = farenheitToCelsiusConverter(f);
  showAnswersAndWarnings(c);
});