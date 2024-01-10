const Course = require('../model/Course')

class siteController {
    // [Get] /home
    async index(req, res) {

        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (error) {
            res.status(400).json({ err: "ERROR!!!" });
        }


        // res.render('home');
    }

    // show [GET] /search
    show(req, res) {
        res.render('search');
    }
}

module.exports = new siteController();
