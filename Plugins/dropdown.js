$(document).ready(function () {
  $('#dropdown-hidden-menu').click(function () {
    $('.dropdown-menu-on').slideToggle("slow");
  });
  $('.click').click(function () {
    $('.dropdown-menu-on').slideToggle("slow");
  })
});
$(document).click(function (event) {
  if (!$(event.target).closest('.nav-item.dropdown').length) {
    $('.dropdown-menu-on').slideUp("slow");
  }
});
