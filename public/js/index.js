$(document).ready(function() {
  
  // When you click a state, gets the note data stored there if there is any
  $(".state").on("click", function(event) {
    event.preventDefualt();

    const id = $(this).data("id");
    const note = { note: content };

    $.ajax("/api/note/" + id, {
      type: "GET",
      data: note,
    }).then(function() {
      console.log("Note grabbed for ", id);
      location.reload();
    });
  });


  // When you click the edit button, updates the saved note database
  $(".edit").on("click", function(event) {
    event.preventDefualt();

    const id = $(this).data("id");
    const newContent = req.body.note;
    const updatedNote = { note: newContent };

    $.ajax("/api/note/update/" + id, {
      type: "PUT",
      data: updatedNote,
    }).then(function() {
      console.log(`Note ${id} has been updated.`);
      location.reload();
    });
  });
})