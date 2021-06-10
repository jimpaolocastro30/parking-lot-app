var Car = require('./../models/car');

exports.find = function(req, res){
    Car.find({}, function(err, data){
        if(err){
            return;
        }
        res.render('cars_list',{
            data: data
        });
    });
};

exports.new = function(req, res){
    res.render('cars_new');
};

exports.create = function(req, res){
    Car.create(req.body, function(err, data){
        if(err) {
            return;
        }
        res.redirect('/cars');
    });
};

exports.edit = function(req, res){
    Car.findById(req.params.id, function(err, data){
        if(err){
            return;
        }
        res.render('cars_edit', {
            data: data
        });
    });
};

exports.update = function(req, res){
    Car.update({
        _id: req.params.id
    },req.body, function(err, data){
        if(err){
            return;
        }
        res.redirect('/cars');
    });
};

exports.remove = function(req, res){
    Car.remove({
        _id: req.params.id
    }, function(err){
        if(err){
            return;
        }
        res.redirect('/cars');
    });
};


