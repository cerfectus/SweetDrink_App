const mailer = require("nodemailer");


const transport = mailer.createTransport({
    service: "SendGrid",
    auth: {
        user: process.env.SEND_USER,
        pass: process.env.SEND_PASS
    }
});

transport.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

exports.sendMail=(email, code, newUser)=>{
  transport.sendMail({
    from: "Sweet@Drinks.com",
    to: email,
    subject: "Confirma tu correo",
    html:`<h1>Hola ${newUser} gracias por registrate en SweetDrinks</h1><a href="http://localhost:3000/auth/confirm/${code}">Confirma tu cuenta</a>`
  })
  .then(info=>console.log(info))
  .catch(e=>console.log(e))
}