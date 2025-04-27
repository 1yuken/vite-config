import $ from 'jquery';
window.$ = window.jQuery = $;

$(document).ready(function() {
  $('.out').css('background-color', '#f0f0f0');
  console.log('jQuery version:', $.fn.jquery);
});
