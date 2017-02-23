'use strict';
(function(module) {
   const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  repoView.index = function() {
    ui();

    var render = Handlebars.compile($('#repo-template').text());

    $('#about ul').append(
      repos.with('name').map(render)
         );
  };

  module.repoView = repoView;
})(window);
