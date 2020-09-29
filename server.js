const express = require("express");
const app = express();
const PORT = app.listen(process.env.PORT || 3000);
const expbs = require("express-handlebars");
const nodemailer = require('nodemailer');
require("dotenv").config();


app.engine("handlebars", expbs({ defaultLayout: "main" }));
app.set("port", PORT);
app.set("view engine", "handlebars");

// Requiring our models for syncing
const db = require("./models");


// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
// app.use(express.static("public"));
app.use("/public", express.static('./public/'));
app.get("/", function(req, res) {
  res.render("map");
});

app.get("/contacts", function(req, res) {
  res.render("contact");
});

// Routes
require("./routes/api-routes.js")(app);


app.get('/contact', (req, res) => {
  res.render('contact');
});

app.post('/send', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.NM_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.NM_USER, // generated ethereal user
        pass: process.env.NM_PWD  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Road Trip Planner" <planaroadtrip@gmail.com>', // sender address
      to: 'ericfolenta@gmail.com', // list of receivers
      subject: 'Road Trip Planner Contact Request', // Subject line
      text: 'Hello world!', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Your email has been sent! Someone from RoadTrip Planners will respond soon.'});
  });
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
