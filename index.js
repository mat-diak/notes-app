console.log('Notes app is running.')

const NotesModel = require('./notesModel.js')

let notes = new NotesModel;
notes.addNote('Buy milk')
console.log(notes.getNotes());