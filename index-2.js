
// Getting references to the input fields, button, and lists

var $tbody = document.querySelector("tbody");

var $dateInput = document.querySelector("#date-time-2");
var $cityInput = document.getElementById("city-2");
var $stateInput = document.querySelector("#state-2");
var $countryInput = document.querySelector("#country-2");
var $shapeInput = document.querySelector("#shape-2");
var $durationInput = document.querySelector("#duration-2");
var $commentInput = document.querySelector("#comments-2");

var $submitBtn = document.getElementById("search-city-2");

// When the add button is clicked, call the handleAddClick function
$submitBtn.addEventListener("click", handleAddClick);

// Filter Data
var filteredAddresses = dateData;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredAddresses.length; i++) {
    // Get get the current address object and its fields
    var address = filteredAddresses[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

// get the values from the form

function handleAddClick() {
  event.preventDefault();
  var newRow = {

    datetime: $dateInput.value,
    city: $cityInput.value,
    state: $stateInput.value,
    country: $countryInput.value,
    shape: $shapeInput.value,
    durationMinutes: $durationInput.value,
    comments: $commentInput.value

  };

  // console.log(newRow)

  // push the new values to the existing data 
  filteredAddresses.push(newRow)
  renderTable();
}
renderTable();