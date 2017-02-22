'use strict';

(function(module) {
  const articleController = {};
  articleController.init = function(){

    Projects.fetchAll(articleController.initIndexPage);
    $('main section').hide();
    $('#articles').show();
  }
  module.articleController = articleController;
})(window);
