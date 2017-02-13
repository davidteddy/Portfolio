'use strict';
var myWorks = [];

function Projects(name, shortDescrip, link, dateCompleted){
  this.name = name;
  this.shortDescrip = shortDescrip;
  this.link = link;
  this.dateCompleted = dateCompleted;
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
