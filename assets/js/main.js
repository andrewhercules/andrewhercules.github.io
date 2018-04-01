$(document).ready(function() {

  // hide navbar brand element text - Andrew Hercules - on index page
  let currentUrl = location.pathname;
  if (currentUrl == "/") {
    $(".navbar-brand").hide();
  }

});
