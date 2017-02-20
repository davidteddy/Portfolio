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

Projects.loadall = function(projectData){
    projectData.forEach(function(projectObject){
      myWorks.push(new Projects(projectObject));
    });
};
myWorks.initIndexPage = function(){
  myWorks.forEach(function(a){
    $('#projects').append(a.toHtml());
  });
};
myWorks.handleMainNav = function() {
  $('.nav-bar').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
};
Projects.fetchAll = function(){
  if (localStorage.myWorks){
    Projects.loadall(JSON.parse(localStorage.getItem('myWorks')));
    myWorks.initIndexPage();
  } else {
    $.getJSON('/public/bio.json')
    .then(function(data){
      localStorage.setItem('myWorks', JSON.stringify(data));
      Projects.loadall(data);
      myWorks.initIndexPage();
    });
  }
}

//  $('.nav-bar .tab:first').click();


myWorks.handleMainNav();
