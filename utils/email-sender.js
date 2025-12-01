const nodemailer = require('nodemailer');

const sendMessage = async (email, code) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "baltabaykalandarov@gmail.com",
                pass: "o s h w l j y x x k w c m j t z"
            }
        })


        return await transporter.sendMail({
            from: "baltabaykalandarov@gmail.com",
            to: email,
            subject: "Verification Code",
            text: "bu kodni hech kimga bermang!",
            html: `<h1>${code}</h1>`,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    sendMessage
}