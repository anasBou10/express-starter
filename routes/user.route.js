var router = express.Router();
var userController = require("../controllers/user.controller");


router.get('/', userController.get);

module.exports = router;
