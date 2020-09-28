$(function() {
  

  function appendNoteCards(notes){
    $("#noteCards").html("");
    //gets some notes for the state, appends on page
    notes.forEach(a => {
      $("#noteCards").append(`<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${a.StateName}</h5>
        <p class="card-text">${a.content}</p>
        <button id="${a.id}" name="${a.StateName}" class="delete btn btn-danger" type="submit">Delete</button>
      </div>
    </div>`)
    });
  };
  
  // When you click a state, gets the note data stored there if there is any
  $(".state").on("click", function(event) {
    event.preventDefault();

    const id = this.alt;

    $.ajax(
      { url:"/api/state/" + id, 
        type: "GET",
      }).then(function(data) {
        //console.log(data)
        appendNoteCards(data.Notes)
    });
  });

  function getNotes(id) {
    console.log("Entered getNotes");
    $.get(`/api/state/${id}`, function(data) {
      // console.log(data);
      appendNoteCards(data.Notes);
    });
  };

  $(document).on("click", ".delete", function(event) {
    event.preventDefault();
    const id = this.id;
    const data = this.name;

    $.ajax(
      {
        url:"/api/notes/"+id,
        type:"DELETE",
      }
    ).then(function(result){
      // console.log(data);
      getNotes(data);
      //appendNoteCards(result.Notes);
    });
    //location.reload();
  });


  $("#saveNote").click(()=> {
    console.log()
    const id = $("#stateAbbrev").text();
    $.post("/api/notes/"+ id, {content: $("#noteInput").val().trim()})
    .then(function() {
      //console.log(id);
      eraseText();
      getNotes(id);
    });
    //$.get("/api/notes"+$("#stateAbbrev"))
  });

  // Clears the field when th enote is saved
  function eraseText() {
    $("#noteInput").val("");
  };
});