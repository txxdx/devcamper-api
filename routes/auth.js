const express = require('express')
const router = express.Router()

const { protect } = require('../middleware/auth')

const {
	register,
	login,
	getMe,
	forgotPassword,
	resetPassword,
	updateDetails,
	updatePassword,
	logout,
} = require('../controllers/auth')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/me').get(protect, getMe)
router.route('/updatedetails').put(protect, updateDetails)
router.route('/forgotpassword').post(forgotPassword)
router.route('/resetpassword/:resettoken').put(resetPassword)
router.route('/updatepassword').put(protect, updatePassword)
router.route('/logout').get(logout)

module.exports = router
