$(".openbtn").click(function () {
    $(this).toggleClass('active');
});

$(function() {
  $('.menu li a').on('click', function(event) {
    $('.outer-menu .checkbox-toggle').prop('checked', false);
  });
});