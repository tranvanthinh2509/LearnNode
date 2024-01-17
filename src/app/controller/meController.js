const Course = require('../model/Course');
const Mongoose = require('../../util/mongoose');

class meController {
    // [GET] /stored/courses
    stored(req, res) {

        Promise.all([Course.find({}), Course.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses, deleteCount]) => 
                    res.render('me/stored', {
                        deleteCount,
                        courses: Mongoose.multiMongooseToObject(courses)
                })
            )
    }

    // [GET] /trash/courses
    trash(req, res) {
        Course.findWithDeleted({ deleted: true })
            .then(courses => res.render('me/trash', {
                courses: Mongoose.multiMongooseToObject(courses)
            }))
        
    }
}

module.exports = new meController();
