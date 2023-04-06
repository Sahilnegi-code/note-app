const express = require("express");
const {createNote , getNotes ,getNoteById,updatNote,deleteNote} = require("../controller/noteController");
const { protect } = require("../middlewares/authMiddleware");
const router =   express.Router();
console.log(deleteNote)
console.log(updatNote)
router.route('/').get(protect,getNotes);
router.route('/create').post( protect ,createNote);
router.route('/:id').get(getNoteById).put(protect,updatNote).delete(protect,deleteNote)
module.exports = router;