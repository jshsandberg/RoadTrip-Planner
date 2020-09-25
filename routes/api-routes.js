// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
// Requiring our models
var db = require("../models");



// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the posts

  // app.get("/api/state", function(req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.Note.findAll({}).then(function(dbNote) {
  //     // We have access to the todos as an argument inside of the callback function
  //     res.json(dbNote);
  //   });
  // });
  app.get("/api/state/:abbr", function(req, res) {
    req.params.abbr;
    // var query = {};
    // if (req.query.abbr) {
    //   query.stateName = req.query.name;
    //   query.stateId=req.query.abbr;
    //}
    // 1. Add a join here to include all of the Authors to these posts
    db.State.findOne({
      where:  {
        abbr: req.params.abbr 
      }
      //include: [db.Author]
    }).then(function(response) {
      console.log(response);
      res.render("map", { response: response });
    });
  });

  // Get route for retrieving notes and info
  // app.get("/api/state/:abbr", function(req, res) {
  //   req.params.abbr;
  //    // 2. Add a join here to include the Author who wrote the Post
  //   db.Note.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     //include: [db.Author]
  //   }).then(function(response) {
  //     console.log(response);
  //     res.render("map", response);
  //   });
  // });

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
  // DELETE route for deleting states
  app.delete("/api/state/:abbr", function(req, res) {
    db.Note.destroy({
      where: {
        id: req.params.abbr
      }
    }).then(function(response) {
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
  app.put("/api/notes/:id", function(req, res) {
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