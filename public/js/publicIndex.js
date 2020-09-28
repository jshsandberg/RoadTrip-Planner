$(document).ready(function() {
  

  function appendNoteCards(notes){
    $("#noteCards").html("")
    //gets some notes for the state, appends on page
    notes.forEach(a => {
      $("#noteCards").append(`<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${a.StateName}</h5>
        <p class="card-text">${a.content}</p>
        <button id="${a.id}" class="deleted" type="submit">Delete</button>
      </div>
    </div>`)
    })
  };
  // When you click a state, gets the note data stored there if there is any
  $(".state").on("click", function(event) {
    event.preventDefault();

    const id = this.id;

    $.ajax(
      { url:"/api/state/" + id, 
        type: "GET",
      }).then(function(data) {
        //console.log(data)
        appendNoteCards(data.Notes)
    });
    
  
  });
  $(document).on("click", ".deleted", function(event) {
    //event.preventDefault();
    console.log("Deletes");
    const id = this.id;
    console.log("this is an id:" + id)
    $.ajax(
      {
        url:"/api/notes/"+id,
        type:"DELETE",
      }
    ).then(function(result){
      console.log(result);
      //appendNoteCards(result.Notes);
    });
    //location.reload();


  const state = document.getElementsByClassName("state");


  // let findID = function(event) {
  //     console.log(this.id);
  //     $("#stateAbbrev").text(this.title)
  //     this.style.display = "block";
  //     event.preventDefault();
  // };

  // Array.from(state).forEach(function(state) {
  //         state.addEventListener('click', findID);
          
  //     });


      $("#saveNote").click(()=> {
        console.log()
        $.post("/api/notes/"+$("#stateAbbrev").text(), {content: $("#noteInput").val().trim()})
        //$.get("/api/notes"+$("#stateAbbrev"))

        
      })

    })