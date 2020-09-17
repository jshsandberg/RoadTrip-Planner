# Note Mapper?

## Description
This will be a web app that will give users the ability to click on each state and take notes of the user's selected state for a road trip and see fun facts about the state. 
## User Story
As a User:

-> I want to be able to click on a state

-> Pin the state selected 

-> Create a note about state selected

-> Obtain about selected state

## Potential Packages to be Used
Dottie or Dotty - access to nested functions

Moment - date the notes User made for each state

NodeMailer - send/spam government/Bryan with emails

Dotenv - load environment variables

## Tasks

* Public
    * Homepage (html, css, javascript) = search bar for state you want to visit, the model for that state will appear containing past notes, facts, open text box (for future notes and facts) and a delete button (for the notes). The states with notes currently in them will light up with a different color. On the side of the map, we will have a selection menu of recently visited states using handlebars. Side menu will have delete button. 

* JavaScript
    * API Routes
        * Get the data for each particular state the user clicks on using the map or the side menu.
        * Post new data by having the user click on the state and inserting notes/information into the open text box.
        * Put update the notes by pressing a button on the model.
        * Delete the notes by a button on the side menu and the model.
    * Model (States)
        * Table: States
            * Name (CA.)
            * Notes
            * Facts
    * Handlebars (Side Menu)
* MySQL
    * schema.sql
        * States Table
        * Notes Table
    * seeds.sql
        * 50 States