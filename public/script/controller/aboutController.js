'use strict';

(function(module) {
  const aboutController = {};
  aboutController.init = function (){
    $('main > article').hide();
    $('#repos').hide();
    $('#home').hide();
    $('#my-work #projects').show();
  }
  module.aboutController = aboutController;
})(window);
