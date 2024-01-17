const Course = require('../model/Course');
const Mongoose = require('../../util/mongoose');

class courseController {

    // [GET] /courses/:id/edit
    edit(req, res) {
        Course.findById( req.params.id )
            .then(courses => {
                res.render('course/edit', {
                    courses: Mongoose.mongooseToObject(courses),
                })
            });
    }
    // [PUT] /courses/:id
    update(req, res) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
    }
    // [PATCH] /courses/:id/restore
    restore(req, res) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
    }

    // [DELETE] /courses/:id
    destroy(req, res) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
    }

    // [DELETE] /courses/:id/force
    forceDestroy(req, res) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
    }


    // [GET] /courses/:slug
    show(req, res) {
        Course.findOne({ slug: req.params.slug})
            .then(courses => {
                res.render('course/show', {
                    courses: Mongoose.mongooseToObject(courses),
                })
            });

    }

    // [GET] /courses/create
    create(req, res) {
        res.render('course/create');
    }

    // [POST] /courses/create
    store(req, res) {
        const fomrData = req.body;
        fomrData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;

        const course = new Course(fomrData);
        course.save()
            .then(() => res.redirect('/me/stored/courses'));
    }
}

module.exports = new courseController();
