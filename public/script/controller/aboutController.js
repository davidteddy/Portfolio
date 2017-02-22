'use strict';

(function(module) {
  const aboutController = {};
  aboutController.init = function (){
    $('#my-works').hide();
    $('#home').show();
  }
  module.aboutController = aboutController;
})(window);
