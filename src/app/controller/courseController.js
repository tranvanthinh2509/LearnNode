const Course = require('../model/Course');
const Mongoose = require('../../util/mongoose');

class courseController {
    // [GET] /courses/:slug
    show(req, res) {
        Course.findOne({ slug: req.params.slug})
            .then(courses => {
                res.render('course/show', {
                    courses: Mongoose.mongooseToObject(courses),
                })
            });

    }
}

module.exports = new courseController();
