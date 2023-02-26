var express = require('express');
var router = express.Router();


//-- GET FUNGSI DATA CONTROLLER
const usersController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth');

// ini bisa pakai cors npm install cors app.use(cors())
router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/* GET users listing. */
router.get('/', usersController.read);
router.post('/signup', usersController.signup);
router.get('/:id', usersController.readById);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.destroy);
router.post('/signin', usersController.signin);


module.exports = router;