const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/state/:abbr", function(req, res) {
    req.params.abbr;
    db.State.findOne({
      where:  {
        abbr: req.params.abbr 
      }
    }).then(function(response) {
      //console.log(response.name);
      console.log(response[0]);
      res.render("map", {response: response.name});
      //console.log(response);
      //location.reload();
    });
  });

  app.get("/api/notes", function(req, res) {
    db.Note.findAll({}).then(function(response) {
      //console.log(response);
      //res.render("map", {content:response[0].content});
      res.render("map", {note:response[0].state});
    });
  });

  // POST route for saving a state on sidebar
  app.post("/api/state/:abbr", function(req, res) {
    db.Note.create(req.body).then(function(response) {
      res.render("map", response);
    });
  });

  //POST route for saving a note
  app.post("/api/notes/:id", function(req, res) {
    db.Note.create(req.body).then(function(response) {
      res.render("map", response);
    });
  });

  // DELETE route for deleting notes
  app.delete("/api/notes/:id", function(req, res) {
   db.Note.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(response) {
      res.render("map", response);
    });
  });
  
  // PUT route for updating notes
  app.put("/api/notes/update/:id", function(req, res) {
    db.Note.update(req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(response) {
        res.render("map", response);
    });
  });
};