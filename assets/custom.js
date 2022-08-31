$(document).ready(function() {  
  // Set min-height for the content area based on heights of surrounding elements
  var contentArea = $('.main-content');
  var windowArea = $(window);
  var headerArea = $('.site-header');
  var footerArea = $('footer');

  updateBodyMinHeight();

  windowArea.resize(function() {
    updateBodyMinHeight();
  });

  function updateBodyMinHeight() {
    var windowHeight = windowArea.height();
    var headerHeight = headerArea.height();
    var footerHeight = footerArea.height();
    var ContentAreaHeight = windowHeight - (headerHeight + footerHeight + 12);

    contentArea.css('min-height', ContentAreaHeight);
  }
});