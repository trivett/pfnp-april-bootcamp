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
  console.log(omdbData);
}

function renderError() {
  console.log('there has been an error');
}