const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');

// get all users
router.route("/").get(getAllUsers).post(createUser);

// get by id, add, and delete 
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;