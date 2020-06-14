const nodemailer = require('nodemailer')


const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD
    }
})

transport.verify().then((res) => console.log(res))

function forgotPasswordMailing(email, password) {
    transport.sendMail({
        from: process.env.GMAIL,
        to: email,
        subject: `System generated password to login into digital-studio.com`,
        html: `<p>This password is system generated password to login into your account on <b>digital-studio.com</b>. Please Login with this password and change your password in profile section if needed.</p>
        <h3>Password: ${password}</h3>`
    }).then((response) => {
    }).catch((err) => console.log(err.message))
}
function accountCreatedMailing(email, password) {
    transport.sendMail({
        from: process.env.GMAIL,
        to: email,
        subject: `An account has been created in digital-studio.com`,
        html: `<p>An account has been created in<b>digital-studio.com</b>. Please Login with this password and change your password in profile section if needed.</p>
        <h3>email: ${email}</h3>
        <h3>Password: ${password}</h3>`
    }).then((response) => {
    }).catch((err) => console.log(err.message))
}

module.exports = { forgotPasswordMailing, accountCreatedMailing };