'use strict';

const express = require ('express');
const router  = express.Router();

const boardController = require ('./boardController');

router.post('/', (req, res) => {
  boardController.saveUserBoard(req, res);
});

router.delete('/:idBoard', (req, res) => {
  boardController.removeUserBoard(req, res);
});

router.post('/:idBoard/boardstars', (req, res) => {
  boardController.saveUserBoardStar(req, res);
});

router.delete('/:idBoard/boardstars', (req, res) => {
  boardController.removeUserBoardStar(req, res);
});

module.exports = router;