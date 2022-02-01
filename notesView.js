const NotesModel = require('./notesModel')

class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container')
  }

  displayNotes() {
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

module.exports = NotesView;