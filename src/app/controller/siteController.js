class siteController {
    // [Get] /home
    index(req, res) {
        res.render('home');
    }

    // show [GET] /search
             show(req, res) {
        res.render('search');
    }
}

module.exports = new siteController();
