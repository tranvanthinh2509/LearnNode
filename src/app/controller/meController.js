const Course = require('../model/Course');
const Mongoose = require('../../util/mongoose');

class meController {
    // [GET] /stored/courses
    stored(req, res) {
        Course.find({})
            .then(courses => res.render('me/stored', {
                courses: Mongoose.multiMongooseToObject(courses)
            }))
        
    }
}

module.exports = new meController();
