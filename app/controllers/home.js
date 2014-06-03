var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.index = function(req, res){
  Article.find(function(err, articles){
    if(err) throw new Error(err);
    res.render('home/index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
};

exports.save = function(req,res) {
    var article = new Article({
        title:'common cms use pure js',
        url:'http://cms.u2l.me/',
        text:'this is a cms use pure js for future projects'
    });
    article.save(function(err){
        console.log(arguments);
    });
};