
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const expbs = require("express-handlebars");


app.engine("handlebars", expbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
