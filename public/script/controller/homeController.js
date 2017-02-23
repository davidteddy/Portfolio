'use strict';

(function(module) {
  const homeController = {};
  homeController.init = function(){
    // $('#my-work #projects').empty();

    $('#my-work #projects').hide();
    $('#home').show();
  }
  module.homeController = homeController;
})(window);
