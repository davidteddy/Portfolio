'use strict';
var myWorks = [];

function Projects(opt){
  this.name = opt.name;
  this.shortDescrip = opt.shortDescrip;
  this.link = opt.link;
  this.dateCompleted = opt.dateCompleted;
}



Projects.prototype.toHtml = function(){
  var source = $('#projects-templates').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
}

projectData.forEach(function(projectObject){
  myWorks.push(new Projects(projectObject));
});

myWorks.forEach(function(a){
  $('#projects').append(a.toHtml());
});

myWorks.handleMainNav = function() {
  $('.nav-bar').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

//  $('.nav-bar .tab:first').click();
};

myWorks.handleMainNav();
