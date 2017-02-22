'use strict';

(function(module) {
  const aboutController = {};
  aboutController.init = function (){
    $('#my-work #projects').hide();
    $('#home').show();
  }
  module.aboutController = aboutController;
})(window);
