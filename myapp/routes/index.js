var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


app.use('/api', router);

router.route('/domains')
.get(function(req, res){
	Domain.find(function(err,domains){
		if (err)
			res.send(err);
		res.json(domains);
	});
});