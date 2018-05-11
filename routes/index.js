var express = require('express');
var {models} = require('../models/index.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Página principal', autor:'Enrique Cubero ' });
});

//Credits
router.get('/credits', function (req, res, next) {
    res.render('credits', { title: 'Creditos', credits: 'Enrique Cubero' });
});

//Quizzes
router.get('/quizzes', function (req, res, next) {
    models.quiz.findAll()
        .then(quiz => {
        res.render('quizzes', { title: 'Quizzes', quizzes: quiz});
})
});

module.exports = router;
