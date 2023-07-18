// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the API endpoint URL
var apiURL = 'https://jsonplaceholder.typicode.com/users';

// Configure the request
xhr.open('GET', apiURL, true);

// Set the response type
xhr.responseType = 'json';

// Handle the request completion
xhr.onload = function() {
  if (xhr.status === 200) {
    // Request was successful
    var data = xhr.response;
    displayData(data);
  } else {
    // Request failed
    console.log('Error: ' + xhr.status);
  }
};

// Send the request
xhr.send();

// Display the data in the UI
function displayData(data) {
  var container = document.getElementById('dataContainer');

  // Clear the container
  container.innerHTML = '';

  // Iterate over the data and create HTML elements
  data.forEach(function(item) {
    var itemElement = document.createElement('div');
    itemElement.classList.add('card', 'my-2');

    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    var title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = item.title;

    var body = document.createElement('p');
    body.classList.add('card-text');
    body.textContent = item.body;

    cardBody.appendChild(title);
    cardBody.appendChild(body);

    itemElement.appendChild(cardBody);

    container.appendChild(itemElement);
  });
}