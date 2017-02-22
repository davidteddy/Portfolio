'use strict';

(function(module) {
  const homeController = {};
  homeController.init = function(){
    // $('#my-work #projects').empty();
    Projects.fetchAll(Projects.initIndexPage);
    $('#home').hide();
    $('#my-work #projects').show();
  }
  module.homeController = homeController;
})(window);
