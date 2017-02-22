'use strict';

(function(module){
  var myWorks = [];

  function Projects(opt) {
    this.name = opt.name;
    this.shortDescrip = opt.shortDescrip;
    this.link = opt.link;
    this.dateCompleted = opt.dateCompleted;
  }

  Projects.prototype.toHtml = function() {
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
    console.log('we are in the fetch all');
    if (localStorage.myWorks){
      Projects.loadall(JSON.parse(localStorage.getItem('myWorks')));
      myWorks.initIndexPage();
      myWorks.wordCount();
      myWorks.handleMainNav();
    } else {
      console.log('message');
      $.getJSON('../data/bio.json')
      .then(function(data){
        console.log(data,'------>');
        localStorage.setItem('myWorks', JSON.stringify(data));
        Projects.loadall(data);
        myWorks.initIndexPage();
      })
      .then(function(){
        myWorks.wordCount();
        myWorks.handleMainNav();
      })
      .catch(function(err){
        console.log(err, 'no data');
      })
    }
  }

  //  $('.nav-bar .tab:first').click();
  myWorks.numWordsAll = () => {
    console.log(myWorks);
    return myWorks.map(function(el){
      console.log('55555555------------------>', el);
      return el.shortDescrip.split(' ').length;
    })
    .reduce(function(all, cur) {
      return all + cur;
    }, 0)
  }
  myWorks.wordCount = function(){
    $('.num-placement strong').text(myWorks.numWordsAll());
  }


  module.Projects = Projects;
})(window);
