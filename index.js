// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");

// Define Query Selector for the inputs  
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $dateInput = document.querySelector("#date");
var $countryInput = document.querySelector("#country");

// Define Query Selector for buttons
var $searchBtnCity = document.querySelector("#search-city");
var $searchBtnState = document.querySelector("#search-state");
var $searchBtnDate = document.querySelector("#search-date");
var $searchBtnCountry = document.querySelector("#search-country");

// Add an event listener to the searchButtons, call handleSearchButtonClick for each when clicked 
$searchBtnCity.addEventListener("click", handleSearchButtonClickCity);
$searchBtnState.addEventListener("click", handleSearchButtonClickState);
$searchBtnDate.addEventListener("click", handleSearchButtonClickDate);
$searchBtnCountry.addEventListener("click", handleSearchButtonClickCountry);


// Set filteredAddresses to addressData initially
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

// Function to handle the each input and corresponding clicks for all the input data

function handleSearchButtonClickCity() {
  
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterCity = $cityInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredAddresses = filteredAddresses.filter(function (address) {
    var addressCity = address.city.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressCity === filterCity;
  });
  renderTable();
}

function handleSearchButtonClickState() {
  var filterState = $stateInput.value.trim().toLowerCase();

  filteredAddresses = filteredAddresses.filter(function (address) {

    var addressState = address.state.toLowerCase();
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    
    console.log(addressState)
    return addressState === filterState;
  });
  renderTable();
}

function handleSearchButtonClickDate() {
  var filterDate = $dateInput.value.trim().toLowerCase();

  filteredAddresses = filteredAddresses.filter(function (address) {

    var addressDate = address.datetime.toLowerCase();
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    // return [addressCity === filterCity, addressState === filterCity];
    console.log(addressDate)
    return addressDate === filterDate;
  });
  renderTable();
}

function handleSearchButtonClickCountry() {
  var filterCountry = $countryInput.value.trim().toLowerCase();

  filteredAddresses = filteredAddresses.filter(function (address) {

    var addressCountry = address.country.toLowerCase();
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      // return [addressCity === filterCity, addressState === filterCity];
    console.log(addressCountry)
    return addressCountry === filterCountry;
  });
  renderTable();
}

// Render the table to filter
renderTable();