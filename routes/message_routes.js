const express = require('express')
const router = express.Router()
const messageController = require('../controller/message_controller')

router.get('/', messageController.getAllMessages)
router.post('/', messageController.createMessage)

module.exports = router;