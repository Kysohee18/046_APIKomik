const express = require('express');
const router = express.Router();

const komikcontroller = require('../controller/komikController');
const usercontroller = require("../controller/userController");
const genreController = require("../controller/genreController");
const authMiddleware = require ("../middleware/authMiddleware");

router.post("/register", usercontroller.register);
router.post("/login", usercontroller.login);

//public
router.get('/komik',komikcontroller.getAllKomik);
router.get('/komik/:id',komikcontroller.getKomikById);
//private
router.post('/komik',authMiddleware, komikcontroller.createKomik);
router.put('/komik/:id',authMiddleware, komikcontroller.updateKomik);
router.delete('/komik/:id',authMiddleware, komikcontroller.deleteKomik);

// genre
router.get('/genre', genreController.getAllGenre);
router.get('/genre/:id', genreController.getGenreById);
router.post('/genre', authMiddleware, genreController.createGenre);
router.put('/genre/:id', authMiddleware, genreController.updateGenre);
router.delete('/genre/:id', authMiddleware, genreController.deleteGenre);

module.exports = router;
