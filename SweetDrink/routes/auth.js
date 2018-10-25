const express = require('express');
const router  = express.Router();

router.get('/signup', (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  if(req.body.password !== req.body["password-confirm"]) return res.render("register", {msg: "Tus contras no machean"});
  const {username, email, password, phone} = req.body;
  User.register({username, email, phone}, password)
      .then(user => {
          const options = {
              email: user.email,
              subject: "Confirma tu correo",
              message: "O confirmas o cuello"
          };
          mail.send(options);
          client.messages.create({
            to: '+'+ user.phone,
            from: process.env.TWILIO_NUMBER,
            body: 'Gracias por registrarte en AtomicBeers ingresa a tu cuenta en: http://localhost:3000/auth/login'
          })
          console.log("")
          res.redirect("/auth/login")
      })
      .catch(err => {
          res.status(500).render("register",{err, msg:"No pudimos registrarte"})
      })
});

router.get('/login', (req, res) => {
  res.render("login");
});

module.exports = router;