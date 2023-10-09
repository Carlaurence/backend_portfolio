const { responde } = require('express')
const Message = require('../model/message_model')


/**GET ALL MESSAGES http://localhost:4000/api/message */
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find()
        res.status(200).json({ msg: messages })
    } catch (error) {
        res.json({ msg: error })
    }
}

/*POST NEW MESSAGE http://localhost:4000/api/message */
exports.createMessage = async (req, res) => {
    const { name, phone, email, subject, message } = req.body;
    try {
        
        const message = new Message(req.body)
        console.log('pase')
        const newMessage = await message.save()
        res.status(200).json({ msg: newMessage })
    } catch (error) {
        res.json({ msg: error.message })
    }
}