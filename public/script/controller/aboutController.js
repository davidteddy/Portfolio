'use strict';

(function(module) {
  const aboutController = {};
  aboutController.init = function (){
    $('#home').hide();
    $('#my-work #projects').show();
  }
  module.aboutController = aboutController;
})(window);
