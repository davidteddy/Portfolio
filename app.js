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
Projects.loadAll = function(myWorks) {
  myWorks.sort(function(a,b) {
    return (new Date(b.dateCompleted)) - (new Date(a.dateCompleted));
  });
  myWorks.forEach(function(ele) {
    Projects.all.push(new Projects(ele));
  })
Projects.fetchAll = function(){
  if (localStorage.myworks){
    Projects.loadAll(JSON.parse(localStorage.getItem('myWorks')));
    Projects.forEach();
  } else{
$.getJSON('data/bio.json')
.then(function(data){
  localStorage.setItem('myWork', JSON.stringify(data));
  Projects.loadAll(data);
    })
  };
}
myWorks.handleMainNav();
