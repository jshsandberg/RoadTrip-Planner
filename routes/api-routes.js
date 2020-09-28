const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/state/:abbr", function(req, res) {
    db.State.findOne({
      where:  {
        abbr: req.params.abbr 
      },
      include: [db.Note]
    }).then(function({dataValues}) {
      //console.log(response.name);
      //console.log(response[0]);
      const response = {...dataValues, Notes: dataValues.Notes.map(a=> a.dataValues)};
      res.json(response)
      //console.log(response);
      //location.reload();
    });
  });

  app.get("/api/notes/:state", function(req, res) {
    db.Note.findAll({
      where: {
        state: req.params.state
      }
      //include: [db.State],
    }).then(function(response) {
      console.log(response);
      //res.render("map", {content:response[0].content});
      console.log(response[0].content);
      res.render("map", {note:response[0].content});
    });
  });

  // POST route for saving a state on sidebar
  app.post("/api/state/:abbr", function(req, res) {
    db.Note.create(req.body).then(function(response) {
      res.json(response);
    });
  });

  //POST route for saving a note
  app.post("/api/notes/:id", function({params,body}, res) {
    console.log(body, params.id)
    db.Note.create({...body, state: params.id, StateName: params.id}).then(function(response) {
      res.json(response);
    });
  });

  // DELETE route for deleting notes
  app.delete("/api/notes/:id", function(req, res) {
   db.Note.destroy(
    {
    where: {
      id: req.params.id,
    },
    include:[db.State],
  }).then(function(response) {
      console.log("Deleting the note");
      res.json(response);
      res.status(204);
    });
  });
  
  // PUT route for updating notes
  app.put("/api/notes/update/:id", function(req, res) {
    db.Note.update(req.body,
      {
        where: {
          id: req.body.id
        },
        //include: [db.State],
      }).then(function(response) {
        console.log("This has putted a note")
    });
  });
};