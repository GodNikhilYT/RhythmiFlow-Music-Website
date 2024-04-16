document.addEventListener('DOMContentLoaded', function() {
    var bodyOrDiv = document.body || document.documentElement;
    
    bodyOrDiv.onmousedown = function(e) {
      e.preventDefault();
    };

    bodyOrDiv.onselectstart = function() {
      return false;
    };
  });