'use strict';

(function(module) {
  const homeController = {};
  homeController.init = function(){
    // $('#my-work #projects').empty();

    $('main > article').hide();
    $('#my-work').hide();
    $('#home').show();
  }
  module.homeController = homeController;
})(window);
