'use strict';

(function(module) {
  const reposController = {};
  reposController.init = function () {
    repos.requestRepos(repoView.index);
    $('main > article').hide();
    $('#home').hide();
    $('#projects').hide();
    $('#repos').show();
  }
  module.reposController = reposController;
})(window);
