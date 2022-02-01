const NotesModel = require('./notesModel')

class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#save-note-button');
    this.noteInputField = document.querySelector('#note-input');

    this.buttonEl.addEventListener('click', () => {
      this.model.addNote(this.noteInputField.value);
      this.noteInputField.value = ''
      this.displayNotes();
    })
  }



  displayNotes() {
    //remove all div.note
    document.querySelectorAll('div.note').forEach (e=> e.remove() )
    
    // get the list of notes from the model.
    // this is an array of notes
    let notes = this.model.getNotes();
    // for each note, 
    notes.forEach(note => {
      // create a new div element on the page 
      let element = document.createElement('div');
      // (with an HTML class "note").
      element.className = "note";
      element.append(note)
      this.mainContainerEl.append(element);
    });
  }
}

// you should set an event listener in the NotesView constructor.
// the model's addNote method should be called to save the new note on the model.
// you should use the displayNotes method to reflect the changes on the page.

module.exports = NotesView;