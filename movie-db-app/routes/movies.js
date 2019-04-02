var Movie = require('../models/movie');
var express = require('express');
var router = express.Router();

router.get('/movies', function(req, res){
Movie.find(function(err, movies){
    if (err){
        return res.send(err);
    }
    res.json(movies);
});

});

router.post('/movies', function(req, res){
    var movie = new Movie(req.body);
    movie.save(function(err){
        if (err){
            return res.send(err);
        }
        res.send({message: 'Movie added'});
});
    
});

router.put('/movies/:id', (req, res)=>{
    Movie.findOne({_id: req.params.id}, (err, movie)=>{
        if(err){
            return res.send(err);
        }
        for(prop in req.body){
            movie[prop] = req.body[prop];
        }

        movie.save((err)=>{
            if(err){
                return res.send(err);
            }
            res.json({message: 'movie updated'});
        });
    });
});

router.get('/movies/:id', (req, res)=>{
    Movie.findOne({_id: req.params.id}, (err, movie)=>{
        if(err){
            return res.send(err);
        }
        res.json(movie);
    });
});

router.delete('/movies/:id', (req,res)=>{
    Movie.remove({
        _id: req.params.id
    }, (err, movie)=>{
        if(err){
            return res.send(err);
        }
        res.json({message: 'Movie deleted'});
    });
});

module.exports = router;