const {Router} = require('express');
const router = Router();

const { getUsers, postUsers, getUserById, deleteUsers, updateUser } = require('../controllers/index.controller');

router.get('/users', getUsers);
router.post('/registro', postUsers);
router.get('/users/:id', getUserById);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUsers);

module.exports = router;