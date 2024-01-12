const Course = require('../model/Course');
const Mongoose = require('../../util/mongoose');

class siteController {
    // [Get] /home
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: Mongoose.multiMongooseToObject(courses),
                })
            });

    }

    // [GET] /search
    show(req, res) {
        res.render('search');
    }
}

module.exports = new siteController();
