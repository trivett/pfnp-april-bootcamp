## CSS Lab

```css
@import url('https://fonts.googleapis.com/css?family=Montserrat|Slabo+27px');

h1,h2,h3 {
  font-family: 'Montserrat', sans-serif;
  color: #3c250a;
}

p, li {
 font-family: 'Slabo 27px', serif;
 color: #3c250a;
}

body {
  background: url('abstract-mosaic-background.png') no-repeat center center fixed;
  background-size: cover; 
}

.wrapper {
  width: 960px;
  margin: 0 auto;
}

header, footer {
  background-color: #595959;
  text-align: center;
  padding: 15px 30px ;
}

.main-content {
  background-color: #808f85;
  padding: 10px 0;
  border-top: 2px solid #cfd11a;
}

header img {
  width: 50%;
  border-radius: 15px;
}

.main-content ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0 auto;
  text-align: center;
}

.main-content ul li {
  display: inline;
  padding: 10px;
  font-weight: bold;
}

a {
  color: #cfd11a;
  text-decoration: none;
}

.main-content p {
  margin: 10px 40px;
}
.main-content h2 {
  text-align: center;
}


#projects {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: center;
  grid-gap: 3%;
}

.project {
  width: 100%;
  display: inline-block;
  background-color: #f2e9dc;
  border-radius: 15px;
}

.project img {
  max-width: 100%;
}
```

## Temp convert with jQuery

```javascript

function farenheitToCelsiusConverter(f){
  let celsius = (f - 32) * (5/9);
  return celsius;
}

function clearInputsAndWarnings() {
  $("#boiling-warning").hide();
  $("#freezing-warning").hide();
  $('#farenheit-input').val("");
}

function showAnswersAndWarnings(c){
  
  $("#answer").html(c);
  if (c >= 100){
    $("#boiling-warning").fadeIn();
  } else if (c <= 0){
    $("#freezing-warning").fadeIn();
  }
}

// I wrote this for you, let's look at it together.

$("#temperature-conversion-form").on("submit", function(){
  let f = $('#farenheit-input').val();
  clearInputsAndWarnings();
  let c = farenheitToCelsiusConverter(f);
  showAnswersAndWarnings(c);
});

```

## Movie Search JS

```javascript
$('#movie-search-form').keyup(function (e) {
  e.preventDefault();
  $('.result').hide();
  var userSearchQuery = this.query.value;
  if (userSearchQuery.length > 2) {
    searchOMDB(userSearchQuery);
  }
});

function searchOMDB(query) {
  $.getJSON('https://www.omdbapi.com/', {
    t: query,
    apikey: "2c2826e6",
    plot: "short",
    r: 'json'
  }, function (omdbData) {
    if (omdbData.Response === "True") {

      renderMovie(omdbData)
    } else {
      renderError();
    }
  });
}

function renderMovie(omdbData) {
  $('.result').show();
  $('#title').html(omdbData.Title);
  $('#year').html(omdbData.Year);
  $('#actors').html(omdbData.Actors);
  $("#plot").html(omdbData.Plot);
  $('#director').html(omdbData.Director)
  $('#awards').html(omdbData.Awards)
  $('#poster').attr("src", omdbData.Poster);
  $('#movie-website').attr("href", omdbData.Website);
  $('.error').hide();
}

function renderError() {
  $('.error').show();
}
```

## Star wars name lab


```javascript
function myStarWarsName(firstName, lastName, street, city) {

  let swFirstName = `${firstName.slice(0,3)}${lastName.slice(0,3)}`;
  let swLastName = `${street.slice(0,3)}${city.slice(0,3)}`;

  swFirstName = swFirstName.toLowerCase();
  swLastName = swLastName.toLowerCase();
  swFirstName = swFirstName.charAt(0).toUpperCase() + swFirstName.slice(1);
  swLastName = swLastName.charAt(0).toUpperCase() + swLastName.slice(1);

  return `${swFirstName} ${swLastName}`;
}

console.log(myStarWarsName('Vincent', 'Trivett' 'Dupont', 'Brooklyn'))
```

# Let's see your results

Get student results, then dry it up a little like this

Separate functions to make things clearer to the next developer


```javascript
function firstThreeLettersDowncased(str){
  return str.slice(0,3).toLowerCase();
}

function capitalizeFirstLetter(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function myStarWarsName(firstName, lastName, street, city) {
  let swFirstName = `${firstThreeLettersDowncased(firstName)}${firstThreeLettersDowncased(lastName)}`;
  let swLastName = `${firstThreeLettersDowncased(street)}${firstThreeLettersDowncased(city)}`;
  return `${capitalizeFirstLetter(swFirstName)} ${capitalizeFirstLetter(swLastName)}`;
}
```

Add user interaction that bind the html to JS code: 

try both submit and keyup

```javascript
  $("#sw-name-inputs").on('submit', function(event){
    event.preventDefault();
    let starWarsName = myStarWarsName($("#first-name").val(),$("#last-name").val(),$("#street").val(),$("#city").val());
    $("#answer").html(starWarsName);
  });
```



```JavaScript
// Refactor with Lodash

function myStarWarsName(firstName, lastName, street, city) {
  let first = _.startCase(firstName.slice(0, 3) + lastName.slice(0, 3));
  let last = _.startCase(street.slice(0, 3) + city.slice(0, 3));
  return `${first} ${last}`
}
```

