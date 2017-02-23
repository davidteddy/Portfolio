'use strict';
(function(module) {
   const repoView = {};

  const ui = function() {
    let $about = $('#repos');

    $about.find('ul').empty();
    $about.show();
  };

  repoView.index = function() {
    ui();

    var render = Handlebars.compile($('#repo-template').text());

    $('#repos').append(repos.with('name').map(render));
  };

  module.repoView = repoView;
})(window);
