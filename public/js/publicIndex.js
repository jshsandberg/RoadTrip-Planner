$(document).ready(function() {
  
  // When you click a state, gets the note data stored there if there is any
  $(".state").on("click", function(event) {
    console.log('hello 1');
    event.preventDefault();
    console.log("hello 2");

    const id = this.id;
    console.log(id)
    $.ajax(
      { url:"/api/state/" + id, 
        type: "GET",
      }).then(function() {
      console.log("Note grabbed for ", id);

      location.reload();
    });
  });


  // When you click the save button, updates the saved note database
  // $(".update").on("click", function(event) {
  //   event.preventDefault();

  //   const id = this.id
  //   const newContent = req.body.note;
  //   const updatedNote = { content: newContent };

  //   $.ajax("/api/note/update/" + id, {
  //     type: "PUT",
  //     data: updatedNote,
  //   }).then(function() {
  //     console.log(`Note ${id} has been updated.`);
  //     location.reload();
  //   });
  // });

  const state = document.getElementsByClassName("state");

  let findID = function(event) {
      console.log(this.id);
      this.style.display = "block";
      event.preventDefault();
  };

  Array.from(state).forEach(function(state) {
          state.addEventListener('click', findID);
          
      });

})