
class newController{
    // [Get] /news
    index(req, res) {
        res.render('new');
    }

    // show [GET] /:slug
    show(req, res) {
        res.send('NEW DETAILS!!!');
    }
}

module.exports = new newController;